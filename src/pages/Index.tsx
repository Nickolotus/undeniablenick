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

      {/* NAV - transparent over hero */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm" style={{ height: 72 }}>
        <div className="max-w-6xl mx-auto px-5 h-full flex items-center justify-between">
          <Link to="/" className="text-white text-xl tracking-tight" style={{ fontWeight: 900 }}>UNDENIABLE NICK</Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold text-white/90 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-semibold text-white/70 hover:text-white transition-colors">About</Link>
            <Link to="/coaching" className="text-sm font-semibold text-white/70 hover:text-white transition-colors">Coaching</Link>
            <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white/70 hover:text-white transition-colors">Instagram</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO - Full bleed trail photo */}
        <section className="relative" style={{ minHeight: "100vh" }}>
          <img src="/hero-outdoor.png" alt="Running through Louisiana pine forest at golden hour" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/70" />
          <div className="relative z-10 flex flex-col items-center justify-end text-center px-5 pb-20" style={{ minHeight: "100vh" }}>
            <p className="text-white/60 uppercase text-sm mb-4 font-medium" style={{ letterSpacing: "0.3em" }}>Faith. Fitness. Fatherhood.</p>
            <h1 className="text-white mb-5" style={{ fontWeight: 900, letterSpacing: "-0.03em", textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>
              The Undeniable<br />Man Project
            </h1>
            <p className="text-white/80 text-lg max-w-md mb-8 leading-relaxed">Helping men become the best version of themselves -- one kettlebell, one day at a time.</p>
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
              "I'm just a guy trying to figure out life just like you. I train in my garage in Louisiana, I run trails on Saturday mornings, and I'm learning how to be a dad. This is not a brand. It's a journey -- and you're invited."
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
                <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>Full body. Full range. Your garage, your backyard, anywhere. I haven't stepped foot in a gym in years. It's insane the amount of stuff you can do with one bell.</p>
              </div>
              <div className="text-center">
                <h3 className="mb-3" style={{ color: "#2D4A3E" }}>Train for Life</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>I hurt myself enough to care about the way I was training. The movements with kettlebells are genuinely more natural. I felt more resilient. I didn't feel like I was going to break.</p>
              </div>
              <div className="text-center">
                <h3 className="mb-3" style={{ color: "#2D4A3E" }}>Built for Busy Dads</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#5A4A3A" }}>45 minutes. During nap time. Bring that baby into your living room while your wife's doing a feed, knock out a workout. If you really want it, it's there.</p>
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
              <p>I try to live my life in a faith-centered way, but I have a hard time doing that sometimes. I get on streaks of being super disciplined and then I fall off. Life gets busy, life gets crazy, and things change. That's just real.</p>
              <p>The goal is to be undeniable -- to undeniably live your life the way that you're called to live it. When someone talks about you, they cannot deny that you are putting in the effort, you are who you say you are, and you are actively trying to become the man that you're called to be.</p>
              <p style={{ fontWeight: 700, color: "#2D4A3E" }}>Everyone falls off. What matters most is how you get back up and keep going.</p>
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
              <p className="text-white/85 text-lg leading-relaxed">Discipline is boring. That is the point. It is showing up when you do not feel like it and being consistent even when life gets crazy. At the end of the day, I'm just here to have fun. Working out and eating healthy is great, but if you're not having fun then what's the point.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad bg-white">
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2 className="mb-4" style={{ color: "#2D4A3E" }}>Work With Me</h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "#5A4A3A" }}>At the end of the day, I'm a friend. Someone you can count on, someone you can respect, someone you can look up to. I created a way to work out and a philosophy to help you get there.</p>
            <Link to="/coaching" className="btn-golden text-lg">Learn More About Coaching</Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "#2D4A3E", padding: "40px 0" }}>
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
