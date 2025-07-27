import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Client Reviews</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what my clients say about working with me
          </p>
        </div>

        {/* Placeholder for client images */}
        <Card className="card-surface p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-neon">Client Testimonials</h3>
          <p className="text-muted-foreground mb-6">
            Add your client testimonial images here
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="aspect-square bg-surface-darker rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Quote className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-primary">Testimonial Image {item}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Add your image here
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ReviewsSection;
