import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState } from "react";

const SardineFast = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://tsglyyizwzapbyogdvhw.supabase.co/functions/v1/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, source: "sardine-fast" }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <Helmet>
        <title>The 5-Day Sardine Fast Guide | Undeniable Nick</title>
        <meta name="description" content="Everything you need to know before starting a sardine fast. Day-by-day breakdown, nutrition facts, what to expect, and how to finish strong." />
        <link rel="canonical" href="https://undeniablenick.com/programs/sardine-fast" />
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
            <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E", opacity: 0.7 }}>Instagram</a>
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
              <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="text-lg" style={{ fontFamily: "'Inter', sans-serif", color: "rgba(245,239,224,0.7)" }}>Instagram</a>
            </nav>
          </div>
        )}
      </header>
      <div style={{ height: 72 }} />

      <main>
        {/* HERO */}
        <section style={{ position: "relative", padding: "80px 20px", textAlign: "center", overflow: "hidden" }}>
          <img src="/program-sardine.png" alt="Sardines in tin" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(20,15,10,0.75)" }} />
          <div className="max-w-2xl mx-auto" style={{ position: "relative", zIndex: 1 }}>
            <h1 className="text-white mb-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>The 5-Day Sardine Fast Guide</h1>
            <p className="text-white/80 text-lg leading-relaxed">
              Everything you need to know before, during, and after a sardine fast. Day-by-day breakdown, the science behind it, and real results.
            </p>
          </div>
        </section>

        {/* WHAT YOU GET */}
        <section className="section-pad bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-center mb-10" style={{ color: "#2D4A3E" }}>What's Inside</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Day-by-Day Breakdown", desc: "What happens in your body on each day of the fast, from glycogen depletion to ketosis to visible changes." },
                { title: "The Science", desc: "Omega-3 levels, selenium, B12, taurine, brown fat activation. Based on Dr. Berg's research and clinical data." },
                { title: "What to Buy", desc: "Which sardines to get, what electrolytes you need, and how to prep before Day 1." },
                { title: "Per-Can Nutrition", desc: "23g protein, 900mg omega-3, 348% B12 per can. Full breakdown of what 3 cans a day gives you." },
                { title: "What to Expect", desc: "Dopamine hunger, mental clarity, energy shifts, and how to push through the wall." },
                { title: "How to Come Off", desc: "How to transition back to normal eating without losing the benefits." },
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

        {/* EMAIL CAPTURE */}
        <section className="section-pad" style={{ backgroundColor: "#F5EFE0" }}>
          <div className="max-w-md mx-auto px-5 text-center">
            {!submitted ? (
              <>
                <h2 className="mb-4" style={{ color: "#2D4A3E" }}>Get the Free Guide</h2>
                <p className="text-sm mb-8 leading-relaxed" style={{ color: "#5A4A3A" }}>
                  Enter your email and the guide goes straight to your inbox.
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
                    className="btn-golden"
                    style={{ padding: "14px 24px", fontSize: "16px", cursor: "pointer" }}
                  >
                    Send Me the Guide
                  </button>
                  <p className="text-xs" style={{ color: "#999" }}>No spam. Unsubscribe anytime.</p>
                </form>
              </>
            ) : (
              <>
                <span style={{ fontSize: "48px", display: "block", marginBottom: "16px" }}>🎉</span>
                <h2 className="mb-4" style={{ color: "#2D4A3E" }}>Check Your Inbox</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>
                  The 5-Day Sardine Fast Guide is on its way to {email}. If you don't see it in a few minutes, check your spam folder.
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
            <h2 className="text-white mb-5">Follow the Sardine Fast Series</h2>
            <p className="text-white/80 text-lg mb-8">I'm documenting all 5 days on Instagram. Watch it happen in real time.</p>
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

export { SardineFast as Component };
export default SardineFast;
