import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const additionalServices = [
    { name: 'One System', price: '1k' },
    { name: 'Full Small Game', price: '7k' },
    { name: 'Full Big Game', price: '20k' },
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Pricing</h2>
        </div>

        {/* Additional Services */}
        <Card className="card-surface p-8">
          <h3 className="text-3xl font-bold mb-6 text-center text-neon">Robux Price</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <div key={index} className="flex justify-between items-center p-4 bg-surface-darker rounded-lg">
                <span className="text-foreground">{service.name}</span>
                <span className="text-primary font-bold">{service.price}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
          </div>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
