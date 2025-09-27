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
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver highly customized digital solutions that elevate your brand and drive business growth across global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card bg-card rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 fade-in"
              data-testid={`service-card-${index}`}
            >
              <div className="text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <ul className="text-muted-foreground space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="text-primary mr-2 w-4 h-4" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
