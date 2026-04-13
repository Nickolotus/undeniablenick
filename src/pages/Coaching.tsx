import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Coaching = () => {
  return (
    <>
      <Helmet>
        <title>Coaching | Undeniable Nick</title>
        <meta name="description" content="One-on-one coaching built around simplicity, consistency, and long-term health. Kettlebell training, full-range movement, and programming that fits your life." />
        <link rel="canonical" href="https://undeniablenick.com/coaching" />
      </Helmet>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5" style={{ height: 72 }}>
        <div className="max-w-6xl mx-auto px-5 h-full flex items-center justify-between">
          <Link to="/" className="text-xl tracking-tight" style={{ fontWeight: 900, color: "hsl(150 25% 22%)" }}>UNDENIABLE NICK</Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold" style={{ color: "hsl(150 25% 22%)", opacity: 0.7 }}>Home</Link>
            <Link to="/about" className="text-sm font-semibold" style={{ color: "hsl(150 25% 22%)", opacity: 0.7 }}>About</Link>
            <Link to="/coaching" className="text-sm font-semibold" style={{ color: "hsl(150 25% 22%)" }}>Coaching</Link>
            <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: "hsl(150 25% 22%)", opacity: 0.7 }}>Instagram</a>
          </nav>
        </div>
      </header>
      <div style={{ height: 72 }} />

      <main>
        {/* HERO */}
        <section className="section-pad" style={{ backgroundColor: "hsl(35 40% 95%)" }}>
          <div className="max-w-3xl mx-auto px-5">
            <h1 style={{ color: "hsl(150 25% 22%)" }}>Coaching</h1>
            <p className="text-lg mt-4 leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>
              A coaching relationship built around simplicity, consistency, and long-term health. There is no preset template or a short-term challenge. The focus is on building strength, improving mobility, and creating routines that fit into real schedules and last.
            </p>
          </div>
        </section>

        {/* WHAT COACHING LOOKS LIKE */}
        <section className="bg-white section-pad">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="mb-8" style={{ color: "hsl(150 25% 22%)" }}>What Coaching Looks Like</h2>
            <div className="flex flex-col gap-6 leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>
              <p>
                Coaching is a working relationship. We start with a conversation to understand your training background, goals, and schedule. From there, I build programming that fits your life, not the other way around.
              </p>
              <p>
                The focus is on building strength, improving mobility, and creating routines that fit into real schedules. Work, family, travel, and injuries are all part of the process. Programming adapts as life changes.
              </p>
              <p>
                Nutrition is approached with the same mindset. The goal is not restriction or rigid rules, but practical guidance that supports training, recovery, and daily energy. Recommendations are individualized, realistic, and designed to be maintained over time.
              </p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="card-base text-center">
                <h3 className="mb-3" style={{ color: "hsl(150 25% 22%)" }}>Kettlebell Training</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>Full body flows, strength work, and conditioning with minimal equipment. One bell, your garage, 45 minutes.</p>
              </div>
              <div className="card-base text-center">
                <h3 className="mb-3" style={{ color: "hsl(150 25% 22%)" }}>Joint Health</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>ATG methodology, Crossover Symmetry, full range of motion training. Rebuild what is broken. Protect what is not.</p>
              </div>
              <div className="card-base text-center">
                <h3 className="mb-3" style={{ color: "hsl(150 25% 22%)" }}>Real Programming</h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>Programs designed for men with jobs, families, and limited time. Not cookie-cutter templates. Built for your life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHO THIS IS FOR */}
        <section className="section-pad" style={{ backgroundColor: "hsl(35 40% 95%)" }}>
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="mb-8" style={{ color: "hsl(150 25% 22%)" }}>This Is for You If</h2>
            <div className="flex flex-col gap-4" style={{ color: "hsl(30 10% 45%)" }}>
              <p>You want to stay athletic and functional, not just look good in a mirror.</p>
              <p>You are dealing with knee pain, shoulder issues, or joints that feel older than you are.</p>
              <p>You are a dad with limited time and need a program that fits around real life.</p>
              <p>You have trained before but need direction and accountability to stay consistent.</p>
              <p>You want to train for longevity. To be able to play with your kids at 60 the way you can at 30.</p>
            </div>
          </div>
        </section>

        {/* COACHING CALL CTA */}
        <section className="bg-white section-pad">
          <div className="max-w-2xl mx-auto px-5 text-center">
            <div className="card-base" style={{ borderColor: "hsl(38 70% 55%)", borderWidth: 2 }}>
              <h2 className="mb-4" style={{ color: "hsl(150 25% 22%)" }}>Coaching Call</h2>
              <p className="mb-8 leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>
                This is a one-on-one conversation to understand your training background, goals, and schedule. We figure out what works and build from there.
              </p>
              <a href="https://calendly.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="btn-golden text-lg">
                Request a Call
              </a>
            </div>
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

export { Coaching as Component };
export default Coaching;
