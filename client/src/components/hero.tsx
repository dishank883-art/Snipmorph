import { Rocket, Phone } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Modern geometric background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-in">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Transforming Ideas into 
              <span className="text-primary"> Modern Websites</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We craft premium, responsive websites that drive results for international businesses. 
              From concept to deployment, we deliver exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contact')}
                className="cta-button text-white px-8 py-4 rounded-lg font-semibold text-lg"
                data-testid="hero-get-quote-button"
              >
                <Rocket className="inline-block mr-2" />
                Get a Free Quote
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                data-testid="hero-contact-button"
              >
                <Phone className="inline-block mr-2" />
                Contact Us
              </button>
            </div>
          </div>
          
          <div className="fade-in hidden lg:block">
            {/* Modern dashboard/website preview illustration */}
            <div className="relative">
              <div className="bg-card rounded-2xl shadow-2xl p-6 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-muted h-4 rounded mb-4"></div>
                <div className="bg-primary h-8 rounded mb-4"></div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-muted h-12 rounded"></div>
                  <div className="bg-muted h-12 rounded"></div>
                </div>
                <div className="bg-muted h-6 rounded mb-2"></div>
                <div className="bg-muted h-6 rounded w-3/4"></div>
              </div>
              <div className="absolute -top-4 -right-4 bg-accent rounded-2xl shadow-xl p-4 text-accent-foreground font-bold">
                Premium Design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
