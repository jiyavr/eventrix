import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Showreel', href: '#showreel' },
  { label: 'Packages', href: '#packages' },
  { label: 'Book Now', href: '#booking', primary: true },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${isScrolled ? 'bg-background/90 backdrop-blur-md border-b border-border/30' : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="font-heading text-2xl text-foreground">
            EVENTRIX <span className="text-primary">×</span> <span className="text-gradient-neon">VDJ</span>
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`
                  font-body text-sm tracking-wide transition-colors
                  ${link.primary 
                    ? 'px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded' 
                    : 'text-foreground/70 hover:text-foreground'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/30">
          <div className="container mx-auto px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`
                  block font-body text-lg transition-colors
                  ${link.primary 
                    ? 'text-primary' 
                    : 'text-foreground/70 hover:text-foreground'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
