import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sliders, Mic, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Sliders, label: 'Audio-Visual Crafting' },
  { icon: Mic, label: 'Artist-Led Atmosphere' },
  { icon: Sparkles, label: 'Stage & SFX Precision' },
];

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      });

      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'expo.out',
      });

      const featureCards = featuresRef.current?.children;
      if (featureCards) {
        gsap.from(featureCards, {
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          y: 60,
          opacity: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'expo.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-32 gradient-mesh overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 
            ref={titleRef}
            className="font-heading text-4xl md:text-6xl lg:text-7xl text-foreground mb-8"
          >
            Not a Performance.{' '}
            <span className="text-gradient-neon">A Transformation.</span>
          </h2>
          
          <p 
            ref={textRef}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-16 font-body"
          >
            Eventrix make atmospheres using stage, sound, lighting and emotional timing — 
            calibrated for crowd energy and venue acoustics.
          </p>
          
          <div 
            ref={featuresRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {features.map((feature, index) => (
              <div 
                key={index}
                className="card-glass p-8 rounded-lg group hover:neon-border-magenta transition-all duration-500"
              >
                <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:text-secondary transition-colors duration-300" />
                <p className="font-heading text-xl tracking-wide text-foreground group-hover:neon-magenta transition-all duration-300">
                  {feature.label}
                </p>
                <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-secondary mx-auto mt-4 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
