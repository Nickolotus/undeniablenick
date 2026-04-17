import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Drip email content - each step is a weekly email
const DRIP_EMAILS = [
  {
    subject: "How did the sardine fast go?",
    body: `<p>Hey {{name}},</p>
    <p>You downloaded the Sardine Fast Guide a week ago. Did you try it? How far did you get?</p>
    <p>Here is what most people tell me:</p>
    <ul>
      <li>Day 1 and 2 are the hardest. The dopamine hunger is real.</li>
      <li>Day 3 is when you either quit or get creative.</li>
      <li>Day 4 and 5 feel like a different person.</li>
    </ul>
    <p>If you have not started yet, the guide is still in your inbox. Pick a week with nothing going on and commit to it.</p>
    <p>If you tried it, reply and tell me how it went. I read every response.</p>
    <p>Nick</p>`,
  },
  {
    subject: "The one thing that makes training stick",
    body: `<p>Hey {{name}},</p>
    <p>I used to spend hours in the gym doing isolation exercises. Bench, curls, leg press. It worked until it did not.</p>
    <p>Then I switched to one kettlebell in my garage. 45 minutes. Full body. Every day.</p>
    <p>The difference is not the equipment. It is the simplicity. When your workout takes 45 minutes and zero commute, you actually do it. Consistency beats intensity every time.</p>
    <p>If you want to see what garage gym training looks like, follow along on Instagram. I post training content every week.</p>
    <p><a href="https://www.instagram.com/undeniablenick" style="color:#D4943A;font-weight:700;">@undeniablenick</a></p>
    <p>Nick</p>`,
  },
  {
    subject: "What I eat and why it matters",
    body: `<p>Hey {{name}},</p>
    <p>The sardine fast was an experiment. But how I eat the rest of the time is just as intentional.</p>
    <p>I follow an animal-based, whole food approach. No processed food. No seed oils. Real ingredients that I can pronounce.</p>
    <p>It is not a diet. It is a standard. The same way I train with one kettlebell and keep it simple, I eat real food and keep it clean.</p>
    <p>If you are interested in more nutrition content, I post regularly about what I eat and why. And I have more guides coming soon.</p>
    <p><a href="https://undeniablenick.com/programs" style="color:#D4943A;font-weight:700;">Check the Programs page</a></p>
    <p>Nick</p>`,
  },
  {
    subject: "Faith, health, and fatherhood",
    body: `<p>Hey {{name}},</p>
    <p>This is the last email in this series, but it is the most important one.</p>
    <p>I started Undeniable Nick because I believe men have a responsibility to take care of what they have been given. Their body. Their family. Their time.</p>
    <p>Training is not about looking good. It is about being capable. Being present. Being someone your family can count on.</p>
    <p>If that resonates with you, stick around. I am building something here and I want you to be part of it.</p>
    <p>Follow the journey:</p>
    <ul>
      <li><a href="https://www.instagram.com/undeniablenick" style="color:#D4943A;">Instagram</a></li>
      <li><a href="https://undeniablenick.com" style="color:#D4943A;">Website</a></li>
      <li><a href="https://undeniablenick.com/programs" style="color:#D4943A;">Free Programs</a></li>
    </ul>
    <p>Nick</p>`,
  },
];

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

    // Get all active subscribers who need their next drip email
    // Drip step 0 = just subscribed (PDF sent), step 1-4 = weekly emails
    const { data: subscribers, error } = await supabase
      .from("un_subscribers")
      .select("*")
      .eq("is_active", true)
      .lt("drip_step", DRIP_EMAILS.length)
      .gt("drip_step", 0); // Step 0 already got the PDF

    if (error) throw new Error(`Query error: ${error.message}`);
    if (!subscribers || subscribers.length === 0) {
      return new Response(
        JSON.stringify({ message: "No subscribers need drip emails today", sent: 0 }),
        { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    let sent = 0;
    let errors = 0;

    for (const sub of subscribers) {
      // Check if enough time has passed since last email (7 days)
      const lastEmail = sub.last_emailed ? new Date(sub.last_emailed) : new Date(sub.subscribed_at);
      const daysSince = (Date.now() - lastEmail.getTime()) / (1000 * 60 * 60 * 24);

      if (daysSince < 7) continue; // Not time yet

      const stepIndex = sub.drip_step - 1; // drip_step 1 = DRIP_EMAILS[0]
      if (stepIndex < 0 || stepIndex >= DRIP_EMAILS.length) continue;

      const email = DRIP_EMAILS[stepIndex];
      const firstName = sub.name || "there";
      const htmlContent = email.body.replace(/\{\{name\}\}/g, firstName);

      // Tracking pixel
      const trackingPixel = `<img src="https://tsglyyizwzapbyogdvhw.supabase.co/functions/v1/track?type=open&email=${encodeURIComponent(sub.email)}&campaign=drip-${sub.drip_step}" width="1" height="1" style="display:none;" />`;

      const fullHtml = `
        <div style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; padding: 20px;">
          ${htmlContent}
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #999;">Undeniable Nick | Faith. Health. Fatherhood.</p>
            <p style="font-size: 11px; color: #bbb;"><a href="https://undeniablenick.com" style="color: #bbb;">undeniablenick.com</a></p>
          </div>
          ${trackingPixel}
        </div>
      `;

      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "Nick Chiasson <nick@liveundeniable.co>",
            to: [sub.email],
            subject: email.subject,
            html: fullHtml,
          }),
        });

        if (res.ok) {
          // Update subscriber: increment drip step, update last_emailed
          await supabase
            .from("un_subscribers")
            .update({
              drip_step: sub.drip_step + 1,
              last_emailed: new Date().toISOString(),
            })
            .eq("id", sub.id);
          sent++;
        } else {
          errors++;
        }
      } catch (e) {
        errors++;
      }
    }

    return new Response(
      JSON.stringify({ message: `Drip complete. Sent: ${sent}, Errors: ${errors}`, sent, errors }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Drip error:", message);
    return new Response(
      JSON.stringify({ error: message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
