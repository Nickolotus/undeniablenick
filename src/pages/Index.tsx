import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Undeniable Nick | Faith. Health. Fatherhood.</title>
        <meta name="description" content="Faith. Health. Fatherhood. Helping men stay strong, athletic, and purposeful through simple kettlebell training, nutrition, and real accountability." />
        <link rel="canonical" href="https://undeniablenick.com/" />
      </Helmet>

      {/* NAV - transparent over hero */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm" style={{ height: 72 }}>
        <div className="max-w-6xl mx-auto px-5 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="34" fill="#2D4A3E"/>
              <text x="40" y="48" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="500" fontSize="28" letterSpacing="2" fill="#D4943A">UN</text>
            </svg>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "1.25rem", letterSpacing: "0.05em", color: "#F5EFE0" }}>UNDENIABLE NICK</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm text-white/90 hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Home</Link>
            <Link to="/about" className="text-sm text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>About</Link>
            <Link to="/programs" className="text-sm text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Programs</Link>
            <Link to="/coaching" className="text-sm text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Coaching</Link>
            <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="text-sm text-white/70 hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>Instagram</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO - Full bleed trail photo */}
        <section className="relative" style={{ minHeight: "100vh" }}>
          <img src="/hero-outdoor.png" alt="Running through Louisiana pine forest at golden hour" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
          <div className="relative z-10 flex flex-col items-center justify-end text-center px-5 pb-20" style={{ minHeight: "100vh" }}>
            <p className="text-white/60 uppercase text-sm mb-4 font-medium" style={{ letterSpacing: "0.3em" }}>Faith. Health. Fatherhood.</p>
            <h1 className="text-white mb-5" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, letterSpacing: "0.01em", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
              The Undeniable<br />Man Project
            </h1>
            <p className="text-white/80 text-lg max-w-md mb-8 leading-relaxed">Helping men become the best version of themselves. One kettlebell, one day at a time.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/coaching" className="btn-golden text-lg">Work With Me</Link>
              <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="btn-outline-white text-lg">Follow the Journey</a>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="section-pad" style={{ backgroundColor: "#F5EFE0" }}>
          <div className="max-w-2xl mx-auto px-5 text-center">
            <p className="text-lg leading-relaxed" style={{ color: "#5A4A3A", fontStyle: "italic" }}>
              "I train in my garage in Louisiana, I run trails on Saturday mornings, and I am learning to be a better man every single day. This is not a brand. It is a journey, and you are invited."
            </p>
            <p className="mt-6 font-bold" style={{ color: "#2D4A3E" }}>-- Nick Chiasson</p>
          </div>
        </section>

        {/* GARAGE GYM PHOTO */}
        <section><img src="/garage-gym.png" alt="Garage gym with kettlebell, rings, and morning light" className="w-full" style={{ maxHeight: 500, objectFit: "cover" }} /></section>

        {/* PILLARS */}
        <section className="section-pad bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <h2 className="text-center mb-12" style={{ color: "#2D4A3E" }}>Simplify</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <h3 className="mb-3" style={{ color: "#2D4A3E" }}>One Kettlebell</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>Full body. Full range. Your garage, your backyard, anywhere. One kettlebell replaces an entire gym. The versatility is unmatched.</p>
              </div>
              <div className="text-center">
                <h3 className="mb-3" style={{ color: "#2D4A3E" }}>Train for Life</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>Kettlebell movements are natural and functional. Training this way builds resilience, protects your joints, and carries over into everything outside the gym.</p>
              </div>
              <div className="text-center">
                <h3 className="mb-3" style={{ color: "#2D4A3E" }}>Built for Busy Dads</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>45 minutes. No commute. No gym membership. Programming designed for men with real responsibilities and limited time. The results speak for themselves.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAITH PHOTO */}
        <section><img src="/faith-morning.png" alt="Morning porch with coffee, journal, and Louisiana trees" className="w-full" style={{ maxHeight: 500, objectFit: "cover" }} /></section>

        {/* FAITH */}
        <section className="section-pad" style={{ backgroundColor: "#F5EFE0" }}>
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="mb-6" style={{ color: "#2D4A3E" }}>Faith First</h2>
            <div className="flex flex-col gap-5 leading-relaxed" style={{ color: "#5A4A3A" }}>
              <p>Faith is the foundation. Living with purpose means stewarding what you have been given: your body, your family, your time. That commitment shapes everything, from how you train to how you show up for the people who depend on you.</p>
              <p>The goal is to be undeniable. To live in a way that cannot be questioned. When someone talks about you, they cannot deny that you are putting in the work, that you are who you say you are, and that you are actively becoming the man you are called to be.</p>
              <p style={{ fontWeight: 700, color: "#2D4A3E" }}>Everyone falls short. What defines you is how you respond.</p>
            </div>
          </div>
        </section>

        {/* CONSISTENCY - trail overlay */}
        <section className="relative" style={{ minHeight: 500 }}>
          <img src="/trail-landscape.png" alt="Misty Louisiana trail at sunrise with Spanish moss" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex items-center justify-center text-center px-5" style={{ minHeight: 500 }}>
            <div className="max-w-xl">
              <h2 className="text-white mb-6">Consistency</h2>
              <p className="text-white/85 text-lg leading-relaxed">Discipline is not exciting. That is the point. It is showing up when you do not feel like it and staying consistent when life demands everything else from you. The men who build something lasting are the ones who commit to the process, not the outcome.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad bg-white">
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2 className="mb-4" style={{ color: "#2D4A3E" }}>Work With Me</h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#5A4A3A" }}>Coaching built on accountability, simplicity, and real results. A proven approach to strength, mobility, and longevity that fits your life.</p>
            <Link to="/coaching" className="btn-golden text-lg">Learn More About Coaching</Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "#2D4A3E", padding: "40px 0" }}>
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

export { Index as Component };
export default Index;
