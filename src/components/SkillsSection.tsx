import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    icon: '🎛️',
    title: 'PERFECT AND SMOOTH MIXING',
    content: '',
  },
  {
    icon: '🎶',
    title: 'GREAT MUSIC SENSE WITH EXPERTISE IN MULTIPLE GENRES',
    content: 'HOUSE, BOLLYWOOD, ELECTRONIC DANCE MUSIC, HIP-HOP, COMMERCIAL, PROGRESSIVE, TRANCE, RETRO, ROCK, LOUNGE, SOULFULL, TECHNOTRONIC & REMIXES.',
  },
  {
    icon: '🔥',
    title: 'AMAZING CROWD INTERACTION & COMMUNICATION SKILLS',
    content: 'TO KEEP THE ENERGY LEVELS HIGH.',
  },
  {
    icon: '⚙️',
    title: 'MAKING LIVE REMIXES & CREATIVE TRANSITIONS.',
    content: '',
  },
  {
    icon: '🎧',
    title: 'COMPLETE TECHNICAL KNOWLEDGE OF ALL TYPES OF DJ EQUIPMENTS',
    content: 'LIVE STUDIO SETUPS & PRO-AUDIO SYSTEMS.',
  },
  {
    icon: '🎵',
    title: 'COMPOSING, EDITING & MIXING MUSIC USING PRO-AUDIO SOFTWARES',
    content: 'AND PROFESSIONAL STUDIO EQUIPMENTS.',
  },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.25,
            ease: 'expo.out',
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      }}
    >
      {/* Grain texture overlay for entire section */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          mixBlendMode: 'overlay',
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="font-heading text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground"
            style={{
              fontFamily: "'Bebas Neue', 'Montserrat', sans-serif",
              fontWeight: 700,
              letterSpacing: '0.3px',
            }}
          >
            WHAT MAKES MY SET DIFFERENT
          </h2>
          <p 
            className="text-muted-foreground text-lg md:text-xl"
            style={{
              fontFamily: "'Inter', 'Poppins', sans-serif",
              letterSpacing: '0.3px',
            }}
          >
            Skills that create an atmosphere — not just a playlist.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="skill-card-wrapper group cursor-default"
            >
              <div className="skill-card-inner skill-card-grain p-6 h-full">
                {/* Icon */}
                <div className="text-4xl mb-4" style={{ filter: 'drop-shadow(0 0 10px rgba(240, 0, 255, 0.5))' }}>
                  {skill.icon}
                </div>

                {/* Title */}
                <h3 
                  className="font-heading text-xl md:text-2xl mb-3 text-foreground leading-tight"
                  style={{
                    fontFamily: "'Bebas Neue', 'Montserrat', sans-serif",
                    fontWeight: 700,
                    letterSpacing: '0.3px',
                  }}
                >
                  {skill.title}
                </h3>

                {/* Content */}
                {skill.content && (
                  <p 
                    className="text-muted-foreground leading-relaxed"
                    style={{
                      fontFamily: "'Inter', 'Poppins', sans-serif",
                      fontSize: '16px',
                      letterSpacing: '0.3px',
                    }}
                  >
                    {skill.content}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
