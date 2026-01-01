import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ArtistSection from '@/components/ArtistSection';
import MarqueeSection from '@/components/MarqueeSection';
import SkillsSection from '@/components/SkillsSection';
import ServiceFunnel from '@/components/ServiceFunnel';
import ShowreelSection from '@/components/ShowreelSection';
import TechSection from '@/components/TechSection';
import PackagesSection from '@/components/PackagesSection';
import BookingSection from '@/components/BookingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <section id="about">
          <AboutSection />
        </section>
        
        <ArtistSection />
        
        <MarqueeSection />
        
        <SkillsSection />
        
        <section id="services">
          <ServiceFunnel />
        </section>
        
        <section id="showreel">
          <ShowreelSection />
        </section>
        
        <TechSection />
        
        <section id="packages">
          <PackagesSection />
        </section>
        
        <BookingSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
