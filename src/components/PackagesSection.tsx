import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Music, Sparkles, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const packages = [
  {
    id: 'essential',
    icon: Music,
    title: 'Essential Vibe',
    for: 'Private Parties / House Events',
    includes: ['DJ Set', 'Basic Lights', 'Sound Setup'],
    cta: 'Start Here →',
    type: 'essential',
  },
  {
    id: 'signature',
    icon: Sparkles,
    title: 'Signature Atmosphere',
    for: 'Birthdays / Corporates / Engagements',
    includes: ['DJ + Visuals', 'Themed Lighting', 'Entry Ambience'],
    cta: 'Customize →',
    type: 'signature',
  },
  {
    id: 'epic',
    icon: Zap,
    title: 'Epic Immersion',
    for: 'Weddings / Festivals / Stage Shows',
    includes: ['Full Stage + DJ', 'CO2/Pyro', 'Visual Sync'],
    cta: 'Engineer My Experience →',
    type: 'epic',
  },
];

const PackagesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card 1 - Essential: Simple fade in
      const essentialCard = cardRefs.current[0];
      if (essentialCard) {
        gsap.from(essentialCard, {
          scrollTrigger: {
            trigger: essentialCard,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
        });
      }

      // Card 2 - Signature: Parallax + wave ripple
      const signatureCard = cardRefs.current[1];
      if (signatureCard) {
        gsap.from(signatureCard, {
          scrollTrigger: {
            trigger: signatureCard,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          opacity: 0,
          duration: 1,
          ease: 'power3.out',
        });

        // Parallax effect on scroll
        gsap.to(signatureCard, {
          scrollTrigger: {
            trigger: signatureCard,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
          y: -30,
          ease: 'none',
        });

        // Audio wave ripple animation
        const waveElements = signatureCard.querySelectorAll('.wave-ripple');
        waveElements.forEach((wave, i) => {
          gsap.to(wave, {
            scrollTrigger: {
              trigger: signatureCard,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            scale: 1.5,
            opacity: 0,
            duration: 1.5,
            delay: i * 0.2,
            ease: 'power2.out',
          });
        });
      }

      // Card 3 - Epic: Cinematic fade + scale-up
      const epicCard = cardRefs.current[2];
      if (epicCard) {
        gsap.from(epicCard, {
          scrollTrigger: {
            trigger: epicCard,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          scale: 0.8,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
        });

        // Spotlight shadow animation
        const spotlight = epicCard.querySelector('.spotlight-shadow');
        if (spotlight) {
          gsap.to(spotlight, {
            scrollTrigger: {
              trigger: epicCard,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            opacity: 1,
            scale: 1.2,
            duration: 1.5,
            ease: 'power2.out',
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 gradient-radial-stage bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-heading tracking-widest text-lg mb-2">
            PACKAGES
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Choose Your <span className="text-gradient-neon">Experience</span>
          </h2>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {packages.map((pkg, index) => {
            const PkgIcon = pkg.icon;
            
            return (
              <div
                key={pkg.id}
                ref={(el) => (cardRefs.current[index] = el)}
                onMouseEnter={() => setHoveredCard(pkg.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`
                  relative rounded-2xl overflow-hidden transition-all duration-500
                  ${pkg.type === 'essential' 
                    ? 'card-glass p-8 hover:-translate-y-2' 
                    : pkg.type === 'signature'
                    ? 'card-glass p-8 bg-background/80 backdrop-blur-sm'
                    : 'card-glass p-8'
                  }
                `}
                style={{
                  boxShadow: pkg.type === 'essential' && hoveredCard === pkg.id
                    ? '0 10px 40px rgba(255, 0, 214, 0.4), 0 0 60px rgba(0, 229, 255, 0.2)'
                    : pkg.type === 'signature'
                    ? '0 0 0 1px transparent'
                    : '0 0 0 1px transparent',
                }}
              >
                {/* Card 1 - Essential Vibe: Soft neon glow */}
                {pkg.type === 'essential' && (
                  <>
                    <div 
                      className={`
                        absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none
                        ${hoveredCard === pkg.id ? 'opacity-100' : 'opacity-0'}
                      `}
                      style={{
                        background: 'radial-gradient(circle at center, rgba(255, 0, 214, 0.15) 0%, transparent 70%)',
                        boxShadow: 'inset 0 0 60px rgba(0, 229, 255, 0.1)',
                      }}
                    />
                    <div 
                      className={`
                        absolute inset-0 rounded-2xl transition-opacity duration-500 pointer-events-none
                        ${hoveredCard === pkg.id ? 'opacity-100 animate-pulse' : 'opacity-0'}
                      `}
                      style={{
                        background: 'radial-gradient(circle at center, rgba(0, 229, 255, 0.1) 0%, transparent 70%)',
                      }}
                    />
                  </>
                )}

                {/* Card 2 - Signature: Gradient border + hologram edges */}
                {pkg.type === 'signature' && (
                  <>
                    <div 
                      className="absolute -inset-[2px] rounded-2xl opacity-60 pointer-events-none"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 0, 214, 0.6), rgba(0, 229, 255, 0.6), rgba(255, 0, 214, 0.6))',
                        backgroundSize: '200% 200%',
                        animation: hoveredCard === pkg.id ? 'gradient-shift 3s ease infinite' : 'none',
                        filter: 'blur(1px)',
                      }}
                    />
                    <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
                      <div className="wave-ripple absolute top-1/2 left-1/2 w-32 h-32 rounded-full border-2 border-primary/30 -translate-x-1/2 -translate-y-1/2" />
                      <div className="wave-ripple absolute top-1/2 left-1/2 w-32 h-32 rounded-full border-2 border-primary/30 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.2s' }} />
                      <div className="wave-ripple absolute top-1/2 left-1/2 w-32 h-32 rounded-full border-2 border-primary/30 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.4s' }} />
                    </div>
                    <style>{`
                      @keyframes gradient-shift {
                        0%, 100% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                      }
                    `}</style>
                  </>
                )}

                {/* Card 3 - Epic: Neon frame + spotlight shadow */}
                {pkg.type === 'epic' && (
                  <>
                    <div 
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{
                        boxShadow: '0 0 0 2px rgba(255, 0, 214, 0.5), 0 0 20px rgba(255, 0, 214, 0.3), inset 0 0 40px rgba(0, 229, 255, 0.1)',
                      }}
                    />
                    <div 
                      className="spotlight-shadow absolute -inset-4 rounded-2xl pointer-events-none opacity-0"
                      style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(255, 0, 214, 0.3) 0%, transparent 60%)',
                        filter: 'blur(20px)',
                      }}
                    />
                  </>
                )}

                {/* Content */}
                <div className="relative z-10">
                  <PkgIcon 
                    className={`
                      w-12 h-12 mb-6 transition-colors duration-300
                      ${pkg.type === 'essential' ? 'text-[#00E5FF]' : ''}
                      ${pkg.type === 'signature' ? 'text-primary' : ''}
                      ${pkg.type === 'epic' ? 'text-[#FF00D6]' : ''}
                    `} 
                  />
                  
                  <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-2">
                    {pkg.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-body text-sm mb-6 leading-relaxed">
                    For: {pkg.for}
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-foreground/70 font-body text-xs uppercase tracking-wider mb-3">
                      Includes:
                    </p>
                    <ul className="space-y-2">
                      {pkg.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-foreground/90 font-body text-sm">
                          <span 
                            className={`
                              ${pkg.type === 'essential' ? 'text-[#00E5FF]' : ''}
                              ${pkg.type === 'signature' ? 'text-primary' : ''}
                              ${pkg.type === 'epic' ? 'text-[#FF00D6]' : ''}
                            `}
                          >
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    className={`
                      w-full py-3 px-6 rounded-lg font-heading text-sm tracking-wider
                      transition-all duration-300
                      ${pkg.type === 'essential' 
                        ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/30 hover:bg-[#00E5FF]/20 hover:border-[#00E5FF]/50' 
                        : pkg.type === 'signature'
                        ? 'bg-gradient-to-r from-[#FF00D6]/20 to-[#00E5FF]/20 text-foreground border border-primary/30 hover:from-[#FF00D6]/30 hover:to-[#00E5FF]/30'
                        : 'bg-gradient-to-r from-[#FF00D6]/30 to-[#00E5FF]/30 text-foreground border-2 border-[#FF00D6]/50 hover:from-[#FF00D6]/40 hover:to-[#00E5FF]/40 hover:border-[#FF00D6]/70 hover:shadow-[0_0_30px_rgba(255,0,214,0.5)]'
                      }
                    `}
                  >
                    {pkg.cta}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
