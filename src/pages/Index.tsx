import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { EvolutionSection } from '@/components/EvolutionSection';
import { TeamSection } from '@/components/TeamSection';
import { RobotsSection } from '@/components/RobotsSection';
import { GallerySection } from '@/components/GallerySection';
import { SponsorsSection } from '@/components/SponsorsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <EvolutionSection />
      <RobotsSection />
      <GallerySection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
