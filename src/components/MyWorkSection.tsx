import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Monitor, Server } from 'lucide-react';

type WorkCategory = 'server' | 'client';

type VideoItem = {
  title: string;
  src: string;
  description?: string;
};

const videosByCategory: Record<WorkCategory, VideoItem[]> = {
  server: [
    {
      title: 'Steal A Something Systems (working)',
      src: '/Steal-A-System.mp4',
      description: 'i make game like steal a somthing',
    },
    {
      title: 'Tower Defense Place System',
      src: '/2025-08-09 00-28-41.mp4',
      description: 'this is just the place system but other thing i can still create it like data and view tower and wave',
    },
  ],
  client: [
    {
      title: 'Case Open System (GUI)',
      src: '/Case-System.mp4',
      description: 'gui open case system show for you only the open',
    },
    {
      title: 'soon',
      src: '/soon.mp4',
      description: 'soon',
    },
  ],
};

const categories = [
  { id: 'server' as WorkCategory, label: 'Server', icon: Server, color: 'text-neon-cyan' },
  { id: 'client' as WorkCategory, label: 'Client', icon: Monitor, color: 'text-neon-purple' },
];

const MyWorkSection = () => {
  const [activeCategory, setActiveCategory] = useState<WorkCategory>('server');

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-gradient">My Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Check Some Of My Work !
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 transition-all duration-300
                  ${
                    activeCategory === category.id
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

        {/* Videos for Active Category */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {videosByCategory[activeCategory].map(({ title, src, description }) => (
            <Card key={src} className="card-surface p-8 text-center">
              <h4 className="text-2xl font-bold mb-4 text-neon">{title}</h4>
              {description && (
                <p className="text-muted-foreground mb-6">{description}</p>
              )}
              <div className="aspect-video bg-surface-darker rounded-lg overflow-hidden border border-primary/30">
                <video
                  className="w-full h-full object-cover"
                  controls
                  muted
                  preload="metadata"
                >
                  <source src={src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyWorkSection;
