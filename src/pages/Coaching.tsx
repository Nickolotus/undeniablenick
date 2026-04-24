import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Coaching = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Helmet>
        <title>Coaching | Undeniable Nick</title>
        <meta name="description" content="One-on-one coaching built around simplicity, consistency, and long-term health. Kettlebell training, full-range movement, and programming that fits your life." />
        <link rel="canonical" href="https://undeniablenick.com/coaching" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Coaching | Undeniable Nick" />
        <meta property="og:description" content="One-on-one coaching built around simplicity, consistency, and long-term health. Kettlebell training, full-range movement, and programming that fits your life." />
        <meta property="og:url" content="https://undeniablenick.com/coaching" />
        <meta property="og:image" content="https://undeniablenick.com/garage-gym.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Coaching | Undeniable Nick" />
        <meta name="twitter:description" content="One-on-one coaching built around simplicity, consistency, and long-term health." />
        <meta name="twitter:image" content="https://undeniablenick.com/garage-gym.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Undeniable Nick Coaching",
          "serviceType": "Fitness and Lifestyle Coaching",
          "provider": { "@type": "Person", "name": "Nick Chiasson", "url": "https://undeniablenick.com" },
          "areaServed": "Online",
          "description": "One-on-one fitness and lifestyle coaching focused on kettlebell training, joint health, ATG methodology, and sustainable programming for busy men.",
          "url": "https://undeniablenick.com/coaching",
          "offers": { "@type": "Offer", "url": "https://calendar.app.google/CALdRhi6DesHTxi4A", "availability": "https://schema.org/InStock" }
        })}</script>
      </Helmet>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5" style={{ height: 72 }}>
        <div className="max-w-6xl mx-auto px-5 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="34" fill="#2D4A3E"/>
              <text x="40" y="48" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="500" fontSize="28" letterSpacing="2" fill="#D4943A">UN</text>
            </svg>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "1.25rem", letterSpacing: "0.05em", color: "#2D4A3E" }}>UNDENIABLE NICK</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E", opacity: 0.7 }}>Home</Link>
            <Link to="/about" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E", opacity: 0.7 }}>About</Link>
            <Link to="/programs" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E", opacity: 0.7 }}>Programs</Link>
            <Link to="/coaching" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E" }}>Coaching</Link>
          </nav>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, color: "#2D4A3E" }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d={menuOpen ? "M6 6l12 12M6 18L18 6" : "M3 12h18M3 6h18M3 18h18"} /></svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden" style={{ background: "#2D4A3E", padding: "20px" }}>
            <nav className="flex flex-col gap-4">
              <Link to="/" onClick={() => setMenuOpen(false)} className="text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "#F5EFE0" }}>Home</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,239,224,0.7)" }}>About</Link>
              <Link to="/programs" onClick={() => setMenuOpen(false)} className="text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,239,224,0.7)" }}>Programs</Link>
              <Link to="/coaching" onClick={() => setMenuOpen(false)} className="text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,239,224,0.7)" }}>Coaching</Link>
            </nav>
          </div>
        )}
      </header>
      <div style={{ height: 72 }} />

      <main>
        {/* HERO */}
        <section className="relative" style={{ minHeight: 420 }}>
          <img src="/garage-gym.webp" alt="Garage gym with kettlebell and rings in morning light" fetchpriority="high" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(20,15,10,0.55) 0%, rgba(20,15,10,0.75) 100%)" }} />
          <div className="relative z-10 flex items-center" style={{ minHeight: 420 }}>
            <div className="max-w-3xl mx-auto px-5 w-full">
              <p className="text-white/70 uppercase text-sm mb-4 font-medium" style={{ letterSpacing: "0.3em" }}>Coaching</p>
              <h1 className="text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
                Train like your life depends on it.<br />Because it does.
              </h1>
              <p className="text-white/85 text-lg leading-relaxed max-w-2xl">
                A working relationship built around simplicity, consistency, and long-term health. No preset templates. No short-term challenges. Programming that fits your life.
              </p>
            </div>
          </div>
        </section>

        {/* WHAT COACHING LOOKS LIKE */}
        <section className="bg-white section-pad">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="mb-8 text-center" style={{ color: "#2D4A3E" }}>What Coaching Looks Like</h2>
            <div className="flex flex-col gap-6 leading-relaxed max-w-3xl mx-auto mb-12" style={{ color: "#5A4A3A" }}>
              <p>
                We start with a conversation to understand your training background, goals, and schedule. From there, I build programming that fits your life, not the other way around.
              </p>
              <p>
                The focus is on building strength, improving mobility, and creating routines that fit into real schedules. Work, family, travel, and injuries are all part of the process. Programming adapts as life changes.
              </p>
              <p>
                Nutrition is approached with the same mindset. The goal is not restriction or rigid rules, but practical guidance that supports training, recovery, and daily energy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { n: "01", title: "Kettlebell Training", body: "Full body flows, strength work, and conditioning with minimal equipment. One bell, your garage, 45 minutes." },
                { n: "02", title: "Joint Health", body: "ATG methodology, Crossover Symmetry, full range of motion training. Rebuild what is broken. Protect what is not." },
                { n: "03", title: "Real Programming", body: "Programs designed for men with jobs, families, and limited time. Not cookie-cutter templates. Built for your life." },
              ].map((c) => (
                <div key={c.n} className="rounded-lg p-6" style={{ backgroundColor: "#F5EFE0", borderTop: "3px solid #D4943A" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2rem", fontWeight: 600, color: "#D4943A", lineHeight: 1, marginBottom: 12 }}>{c.n}</p>
                  <h3 className="mb-3" style={{ color: "#2D4A3E" }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="section-pad" style={{ backgroundColor: "#F5EFE0" }}>
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="mb-8 text-center" style={{ color: "#2D4A3E" }}>This Is for You If</h2>
            <ul className="flex flex-col gap-4">
              {[
                "You want to stay athletic and functional, not just look good in a mirror.",
                "You are dealing with knee pain, shoulder issues, or joints that feel older than you are.",
                "You are a dad with limited time and need a program that fits around real life.",
                "You have trained before but need direction and accountability to stay consistent.",
                "You want to train for longevity. To play with your kids at 60 the way you can at 30.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4" style={{ color: "#5A4A3A" }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
                    <circle cx="12" cy="12" r="11" fill="#2D4A3E" />
                    <path d="M7 12.5l3 3 7-7" stroke="#D4943A" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  </svg>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="bg-white section-pad">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="mb-10 text-center" style={{ color: "#2D4A3E" }}>How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "Step 1", title: "Intake Call", body: "A no-pressure conversation. We talk training history, goals, injuries, and schedule. If it is not a fit, I will tell you." },
                { step: "Step 2", title: "Built for You", body: "I design programming around your life. Kettlebell flows, joint work, mobility, and nutrition guidance — all tied together." },
                { step: "Step 3", title: "Stay Accountable", body: "Weekly check-ins. Programming that adapts as life changes. You do the reps. I keep the plan honest." },
              ].map((s) => (
                <div key={s.step} className="text-center">
                  <p className="uppercase text-xs font-semibold mb-3" style={{ color: "#D4943A", letterSpacing: "0.2em" }}>{s.step}</p>
                  <h3 className="mb-3" style={{ color: "#2D4A3E" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COACHING CALL CTA */}
        <section className="section-pad" style={{ backgroundColor: "#2D4A3E" }}>
          <div className="max-w-3xl mx-auto px-5">
            <div className="rounded-lg text-center" style={{ backgroundColor: "#F5EFE0", padding: "48px 32px", borderTop: "4px solid #D4943A" }}>
              <p className="uppercase text-xs font-semibold mb-3" style={{ color: "#D4943A", letterSpacing: "0.25em" }}>Next Step</p>
              <h2 className="mb-5" style={{ color: "#2D4A3E" }}>Request a Coaching Call</h2>
              <p className="mb-8 leading-relaxed text-lg max-w-xl mx-auto" style={{ color: "#5A4A3A" }}>
                A one-on-one conversation to understand your training background, goals, and schedule. Free, no-pressure, 20 minutes. We figure out what works and build from there.
              </p>
              <a href="https://calendar.app.google/CALdRhi6DesHTxi4A" target="_blank" rel="noopener noreferrer" className="btn-golden text-lg">
                Book a Call
              </a>
              <p className="mt-5 text-sm" style={{ color: "#5A4A3A", opacity: 0.7 }}>
                Prefer email? Reach out at <a href="mailto:nick@undeniablenick.com" style={{ color: "#2D4A3E", fontWeight: 600, textDecoration: "underline" }}>nick@undeniablenick.com</a>
              </p>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "hsl(150 25% 22%)", padding: "40px 0" }}>
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, letterSpacing: "0.05em" }}>UNDENIABLE NICK</p>
                <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Faith Driven Fitness & Lifestyle Coach</p>
              </div>
              <div className="flex gap-6">
                <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">Instagram</a>
                <a href="https://www.tiktok.com/@undeniablenick" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">TikTok</a>
                <a href="https://www.youtube.com/@undeniablenick" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm transition-colors">YouTube</a>
              </div>
            </div>
            <div className="border-t border-white/10 mt-6 pt-6 text-center">
              <p className="text-white/40 text-xs">&copy; 2026 Undeniable Nick. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
};

export { Coaching as Component };
export default Coaching;
