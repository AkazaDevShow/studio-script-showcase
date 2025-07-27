import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Server, Monitor, Globe, Play } from 'lucide-react';

type WorkCategory = 'server' | 'client' | 'global';

const MyWorkSection = () => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('server');

  const categories = [
    { id: 'server' as WorkCategory, label: 'Server', icon: Server, color: 'text-neon-cyan' },
    { id: 'client' as WorkCategory, label: 'Client', icon: Monitor, color: 'text-neon-purple' },
    { id: 'global' as WorkCategory, label: 'Global', icon: Globe, color: 'text-neon-pink' },
  ];

  const workContent = {
    client: {
      title: 'Client-Side Scripts',
      description: 'Responsive UI systems and local player experiences that enhance gameplay.',
      features: [
        'Custom GUI interfaces',
        'Local effects and animations',
        'Input handling systems',
        'Camera control scripts',
        'Local audio management'
      ]
    },
    global: {
      title: 'Global Systems',
      description: 'Comprehensive solutions that work across server and client for seamless gameplay.',
      features: [
        'Chat systems and commands',
        'Teleportation networks',
        'Cross-server data sharing',
        'Global events and notifications',
        'Universal configuration systems'
      ]
    }
  };

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

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="card-surface p-8 mb-8">
            <h3 className="text-3xl font-bold mb-4 text-neon">
              {workContent[activeCategory].title}
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              {workContent[activeCategory].description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {workContent[activeCategory].features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full glow-effect" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Video Section */}
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
                  Add your MP4 videos here
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
