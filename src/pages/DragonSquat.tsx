import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

const DragonSquat = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting || submitted) return;
    setIsSubmitting(true);
    try {
      const res = await fetch("https://tsglyyizwzapbyogdvhw.supabase.co/functions/v1/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, source: "dragon-squat" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Dragon Squat Progression Guide | Undeniable Nick</title>
        <meta name="description" content="The full Dragon Squat progression from beginner to a clean rep both sides. Multi-creator synthesis with real intermediate progressions for every phase gap. Free guide." />
        <link rel="canonical" href="https://undeniablenick.com/programs/dragon-squat" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Dragon Squat Progression Guide | Undeniable Nick" />
        <meta property="og:description" content="The full progression from beginner to a clean Dragon Squat both sides. Multi-creator synthesis with real intermediate steps." />
        <meta property="og:url" content="https://undeniablenick.com/programs/dragon-squat" />
        <meta property="og:image" content="https://undeniablenick.com/garage-gym.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dragon Squat Progression Guide | Undeniable Nick" />
        <meta name="twitter:description" content="The full Dragon Squat progression. Free guide with real intermediate progressions." />
        <meta name="twitter:image" content="https://undeniablenick.com/garage-gym.png" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": "Dragon Squat Progression Guide",
          "author": { "@type": "Person", "name": "Nick Chiasson" },
          "publisher": { "@type": "Person", "name": "Nick Chiasson", "url": "https://undeniablenick.com" },
          "url": "https://undeniablenick.com/programs/dragon-squat",
          "inLanguage": "en",
          "isAccessibleForFree": true,
          "genre": "Fitness"
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
            <Link to="/coaching" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E", opacity: 0.7 }}>Coaching</Link>
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
        <section style={{ position: "relative", padding: "80px 20px", textAlign: "center", overflow: "hidden" }}>
          <img src="/garage-gym.webp" alt="Garage gym training space" fetchpriority="high" decoding="async" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(20,15,10,0.72)" }} />
          <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
            <p className="text-white/70 uppercase text-sm mb-4 font-medium" style={{ letterSpacing: "0.3em" }}>Free Guide</p>
            <h1 className="text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Dragon Squat Progression</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              From wherever you are to a clean Dragon Squat both sides. Multi-creator synthesis with real intermediate progressions for every phase gap.
            </p>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="section-pad bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-center mb-10" style={{ color: "#2D4A3E" }}>What's Inside</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "The 5-Phase Path", desc: "Dragon Tail Lift, Tail Squat, Baby Dragon, Assisted Dragon, Full Dragon Squat. Each phase broken down with the cues, mistakes, and gates that matter." },
                { title: "Phase Bridges", desc: "The real intermediate progressions between every phase. Especially the Phase 2 to 3 cliff most guides skip. 7 ordered bridge moves so you don't stall." },
                { title: "Prerequisite Tests", desc: "Pistol, shrimp, Cossack, ATG split, plus a passive sit and active lift test. Know where you actually start instead of guessing." },
                { title: "Daily Mobility Prep", desc: "8 to 10 minute routine to run every day. Cossack, 90/90, tib raises, couch stretch, side leg lifts. The work that unlocks the depth." },
                { title: "Multi-Creator Synthesis", desc: "Built from research across Strength Side, ATG, MPCalisthenics, Cali Move, FitnessFAQs, Tom Morrison, and others. Synthesized into one path." },
                { title: "Realistic Timeline", desc: "3 to 6 months for most. The honest expectations and the gate to know when you're actually ready to move up to the next phase." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#D4943A", flexShrink: 0, marginTop: 6 }} />
                  <div>
                    <h3 className="font-bold mb-1" style={{ color: "#2D4A3E", fontSize: "1.1rem" }}>{item.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO IT'S FOR */}
        <section className="section-pad" style={{ backgroundColor: "#F5EFE0" }}>
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="mb-8 text-center" style={{ color: "#2D4A3E" }}>Built for Men Who...</h2>
            <div className="flex flex-col gap-4 leading-relaxed" style={{ color: "#5A4A3A" }}>
              <p>Want elite hip and knee mobility, not just brute force in a narrow range.</p>
              <p>Are tired of progression guides that skip the bridges and leave you stuck between phases.</p>
              <p>Want one skill that demands every aspect of lower body strength, mobility, and balance.</p>
              <p>Are willing to chase a 4-month build because the adaptations stick for life.</p>
            </div>
          </div>
        </section>

        {/* EMAIL CAPTURE */}
        <section className="section-pad bg-white">
          <div className="max-w-md mx-auto px-5 text-center">
            {!submitted ? (
              <>
                <h2 className="mb-4" style={{ color: "#2D4A3E" }}>Get the Free Guide</h2>
                <p className="text-sm mb-8 leading-relaxed" style={{ color: "#5A4A3A" }}>
                  Enter your email and the full Dragon Squat progression goes straight to your inbox.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    style={{
                      padding: "14px 16px",
                      borderRadius: "6px",
                      border: "1px solid #d0c8b8",
                      fontSize: "16px",
                      fontFamily: "'Inter', sans-serif",
                      backgroundColor: "#fff",
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      padding: "14px 16px",
                      borderRadius: "6px",
                      border: "1px solid #d0c8b8",
                      fontSize: "16px",
                      fontFamily: "'Inter', sans-serif",
                      backgroundColor: "#fff",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-golden"
                    style={{
                      padding: "14px 24px",
                      fontSize: "16px",
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                      opacity: isSubmitting ? 0.6 : 1,
                    }}
                  >
                    {isSubmitting ? "Sending..." : "Send Me the Guide"}
                  </button>
                  <p className="text-xs" style={{ color: "#999" }}>No spam. Unsubscribe anytime.</p>
                </form>
              </>
            ) : (
              <>
                <h2 className="mb-4" style={{ color: "#2D4A3E" }}>Check Your Inbox</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>
                  The Dragon Squat Progression Guide is on its way to {email}. If you don't see it in a few minutes, check your spam folder.
                </p>
                <Link to="/programs" className="btn-golden mt-6 inline-block" style={{ padding: "12px 24px" }}>
                  Browse More Resources
                </Link>
              </>
            )}
          </div>
        </section>

        {/* FOLLOW CTA */}
        <section className="section-pad" style={{ backgroundColor: "#2D4A3E" }}>
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2 className="text-white mb-5">Follow the Journey</h2>
            <p className="text-white/80 text-lg mb-8">Every Wednesday I'm filming the progression. Real reps, real fails, real depth gains. Train alongside.</p>
            <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="btn-golden text-lg">Follow @undeniablenick</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "#2D4A3E", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white text-lg" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, letterSpacing: "0.05em" }}>UNDENIABLE NICK</p>
                <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Faith. Health. Fatherhood.</p>
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

export { DragonSquat as Component };
export default DragonSquat;
