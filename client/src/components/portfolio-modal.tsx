import { useEffect } from "react";
import { X } from "lucide-react";

interface PortfolioModalProps {
  projectId: string | null;
  onClose: () => void;
}

export default function PortfolioModal({ projectId, onClose }: PortfolioModalProps) {
  useEffect(() => {
    if (projectId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [projectId]);

  const getProjectContent = (id: string) => {
    switch (id) {
      case 'brightpath':
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BrightPath Consulting - Strategic Business Solutions</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { font-family: "Inter", sans-serif; }
        .hero-bg { background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%); }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div class="text-2xl font-bold text-blue-600">BrightPath</div>
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="text-gray-700 hover:text-blue-600">Home</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600">About</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600">Services</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600">Blog</a>
                    <a href="#" class="text-gray-700 hover:text-blue-600">Contact</a>
                </div>
                <button class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Get Started</button>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-bg text-white pt-20 pb-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-5xl font-bold mb-6">Strategic Solutions for Business Growth</h1>
                    <p class="text-xl mb-8 opacity-90">We help organizations navigate complex challenges and achieve sustainable success through proven methodologies and expert guidance.</p>
                    <div class="flex gap-4">
                        <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">Schedule Consultation</button>
                        <button class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">Learn More</button>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Business team collaborating" class="rounded-lg shadow-2xl" />
                </div>
            </div>
        </div>
    </section>

    <!-- Services -->
    <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                <p class="text-xl text-gray-600">Comprehensive consulting solutions tailored to your business needs</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-gray-50 p-8 rounded-xl text-center">
                    <i class="fas fa-chart-line text-4xl text-blue-600 mb-4"></i>
                    <h3 class="text-xl font-semibold mb-4">Strategic Planning</h3>
                    <p class="text-gray-600">Develop comprehensive strategies that drive sustainable growth and competitive advantage.</p>
                </div>
                <div class="bg-gray-50 p-8 rounded-xl text-center">
                    <i class="fas fa-users text-4xl text-blue-600 mb-4"></i>
                    <h3 class="text-xl font-semibold mb-4">Change Management</h3>
                    <p class="text-gray-600">Navigate organizational transformations with proven methodologies and expert guidance.</p>
                </div>
                <div class="bg-gray-50 p-8 rounded-xl text-center">
                    <i class="fas fa-lightbulb text-4xl text-blue-600 mb-4"></i>
                    <h3 class="text-xl font-semibold mb-4">Innovation Strategy</h3>
                    <p class="text-gray-600">Foster innovation culture and implement cutting-edge solutions for market leadership.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact -->
    <section class="py-16 bg-blue-600 text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p class="text-xl mb-8 opacity-90">Let us help you navigate your next challenge and achieve sustainable growth.</p>
            <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 text-lg">
                <i class="fas fa-calendar-alt mr-2"></i>Schedule a Free Consultation
            </button>
        </div>
    </section>
</body>
</html>
        `;

      case 'urbanwear':
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>UrbanWear Co. - Luxury Fashion</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .font-serif { font-family: "Playfair Display", serif; }
        .font-sans { font-family: "Inter", sans-serif; }
        .hero-gradient { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); }
    </style>
</head>
<body class="font-sans bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full z-50 border-b">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div class="text-2xl font-serif font-bold text-black">UrbanWear</div>
                <div class="hidden md:flex space-x-8">
                    <a href="#" class="text-gray-700 hover:text-black">Home</a>
                    <a href="#" class="text-gray-700 hover:text-black">Shop</a>
                    <a href="#" class="text-gray-700 hover:text-black">Collections</a>
                    <a href="#" class="text-gray-700 hover:text-black">About</a>
                    <a href="#" class="text-gray-700 hover:text-black">Contact</a>
                </div>
                <div class="flex items-center space-x-4">
                    <i class="fas fa-search text-gray-700 hover:text-black cursor-pointer"></i>
                    <i class="fas fa-heart text-gray-700 hover:text-black cursor-pointer"></i>
                    <i class="fas fa-shopping-bag text-gray-700 hover:text-black cursor-pointer"></i>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-gradient text-white pt-20 pb-0 min-h-screen flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-6xl font-serif font-bold mb-6 leading-tight">Luxury Redefined</h1>
                    <p class="text-xl mb-8 opacity-90 font-light">Discover our exclusive collection of premium fashion pieces crafted for the modern urban lifestyle.</p>
                    <div class="flex gap-4">
                        <button class="bg-white text-black px-8 py-3 font-medium hover:bg-gray-100 transition-colors">Shop Collection</button>
                        <button class="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:text-black transition-colors">Explore</button>
                    </div>
                </div>
                <div class="hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" alt="Luxury fashion model" class="rounded-lg shadow-2xl w-full object-cover" />
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Products -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-4xl font-serif font-bold text-gray-900 mb-4">Featured Collection</h2>
                <p class="text-lg text-gray-600">Handpicked pieces from our latest arrivals</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Elegant jacket" class="w-full h-80 object-cover rounded-t-lg" />
                    <div class="p-6">
                        <h3 class="text-lg font-medium mb-2">Premium Blazer</h3>
                        <p class="text-gray-600 mb-4">Tailored perfection</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$299</span>
                            <button class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                    <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Designer dress" class="w-full h-80 object-cover rounded-t-lg" />
                    <div class="p-6">
                        <h3 class="text-lg font-medium mb-2">Silk Dress</h3>
                        <p class="text-gray-600 mb-4">Timeless elegance</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$459</span>
                            <button class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Designer shoes" class="w-full h-80 object-cover rounded-t-lg" />
                    <div class="p-6">
                        <h3 class="text-lg font-medium mb-2">Designer Heels</h3>
                        <p class="text-gray-600 mb-4">Statement footwear</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$399</span>
                            <button class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                    <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Luxury accessories" class="w-full h-80 object-cover rounded-t-lg" />
                    <div class="p-6">
                        <h3 class="text-lg font-medium mb-2">Leather Handbag</h3>
                        <p class="text-gray-600 mb-4">Handcrafted luxury</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$689</span>
                            <button class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter -->
    <section class="py-16 bg-black text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-4xl font-serif font-bold mb-6">Stay in Style</h2>
            <p class="text-xl mb-8 opacity-90">Be the first to know about our latest collections and exclusive offers.</p>
            <div class="flex max-w-md mx-auto">
                <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-3 text-black rounded-l-lg focus:outline-none" />
                <button class="bg-white text-black px-6 py-3 rounded-r-lg font-medium hover:bg-gray-100">Subscribe</button>
            </div>
        </div>
    </section>
</body>
</html>
        `;

      case 'taskly':
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Taskly AI - Intelligent Task Management</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { font-family: "Inter", sans-serif; }
        .gradient-hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div class="flex items-center">
                    <i class="fas fa-brain text-2xl text-purple-600 mr-2"></i>
                    <span class="text-2xl font-bold text-gray-900">Taskly AI</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a href="#features" class="text-gray-700 hover:text-purple-600">Features</a>
                    <a href="#pricing" class="text-gray-700 hover:text-purple-600">Pricing</a>
                    <a href="#testimonials" class="text-gray-700 hover:text-purple-600">Reviews</a>
                    <a href="#" class="text-gray-700 hover:text-purple-600">About</a>
                </div>
                <div class="flex space-x-4">
                    <button class="text-purple-600 hover:text-purple-700">Sign In</button>
                    <button class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">Get Started</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="gradient-hero text-white pt-20 pb-16 min-h-screen flex items-center">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="max-w-4xl mx-auto">
                <h1 class="text-6xl font-bold mb-6 leading-tight">Supercharge Your Productivity with AI</h1>
                <p class="text-2xl mb-8 opacity-90 font-light">Taskly AI transforms how teams work by intelligently organizing tasks, predicting deadlines, and optimizing workflows automatically.</p>
                <div class="flex justify-center gap-4 mb-12">
                    <button class="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100">Start Free Trial</button>
                    <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600">Watch Demo</button>
                </div>
                <div class="max-w-4xl mx-auto">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" alt="AI dashboard interface" class="rounded-xl shadow-2xl" />
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-gray-900 mb-6">Intelligent Features</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Powered by advanced AI algorithms that learn from your work patterns</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
                    <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-robot text-2xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">Smart Prioritization</h3>
                    <p class="text-gray-600">AI automatically prioritizes your tasks based on deadlines, importance, and team dependencies.</p>
                </div>
                <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
                    <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-clock text-2xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">Deadline Prediction</h3>
                    <p class="text-gray-600">Predictive analytics forecast project completion times with 95% accuracy.</p>
                </div>
                <div class="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
                    <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-users text-2xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">Team Sync</h3>
                    <p class="text-gray-600">Real-time collaboration with intelligent conflict resolution and resource optimization.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-gray-900 mb-6">Simple Pricing</h2>
                <p class="text-xl text-gray-600">Choose the plan that fits your team size</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div class="bg-white p-8 rounded-2xl shadow-sm border">
                    <h3 class="text-2xl font-semibold mb-4">Starter</h3>
                    <div class="text-4xl font-bold mb-6">$9<span class="text-lg text-gray-500">/month</span></div>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Up to 5 team members</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Basic AI features</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>100 projects</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Email support</li>
                    </ul>
                    <button class="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200">Get Started</button>
                </div>
                <div class="bg-purple-600 text-white p-8 rounded-2xl shadow-lg transform scale-105">
                    <div class="text-center mb-4">
                        <span class="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">POPULAR</span>
                    </div>
                    <h3 class="text-2xl font-semibold mb-4">Professional</h3>
                    <div class="text-4xl font-bold mb-6">$29<span class="text-lg opacity-75">/month</span></div>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center"><i class="fas fa-check mr-3"></i>Up to 25 team members</li>
                        <li class="flex items-center"><i class="fas fa-check mr-3"></i>Advanced AI features</li>
                        <li class="flex items-center"><i class="fas fa-check mr-3"></i>Unlimited projects</li>
                        <li class="flex items-center"><i class="fas fa-check mr-3"></i>Priority support</li>
                        <li class="flex items-center"><i class="fas fa-check mr-3"></i>Analytics dashboard</li>
                    </ul>
                    <button class="w-full bg-white text-purple-600 py-3 rounded-lg font-semibold hover:bg-gray-100">Get Started</button>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border">
                    <h3 class="text-2xl font-semibold mb-4">Enterprise</h3>
                    <div class="text-4xl font-bold mb-6">$99<span class="text-lg text-gray-500">/month</span></div>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Unlimited team members</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Custom AI training</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>White-label options</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>24/7 phone support</li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-3"></i>Custom integrations</li>
                    </ul>
                    <button class="w-full bg-gray-100 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-200">Contact Sales</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 gradient-hero text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-5xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
            <p class="text-xl mb-8 opacity-90">Join thousands of teams already using AI to work smarter, not harder.</p>
            <button class="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 mr-4">
                Start Free Trial
            </button>
            <button class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600">
                Schedule Demo
            </button>
        </div>
    </section>
</body>
</html>
        `;

      default:
        return '';
    }
  };

  if (!projectId) return null;

  return (
    <div 
      className={`modal ${projectId ? 'show' : ''}`} 
      onClick={onClose}
      style={{ alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-close" 
          onClick={onClose}
          data-testid="modal-close-button"
        >
          <X />
        </button>
        <iframe 
          className="embed-frame"
          srcDoc={getProjectContent(projectId)}
          title={`${projectId} project preview`}
        />
      </div>
    </div>
  );
}
