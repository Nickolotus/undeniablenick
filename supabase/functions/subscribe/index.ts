import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Lead magnet config — keyed by the `source` field the website sends.
// Add a new entry here when launching another lead magnet.
const LEAD_MAGNETS: Record<string, {
  pdfFilename: string;
  campaign: string;
  subject: string;
  heroTitle: string;
  intro: string;
  bullets: string[];
}> = {
  "sardine-fast": {
    pdfFilename: "5-Day-Sardine-Fast-Guide.pdf",
    campaign: "sardine-fast-pdf",
    subject: "Your 5-Day Sardine Fast Guide",
    heroTitle: "Your Sardine Fast Guide",
    intro: "Here is your 5-Day Sardine Fast Guide. Everything you need to know before, during, and after the fast.",
    bullets: [
      "Day-by-day breakdown of what happens in your body",
      "Shopping list and per-can nutrition",
      "The Barcelona study that started it all",
      "Safety FAQ (mercury, arsenic, microplastics)",
      "The Day 3 recipe hack that changed everything",
    ],
  },
  "kettlebell-flow": {
    pdfFilename: "3-Day-Kettlebell-Beginner.pdf",
    campaign: "kettlebell-beginner-pdf",
    subject: "Your 3-Day Kettlebell Beginner Program",
    heroTitle: "Your 3-Day Kettlebell Program",
    intro: "Here is your 3-Day Kettlebell Beginner Program. One bell. Your garage. 45 minutes. Run it for 4 weeks.",
    bullets: [
      "3 full workouts with reps, rounds, and rest",
      "The 10-minute warm-up that protects the joints",
      "Bell sizing and basic safety",
      "Nick's training-with-intention philosophy",
      "Whole-food nutrition framework (no calorie tracking)",
    ],
  },
};

const DEFAULT_SOURCE = "sardine-fast";

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

    const resolvedSource = source && LEAD_MAGNETS[source] ? source : DEFAULT_SOURCE;
    const magnet = LEAD_MAGNETS[resolvedSource];

    // Check if subscriber already exists
    const { data: existing } = await supabase
      .from("un_subscribers")
      .select("id, email, last_emailed")
      .eq("email", email.toLowerCase())
      .single();

    if (existing) {
      // Idempotency: if we emailed this person in the last 60 seconds, skip the resend
      const recentlyEmailed =
        existing.last_emailed &&
        Date.now() - new Date(existing.last_emailed).getTime() < 60_000;

      if (!recentlyEmailed) {
        await sendPdfEmail(RESEND_API_KEY, email, name, magnet);
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
        source: resolvedSource,
        tags: [resolvedSource],
        drip_step: 0,
        subscribed_at: new Date().toISOString(),
        last_emailed: new Date().toISOString(),
        is_active: true,
      });

    if (insertError) {
      throw new Error(`Insert error: ${insertError.message}`);
    }

    // Send the PDF delivery email
    await sendPdfEmail(RESEND_API_KEY, email, name, magnet);

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

async function sendPdfEmail(
  apiKey: string,
  email: string,
  name: string | undefined,
  magnet: typeof LEAD_MAGNETS[string]
) {
  const firstName = name || "there";

  // Tracking pixel for open tracking
  const trackingPixel = `<img src="https://tsglyyizwzapbyogdvhw.supabase.co/functions/v1/track?type=open&email=${encodeURIComponent(email)}&campaign=${magnet.campaign}" width="1" height="1" style="display:none;" />`;

  // PDF link with click tracking
  const pdfUrl = `https://tsglyyizwzapbyogdvhw.supabase.co/functions/v1/track?type=click&email=${encodeURIComponent(email)}&campaign=${magnet.campaign}&redirect=${encodeURIComponent(`https://undeniablenick.com/${magnet.pdfFilename}`)}`;

  const bulletsHtml = magnet.bullets.map((b) => `<li>${b}</li>`).join("\n          ");

  const htmlBody = `
    <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <div style="background: #2D4A3E; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #F5EFE0; font-size: 24px; margin: 0;">${magnet.heroTitle}</h1>
      </div>

      <div style="padding: 30px; background: #fff;">
        <p style="font-size: 16px; line-height: 1.6;">Hey ${firstName},</p>

        <p style="font-size: 16px; line-height: 1.6;">${magnet.intro}</p>

        <div style="text-align: center; margin: 30px 0;">
          <a href="${pdfUrl}" style="background: #D4943A; color: #fff; padding: 14px 32px; border-radius: 6px; text-decoration: none; font-weight: 700; font-size: 16px; display: inline-block;">Download the Guide</a>
        </div>

        <p style="font-size: 14px; line-height: 1.6; color: #666;">What is inside:</p>
        <ul style="font-size: 14px; line-height: 2; color: #555; padding-left: 20px;">
          ${bulletsHtml}
        </ul>

        <p style="font-size: 14px; line-height: 1.6; color: #666; margin-top: 20px;">Follow along on Instagram at <a href="https://www.instagram.com/undeniablenick" style="color: #D4943A;">@undeniablenick</a>.</p>

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
      from: "Nick Chiasson <nick@liveundeniable.co>",
      to: [email],
      subject: magnet.subject,
      html: htmlBody,
    }),
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(`Resend error: ${JSON.stringify(data)}`);
  }
}
