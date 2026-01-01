import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    id: 'wysIJTKwcLk',
    url: 'https://www.youtube.com/watch?v=wysIJTKwcLk',
    thumbnail: 'https://img.youtube.com/vi/wysIJTKwcLk/maxresdefault.jpg',
  },
  {
    id: 'j_ms6Nb-tvM',
    url: 'https://www.youtube.com/watch?v=j_ms6Nb-tvM',
    thumbnail: 'https://img.youtube.com/vi/j_ms6Nb-tvM/maxresdefault.jpg',
  },
  {
    id: 'e8dtxZ7pV-k',
    url: 'https://www.youtube.com/watch?v=e8dtxZ7pV-k',
    thumbnail: 'https://img.youtube.com/vi/e8dtxZ7pV-k/maxresdefault.jpg',
  },
  {
    id: 'YNiUltSWq8o',
    url: 'https://www.youtube.com/watch?v=YNiUltSWq8o',
    thumbnail: 'https://img.youtube.com/vi/YNiUltSWq8o/maxresdefault.jpg',
  },
];

const ShowreelSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(gridRef.current?.children || [], {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'expo.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 gradient-mesh bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-heading tracking-widest text-lg mb-2">
            LIVE SHOWREEL
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground">
            Experience the <span className="text-gradient-neon">Energy</span>
          </h2>
        </div>

        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
                  relative aspect-video rounded-2xl overflow-hidden cursor-pointer
                  transition-all duration-300
                  ${hoveredIndex === index 
                    ? 'ring-2 ring-offset-2 ring-offset-background shadow-2xl' 
                    : 'ring-1 ring-border/50'
                  }
                `}
                style={{
                  boxShadow: hoveredIndex === index
                    ? '0 0 20px rgba(255, 0, 214, 0.5), 0 0 40px rgba(0, 229, 255, 0.3)'
                    : 'none',
                  borderColor: hoveredIndex === index
                    ? 'rgba(255, 0, 214, 0.6)'
                    : 'transparent',
                }}
                onClick={() => window.open(video.url, '_blank', 'noopener,noreferrer')}
              >
                <img 
                  src={video.thumbnail}
                  alt={`Showreel video ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                
                {/* Play icon overlay - always visible but more prominent on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className={`
                      w-16 h-16 md:w-20 md:h-20 rounded-full 
                      flex items-center justify-center
                      transition-all duration-300
                      ${hoveredIndex === index 
                        ? 'bg-gradient-to-br from-[#FF00D6] to-[#00E5FF] scale-110 shadow-[0_0_30px_rgba(255,0,214,0.8)]' 
                        : 'bg-white/20 backdrop-blur-sm scale-100'
                      }
                    `}
                  >
                    <Play 
                      className={`
                        w-8 h-8 md:w-10 md:h-10 
                        transition-all duration-300
                        ${hoveredIndex === index ? 'text-white ml-1' : 'text-white/90 ml-1'}
                      `} 
                    />
                  </div>
                </div>

                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowreelSection;
