import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
