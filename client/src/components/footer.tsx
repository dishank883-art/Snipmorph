import { SiLinkedin, SiX, SiInstagram, SiDribbble } from "react-icons/si";

export default function Footer() {
  const services = [
    "Web Development",
    "E-commerce",
    "SaaS Solutions",
    "Mobile Apps"
  ];

  const company = [
    "About Us",
    "Portfolio",
    "Careers",
    "Blog"
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <svg width="32" height="32" viewBox="0 0 40 40" className="mr-3">
                <defs>
                  <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(260, 84%, 60%)" />
                    <stop offset="100%" stopColor="hsl(187, 92%, 48%)" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="36" height="36" rx="8" fill="url(#footerLogoGradient)" />
                <path d="M12 14 L20 14 A6 6 0 0 1 20 26 L16 26" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                <path d="M28 26 L20 26 A6 6 0 0 1 20 14 L24 14" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
                <circle cx="14" cy="20" r="2" fill="white" />
                <circle cx="26" cy="20" r="2" fill="white" />
              </svg>
              <span className="text-2xl font-bold text-primary font-serif">Snipmorph</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transforming ideas into modern websites for businesses worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-linkedin"
              >
                <SiLinkedin className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-twitter"
              >
                <SiX className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-instagram"
              >
                <SiInstagram className="text-xl" />
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="social-dribbble"
              >
                <SiDribbble className="text-xl" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection('services')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                    data-testid={`footer-service-${index}`}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(item === 'About Us' ? 'about' : 'portfolio')}
                    className="text-muted-foreground hover:text-primary transition-colors text-left"
                    data-testid={`footer-company-${index}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-muted-foreground">snipmorph@gmail.com</li>
              <li className="text-muted-foreground">+91-9259488318</li>
              <li className="text-muted-foreground">Available 24/7</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Snipmorph. All rights reserved. | 
            <a href="#" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-primary transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
