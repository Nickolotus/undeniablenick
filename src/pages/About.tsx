import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Nick Chiasson | Undeniable Nick</title>
        <meta name="description" content="I grew up playing sports and competed in college. Training was always part of my life. After injuries forced me to change, I rebuilt everything through kettlebells, ATG, and full-range training." />
        <link rel="canonical" href="https://undeniablenick.com/about" />
      </Helmet>

      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/5" style={{ height: 72 }}>
        <div className="max-w-6xl mx-auto px-5 h-full flex items-center justify-between">
          <Link to="/" className="text-xl tracking-tight" style={{ fontWeight: 900, color: "hsl(150 25% 22%)" }}>UNDENIABLE NICK</Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-semibold" style={{ color: "hsl(150 25% 22%)", opacity: 0.7 }}>Home</Link>
            <Link to="/about" className="text-sm font-semibold" style={{ color: "hsl(150 25% 22%)" }}>About</Link>
            <Link to="/coaching" className="text-sm font-semibold" style={{ color: "hsl(150 25% 22%)", opacity: 0.7 }}>Coaching</Link>
            <a href="https://www.instagram.com/undeniablenick" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold" style={{ color: "hsl(150 25% 22%)", opacity: 0.7 }}>Instagram</a>
          </nav>
        </div>
      </header>
      <div style={{ height: 72 }} />

      <main>
        {/* HERO */}
        <section className="relative" style={{ minHeight: 400 }}>
          <img src="/trail-landscape.png" alt="Louisiana trail at sunrise" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex items-center justify-center" style={{ minHeight: 400 }}>
            <h1 className="text-white text-center" style={{ fontWeight: 900, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>Nick Chiasson</h1>
          </div>
        </section>

        {/* STORY */}
        <section className="section-pad bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="mb-8" style={{ color: "#2D4A3E" }}>About Me</h2>
            <div className="flex flex-col gap-5 leading-relaxed" style={{ color: "#5A4A3A" }}>
              <p>
                I grew up playing sports and competed in college. Training was always part of my life, and for a long time I worked out pretty much like a bodybuilder. That was the extent of what I knew for a very long time.
              </p>
              <p>
                After college, life changed. Work became more demanding, time became limited, and my body started telling me that the way I was training was not sustainable. I had destroyed my shoulder in college and my knees were always in pain. I hurt myself enough to care about the way I was training and stop caring so much about how I looked.
              </p>
              <p>
                I found Crossover Symmetry for my shoulders and ATG for my knees. Both worked. The more I committed to full range movement and joint health, the better everything felt. I got away from the barbell because it just felt unnatural and started training exclusively with kettlebells.
              </p>
              <p>
                Eventually I realized I didn't need a gym at all. I built a simple setup in my garage: kettlebells, rings, mirrors, and bands. That's the whole program. I can do everything I need to do with that setup, and I can do it in 45 minutes.
              </p>
              <p>
                Training this way changed how I felt. I felt more resilient when I would go wakeboard or snowboard or do anything that required athleticism. My friends would look at me and ask how I'm still able to do the things I do. It's just because of the way I train.
              </p>
              <p>
                As my life changed and responsibilities grew, I realized the answer is not doing more. It is doing what matters consistently. Strength, mobility, and durability come from simple habits practiced over time.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t" style={{ borderColor: "hsl(30 15% 88%)" }}>
              <h2 className="mb-6" style={{ color: "#2D4A3E" }}>My Approach</h2>
              <div className="flex flex-col gap-5 leading-relaxed" style={{ color: "#5A4A3A" }}>
                <p>
                  Today, my focus is straightforward. Train in a way that supports life, not competes with it. Build habits that are simple and repeatable. Focus on full range of motion, joint health, and movements that carry over into daily life.
                </p>
                <p>
                  Nutrition is approached with the same mindset. The goal is not restriction or rigid rules, but practical guidance that supports training, recovery, and daily energy. Recommendations are individualized, realistic, and designed to be maintained over time.
                </p>
                <p>
                  Faith played an important role in shaping this perspective. Stewardship matters to me. Taking care of what you have been given, your body, your family, and your responsibilities, is central to how I approach everything.
                </p>
                <p>
                  This site exists as a place to clearly communicate that approach. Not to impress. Not to persuade. But to share how I think, how I train, and how I work with people who value simplicity, discipline, and longevity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad" style={{ backgroundColor: "#2D4A3E" }}>
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2 className="text-white mb-5">Want to Train Like This?</h2>
            <p className="text-white/80 text-lg mb-8">One kettlebell. Your garage. 45 minutes. Let's build something that fits your life.</p>
            <Link to="/coaching" className="btn-golden text-lg">Work With Me</Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "#2D4A3E", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
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

export { About as Component };
export default About;
