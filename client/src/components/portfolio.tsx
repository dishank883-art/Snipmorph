import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import PortfolioModal from "./portfolio-modal";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [, navigate] = useLocation();

  const projects = [
    {
      id: "brightpath",
      title: "BrightPath Consulting",
      subtitle: "Business Website",
      description: "Professional corporate website with clean design, showcasing consulting services and expertise.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Corporate", "Multi-page", "Professional"]
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
      id: "taskly",
      title: "Taskly AI",
      subtitle: "SaaS Landing Page",
      description: "Modern SaaS landing page with conversion-focused design and clear value proposition.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["SaaS", "AI", "Landing Page"]
    },
    {
      id: "roaminsider",
      title: "RoamInsider",
      subtitle: "Travel Website for Digital Nomads",
      description: "Custom travel platform designed specifically for digital nomads, featuring remote work-friendly destinations and resources.",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Travel", "Digital Nomads", "Custom Platform"],
      externalUrl: "https://roaminsider.com"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our latest projects showcasing diverse industries and cutting-edge design solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="portfolio-card bg-card rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 fade-in cursor-pointer"
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
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={`${project.title} preview`} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p className="text-sm opacity-90">{project.subtitle}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-primary hover:text-accent transition-colors duration-300 font-medium">
                  View Project <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <PortfolioModal 
        projectId={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
