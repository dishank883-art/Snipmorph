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
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            ⭐ Client Testimonials
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight">
            OUR CLIENTS
            <span className="text-primary font-serif italic"> SAY</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Hear from satisfied clients who have transformed their digital presence and achieved remarkable business results with Snipmorph's innovative solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="testimonial-card rounded-2xl p-8 fade-in hover:shadow-lg transition-all duration-300"
              data-testid={`testimonial-card-${index}`}
            >
              <div className="flex text-yellow-400 text-lg mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <blockquote className="text-foreground mb-8 leading-relaxed text-lg font-medium">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-gray-200"
                />
                <div>
                  <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                  <div className="text-muted-foreground font-medium">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
