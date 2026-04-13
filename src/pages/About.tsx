import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Nick Chiasson | Undeniable Nick</title>
        <meta name="description" content="I grew up playing sports and competed in college. Training was always part of my life. After injuries destroyed my knees and shoulders, I rebuilt everything through kettlebells, ATG, and full-range training." />
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
        <section className="section-pad" style={{ backgroundColor: "hsl(35 40% 95%)" }}>
          <div className="max-w-3xl mx-auto px-5">
            <h1 style={{ color: "hsl(150 25% 22%)" }}>About Me</h1>
          </div>
        </section>

        {/* STORY */}
        <section className="bg-white section-pad">
          <div className="max-w-3xl mx-auto px-5">
            <div className="flex flex-col gap-5 leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>
              <p>
                I grew up playing sports and competed in college. Training was always part of my life, and for a long time I worked out pretty much like a bodybuilder with the ability to do dynamic warmups. That was the extent of what I knew about working out for a very long time.
              </p>
              <p>
                After college, life changed. Work became more demanding, time became limited, and recovery was no longer something I could ignore. I jacked up my shoulder in college and my knees were always in pain, always shot. I hurt myself enough to care about the way I was training and stop caring so much about how I looked.
              </p>
              <p>
                I started with Crossover Symmetry for my shoulders -- literally did it all the time, was obsessed with it because it worked. The more I did it, the better my shoulders felt. Then I found ATG and it was a similar concept but for my knees. I bought into that super heavy and saw results. I just stuck with it.
              </p>
              <p>
                I got away from the whole bodybuilding way of working out because I just didn't have success with it. I got bigger but it wasn't the athletic build I wanted. I was athletic but just felt like crap. Eventually I stopped using the barbell because it just felt unnatural and didn't feel right.
              </p>
              <p>
                Then I realized I don't need to be a member at a gym to do this. I always wanted to work out at home. You save so much time -- drive time, talking to people, just getting ready to go. I bought kettlebells, threw some mirrors up on the wall, put some anchors for my Crossover Symmetry bands, put up some rings, and called it a day. I can literally do everything I need to do with that setup right there.
              </p>
              <p>
                The movements with kettlebells are just genuinely more natural and better for the body. Training that way changed the way I felt. I felt more resilient when I would go wakeboard or snowboard or do things that required athleticism. I didn't feel like I was going to break. My friends would look at me like I was crazy at the stuff I'm still able to do. They're like, dude, how do you do that? It's just because of the way I train.
              </p>
              <p>
                Train for life, not just to look great in the mirror. That's the way to do it.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t" style={{ borderColor: "hsl(30 15% 88%)" }}>
              <h2 className="mb-4" style={{ color: "hsl(150 25% 22%)" }}>Faith</h2>
              <div className="flex flex-col gap-5 leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>
                <p>
                  My faith journey has been a roller coaster to say the least. I drifted through most of college. After college, I went multiple years just not going to mass, not going to church, not reading any kind of Bible. I just lived my life.
                </p>
                <p>
                  Then I met Tristan through business. The day I met Tristan was the first day I read my Bible. I was genuinely searching for purpose in my life, and faith was the closest place to look. He invited me to his men's group. I started attending. I started watching sermons that actually resonated with me.
                </p>
                <p>
                  I finally realized that my wife and I were about to start trying to have kids and I needed to become the dad that my daughter was going to want to emulate, want to look up to for the rest of her life. I didn't want to be a dad that really had no direction. The man is supposed to be the leader of the family, and my wife very much gives me that role. I am trying my utmost hardest to do what I need to do with that privilege.
                </p>
                <p>
                  Everyone falls off. What matters most is how you get back up and keep going.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t" style={{ borderColor: "hsl(30 15% 88%)" }}>
              <h2 className="mb-4" style={{ color: "hsl(150 25% 22%)" }}>Fatherhood</h2>
              <div className="flex flex-col gap-5 leading-relaxed" style={{ color: "hsl(30 10% 45%)" }}>
                <p>
                  My daughter was born March 4, 2026. Priorities shifted hard. I haven't picked up an Xbox controller in weeks. Providing for your family becomes that much more important and delegating time to the important areas of life becomes that much more important.
                </p>
                <p>
                  Before my baby was born, if someone told me they didn't have time to work out, I probably would have called them lazy. After being a dad for five weeks, my answer is completely different. I get it. I understand where you are. The newborn phase is tough. There's a lot less sleep and just a lot less time to do things that you want to do.
                </p>
                <p>
                  We're going to make it through. We're going to get it in when we can. That's why I'm supportive of the one kettlebell method -- bring that baby into your living room while your wife's doing a feed, knock out a workout. If you really want it, it's there.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad" style={{ backgroundColor: "hsl(150 25% 22%)" }}>
          <div className="max-w-2xl mx-auto px-5 text-center">
            <h2 className="text-white mb-5">Want to Train Like This?</h2>
            <p className="text-white/80 text-lg mb-8">One kettlebell. Your garage. 45 minutes. Let's build a program that fits your life.</p>
            <Link to="/coaching" className="btn-golden text-lg">Work With Me</Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ backgroundColor: "hsl(150 25% 22%)", padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
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
