import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "CEO, Global Innovations Ltd",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "Snipmorph delivered beyond our expectations. The website they created perfectly captures our brand essence and has significantly improved our online conversions."
    },
    {
      name: "Isabella Rodriguez",
      role: "Founder, Luxe Boutique",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "The e-commerce platform Snipmorph built for us is absolutely stunning. Our sales have increased by 180% since the launch. Exceptional work!"
    },
    {
      name: "David Thompson",
      role: "CTO, TechVision Solutions",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "Professional, creative, and incredibly efficient. Snipmorph transformed our outdated website into a modern masterpiece that our customers love."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Client <span className="text-primary">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from satisfied clients who have transformed their digital presence with Snipmorph.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card rounded-2xl p-8 fade-in"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex text-accent text-xl mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4 object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
