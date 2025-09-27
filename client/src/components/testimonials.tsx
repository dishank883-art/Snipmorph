import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Shopify Store Owner",
      image: "https://cdn.pixabay.com/photo/2020/06/19/06/28/women-5315858_1280.jpg",
      content: "Snipmorph helped me launch my online store perfectly. The design is beautiful and my customers love the shopping experience. My sales doubled within the first month!"
    },
    {
      name: "Raj Patel",
      role: "Digital Marketing Agency Founder",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "Starting my agency was a dream, and Snipmorph made it a reality with an incredible website. Professional, fast delivery, and exactly what I envisioned for my business."
    },
    {
      name: "Anita Gupta",
      role: "Small Business Owner",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
      content: "As a small business owner, I needed something affordable yet professional. Snipmorph delivered exactly that and helped me establish a strong online presence."
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
