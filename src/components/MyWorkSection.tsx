import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Monitor, Globe, Play } from 'lucide-react';

type WorkCategory = 'client' | 'global';

const MyWorkSection = () => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('client');

  const categories = [
    { id: 'server' as WorkCategory, label: 'Server', icon: Monitor, color: 'text-neon-cyan' },
    { id: 'client' as WorkCategory, label: 'Client', icon: Monitor, color: 'text-neon-purple' },
    { id: 'global' as WorkCategory, label: 'Global', icon: Globe, color: 'text-neon-pink' },
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-gradient">My Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore different categories of scripts I create for Roblox games
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 transition-all duration-300
                  ${activeCategory === category.id 
                    ? 'bg-primary text-primary-foreground glow-effect' 
                    : 'hover:glow-effect border-primary/50 hover:border-primary'
                  }
                `}
              >
                <IconComponent className={`w-5 h-5 ${category.color}`} />
                {category.label}
              </Button>
            );
          })}
        </div>

        {/* Video Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-surface p-8 text-center">
            <h4 className="text-2xl font-bold mb-4 text-neon">Demo Videos</h4>
            <p className="text-muted-foreground mb-6">
              Watch my scripts in action (videos will be added here)
            </p>
            <div className="aspect-video bg-surface-darker rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
              <div className="text-center">
                <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-primary">Video content coming soon</p>
                <p className="text-sm text-muted-foreground mt-2">
                  <source src="/src/components/Case-System.mp4" type="video/mp4" />
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;
