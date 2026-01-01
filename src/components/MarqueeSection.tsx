import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const venues = [
  'Fusion Pattaya', 'Shock 39 Bangkok', 'Club Flavas London', 
  'Wunderrbar Pune', '10 Downing Street', 'Enigma', 
  'Sparks', 'Zaha', 'Escape', 'Rhythm & Blues'
];

const corporateClients = [
  'Reliance Infocom', 'Tata Indicom', 'Infosys', 'Cummins Diesel Engines', 'Idea Cellular', 'M-Phasys', 'Cybage', 'LG Electronics', 'Airtel', 'Vodafone', 'Radio Mirchi', 'Siemens', 'Force Motors', 'Demag Cranes', 'John Deer', 'Accenture', 'Hayworth', 'Hutch', 'Brintons', 'Patni', 'T-Systems', 'Kumar Bioplants', 'Coca-Cola'
];

const MarqueeSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 gradient-radial-stage overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-primary font-heading tracking-widest text-lg mb-2">
        
        </p>
        <h2 className="text-center font-heading text-4xl md:text-5xl text-foreground">
          Work<span className="text-gradient-neon">Experience</span>
        </h2>
      </div>

      {/* Venues Marquee */}
      <div className="relative mb-12 group">
        <div className="flex overflow-hidden">
          <div className="marquee-track flex items-center gap-8 whitespace-nowrap group-hover:[animation-play-state:paused]">
            {[...venues, ...venues].map((venue, index) => (
              <span 
                key={index}
                className="text-2xl md:text-3xl font-heading text-foreground/70 hover:text-primary hover:neon-magenta transition-all duration-300 cursor-default px-4"
              >
                {venue}
              </span>
            ))}
          </div>
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>

      {/* Corporate Clients */}
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground font-body text-sm tracking-widest mb-8">
          CORPORATE CLIENTS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {corporateClients.map((client, index) => (
            <span 
              key={index}
              className="text-xl md:text-2xl font-heading text-muted-foreground hover:text-secondary hover:neon-cyan transition-all duration-500 cursor-default"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
