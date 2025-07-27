import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Zap, Crown, Star } from 'lucide-react';

const pricingTiers = [
  {
    name: 'Basic',
    price: '$50',
    icon: Zap,
    color: 'text-neon-cyan',
    features: [
      'Simple script creation',
      'Bug fixes',
      'Basic support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '$100',
    icon: Star,
    color: 'text-neon-purple',
    features: [
      'Advanced scripting',
      'Performance optimization',
      'Priority support',
      'Custom GUI design',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '$200',
    icon: Crown,
    color: 'text-neon-pink',
    features: [
      'Complete game systems',
      'Multi-player support',
      'Dedicated assistance',
      'Regular updates',
      'Anti-exploit features',
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const additionalServices = [
    { name: 'Script Debugging', price: '$10' },
    { name: 'Code Optimization', price: '$20' },
    { name: 'Custom GUI Design', price: '$25' },
    { name: 'Script Documentation', price: '$15' },
    { name: 'Anti-Exploit Protection', price: '$30' },
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Pricing</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transparent, competitive pricing for professional Roblox scripting services
          </p>
        </div>

        {/* Main Pricing Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingTiers.map((tier, index) => {
            const IconComponent = tier.icon;
            return (
              <Card
                key={index}
                className={`
                  card-surface p-8 text-center relative transition-all duration-300 hover:glow-effect
                  ${tier.popular ? 'ring-2 ring-primary glow-effect' : ''}
                `}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}

                <IconComponent className={`w-16 h-16 mx-auto mb-4 ${tier.color}`} />
                <h3 className="text-2xl font-bold mb-2 text-neon">{tier.name}</h3>
                <div className="text-4xl font-bold mb-6 text-gradient">{tier.price}</div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${tier.popular ? 'glow-effect animate-pulse hover:animate-none' : ''}`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  Choose {tier.name}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Additional Services */}
        <Card className="card-surface p-8">
          <h3 className="text-3xl font-bold mb-6 text-center text-neon">Additional Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-surface-darker rounded-lg">
                <span className="text-foreground">{service.name}</span>
                <span className="text-primary font-bold">{service.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Need a custom quote? Contact me for complex projects or bulk orders.
            </p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Request Custom Quote
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
