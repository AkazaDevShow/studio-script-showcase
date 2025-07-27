import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Clock, Mail, Users } from 'lucide-react';

const ContactSection = () => {
  const handleDiscordContact = () => {
    // You can replace this with your actual Discord invite or direct message link
    window.open('https://discord.gg/your-discord-server', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'Discord',
      description: 'Fastest way to reach me',
      action: 'Open Discord DM',
      color: 'text-neon-cyan'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'For detailed project discussions',
      action: 'Send Email',
      color: 'text-neon-purple'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join my development community',
      action: 'Join Server',
      color: 'text-neon-pink'
    }
  ];

  const responseTime = [
    { time: 'Discord', duration: '< 1 hour' },
    { time: 'Email', duration: '< 6 hours' },
    { time: 'Complex Quotes', duration: '< 24 hours' }
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Contact Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your game ideas to life? Let's discuss your project!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">

          {/* Main Discord Contact Card */}
          <Card className="card-surface p-8 text-center mb-8">
            <MessageCircle className="w-16 h-16 text-neon-cyan mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4 text-neon">Discord - Primary Contact</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Click below to open a direct message with me on Discord. This is the fastest way 
              to discuss your project requirements and get a quick response.
            </p>
            <Button 
              size="lg" 
              onClick={handleDiscordContact}
              className="glow-effect animate-pulse hover:animate-none"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Open Discord DM
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
