import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'GameDev123',
      rating: 5,
      comment: 'Incredible work! The scripts were delivered exactly as promised and work flawlessly in my game.',
      project: 'Economy System',
      image: '/placeholder-avatar-1.jpg' // You can replace with actual images
    },
    {
      name: 'RobloxBuilder',
      rating: 5,
      comment: 'Fast delivery and excellent communication. The code is clean and well-documented.',
      project: 'Anti-Exploit System',
      image: '/placeholder-avatar-2.jpg' // You can replace with actual images
    },
    {
      name: 'StudioMaster',
      rating: 5,
      comment: 'Professional service with attention to detail. Will definitely work with them again!',
      project: 'Custom GUI System',
      image: '/placeholder-avatar-3.jpg' // You can replace with actual images
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '50+' },
    { label: 'Happy Clients', value: '35+' },
    { label: 'Average Rating', value: '4.9/5' },
    { label: 'Response Time', value: '< 1hr' }
  ];

  return (
    <section className="min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 text-gradient">Client Reviews</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what my clients say about working with me
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="card-surface p-6 text-center hover:glow-effect transition-all duration-300">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="card-surface p-6 hover:glow-effect transition-all duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-surface-darker rounded-full flex items-center justify-center border-2 border-primary">
                  <span className="text-primary font-bold">{review.name[0]}</span>
                </div>
                <div>
                  <h4 className="font-bold text-neon">{review.name}</h4>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <Quote className="w-6 h-6 text-primary mb-3" />
              <p className="text-foreground mb-4 italic">"{review.comment}"</p>
              <div className="text-sm text-muted-foreground">
                Project: <span className="text-primary">{review.project}</span>
              </div>
            </Card>
          ))}
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