import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
          <Link to="/" className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="34" fill="#2D4A3E"/>
              <text x="40" y="48" textAnchor="middle" fontFamily="'Cormorant Garamond', Georgia, serif" fontWeight="500" fontSize="28" letterSpacing="2" fill="#D4943A">UN</text>
            </svg>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, fontSize: "1.25rem", letterSpacing: "0.05em", color: "#2D4A3E" }}>UNDENIABLE NICK</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E", opacity: 0.7 }}>Home</Link>
            <Link to="/about" className="text-sm" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "#2D4A3E" }}>About</Link>
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
        <section className="relative" style={{ minHeight: 400 }}>
          <img src="/trail-landscape.png" alt="Louisiana trail at sunrise" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 flex items-center justify-center" style={{ minHeight: 400 }}>
            <h1 className="text-white text-center" style={{ fontWeight: 900, textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}>Nick Chiasson</h1>
          </div>
        </section>

        {/* PROFILE PHOTO */}
        <section className="section-pad" style={{ backgroundColor: "#F5EFE0" }}>
          <div className="max-w-3xl mx-auto px-5 flex flex-col md:flex-row items-center gap-8">
            <img src="/nick-profile.jpg" alt="Nick Chiasson" style={{ width: 220, height: 220, borderRadius: "50%", objectFit: "cover", objectPosition: "top", flexShrink: 0, border: "4px solid #2D4A3E" }} />
            <div>
              <p className="text-lg leading-relaxed" style={{ color: "#5A4A3A", fontStyle: "italic" }}>
                "I train in my garage in Louisiana, I run trails on Saturday mornings, and I am learning to be a better man every single day. This is not a brand. It is a journey, and you are invited."
              </p>
              <p className="mt-4 font-bold" style={{ color: "#2D4A3E" }}>Nick Chiasson</p>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="section-pad bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <h2 className="mb-8" style={{ color: "#2D4A3E" }}>About Me</h2>
            <div className="flex flex-col gap-5 leading-relaxed" style={{ color: "#5A4A3A" }}>
              <p>
                I grew up playing sports and competed in college. Training was always part of my life. For years, my approach to working out was built around traditional bodybuilding style training: isolation exercises, heavy compound lifts, and a focus on aesthetics over function. That was all I knew.
              </p>
              <p>
                After college, life changed. Work became more demanding, time became limited, and my body started telling me that the way I was training was not sustainable. I had destroyed my shoulder in college and my knees were always in pain. I reached a point where I cared less about how I looked and more about how my body actually performed in real life. I wanted strength that carried over into everything, not just numbers in a gym.
              </p>
              <p>
                I found Crossover Symmetry for my shoulders and ATG for my knees. Both worked. The more I committed to full range movement and joint health, the better everything felt. I moved away from the barbell entirely and started training exclusively with kettlebells and bodyweight movements.
              </p>
              <p>
                Eventually I realized I did not need a gym at all. I built a simple setup in my garage: kettlebells, rings, mirrors, and bands. That is the entire program. Everything I need, done in 45 minutes.
              </p>
              <p>
                Training this way changed how I felt. I became more resilient in every activity that required athleticism, from wakeboarding to snowboarding to anything demanding. The difference is the way I train and the way I take care of my body.
              </p>
              <p>
                As my life changed and responsibilities grew, I realized the answer is not doing more. It is doing what matters consistently. Strength, mobility, and durability come from simple habits practiced over time. The way I train allows me to step into any activity with confidence. That is the standard I hold myself to, and that is the approach I take with everyone I work with.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t" style={{ borderColor: "hsl(30 15% 88%)" }}>
              <h2 className="mb-6" style={{ color: "#2D4A3E" }}>My Approach</h2>
              <div className="flex flex-col gap-5 leading-relaxed" style={{ color: "#5A4A3A" }}>
                <p>
                  My focus is straightforward. Train in a way that supports life, not competes with it. Build habits that are simple and repeatable. Focus on full range of motion, joint health, and movements that make you better at everything outside the gym.
                </p>
                <p>
                  Nutrition is approached with the same mindset. The goal is not restriction or rigid rules, but practical guidance that supports training, recovery, and daily energy. Recommendations are individualized, realistic, and designed to be maintained over time.
                </p>
                <p>
                  Faith played an important role in shaping this perspective. Stewardship matters to me. Taking care of what you have been given, your body, your family, and your responsibilities, is central to how I approach everything.
                </p>
                <p>
                  This site exists as a place to clearly communicate that approach. Not to impress. Not to persuade. But to share how I think, how I train, and how I work with people who value simplicity, discipline, and longevity as much as I do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad" style={{ backgroundColor: "#2D4A3E" }}>
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2 className="text-white mb-5">Want to Train Like This?</h2>
            <p className="text-white/80 text-lg mb-8">One kettlebell. Your garage. 45 minutes. A program built around your life.</p>
            <Link to="/coaching" className="btn-golden text-lg">Work With Me</Link>
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

export { About as Component };
export default About;
