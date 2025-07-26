import { Card } from '@/components/ui/card';
import { User, Shield, Clock, FileText, Award, Heart } from 'lucide-react';

const TermsSection = () => {
  const aboutMe = {
    name: 'Professional Roblox Scripter',
    experience: '3+ years',
    specialty: 'Lua scripting for Roblox games',
    location: 'Available worldwide',
    languages: 'English, [Add your languages]'
  };

  const terms = [
    {
      title: 'Payment Terms',
      icon: Shield,
      items: [
        'Payment required before work begins',
        'Partial refunds available if project cancelled early',
        'Full payment due upon completion',
        'Additional charges for scope changes'
      ]
    },
    {
      title: 'Delivery & Revisions',
      icon: Clock,
      items: [
        'Standard delivery times listed in pricing',
        'Rush orders available for additional fee',
        'Revisions included per package tier',
        'Major changes may require new quote'
      ]
    },
    {
      title: 'Code Ownership',
      icon: FileText,
      items: [
        'Client owns final delivered code',
        'No redistribution of templates/frameworks',
        'Source code provided with documentation',
        'Support included for specified period'
      ]
    }
  ];

  const guarantees = [
    'Code will be functional as specified',
    'Documentation included with all projects',
    'Support provided during delivery period',
    'Professional communication throughout',
    'Clean, optimized code delivery'
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-gradient">About & Terms</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn more about me and my service terms
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* About Me Section */}
          <Card className="card-surface p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <User className="w-8 h-8 text-primary" />
              <h3 className="text-3xl font-bold text-neon">About Me</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 text-neon">Professional Background</h4>
                <p className="text-muted-foreground mb-4">
                  I'm a dedicated Roblox scripter with {aboutMe.experience} of experience creating 
                  high-quality Lua scripts for games of all types. I specialize in both 
                  server-side and client-side development, ensuring your game runs smoothly 
                  and securely.
                </p>
                <p className="text-muted-foreground">
                  My passion for game development drives me to deliver exceptional code that 
                  not only meets your requirements but exceeds your expectations. I believe 
                  in clean, efficient code that's easy to maintain and extend.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Experience: {aboutMe.experience}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Specialty: {aboutMe.specialty}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Location: {aboutMe.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Languages: {aboutMe.languages}</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Terms Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {terms.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Card key={index} className="card-surface p-6 hover:glow-effect transition-all duration-300">
                  <div className="flex items-center gap-3 mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                    <h4 className="text-xl font-bold text-neon">{section.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* Guarantees */}
          <Card className="card-surface p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-neon">My Guarantees</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-surface-darker rounded-lg">
                  <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{guarantee}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8 pt-6 border-t border-border/20">
              <p className="text-muted-foreground">
                Questions about terms or need clarification? Feel free to contact me!
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;