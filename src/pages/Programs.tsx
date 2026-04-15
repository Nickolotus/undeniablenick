import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Free Programs & Resources | Undeniable Nick</title>
        <meta name="description" content="Free guides, programs, and resources for men who want to train smarter, eat cleaner, and show up better. Health, faith, and fatherhood." />
        <link rel="canonical" href="https://undeniablenick.com/programs" />
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
            <Link to="/programs" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E" }}>Programs</Link>
            <Link to="/coaching" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E", opacity: 0.7 }}>Coaching</Link>
            <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E", opacity: 0.7 }}>Instagram</a>
          </nav>
        </div>
      </header>
      <div style={{ height: 72 }} />

      <main>
        {/* HEADER */}
        <section className="section-pad" style={{ backgroundColor: "#F5EFE0" }}>
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h1 className="mb-4" style={{ color: "#2D4A3E" }}>Free Programs & Resources</h1>
            <p className="text-lg leading-relaxed" style={{ color: "#5A4A3A" }}>
              Guides built from real experience. No fluff. No paywalls. Just value.
            </p>
          </div>
        </section>

        {/* PROGRAMS GRID */}
        <section className="section-pad bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-8">

              {/* SARDINE FAST GUIDE */}
              <Link to="/programs/sardine-fast" className="block border rounded-lg overflow-hidden hover:shadow-lg transition-shadow" style={{ borderColor: "#e0d8cc" }}>
                <div style={{ backgroundColor: "#2D4A3E", padding: "40px 24px", textAlign: "center" }}>
                  <span style={{ fontSize: "48px" }}>🐟</span>
                  <h3 className="text-white mt-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>The 5-Day Sardine Fast Guide</h3>
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>
                    Everything you need to know before starting a sardine fast. Day-by-day breakdown, nutrition facts, what to expect, and how to finish strong. Based on Dr. Berg's research.
                  </p>
                  <p className="mt-4 text-sm font-bold" style={{ color: "#D4943A" }}>Download Free Guide &rarr;</p>
                </div>
              </Link>

              {/* COMING SOON PLACEHOLDER */}
              <div className="block border rounded-lg overflow-hidden opacity-50" style={{ borderColor: "#e0d8cc" }}>
                <div style={{ backgroundColor: "#5A4A3A", padding: "40px 24px", textAlign: "center" }}>
                  <span style={{ fontSize: "48px" }}>🏋️</span>
                  <h3 className="text-white mt-4" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}>Kettlebell Flow Program</h3>
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>
                    A garage gym program built for busy men. One kettlebell. 45 minutes. Full body. Full range. The only program you need.
                  </p>
                  <p className="mt-4 text-sm font-bold" style={{ color: "#999" }}>Coming Soon</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad" style={{ backgroundColor: "#2D4A3E" }}>
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2 className="text-white mb-5">Want More?</h2>
            <p className="text-white/80 text-lg mb-8">Follow along on Instagram for daily content on health, faith, and fatherhood.</p>
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

export { Programs as Component };
export default Programs;
