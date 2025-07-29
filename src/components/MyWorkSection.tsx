import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Monitor, Server } from 'lucide-react';

type WorkCategory = 'server' | 'client';

const videoSources: Record<WorkCategory, string> = {
  server: '/Steal-A-System.mp4',
  client: '/Case-System.mp4',
};

const categoryTitles: Record<WorkCategory, string> = {
  server: 'Steal A Somthing Systems ( steal working )',
  client: 'Case open system ( gui )',
};

const someinfoaboutvideo: Record<WorkCategory, string> = {
  server: 'this',
  client: 'i try make ',
};

const categories = [
  { id: 'server' as WorkCategory, label: 'Server', icon: Server, color: 'text-neon-cyan' },
  { id: 'client' as WorkCategory, label: 'Client', icon: Monitor, color: 'text-neon-purple' },
];

const MyWorkSection = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-gradient">My Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore different categories of scripts I create for Roblox games
          </p>
        </div>

        {/* Show videos side by side */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map(({ id }) => (
            <Card key={id} className="card-surface p-8 text-center">
              <h4 className="text-2xl font-bold mb-4 text-neon">
                {categoryTitles[id]}
              </h4>
              <p className="text-muted-foreground mb-6">
                {someinfoaboutvideo[id]}
              </p>

              <div className="aspect-video bg-surface-darker rounded-lg overflow-hidden border border-primary/30">
                <video
                  className="w-full h-full object-cover"
                  controls
                  muted
                  preload="metadata"
                >
                  <source src={videoSources[id]} type="video/mp4" />
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
