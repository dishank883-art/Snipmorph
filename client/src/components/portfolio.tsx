import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import PortfolioModal from "./portfolio-modal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [, navigate] = useLocation();

  const projects = [
    {
      id: "scrublou",
      title: "Scrub Lou",
      subtitle: "Professional Cleaning Service",
      description: "Modern service business website with online booking system, service showcase, and local SEO optimization for Louisville's premier cleaning company.",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Service Business", "Online Booking", "Local SEO"],
      externalUrl: "https://scrublou.com"
    },
    {
      id: "roaminsider",
      title: "RoamInsider",
      subtitle: "Travel Website for Digital Nomads",
      description: "Custom travel platform designed specifically for digital nomads, featuring remote work-friendly destinations and resources.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Travel", "Digital Nomads", "Custom Platform"],
      externalUrl: "https://roaminsider.com"
    },
    {
  id: "getlifted",
  title: "GetLifted",
  subtitle: "E-commerce Landing Page",
  description: "Clean and modern e-commerce shopify store for a lifestyle brand with focus on product showcase and conversion.",
  image: "https://cdn.pixabay.com/photo/2016/03/27/23/00/weight-lifting-1284616_1280.jpg", 
  tags: ["E-commerce", "Shopify", "Lifestyle"],
      externalUrl: "https://getlifted.in/"
},
    {
      id: "urbanwear",
      title: "UrbanWear Co.",
      subtitle: "E-commerce Store",
      description: "Sleek luxury e-commerce platform with advanced shopping features and premium user experience.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["E-commerce", "Luxury", "Shopping Cart"]
    },
    {
      
      id: "brightpath",
      title: "BrightPath Consulting",
      subtitle: "Business Website",
      description: "Professional corporate website with clean design, showcasing consulting services and expertise.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Corporate", "Multi-page", "Professional"]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
            💼 Our Work
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight">
            CASE
            <span className="text-primary font-serif italic"> STUDIES</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium">
            Explore our latest projects showcasing diverse industries and cutting-edge design solutions that drive real business results for our clients worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="portfolio-card group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl hover:border-primary/20 transition-all duration-300 fade-in cursor-pointer"
              onClick={() => {
                if (project.externalUrl) {
                  window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
                } else if (project.id === 'urbanwear') {
                  navigate('/urbanwear');
                } else {
                  setSelectedProject(project.id);
                }
              }}
              data-testid={`portfolio-card-${project.id}`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2 font-serif group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-4 font-medium">
                  {project.subtitle}
                </p>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                <button className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-300 font-semibold">
                  View Case Study <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center fade-in">
          <button className="cta-button text-white px-10 py-4 rounded-xl font-bold text-lg">
            VIEW ALL CASE STUDIES
          </button>
        </div>
      </div>

      <PortfolioModal 
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
