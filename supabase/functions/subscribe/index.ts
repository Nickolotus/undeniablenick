import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!RESEND_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
      throw new Error("Missing environment variables");
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    const { name, email, source } = await req.json();

    if (!email) {
      return new Response(
        JSON.stringify({ error: "Email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Check if subscriber already exists
    const { data: existing } = await supabase
      .from("un_subscribers")
      .select("id, email, last_emailed")
      .eq("email", email.toLowerCase())
      .single();

    if (existing) {
      // Idempotency: if we emailed this person in the last 60 seconds, skip the resend
      // (prevents duplicate sends from double-clicks, retries, bots)
      const recentlyEmailed =
        existing.last_emailed &&
        Date.now() - new Date(existing.last_emailed).getTime() < 60_000;

      if (!recentlyEmailed) {
        await sendPdfEmail(RESEND_API_KEY, email, name);
        await supabase
          .from("un_subscribers")
          .update({ last_emailed: new Date().toISOString() })
          .eq("id", existing.id);
      }

      return new Response(
        JSON.stringify({ success: true, message: "Already subscribed, PDF resent" }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert new subscriber
    const { error: insertError } = await supabase
      .from("un_subscribers")
      .insert({
        email: email.toLowerCase(),
        name: name || null,
        source: source || "sardine-fast",
        tags: [source || "sardine-fast"],
        drip_step: 0,
        subscribed_at: new Date().toISOString(),
        last_emailed: new Date().toISOString(),
        is_active: true,
      });

    if (insertError) {
      throw new Error(`Insert error: ${insertError.message}`);
    }

    // Send the PDF delivery email
    await sendPdfEmail(RESEND_API_KEY, email, name);

    return new Response(
      JSON.stringify({ success: true, message: "Subscribed and PDF sent" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Subscribe error:", message);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});

async function sendPdfEmail(apiKey: string, email: string, name?: string) {
  const firstName = name || "there";

  // Tracking pixel for open tracking
  const trackingPixel = `<img src="https://tsglyyizwzapbyogdvhw.supabase.co/functions/v1/track?type=open&email=${encodeURIComponent(email)}&campaign=sardine-fast-pdf" width="1" height="1" style="display:none;" />`;

  // PDF link with click tracking
  const pdfUrl = `https://tsglyyizwzapbyogdvhw.supabase.co/functions/v1/track?type=click&email=${encodeURIComponent(email)}&campaign=sardine-fast-pdf&redirect=${encodeURIComponent("https://undeniablenick.com/5-Day-Sardine-Fast-Guide.pdf")}`;

  const htmlBody = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background: #2D4A3E; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #F5EFE0; font-size: 24px; margin: 0;">Your Sardine Fast Guide</h1>
      </div>

      <div style="padding: 30px; background: #fff;">
        <p style="font-size: 16px; line-height: 1.6;">Hey ${firstName},</p>

        <p style="font-size: 16px; line-height: 1.6;">Here is your 5-Day Sardine Fast Guide. Everything you need to know before, during, and after the fast.</p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="${pdfUrl}" style="background: #D4943A; color: #fff; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 16px; display: inline-block;">Download the Guide</a>
        </div>

        <p style="font-size: 14px; line-height: 1.6; color: #666;">What is inside:</p>
        <ul style="font-size: 14px; line-height: 2; color: #555; padding-left: 20px;">
          <li>Day-by-day breakdown of what happens in your body</li>
          <li>Shopping list and per-can nutrition</li>
          <li>The Barcelona study that started it all</li>
          <li>Safety FAQ (mercury, arsenic, microplastics)</li>
          <li>The Day 3 recipe hack that changed everything</li>
        </ul>

        <p style="font-size: 14px; line-height: 1.6; color: #666; margin-top: 20px;">I documented my entire 5-day sardine fast on Instagram. Follow along at <a href="https://www.instagram.com/undeniablenick" style="color: #D4943A;">@undeniablenick</a>.</p>

        <p style="font-size: 16px; line-height: 1.6; margin-top: 20px;">Talk soon,<br/><strong>Nick</strong></p>
      </div>

      <div style="background: #f5f0eb; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
        <p style="font-size: 12px; color: #999; margin: 0;">Undeniable Nick | Faith. Health. Fatherhood.</p>
        <p style="font-size: 11px; color: #bbb; margin-top: 8px;"><a href="https://undeniablenick.com" style="color: #bbb;">undeniablenick.com</a></p>
      </div>

      ${trackingPixel}
    </div>
  `;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Nick at Undeniable Nick <nick@liveundeniable.co>",
      to: [email],
      subject: "Your 5-Day Sardine Fast Guide",
      html: htmlBody,
    }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(`Resend error: ${JSON.stringify(data)}`);
  }
}
