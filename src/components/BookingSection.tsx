import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const eventTypes = [
  'Corporate Event',
  'Wedding / Sangeet',
  'Fashion Show',
  'Festival / NYE',
  'Private Party',
  'Club Night',
  'Other',
];

const BookingSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    date: '',
    eventType: '',
    budget: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(formRef.current, {
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi! I'd like to book VDJ Abby.\n\nName: ${formData.name}\nCity: ${formData.city}\nEvent Date: ${formData.date}\nEvent Type: ${formData.eventType}\nBudget: ${formData.budget}`;
    window.open(`https://wa.me/919850439383?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section ref={sectionRef} className="py-32 gradient-mesh" id="booking">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary font-heading tracking-widest text-lg mb-2">
              BOOK YOUR NIGHT
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
              Let's Create <span className="text-gradient-neon">Magic</span>
            </h2>
          </div>

          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className="card-glass p-8 md:p-12 rounded-lg space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-sm text-foreground/80 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block font-body text-sm text-foreground/80 mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="+91 98504 39383"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-body text-sm text-foreground/80 mb-2">
                  City
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Mumbai"
                />
              </div>
              
              <div>
                <label className="block font-body text-sm text-foreground/80 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-sm text-foreground/80 mb-2">
                Event Type
              </label>
              <select
                required
                value={formData.eventType}
                onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select event type</option>
                {eventTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-body text-sm text-foreground/80 mb-2">
                Budget Range (Optional)
              </label>
              <input
                type="text"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:border-primary focus:outline-none transition-colors"
                placeholder="₹50,000 - ₹1,00,000"
              />
            </div>

            <button type="submit" className="btn-neon-magenta w-full flex items-center justify-center gap-3">
              <Send className="w-5 h-5" />
              Send Inquiry via WhatsApp
            </button>
          </form>
        </div>
      </div>

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/919850439383"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-glow-pulse"
        style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.5)' }}
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </section>
  );
};

export default BookingSection;
