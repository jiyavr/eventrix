import { MapPin, Phone, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative py-16 border-t border-border/30 animate-neon-flicker">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-3xl text-foreground mb-4">
              EVENTRIX <span className="text-primary">×</span> <span className="text-gradient-neon">VDJ ABBY</span>
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Vibing atmospheres since 1999. Premium DJ services, audio-visual production, and event experiences across the globe.
            </p>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4 tracking-wider">CONTACT</h4>
            <div className="space-y-3">
              <a 
                href="https://maps.google.com/?q=Pune,India" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground hover:text-secondary transition-colors font-body text-sm"
              >
                <MapPin className="w-4 h-4" />
                Pune, India
              </a>
              <a 
                href="tel:+919850439383" 
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
              >
                <Phone className="w-4 h-4" />
                +91 9850439383
              </a>
            </div>
          </div>
          
          {/* Social */}
          <div>
            <h4 className="font-heading text-lg text-foreground mb-4 tracking-wider">FOLLOW</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Tagline */}
        <div className="text-center pt-8 border-t border-border/30">
          <p className="font-heading text-xl text-foreground/60 tracking-wide">
            "Every night ends. <span className="text-primary neon-magenta">The memory doesn't.</span>"
          </p>
          <p className="text-muted-foreground font-body text-xs mt-4">
            © {new Date().getFullYear()} Eventrix × VDJ Abby. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Neon Border Effect */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </footer>
  );
};

export default Footer;
