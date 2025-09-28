import { Rocket, Phone } from "lucide-react";
import client1Logo from "@/ChatGPT Image Jun 22, 2025, 03_15_10 PM (2).png"; // or relative path if @ alias not set


export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center relative overflow-hidden py-12">
      {/* Clean modern background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
              🚀 Premium Web Design Agency
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-foreground mb-8 leading-[0.9] tracking-tight">
              HELPING BUSINESSES
              <br />
              <span className="text-primary font-serif italic">THRIVE</span>
              <br />
              WITH THE POWER OF
              <br />
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">DESIGN</span>
            </h1>
            <p className="text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl mx-auto font-medium">
              We provide leading and innovative web design solutions that boost business growth, create competitive advantages, increase profitability, and enable business sustainability in this dynamic digital environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="cta-button text-white px-12 py-5 rounded-xl font-bold text-xl hover:scale-105 transition-all duration-300"
                data-testid="hero-get-quote-button"
              >
                GET YOUR FREE QUOTE
              </button>
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Get your FREE 30-minute strategy session with us today!</p>
                <p className="text-xs text-muted-foreground">No commitments, we just want to help.</p>
              </div>
            </div>
          </div>
          
          {/* Client Trust Indicators */}
           {/* Client Trust Indicators (Text Only) */}
<div className="mt-20 fade-in">
  <p className="text-sm text-muted-foreground mb-8 font-medium uppercase tracking-wider">
    TRUSTED BY 500+ BUSINESSES WORLDWIDE
  </p>
</div>
 </div>            
</div>
    </section>
  );
}
