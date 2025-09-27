import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'scrolled' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <svg width="40" height="40" viewBox="0 0 40 40" className="mr-3 hover:scale-105 transition-transform duration-300">
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(260, 84%, 60%)" />
                    <stop offset="100%" stopColor="hsl(187, 92%, 48%)" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="36" height="36" rx="8" fill="url(#logoGradient)" />
                <path d="M12 14 L20 14 A6 6 0 0 1 20 26 L16 26" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M28 26 L20 26 A6 6 0 0 1 20 14 L24 14" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="14" cy="20" r="2" fill="white" />
                <circle cx="26" cy="20" r="2" fill="white" />
              </svg>
              <span className="text-2xl font-bold text-primary font-serif tracking-tight">Snipmorph</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-portfolio"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors duration-300"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <button 
              onClick={() => scrollToSection('contact')}
              className="cta-button text-white px-6 py-2 rounded-lg font-medium"
              data-testid="nav-cta-button"
            >
              Get Free Quote
            </button>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-primary"
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="text-xl" /> : <Menu className="text-xl" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button 
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')}
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-portfolio"
            >
              Portfolio
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block px-3 py-2 text-foreground hover:text-primary w-full text-left"
              data-testid="mobile-nav-contact"
            >
              Contact
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full mt-4 cta-button text-white px-6 py-2 rounded-lg font-medium"
              data-testid="mobile-nav-cta-button"
            >
              Get Free Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
