import { 
  Laptop, 
  ShoppingCart, 
  Rocket, 
  Smartphone, 
  Search, 
  Headphones,
  Check
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Laptop className="text-4xl" />,
      title: "Custom Web Development",
      description: "Bespoke websites tailored to your business needs. From corporate sites to complex web applications, we build with precision and scalability in mind.",
      features: ["Responsive Design", "Modern Frameworks", "SEO Optimized"]
    },
    {
      icon: <ShoppingCart className="text-4xl" />,
      title: "E-commerce Solutions",
      description: "Luxury e-commerce platforms that convert. We create seamless shopping experiences with advanced features and payment integrations.",
      features: ["Payment Integration", "Inventory Management", "Multi-currency Support"]
    },
    {
      icon: <Rocket className="text-4xl" />,
      title: "SaaS Landing Pages",
      description: "High-converting landing pages for SaaS products. We focus on user experience and conversion optimization to maximize your ROI.",
      features: ["Conversion Optimized", "A/B Testing Ready", "Analytics Integration"]
    },
    {
      icon: <Smartphone className="text-4xl" />,
      title: "Mobile Optimization",
      description: "Mobile-first approach ensuring perfect performance across all devices. Your users get a consistent experience everywhere.",
      features: ["Mobile-First Design", "Progressive Web Apps", "Cross-Platform"]
    },
    {
      icon: <Search className="text-4xl" />,
      title: "SEO & Performance",
      description: "Technical SEO optimization and performance tuning. We ensure your website ranks well and loads lightning-fast.",
      features: ["Technical SEO", "Page Speed Optimization", "Core Web Vitals"]
    },
    {
      icon: <Headphones className="text-4xl" />,
      title: "Ongoing Support",
      description: "24/7 support and maintenance services. We keep your website secure, updated, and performing at its best.",
      features: ["Security Updates", "Regular Backups", "Performance Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            ⭐ How We Help
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight">
            DISCOVER OUR
            <br />
            <span className="text-primary font-serif italic">SERVICES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            We harness the power of digital technologies to grow businesses online. Snipmorph provides high-quality and innovative solutions to stay at the forefront of this dynamic environment. We focus on data-driven and behavioral insights to deliver a customer journey that delights and returns a positive ROI for our clients – no matter how big or small.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group bg-white rounded-xl p-8 transition-all duration-300 fade-in border hover:border-primary/20"
              data-testid={`service-card-${index}`}
            >
              <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground uppercase tracking-wider">START WITH</p>
                <ul className="text-muted-foreground space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="text-primary mr-3 w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-4 text-primary font-semibold hover:text-primary/80 transition-colors text-sm">
                  Get Started →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
