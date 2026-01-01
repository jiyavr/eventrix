import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Disc, Music2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const celebrityDJs = [
  'DJ Aqueel',
  'DJ Suketu',
  'DJ Ivan',
  'DJ Des Michele',
  'DJ Pete Gooding',
  'DJ Ryan Beck',
  'DJ Bally Sagoo',
  'DJ Nasha',
  'DJ Judge Jules',
  'DJ Pearl',
  'DJ Nikhil Chinappa',
];

const TechSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current?.children || [], {
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power2.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      {/* Club atmosphere background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF00D6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00E5FF]/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-heading tracking-widest text-lg mb-2">
            CELEBRITY COLLABORATIONS
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            THE BEST OF <span className="text-gradient-neon">CELEBRITY DJS</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Around the World
          </p>
        </div>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {celebrityDJs.map((djName, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              {/* Spotlight glow effect */}
              <div 
                className={`
                  absolute -inset-1 rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none
                  ${hoveredIndex === index ? 'opacity-100' : ''}
                `}
                style={{
                  background: 'radial-gradient(circle at center, rgba(255, 0, 214, 0.4) 0%, rgba(0, 229, 255, 0.2) 50%, transparent 70%)',
                  filter: 'blur(10px)',
                }}
              />

              {/* Neon card */}
              <div
                className={`
                  relative rounded-2xl p-6 border-2 transition-all duration-500
                  bg-gradient-to-br from-background/90 via-background/80 to-background/90
                  backdrop-blur-sm
                  ${hoveredIndex === index 
                    ? 'border-[#FF00D6]/60 shadow-[0_0_30px_rgba(255,0,214,0.4),0_0_60px_rgba(0,229,255,0.2)] scale-105' 
                    : 'border-[#FF00D6]/20 border-[#00E5FF]/20'
                  }
                `}
                style={{
                  boxShadow: hoveredIndex === index
                    ? '0 0 40px rgba(255, 0, 214, 0.3), 0 0 80px rgba(0, 229, 255, 0.15), inset 0 0 20px rgba(255, 0, 214, 0.1)'
                    : '0 0 10px rgba(255, 0, 214, 0.1)',
                }}
              >
                {/* Gradient border glow */}
                <div 
                  className={`
                    absolute -inset-[2px] rounded-2xl opacity-0 transition-opacity duration-500 pointer-events-none
                    ${hoveredIndex === index ? 'opacity-100' : ''}
                  `}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255, 0, 214, 0.6), rgba(0, 229, 255, 0.6), rgba(255, 0, 214, 0.6))',
                    backgroundSize: '200% 200%',
                    animation: hoveredIndex === index ? 'gradient-shift 3s ease infinite' : 'none',
                    filter: 'blur(2px)',
                  }}
                />

                {/* Content */}
                <div className="relative z-10 flex items-center gap-4">
                  {/* Vinyl/Waveform icon */}
                  <div className="flex-shrink-0">
                    <div 
                      className={`
                        w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500
                        ${hoveredIndex === index 
                          ? 'bg-gradient-to-br from-[#FF00D6] to-[#00E5FF] scale-110 rotate-12' 
                          : 'bg-gradient-to-br from-[#FF00D6]/20 to-[#00E5FF]/20'
                        }
                      `}
                    >
                      <Disc 
                        className={`
                          w-6 h-6 transition-colors duration-300
                          ${hoveredIndex === index ? 'text-white' : 'text-[#FF00D6]'}
                        `} 
                      />
                    </div>
                  </div>

                  {/* DJ Name */}
                  <div className="flex-1 min-w-0">
                    <h3 
                      className={`
                        font-heading text-lg font-semibold transition-all duration-300
                        ${hoveredIndex === index 
                          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#FF00D6] to-[#00E5FF]' 
                          : 'text-foreground'
                        }
                      `}
                    >
                      {djName}
                    </h3>
                  </div>

                  {/* Equalizer animation on hover */}
                  {hoveredIndex === index && (
                    <div className="flex-shrink-0 flex items-end gap-1 h-8">
                      {[1, 2, 3, 2, 1].map((height, i) => (
                        <div
                          key={i}
                          className="w-1 bg-gradient-to-t from-[#FF00D6] to-[#00E5FF] rounded-full"
                          style={{
                            height: `${height * 6}px`,
                            animation: `equalizer ${0.5 + i * 0.1}s ease-in-out infinite`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes equalizer {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
};

export default TechSection;
