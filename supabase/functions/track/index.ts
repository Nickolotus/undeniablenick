import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// 1x1 transparent pixel PNG
const PIXEL = new Uint8Array([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00, 0x00, 0x00, 0x0d,
  0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
  0x08, 0x06, 0x00, 0x00, 0x00, 0x1f, 0x15, 0xc4, 0x89, 0x00, 0x00, 0x00,
  0x0a, 0x49, 0x44, 0x41, 0x54, 0x78, 0x9c, 0x62, 0x00, 0x00, 0x00, 0x02,
  0x00, 0x01, 0xe2, 0x21, 0xbc, 0x33, 0x00, 0x00, 0x00, 0x00, 0x49, 0x45,
  0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
]);

serve(async (req) => {
  try {
    const url = new URL(req.url);
    const type = url.searchParams.get("type"); // "open" or "click"
    const email = url.searchParams.get("email");
    const campaign = url.searchParams.get("campaign");
    const redirect = url.searchParams.get("redirect");

    const SUPABASE_URL = Deno.env.get("SUPABASE_URL");
    const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY && email) {
      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

      // Log the event
      await supabase.from("un_email_events").insert({
        email: email.toLowerCase(),
        event_type: type || "unknown",
        campaign: campaign || "unknown",
        timestamp: new Date().toISOString(),
        user_agent: req.headers.get("user-agent") || "",
      });

      // Update subscriber record
      if (type === "open") {
        await supabase
          .from("un_subscribers")
          .update({ last_opened: new Date().toISOString(), opens: supabase.rpc ? undefined : undefined })
          .eq("email", email.toLowerCase());
      } else if (type === "click") {
        await supabase
          .from("un_subscribers")
          .update({ last_clicked: new Date().toISOString() })
          .eq("email", email.toLowerCase());
      }
    }

    // For click events, redirect to the target URL
    if (type === "click" && redirect) {
      return new Response(null, {
        status: 302,
        headers: { Location: decodeURIComponent(redirect) },
      });
    }

    // For open events, return a tracking pixel
    return new Response(PIXEL, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error) {
    // Fail silently for tracking - never break the user experience
    console.error("Track error:", error);
    return new Response(PIXEL, {
      headers: { "Content-Type": "image/png" },
    });
  }
});
