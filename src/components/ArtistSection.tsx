import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Headphones } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ArtistSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        x: -50,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      });

      gsap.from(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        x: 50,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        delay: 0.2,
        ease: 'expo.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div ref={textRef} className="order-2 lg:order-1">
            <p className="text-primary font-heading tracking-widest text-lg mb-4">
              FEATURED ARTIST
            </p>
            <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-6">
              VDJ <span className="text-gradient-neon">ABBY</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground font-body mb-8">
              <p className="flex items-start gap-3">
                <span className="text-secondary">▸</span>
                Professional since 1999 — over 25 years of craft
              </p>
              <p className="flex items-start gap-3">
                <span className="text-secondary">▸</span>
                2000+ events worldwide across 4 continents
              </p>
              <p className="flex items-start gap-3">
                <span className="text-secondary">▸</span>
                Specialist in Video DJ Mixing with lyrical visuals
              </p>
              <p className="flex items-start gap-3">
                <span className="text-secondary">▸</span>
                Smooth transitions, live remixing, crowd psychology
              </p>
              <p className="flex items-start gap-3">
                <span className="text-secondary">▸</span>
                Played alongside Aqueel, Suketu, Nikhil Chinappa, Judge Jules
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {['House', 'Bollywood', 'EDM', 'Trance', 'Retro', 'Soulful', 'Techno'].map((genre) => (
                <span 
                  key={genre}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-body text-foreground/80 hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  {genre}
                </span>
              ))}
            </div>
            
            <button className="group flex items-center gap-3 text-foreground font-heading text-xl tracking-wide hover:text-primary transition-colors">
              Explore Artist Profile 
              <span className="relative">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                <Headphones className="w-5 h-5 absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </span>
            </button>
          </div>
          
          {/* Image */}
          <div ref={imageRef} className="order-1 lg:order-2 relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <img 
                src="https://image2url.com/r2/default/images/1767180777661-228a3720-1593-4755-b4c4-ae2fadfea55e.png" 
                alt="VDJ Abby"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 mix-blend-overlay" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-primary/30 rounded-lg -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-secondary/30 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistSection;
