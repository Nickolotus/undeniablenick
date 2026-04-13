import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Undeniable Nick | Faith Driven Fitness & Lifestyle Coach</title>
        <meta name="description" content="Faith. Fitness. Fatherhood. Helping men stay strong, athletic, and purposeful through simple kettlebell training, full-range movement, and real accountability." />
        <link rel="canonical" href="https://undeniablenick.com/" />
      </Helmet>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5" style={{ height: 72 }}>
        <div className="max-w-6xl mx-auto px-5 h-full flex items-center justify-between">
          <Link to="/" className="text-xl tracking-tight" style={{ fontWeight: 900, color: "hsl(150 25% 22%)" }}>UNDENIABLE NICK</Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold hover:opacity-100 transition-opacity" style={{ color: "hsl(150 25% 22%)", opacity: 0.7 }}>Home</Link>
            <Link to="/about" className="text-sm font-semibold hover:opacity-100 transition-opacity" style={{ color: "hsl(150 25% 22%)", opacity: 0.7 }}>About</Link>
            <Link to="/coaching" className="text-sm font-semibold hover:opacity-100 transition-opacity" style={{ color: "hsl(150 25% 22%)", opacity: 0.7 }}>Coaching</Link>
            <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:opacity-100 transition-opacity" style={{ color: "hsl(150 25% 22%)", opacity: 0.7 }}>Instagram</a>
          </nav>
        </div>
      </header>
      <div style={{ height: 72 }} />

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden" style={{ minHeight: "85vh", background: "linear-gradient(180deg, hsl(150 25% 15%) 0%, hsl(150 20% 25%) 100%)" }}>
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-5" style={{ minHeight: "85vh" }}>
            <p className="text-white/70 uppercase text-sm mb-6 font-medium" style={{ letterSpacing: "0.3em" }}>Faith. Fitness. Fatherhood.</p>
            <h1 className="text-white mb-6" style={{ fontWeight: 900, letterSpacing: "-0.03em" }}>
              The Undeniable<br />Man Project
            </h1>
            <p className="text-white/80 text-lg max-w-lg mb-10 leading-relaxed">
              Strength. Discipline. Longevity. Helping men become the best version of themselves -- one kettlebell, one day at a time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/coaching" className="btn-golden text-lg">
                Work With Me
              </Link>
              <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="btn-outline-white text-lg">
                Follow the Journey
              </a>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY */}
        <section className="section-pad" style={{ backgroundColor: "hsl(35 40% 95%)" }}>
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="text-center mb-4" style={{ color: "hsl(150 25% 22%)" }}>Simplify</h2>
            <p className="text-center text-lg mb-12 max-w-xl mx-auto" style={{ color: "hsl(30 10% 45%)" }}>
              Training should support your life, not compete with it. Simple, repeatable habits make it possible to stay strong and healthy even when time is limited.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">&#x1F3CB;&#xFE0F;</div>
                <h3 className="mb-2" style={{ color: "hsl(150 25% 22%)" }}>One Kettlebell</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>Full body. Full range. Your garage, your backyard, anywhere. No gym required.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">&#x1F64F;</div>
                <h3 className="mb-2" style={{ color: "hsl(150 25% 22%)" }}>Faith First</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>Everything starts with purpose. Training the body matters because the man matters.</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">&#x1F468;&#x200D;&#x1F467;</div>
                <h3 className="mb-2" style={{ color: "hsl(150 25% 22%)" }}>Built for Dads</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>45 minutes. During nap time. Programs designed for men with zero free time and a newborn at home.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MY PHILOSOPHY */}
        <section className="bg-white section-pad">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="mb-6" style={{ color: "hsl(150 25% 22%)" }}>My Philosophy</h2>
            <div className="flex flex-col gap-5 leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>
              <p>
                I believe training should support your life, not compete with it. As responsibilities grow, the answer is not doing more. It is doing what matters consistently. Strength, mobility, and durability come from simple habits practiced over time.
              </p>
              <p>
                I focus on full range movement, minimal equipment, and sessions that fit into real schedules. Training should respect your joints, support long-term health, and carry over into daily life.
              </p>
              <p>
                Discipline is boring. That is the point. It is showing up when you do not feel like it, eating right when no one is watching, and being consistent even when life gets crazy. Everyone falls off. What matters most is how you get back up and keep going.
              </p>
            </div>
          </div>
        </section>

        {/* CONSISTENCY */}
        <section className="section-pad relative overflow-hidden" style={{ background: "linear-gradient(180deg, hsl(150 25% 18%) 0%, hsl(150 20% 28%) 100%)" }}>
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="relative z-20 max-w-3xl mx-auto px-5 text-center">
            <h2 className="text-white mb-6">Consistency</h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-xl mx-auto">
              Consistency is what turns simple habits into lasting results. Showing up day after day matters more than intensity or perfection. When training is repeatable and realistic, progress takes care of itself.
            </p>
          </div>
        </section>

        {/* COACHING CTA */}
        <section className="section-pad" style={{ backgroundColor: "hsl(35 40% 95%)" }}>
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2 className="mb-4" style={{ color: "hsl(150 25% 22%)" }}>Work With Me</h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>
              Coaching is a one-on-one conversation to understand your training background, goals, and schedule. We figure out what works for your life and build from there.
            </p>
            <Link to="/coaching" className="btn-golden text-lg">
              Learn More About Coaching
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "hsl(150 25% 22%)", padding: "40px 0" }}>
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-white font-bold text-lg">UNDENIABLE NICK</p>
                <p className="text-white/60 text-sm">Faith Driven Fitness & Lifestyle Coach</p>
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
