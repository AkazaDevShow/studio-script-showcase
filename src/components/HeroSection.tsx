import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Code, Zap, Settings } from 'lucide-react';
import heroBackground from '@/assets/hero-background.jpg';

const HeroSection = () => {
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
            Professional Lua scripting services for your Roblox games. 
            Specializing in server-side, client-side, and global systems 
            that bring your game ideas to life.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="card-surface p-6 hover:glow-effect transition-all duration-300">
              <Code className="w-12 h-12 text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-neon">Clean Code</h3>
              <p className="text-muted-foreground">
                Well-structured, optimized Lua scripts that are easy to maintain and extend.
              </p>
            </Card>
            
            <Card className="card-surface p-6 hover:glow-effect transition-all duration-300">
              <Zap className="w-12 h-12 text-neon-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-neon">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Quick turnaround times without compromising on quality or functionality.
              </p>
            </Card>
            
            <Card className="card-surface p-6 hover:glow-effect transition-all duration-300">
              <Settings className="w-12 h-12 text-neon-pink mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2 text-neon">Custom Solutions</h3>
              <p className="text-muted-foreground">
                Tailored scripts designed specifically for your game's unique requirements.
              </p>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <Button size="lg" className="glow-effect animate-bounce hover:animate-none">
              View My Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;