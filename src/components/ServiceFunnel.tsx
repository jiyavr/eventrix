import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'Corporate Events',
    description: 'Transform Annual Days, Conferences & Roadshows into precision-engineered audiovisual environments powered by VDJ architecture.',
    separator: '⬇️ SCROLL LIKE YOU TURN A FADER ⬇️\n──────────────🎚️──────────────',
    align: 'left',
    image: 'https://static.wixstatic.com/media/7b99b4_bc81fe42aa7d49dbb087d713a3362504~mv2.jpg/v1/fill/w_351,h_263,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_bc81fe42aa7d49dbb087d713a3362504~mv2.jpg',
  },
  {
    title: 'Fashion Shows',
    description: 'Runway cue synchronization, beat-matched walk progression, backstage timing control.',
    separator: '↓↓ NEXT DROP INCOMING ↓↓\n━━━🎧━━━━━━━━⚡━━━━━━━━🎧━━━',
    align: 'right',
    image: 'https://static.wixstatic.com/media/7b99b4_bb14548a6deb4a96b39ea10170d27951~mv2.jpg/v1/fill/w_372,h_248,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_bb14548a6deb4a96b39ea10170d27951~mv2.jpg',
  },
  {
    title: 'Festivals & New Year',
    description: 'Countdown visuals, dynamic builds, SFX, crowd-driven show conditions.',
    separator: 'BPM RISING...\n🎛️━━━━━━━━━━━━━━🎛️',
    align: 'left',
    image: 'https://static.wixstatic.com/media/6c7cd2_7a469512875b4a1498e1d04bedd5471e~mv2.jpg/v1/fill/w_372,h_247,al_c,q_80,usm_0.66_1.00_0.01/6c7cd2_7a469512875b4a1498e1d04bedd5471e~mv2.jpg',
  },
  {
    title: 'Artist Management',
    description: 'Touring acts, concert riders, live showflow & tech-sync arrangements.',
    separator: '⬇️⬇️⬇️ LIKE A CROSSFADE ⬇️⬇️⬇️\n──────────🎚️──────────',
    align: 'right',
    image: 'https://static.wixstatic.com/media/7b99b4_32e288836bd9433f837c2ea59077054d~mv2.jpg/v1/fill/w_372,h_248,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_32e288836bd9433f837c2ea59077054d~mv2.jpg',
  },
  {
    title: 'VDJ + AV Production',
    description: 'LED walls, lyrical VDJ displays, stage lighting architecture & pro-audio routing.',
    separator: 'Every scroll = a new layer in the mix.\n🎵✦✦✦✦✦✦✦✦✦✦✦🎵',
    align: 'left',
    image: 'https://static.wixstatic.com/media/7b99b4_1dc0dbbeb95b417285c14d84e40b1a4f~mv2.jpg/v1/fill/w_372,h_248,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_1dc0dbbeb95b417285c14d84e40b1a4f~mv2.jpg',
  },
  {
    title: 'Weddings & Sangeet',
    description: 'Bollywood scoring meets emotional timing — baraat builds, sangeet drops, reception epilogues.',
    separator: '• Love Story. Sound Story. •\n───💙🎧💙───',
    align: 'center',
    image: 'https://static.wixstatic.com/media/7b99b4_0fc79bc332664482b1c072d20fc7f6aa~mv2.jpeg/v1/fill/w_372,h_209,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_0fc79bc332664482b1c072d20fc7f6aa~mv2.jpeg',
  },
  {
    title: 'Pyrotechnics / SFX',
    description: 'Sparkulars, CO₂ jets, fog curtains, confetti cannons, laser mapping, kinetic drops.',
    separator: 'THE DROP HITS IN 3… 2… 1…\n🔥━━━━━━━━━━━━━━🔥',
    align: 'center',
    image: 'https://static.wixstatic.com/media/7b99b4_b6a9d27e118e4d6e8019296021eedac9~mv2.jpg/v1/fill/w_372,h_248,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_b6a9d27e118e4d6e8019296021eedac9~mv2.jpg',
  },
  {
    title: 'Virtual & Chroma Studio',
    description: 'Broadcast-level staging, hybrid concerts, chroma key performance capture.',
    separator: '🎚️ TIME TO BOOK YOUR NIGHT 🎛️',
    align: 'center',
    image: 'https://static.wixstatic.com/media/7b99b4_ebafc4d49a5541bf8e918daf3116a059~mv2.jpeg/v1/fill/w_372,h_209,al_c,q_80,usm_0.66_1.00_0.01/7b99b4_ebafc4d49a5541bf8e918daf3116a059~mv2.jpeg',
  },
];

const ServiceFunnel = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each service card on scroll
      servicesRef.current.forEach((service, index) => {
        if (service) {
          gsap.from(service, {
            scrollTrigger: {
              trigger: service,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: 'expo.out',
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-32 gradient-radial-stage">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-4">
            Pick Your Vibe → <span className="text-gradient-neon">Build Your Night</span>
          </h2>
        </div>

        {/* Service Cards */}
        <div className="space-y-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={(el) => (servicesRef.current[index] = el)}
              className={`
                ${service.align === 'center' ? 'text-center' : ''}
                ${service.align === 'left' ? 'lg:pr-32' : ''}
                ${service.align === 'right' ? 'lg:pl-32 lg:text-right' : ''}
              `}
            >
              <div className="group card-glass rounded-lg hover:neon-border-cyan transition-all duration-500 overflow-hidden">
                {/* Service Image */}
                {service.image && (
                  <div className="relative w-full aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={service.image}
                      alt="Service Funnel Step - Visual Representation"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
                    />
                  </div>
                )}
                <div className="p-8 md:p-12">
                  <h3 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground font-body text-lg leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Separator */}
              {service.separator && (
                <div className="separator-dj flex-col gap-2 mt-8">
                  {service.separator.split('\n').map((line, i) => (
                    <span key={i} className="text-muted-foreground/60 font-body">
                      {line}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Funnel Exit CTA */}
        <div className="text-center mt-24">
          <h3 className="font-heading text-4xl md:text-5xl text-foreground mb-8">
            You Scrolled the Vibe. <span className="text-gradient-neon">Now Book the Night.</span>
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-neon-magenta">
              Check Availability
            </button>
            <button className="btn-ghost-glitch">
              WhatsApp Booking
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceFunnel;
