import { Globe, Award, Users, Clock } from "lucide-react";

export default function About() {
  const stats = [
    {
      icon: <Users className="text-xl" />,
      title: "Dedicated Team",
      subtitle: "Skilled Specialists"
    },
    {
      icon: <Award className="text-xl" />,
      title: "Quality Focus",
      subtitle: "Premium Standards"
    },
    {
      icon: <Globe className="text-xl" />,
      title: "Growing Reach",
      subtitle: "International Clients"
    },
    {
      icon: <Clock className="text-xl" />,
      title: "Fast Delivery",
      subtitle: "2-4 Week Turnaround"
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About <span className="text-primary">Snipmorph</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We are a fresh web design agency with a commitment to excellence and innovation. Though we're just getting started with 2-3 clients so far, we've already delivered exceptional results for each of them. We focus on creating premium digital experiences that help businesses establish a strong online presence and achieve their goals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-foreground font-semibold">{stat.title}</div>
                    <div className="text-muted-foreground">{stat.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
          <div className="fade-in">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Creative team collaborating in modern office" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
