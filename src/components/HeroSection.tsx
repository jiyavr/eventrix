import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import heroBg from '@/assets/hero-dj-stage.jpg';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      
      // Initial states
      gsap.set([headlineRef.current, subheadRef.current, ctaRef.current], {
        opacity: 0,
        y: 30,
      });
      
      // Glitch-in animation for headline
      tl.to(headlineRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay: 0.3,
      })
      .to(subheadRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.6')
      .to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, '-=0.4');
      
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="DJ performing on LED stage"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div ref={headlineRef} className="mb-8">
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-none tracking-tight">
            <span className="block text-foreground">We don't just DJ.</span>
            <span className="block text-gradient-neon mt-2">We design atmospheres.</span>
          </h1>
          <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground/90 mt-6 tracking-wide">
            Music, visuals & emotion — synced to transform the room.
          </p>
        </div>
        
        <p 
          ref={subheadRef}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body"
        >
          VDJ Abby • Since 1999 • 2000+ events • India | UK | Thailand | Spain
        </p>
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-neon-magenta animate-glow-pulse">
            Book DJ Abby
          </button>
          <button className="btn-ghost-glitch group">
            <span className="relative">
              Watch Showreel
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 glitch-text" data-text="Watch Showreel" />
            </span>
          </button>
        </div>
      </div>
      

    </section>
  );
};

export default HeroSection;
