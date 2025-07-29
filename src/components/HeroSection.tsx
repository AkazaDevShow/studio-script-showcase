import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.jpg';

type Section = 'home' | 'work' | 'pricing' | 'contact';

interface HeroSectionProps {
  onSectionChange: (section: Section) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/80 to-surface/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-gradient animate-glow">
            Roblox Scripter
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            I'm AkazaDev, a developer with 3 years of experience in Lua scripting.
          </p>
          
          <div className="flex justify-center">
            <Button
              size="lg"
              className="glow-effect animate-bounce hover:animate-none"
              onClick={() => onSectionChange('work')}
            >
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
