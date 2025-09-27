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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { font-family: "Inter", sans-serif; }
        .hero-bg { background: linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #4f46e5 100%); }
        .section { display: none; }
        .section.active { display: block; }
        .nav-link { cursor: pointer; transition: all 0.3s ease; }
        .nav-link:hover { transform: translateY(-1px); }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-50 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div class="text-2xl font-bold text-blue-600">BrightPath</div>
                <div class="hidden md:flex space-x-8">
                    <a onclick="showSection('home')" class="nav-link text-gray-700 hover:text-blue-600 font-medium">Home</a>
                    <a onclick="showSection('about')" class="nav-link text-gray-700 hover:text-blue-600 font-medium">About</a>
                    <a onclick="showSection('services')" class="nav-link text-gray-700 hover:text-blue-600 font-medium">Services</a>
                    <a onclick="showSection('blog')" class="nav-link text-gray-700 hover:text-blue-600 font-medium">Blog</a>
                    <a onclick="showSection('contact')" class="nav-link text-gray-700 hover:text-blue-600 font-medium">Contact</a>
                </div>
                <button onclick="showSection('contact')" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105">Get Started</button>
            </div>
        </div>
    </nav>

    <!-- Home Section -->
    <section id="home" class="section active">

        <!-- Hero Section -->
        <section class="hero-bg text-white pt-20 pb-16 min-h-screen flex items-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 class="text-6xl font-bold mb-6 leading-tight">Strategic Solutions for Business Growth</h1>
                        <p class="text-xl mb-8 opacity-90 leading-relaxed">We help organizations navigate complex challenges and achieve sustainable success through proven methodologies and expert guidance.</p>
                        <div class="flex gap-4">
                            <button onclick="showSection('contact')" class="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">Schedule Consultation</button>
                            <button onclick="showSection('about')" class="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">Learn More</button>
                        </div>
                    </div>
                    <div class="hidden lg:block">
                        <img src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Business team collaborating" class="rounded-xl shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>
    </section>

    <!-- About Section -->
    <section id="about" class="section py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="text-5xl font-bold text-gray-900 mb-6">About BrightPath</h2>
                    <p class="text-xl text-gray-600 mb-8 leading-relaxed">With over a decade of experience, BrightPath Consulting has helped hundreds of organizations transform their operations and achieve breakthrough results. Our team of expert consultants brings deep industry knowledge and proven methodologies to every engagement.</p>
                    <div class="grid grid-cols-2 gap-6">
                        <div class="text-center">
                            <div class="text-4xl font-bold text-blue-600 mb-2">250+</div>
                            <div class="text-gray-600">Projects Completed</div>
                        </div>
                        <div class="text-center">
                            <div class="text-4xl font-bold text-blue-600 mb-2">98%</div>
                            <div class="text-gray-600">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" alt="Team meeting" class="rounded-xl shadow-2xl" />
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
                <p class="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive consulting solutions tailored to your business needs</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="card-hover bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                    <i class="fas fa-chart-line text-5xl text-blue-600 mb-6"></i>
                    <h3 class="text-2xl font-semibold mb-4">Strategic Planning</h3>
                    <p class="text-gray-600 leading-relaxed">Develop comprehensive strategies that drive sustainable growth and competitive advantage through data-driven insights.</p>
                </div>
                <div class="card-hover bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                    <i class="fas fa-users text-5xl text-blue-600 mb-6"></i>
                    <h3 class="text-2xl font-semibold mb-4">Change Management</h3>
                    <p class="text-gray-600 leading-relaxed">Navigate organizational transformations with proven methodologies and expert guidance tailored to your culture.</p>
                </div>
                <div class="card-hover bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
                    <i class="fas fa-lightbulb text-5xl text-blue-600 mb-6"></i>
                    <h3 class="text-2xl font-semibold mb-4">Innovation Strategy</h3>
                    <p class="text-gray-600 leading-relaxed">Foster innovation culture and implement cutting-edge solutions for sustainable market leadership.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Blog Section -->
    <section id="blog" class="section py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-gray-900 mb-6">Latest Insights</h2>
                <p class="text-xl text-gray-600">Stay updated with our latest thoughts on business strategy and innovation</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <article class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" alt="Business analytics" class="w-full h-48 object-cover" />
                    <div class="p-8">
                        <div class="text-sm text-blue-600 font-medium mb-2">Strategy</div>
                        <h3 class="text-xl font-semibold mb-4">The Future of Digital Transformation</h3>
                        <p class="text-gray-600 mb-4">How businesses are leveraging technology to create competitive advantages in the digital age.</p>
                        <a href="#" class="text-blue-600 font-medium hover:text-blue-700">Read More →</a>
                    </div>
                </article>
                <article class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" alt="Team collaboration" class="w-full h-48 object-cover" />
                    <div class="p-8">
                        <div class="text-sm text-blue-600 font-medium mb-2">Leadership</div>
                        <h3 class="text-xl font-semibold mb-4">Building Resilient Organizations</h3>
                        <p class="text-gray-600 mb-4">Key principles for creating organizations that thrive in uncertain and rapidly changing environments.</p>
                        <a href="#" class="text-blue-600 font-medium hover:text-blue-700">Read More →</a>
                    </div>
                </article>
                <article class="card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200" alt="Innovation" class="w-full h-48 object-cover" />
                    <div class="p-8">
                        <div class="text-sm text-blue-600 font-medium mb-2">Innovation</div>
                        <h3 class="text-xl font-semibold mb-4">Scaling Innovation Across Teams</h3>
                        <p class="text-gray-600 mb-4">Proven frameworks for fostering creativity and innovation at every level of your organization.</p>
                        <a href="#" class="text-blue-600 font-medium hover:text-blue-700">Read More →</a>
                    </div>
                </article>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section py-20 bg-blue-600 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 class="text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p class="text-xl mb-8 opacity-90 leading-relaxed">Let us help you navigate your next challenge and achieve sustainable growth. Our expert consultants are ready to partner with you.</p>
                    <div class="space-y-6">
                        <div class="flex items-center">
                            <i class="fas fa-phone text-2xl mr-4"></i>
                            <div>
                                <div class="font-semibold">Call Us</div>
                                <div class="opacity-90">+1 (555) 123-4567</div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-envelope text-2xl mr-4"></i>
                            <div>
                                <div class="font-semibold">Email Us</div>
                                <div class="opacity-90">hello@brightpath.com</div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-map-marker-alt text-2xl mr-4"></i>
                            <div>
                                <div class="font-semibold">Visit Us</div>
                                <div class="opacity-90">123 Business Ave, NY 10001</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-2xl">
                    <form class="space-y-6">
                        <div>
                            <input type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" />
                        </div>
                        <div>
                            <input type="email" placeholder="Email Address" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" />
                        </div>
                        <div>
                            <input type="text" placeholder="Company" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50" />
                        </div>
                        <div>
                            <textarea placeholder="Tell us about your project" rows="4" class="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 resize-none"></textarea>
                        </div>
                        <button type="submit" class="w-full bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                            <i class="fas fa-paper-plane mr-2"></i>Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <script>
    function showSection(sectionId) {
        // Hide all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    </script>
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
    <title>urbanwear - sustainable clothing that plants trees</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { font-family: "Inter", sans-serif; }
        .section { display: none; }
        .section.active { display: block; }
        .nav-link { cursor: pointer; transition: all 0.3s ease; }
        .nav-link:hover { transform: translateY(-1px); }
        .card-hover { transition: all 0.3s ease; cursor: pointer; }
        .card-hover:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(0,0,0,0.1); }
        .cart-count { background: #22c55e; color: white; border-radius: 50%; padding: 4px 8px; font-size: 12px; position: absolute; top: -8px; right: -8px; min-width: 20px; text-align: center; }
        .sustainability-badge { background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); }
        .tree-counter { animation: countUp 2s ease-out; }
        @keyframes countUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .eco-green { color: #22c55e; }
        .rounded-friendly { border-radius: 16px; }
        .nav-dropdown { display: none; position: absolute; top: 100%; left: 0; background: white; box-shadow: 0 10px 40px rgba(0,0,0,0.1); border-radius: 12px; padding: 20px; min-width: 200px; }
        .nav-item:hover .nav-dropdown { display: block; }
        .impact-banner { background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); }
    </style>
</head>
<body class="bg-gray-50 text-gray-800">
    <!-- Impact Banner -->
    <div class="impact-banner py-3 text-center border-b">
        <div class="flex justify-center items-center space-x-4 text-sm">
            <i class="fas fa-tree eco-green"></i>
            <span class="font-medium">every item plants 5 trees • <span class="tree-counter font-bold eco-green" id="tree-counter">2,847,392</span> trees planted & counting</span>
        </div>
    </div>

    <!-- Navigation -->
    <nav class="bg-white shadow-sm fixed w-full z-50 backdrop-blur-md" style="top: 40px;">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div onclick="showSection('home')" class="text-2xl font-bold text-gray-900 cursor-pointer hover:eco-green transition-colors">
                    <i class="fas fa-seedling eco-green mr-2"></i>urbanwear
                </div>
                <div class="hidden md:flex space-x-8">
                    <div class="nav-item relative">
                        <a onclick="showSection('shop-women')" class="nav-link text-gray-700 hover:text-gray-900 font-medium cursor-pointer">women's</a>
                        <div class="nav-dropdown">
                            <a onclick="showSection('shop-women')" class="block py-2 text-gray-700 hover:eco-green">hoodies & sweatshirts</a>
                            <a onclick="showSection('shop-women')" class="block py-2 text-gray-700 hover:eco-green">t-shirts & tops</a>
                            <a onclick="showSection('shop-women')" class="block py-2 text-gray-700 hover:eco-green">pants & joggers</a>
                            <a onclick="showSection('shop-women')" class="block py-2 text-gray-700 hover:eco-green">dresses</a>
                        </div>
                    </div>
                    <div class="nav-item relative">
                        <a onclick="showSection('shop-men')" class="nav-link text-gray-700 hover:text-gray-900 font-medium cursor-pointer">men's</a>
                        <div class="nav-dropdown">
                            <a onclick="showSection('shop-men')" class="block py-2 text-gray-700 hover:eco-green">hoodies & sweatshirts</a>
                            <a onclick="showSection('shop-men')" class="block py-2 text-gray-700 hover:eco-green">t-shirts</a>
                            <a onclick="showSection('shop-men')" class="block py-2 text-gray-700 hover:eco-green">pants & joggers</a>
                        </div>
                    </div>
                    <a onclick="showSection('sustainability')" class="nav-link text-gray-700 hover:text-gray-900 font-medium">our impact</a>
                    <a onclick="showSection('about')" class="nav-link text-gray-700 hover:text-gray-900 font-medium">about</a>
                </div>
                <div class="flex items-center space-x-4">
                    <i class="fas fa-search text-gray-600 hover:text-gray-900 cursor-pointer text-lg"></i>
                    <i class="fas fa-heart text-gray-600 hover:text-gray-900 cursor-pointer text-lg"></i>
                    <div class="relative">
                        <i onclick="showSection('cart')" class="fas fa-shopping-bag text-gray-600 hover:text-gray-900 cursor-pointer text-lg"></i>
                        <span id="cart-count" class="cart-count">3</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Home Section -->
    <section id="home" class="section active" style="padding-top: 100px;">

        <!-- Hero Section -->
        <div class="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-16">
                    <h1 class="text-6xl font-bold mb-6 text-gray-900 leading-tight">comfort made sustainable</h1>
                    <p class="text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">every piece plants trees, captures carbon, and creates positive impact. because feeling good should do good too.</p>
                    <div class="flex justify-center gap-6 mb-12">
                        <button onclick="showSection('shop-women')" class="sustainability-badge text-white px-10 py-4 rounded-friendly font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-lg">shop women's</button>
                        <button onclick="showSection('shop-men')" class="bg-gray-900 text-white px-10 py-4 rounded-friendly font-semibold text-lg hover:bg-gray-800 transition-all duration-300">shop men's</button>
                    </div>
                </div>
                
                <!-- Hero Product Showcase -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div onclick="showProductDetail('organic-hoodie')" class="card-hover bg-white rounded-friendly overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" alt="Organic Hoodie" class="w-full h-64 object-cover" />
                        <div class="p-6">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-leaf eco-green mr-2"></i>
                                <span class="text-sm eco-green font-medium">plants 5 trees</span>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">organic comfort hoodie</h3>
                            <p class="text-gray-600 text-sm mb-3">made from 100% organic cotton</p>
                            <div class="text-2xl font-bold">$78</div>
                        </div>
                    </div>
                    <div onclick="showProductDetail('recycled-tee')" class="card-hover bg-white rounded-friendly overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" alt="Recycled T-Shirt" class="w-full h-64 object-cover" />
                        <div class="p-6">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-recycle eco-green mr-2"></i>
                                <span class="text-sm eco-green font-medium">recycled materials</span>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">everyday impact tee</h3>
                            <p class="text-gray-600 text-sm mb-3">soft & sustainable basics</p>
                            <div class="text-2xl font-bold">$35</div>
                        </div>
                    </div>
                    <div onclick="showProductDetail('earth-joggers')" class="card-hover bg-white rounded-friendly overflow-hidden shadow-lg">
                        <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400" alt="Earth Joggers" class="w-full h-64 object-cover" />
                        <div class="p-6">
                            <div class="flex items-center mb-2">
                                <i class="fas fa-seedling eco-green mr-2"></i>
                                <span class="text-sm eco-green font-medium">bamboo blend</span>
                            </div>
                            <h3 class="text-xl font-semibold mb-2">earth joggers</h3>
                            <p class="text-gray-600 text-sm mb-3">ultra-soft bamboo comfort</p>
                            <div class="text-2xl font-bold">$68</div>
                        </div>
                    </div>
                </div>
                
                <!-- Impact Counter -->
                <div class="bg-white rounded-friendly p-8 text-center shadow-lg">
                    <div class="flex justify-center items-center space-x-8 flex-wrap">
                        <div class="text-center mb-4">
                            <div class="text-4xl font-bold eco-green mb-2 tree-counter">2,847,392</div>
                            <div class="text-gray-600 font-medium">trees planted</div>
                        </div>
                        <div class="text-center mb-4">
                            <div class="text-4xl font-bold eco-green mb-2">98%</div>
                            <div class="text-gray-600 font-medium">sustainable materials</div>
                        </div>
                        <div class="text-center mb-4">
                            <div class="text-4xl font-bold eco-green mb-2">15k+</div>
                            <div class="text-gray-600 font-medium">happy customers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Women's Shop Section -->
    <section id="shop-women" class="section py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-gray-900 mb-6">women's sustainable collection</h2>
                <p class="text-xl text-gray-600 mb-8">comfort meets consciousness in every piece</p>
                <div class="flex justify-center space-x-4 mb-12">
                    <button class="bg-green-100 eco-green px-6 py-2 rounded-friendly font-medium">all</button>
                    <button class="text-gray-600 hover:eco-green px-6 py-2 rounded-friendly transition-colors">hoodies</button>
                    <button class="text-gray-600 hover:eco-green px-6 py-2 rounded-friendly transition-colors">tees</button>
                    <button class="text-gray-600 hover:eco-green px-6 py-2 rounded-friendly transition-colors">pants</button>
                    <button class="text-gray-600 hover:eco-green px-6 py-2 rounded-friendly transition-colors">dresses</button>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div onclick="showProductDetail('womens-hoodie')" class="card-hover bg-gray-50 rounded-friendly overflow-hidden">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Women's Hoodie" class="w-full h-80 object-cover" />
                        <div class="absolute top-4 left-4 sustainability-badge text-white px-3 py-1 rounded-full text-xs font-medium">plants 5 trees</div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <i class="fas fa-leaf eco-green mr-2 text-sm"></i>
                            <span class="text-xs eco-green font-medium uppercase tracking-wide">organic cotton</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">cozy comfort hoodie</h3>
                        <p class="text-gray-600 mb-4 text-sm">ultra-soft organic fleece</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$78</span>
                            <button onclick="event.stopPropagation(); addToCart('womens-hoodie', 'cozy comfort hoodie', 78)" class="sustainability-badge text-white px-6 py-2 rounded-friendly font-medium hover:scale-105 transition-all">add to cart</button>
                        </div>
                    </div>
                </div>
                <div onclick="showProductDetail('womens-tee')" class="card-hover bg-gray-50 rounded-friendly overflow-hidden">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Women's T-Shirt" class="w-full h-80 object-cover" />
                        <div class="absolute top-4 left-4 sustainability-badge text-white px-3 py-1 rounded-full text-xs font-medium">plants 5 trees</div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <i class="fas fa-recycle eco-green mr-2 text-sm"></i>
                            <span class="text-xs eco-green font-medium uppercase tracking-wide">recycled fibers</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">everyday impact tee</h3>
                        <p class="text-gray-600 mb-4 text-sm">soft sustainable basics</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$35</span>
                            <button onclick="event.stopPropagation(); addToCart('womens-tee', 'everyday impact tee', 35)" class="sustainability-badge text-white px-6 py-2 rounded-friendly font-medium hover:scale-105 transition-all">add to cart</button>
                        </div>
                    </div>
                </div>
                <div onclick="showProductDetail('womens-joggers')" class="card-hover bg-gray-50 rounded-friendly overflow-hidden">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Women's Joggers" class="w-full h-80 object-cover" />
                        <div class="absolute top-4 left-4 sustainability-badge text-white px-3 py-1 rounded-full text-xs font-medium">plants 5 trees</div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <i class="fas fa-seedling eco-green mr-2 text-sm"></i>
                            <span class="text-xs eco-green font-medium uppercase tracking-wide">bamboo blend</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">earth joggers</h3>
                        <p class="text-gray-600 mb-4 text-sm">ultra-soft bamboo comfort</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$68</span>
                            <button onclick="event.stopPropagation(); addToCart('womens-joggers', 'earth joggers', 68)" class="sustainability-badge text-white px-6 py-2 rounded-friendly font-medium hover:scale-105 transition-all">add to cart</button>
                        </div>
                    </div>
                </div>
                <div onclick="showProductDetail('womens-dress')" class="card-hover bg-gray-50 rounded-friendly overflow-hidden">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Women's Dress" class="w-full h-80 object-cover" />
                        <div class="absolute top-4 left-4 sustainability-badge text-white px-3 py-1 rounded-full text-xs font-medium">plants 5 trees</div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <i class="fas fa-water eco-green mr-2 text-sm"></i>
                            <span class="text-xs eco-green font-medium uppercase tracking-wide">tencel lyocell</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">flow midi dress</h3>
                        <p class="text-gray-600 mb-4 text-sm">breathable & sustainable</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$88</span>
                            <button onclick="event.stopPropagation(); addToCart('womens-dress', 'flow midi dress', 88)" class="sustainability-badge text-white px-6 py-2 rounded-friendly font-medium hover:scale-105 transition-all">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Men's Shop Section -->
    <section id="shop-men" class="section py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-gray-900 mb-6">men's sustainable collection</h2>
                <p class="text-xl text-gray-600">built for comfort, designed for impact</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div onclick="showProductDetail('mens-hoodie')" class="card-hover bg-white rounded-friendly overflow-hidden shadow-lg">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Men's Hoodie" class="w-full h-80 object-cover" />
                        <div class="absolute top-4 left-4 sustainability-badge text-white px-3 py-1 rounded-full text-xs font-medium">plants 5 trees</div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <i class="fas fa-leaf eco-green mr-2 text-sm"></i>
                            <span class="text-xs eco-green font-medium uppercase tracking-wide">organic cotton</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">classic comfort hoodie</h3>
                        <p class="text-gray-600 mb-4 text-sm">premium organic fleece</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$82</span>
                            <button onclick="event.stopPropagation(); addToCart('mens-hoodie', 'classic comfort hoodie', 82)" class="sustainability-badge text-white px-6 py-2 rounded-friendly font-medium hover:scale-105 transition-all">add to cart</button>
                        </div>
                    </div>
                </div>
                <div onclick="showProductDetail('mens-tee')" class="card-hover bg-white rounded-friendly overflow-hidden shadow-lg">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1583743814966-8936f37f1c78?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Men's T-Shirt" class="w-full h-80 object-cover" />
                        <div class="absolute top-4 left-4 sustainability-badge text-white px-3 py-1 rounded-full text-xs font-medium">plants 5 trees</div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <i class="fas fa-recycle eco-green mr-2 text-sm"></i>
                            <span class="text-xs eco-green font-medium uppercase tracking-wide">recycled cotton</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">essential impact tee</h3>
                        <p class="text-gray-600 mb-4 text-sm">everyday sustainable comfort</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$38</span>
                            <button onclick="event.stopPropagation(); addToCart('mens-tee', 'essential impact tee', 38)" class="sustainability-badge text-white px-6 py-2 rounded-friendly font-medium hover:scale-105 transition-all">add to cart</button>
                        </div>
                    </div>
                </div>
                <div onclick="showProductDetail('mens-joggers')" class="card-hover bg-white rounded-friendly overflow-hidden shadow-lg">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Men's Joggers" class="w-full h-80 object-cover" />
                        <div class="absolute top-4 left-4 sustainability-badge text-white px-3 py-1 rounded-full text-xs font-medium">plants 5 trees</div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <i class="fas fa-seedling eco-green mr-2 text-sm"></i>
                            <span class="text-xs eco-green font-medium uppercase tracking-wide">hemp blend</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">adventure joggers</h3>
                        <p class="text-gray-600 mb-4 text-sm">durable hemp comfort</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$72</span>
                            <button onclick="event.stopPropagation(); addToCart('mens-joggers', 'adventure joggers', 72)" class="sustainability-badge text-white px-6 py-2 rounded-friendly font-medium hover:scale-105 transition-all">add to cart</button>
                        </div>
                    </div>
                </div>
                <div onclick="showProductDetail('mens-sweatshirt')" class="card-hover bg-white rounded-friendly overflow-hidden shadow-lg">
                    <div class="relative">
                        <img src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Men's Sweatshirt" class="w-full h-80 object-cover" />
                        <div class="absolute top-4 left-4 sustainability-badge text-white px-3 py-1 rounded-full text-xs font-medium">plants 5 trees</div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center mb-2">
                            <i class="fas fa-leaf eco-green mr-2 text-sm"></i>
                            <span class="text-xs eco-green font-medium uppercase tracking-wide">organic fleece</span>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">heritage sweatshirt</h3>
                        <p class="text-gray-600 mb-4 text-sm">timeless sustainable style</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$65</span>
                            <button onclick="event.stopPropagation(); addToCart('mens-sweatshirt', 'heritage sweatshirt', 65)" class="sustainability-badge text-white px-6 py-2 rounded-friendly font-medium hover:scale-105 transition-all">add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Product Detail Section -->
    <section id="product" class="section py-20 bg-white" style="padding-top: 140px;">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <img id="product-image" src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" alt="Product" class="w-full rounded-friendly shadow-2xl" />
                </div>
                <div class="flex flex-col justify-center">
                    <!-- Impact Badge -->
                    <div class="flex items-center mb-6">
                        <div class="sustainability-badge text-white px-4 py-2 rounded-friendly mr-4">
                            <i class="fas fa-tree mr-2"></i>plants 5 trees
                        </div>
                        <div class="bg-blue-100 text-blue-800 px-4 py-2 rounded-friendly">
                            <i class="fas fa-recycle mr-2"></i>carbon neutral shipping
                        </div>
                    </div>
                    
                    <h1 id="product-title" class="text-5xl font-bold mb-4">organic comfort hoodie</h1>
                    <div class="flex items-center mb-6">
                        <span id="product-price" class="text-4xl font-bold mr-6">$78</span>
                        <div class="text-gray-600">
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <i class="fas fa-star text-yellow-400"></i>
                            <span class="ml-2">4.9 (127 reviews)</span>
                        </div>
                    </div>
                    
                    <p id="product-description" class="text-xl text-gray-600 mb-8 leading-relaxed">made from 100% organic cotton that's grown without harmful pesticides. ultra-soft fleece lining for maximum comfort. every purchase plants 5 trees and supports regenerative farming practices.</p>
                    
                    <!-- Material Details -->
                    <div class="bg-green-50 p-6 rounded-friendly mb-8">
                        <h3 class="font-semibold mb-4 eco-green">sustainable details</h3>
                        <div class="grid grid-cols-2 gap-4 text-sm">
                            <div class="flex items-center">
                                <i class="fas fa-leaf eco-green mr-2"></i>
                                <span>100% organic cotton</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-water eco-green mr-2"></i>
                                <span>low water impact dyes</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-recycle eco-green mr-2"></i>
                                <span>recyclable packaging</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-truck eco-green mr-2"></i>
                                <span>carbon neutral shipping</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4">size</h3>
                        <div class="flex gap-3">
                            <button class="border-2 border-gray-300 px-4 py-2 rounded-friendly hover:border-green-500 transition-colors">xs</button>
                            <button class="border-2 border-gray-300 px-4 py-2 rounded-friendly hover:border-green-500 transition-colors">s</button>
                            <button class="border-2 border-green-500 bg-green-500 text-white px-4 py-2 rounded-friendly">m</button>
                            <button class="border-2 border-gray-300 px-4 py-2 rounded-friendly hover:border-green-500 transition-colors">l</button>
                            <button class="border-2 border-gray-300 px-4 py-2 rounded-friendly hover:border-green-500 transition-colors">xl</button>
                        </div>
                    </div>
                    
                    <div class="flex gap-4">
                        <button onclick="addToCartFromProduct()" class="sustainability-badge text-white px-8 py-4 rounded-friendly font-semibold hover:scale-105 transition-all flex-1">
                            <i class="fas fa-shopping-cart mr-2"></i>add to cart - plants 5 trees
                        </button>
                        <button class="border-2 border-gray-300 text-gray-600 px-4 py-4 rounded-friendly font-semibold hover:border-red-400 hover:text-red-400 transition-colors">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    
                    <!-- Tree Counter -->
                    <div class="mt-8 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-friendly">
                        <div class="text-center">
                            <div class="text-2xl font-bold eco-green mb-1 tree-counter">+5</div>
                            <div class="text-sm text-gray-600">trees planted with this purchase</div>
                            <div class="text-xs text-gray-500 mt-1">helping restore forests worldwide</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Cart Section -->
    <section id="cart" class="section py-20 bg-white" style="padding-top: 140px;">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-5xl font-bold text-gray-900 mb-4">your impact cart</h2>
                <div class="flex justify-center items-center space-x-6">
                    <div class="text-center">
                        <div class="text-2xl font-bold eco-green">15</div>
                        <div class="text-sm text-gray-600">trees will be planted</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold eco-green">3</div>
                        <div class="text-sm text-gray-600">items in cart</div>
                    </div>
                    <div class="text-center">
                        <div class="text-2xl font-bold eco-green">carbon</div>
                        <div class="text-sm text-gray-600">neutral shipping</div>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2">
                    <div id="cart-items" class="space-y-4">
                        <div class="bg-gray-50 p-6 rounded-friendly flex items-center gap-6">
                            <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="Organic Hoodie" class="w-24 h-24 object-cover rounded-friendly" />
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold mb-1">cozy comfort hoodie</h3>
                                <div class="flex items-center mb-2">
                                    <i class="fas fa-tree eco-green mr-1 text-xs"></i>
                                    <span class="text-xs eco-green">plants 5 trees</span>
                                </div>
                                <p class="text-gray-600 text-sm">organic cotton • size: m</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <button class="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300">-</button>
                                <span class="font-semibold w-6 text-center">1</span>
                                <button class="sustainability-badge text-white w-8 h-8 rounded-full flex items-center justify-center hover:scale-105">+</button>
                            </div>
                            <div class="text-xl font-bold">$78</div>
                            <button class="text-gray-400 hover:text-red-500 transition-colors">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        
                        <div class="bg-gray-50 p-6 rounded-friendly flex items-center gap-6">
                            <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="Impact Tee" class="w-24 h-24 object-cover rounded-friendly" />
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold mb-1">everyday impact tee</h3>
                                <div class="flex items-center mb-2">
                                    <i class="fas fa-tree eco-green mr-1 text-xs"></i>
                                    <span class="text-xs eco-green">plants 5 trees</span>
                                </div>
                                <p class="text-gray-600 text-sm">recycled fibers • size: l</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <button class="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300">-</button>
                                <span class="font-semibold w-6 text-center">2</span>
                                <button class="sustainability-badge text-white w-8 h-8 rounded-full flex items-center justify-center hover:scale-105">+</button>
                            </div>
                            <div class="text-xl font-bold">$70</div>
                            <button class="text-gray-400 hover:text-red-500 transition-colors">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                        
                        <div class="bg-gray-50 p-6 rounded-friendly flex items-center gap-6">
                            <img src="https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="Earth Joggers" class="w-24 h-24 object-cover rounded-friendly" />
                            <div class="flex-1">
                                <h3 class="text-lg font-semibold mb-1">earth joggers</h3>
                                <div class="flex items-center mb-2">
                                    <i class="fas fa-tree eco-green mr-1 text-xs"></i>
                                    <span class="text-xs eco-green">plants 5 trees</span>
                                </div>
                                <p class="text-gray-600 text-sm">bamboo blend • size: m</p>
                            </div>
                            <div class="flex items-center gap-3">
                                <button class="bg-gray-200 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300">-</button>
                                <span class="font-semibold w-6 text-center">1</span>
                                <button class="sustainability-badge text-white w-8 h-8 rounded-full flex items-center justify-center hover:scale-105">+</button>
                            </div>
                            <div class="text-xl font-bold">$68</div>
                            <button class="text-gray-400 hover:text-red-500 transition-colors">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Cart Summary -->
                <div class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-friendly h-fit">
                    <h3 class="text-xl font-bold mb-6">order summary</h3>
                    
                    <!-- Environmental Impact -->
                    <div class="bg-white p-4 rounded-friendly mb-6">
                        <h4 class="font-semibold eco-green mb-3">your positive impact</h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="flex items-center"><i class="fas fa-tree eco-green mr-2"></i>trees planted</span>
                                <span class="font-semibold">15</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="flex items-center"><i class="fas fa-leaf eco-green mr-2"></i>co2 offset</span>
                                <span class="font-semibold">12kg</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="flex items-center"><i class="fas fa-water eco-green mr-2"></i>water saved</span>
                                <span class="font-semibold">850L</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="space-y-3 mb-6">
                        <div class="flex justify-between">
                            <span>subtotal</span>
                            <span class="font-semibold">$216</span>
                        </div>
                        <div class="flex justify-between">
                            <span>shipping</span>
                            <span class="font-semibold eco-green">free (carbon neutral)</span>
                        </div>
                        <div class="flex justify-between">
                            <span>tree planting</span>
                            <span class="font-semibold eco-green">included</span>
                        </div>
                        <hr class="my-4" />
                        <div class="flex justify-between text-xl font-bold">
                            <span>total</span>
                            <span>$216</span>
                        </div>
                    </div>
                    
                    <button onclick="showSection('checkout')" class="w-full sustainability-badge text-white py-4 rounded-friendly text-lg font-semibold hover:scale-105 transition-all mb-4">
                        <i class="fas fa-lock mr-2"></i>secure checkout
                    </button>
                    
                    <div class="text-center text-sm text-gray-600">
                        <i class="fas fa-shield-alt mr-1"></i>
                        secure payment • 30 day returns
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Checkout Section -->
    <section id="checkout" class="section py-20 bg-gray-50" style="padding-top: 140px;">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
                <h2 class="text-5xl font-bold text-gray-900 mb-4">secure checkout</h2>
                <div class="flex justify-center items-center space-x-6">
                    <div class="flex items-center text-sm text-gray-600">
                        <i class="fas fa-shield-alt eco-green mr-2"></i>
                        <span>ssl secured</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                        <i class="fas fa-truck eco-green mr-2"></i>
                        <span>carbon neutral shipping</span>
                    </div>
                    <div class="flex items-center text-sm text-gray-600">
                        <i class="fas fa-undo eco-green mr-2"></i>
                        <span>30 day returns</span>
                    </div>
                </div>
            </div>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div class="bg-white p-8 rounded-friendly shadow-lg">
                    <h3 class="text-2xl font-semibold mb-6">shipping information</h3>
                    <form class="space-y-6">
                        <div class="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="first name" class="px-4 py-3 border border-gray-300 rounded-friendly focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                            <input type="text" placeholder="last name" class="px-4 py-3 border border-gray-300 rounded-friendly focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        </div>
                        <input type="email" placeholder="email address" class="w-full px-4 py-3 border border-gray-300 rounded-friendly focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <input type="text" placeholder="street address" class="w-full px-4 py-3 border border-gray-300 rounded-friendly focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <div class="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="city" class="px-4 py-3 border border-gray-300 rounded-friendly focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                            <input type="text" placeholder="zip code" class="px-4 py-3 border border-gray-300 rounded-friendly focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        </div>
                        
                        <!-- Join Rewards -->
                        <div class="bg-green-50 p-4 rounded-friendly">
                            <label class="flex items-center">
                                <input type="checkbox" class="mr-3 text-green-500" checked />
                                <span class="text-sm">join our rewards program for points on this order</span>
                            </label>
                        </div>
                    </form>
                    
                    <h3 class="text-2xl font-semibold mb-6 mt-10">payment information</h3>
                    <form class="space-y-6">
                        <input type="text" placeholder="card number" class="w-full px-4 py-3 border border-gray-300 rounded-friendly focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        <div class="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="mm/yy" class="px-4 py-3 border border-gray-300 rounded-friendly focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                            <input type="text" placeholder="cvv" class="px-4 py-3 border border-gray-300 rounded-friendly focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                        </div>
                    </form>
                </div>
                
                <div class="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-friendly shadow-lg">
                    <h3 class="text-2xl font-semibold mb-6">your impact order</h3>
                    
                    <!-- Environmental Impact Summary -->
                    <div class="bg-white p-6 rounded-friendly mb-6">
                        <h4 class="font-semibold eco-green mb-4">positive impact summary</h4>
                        <div class="grid grid-cols-3 gap-4 text-center">
                            <div>
                                <div class="text-2xl font-bold eco-green">15</div>
                                <div class="text-xs text-gray-600">trees planted</div>
                            </div>
                            <div>
                                <div class="text-2xl font-bold eco-green">12kg</div>
                                <div class="text-xs text-gray-600">co2 offset</div>
                            </div>
                            <div>
                                <div class="text-2xl font-bold eco-green">850L</div>
                                <div class="text-xs text-gray-600">water saved</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="space-y-3 mb-6">
                        <div class="flex justify-between text-sm">
                            <span>cozy comfort hoodie (1)</span>
                            <span>$78</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span>everyday impact tee (2)</span>
                            <span>$70</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span>earth joggers (1)</span>
                            <span>$68</span>
                        </div>
                        <hr class="my-4" />
                        <div class="flex justify-between">
                            <span>subtotal</span>
                            <span class="font-semibold">$216</span>
                        </div>
                        <div class="flex justify-between">
                            <span>shipping</span>
                            <span class="font-semibold eco-green">free</span>
                        </div>
                        <div class="flex justify-between">
                            <span>tree planting</span>
                            <span class="font-semibold eco-green">included</span>
                        </div>
                        <div class="flex justify-between text-xl font-bold border-t pt-4">
                            <span>total</span>
                            <span>$216</span>
                        </div>
                    </div>
                    
                    <button onclick="completeOrder()" class="w-full sustainability-badge text-white py-4 rounded-friendly text-lg font-semibold hover:scale-105 transition-all mb-6">
                        <i class="fas fa-leaf mr-2"></i>complete sustainable order
                    </button>
                    
                    <div class="text-center">
                        <div class="text-sm text-gray-600 mb-2">by completing this order, you agree to plant 15 trees</div>
                        <div class="flex justify-center space-x-4 text-xs text-gray-500">
                            <span>🌱 100% organic materials</span>
                            <span>📦 recyclable packaging</span>
                            <span>🚚 carbon neutral delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sustainability Section -->
    <section id="sustainability" class="section py-20 bg-gradient-to-br from-green-100 to-blue-100" style="padding-top: 140px;">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-bold text-gray-900 mb-6">our impact mission</h2>
                <p class="text-2xl text-gray-700 max-w-4xl mx-auto">every item plants trees, every purchase makes a difference. join us in restoring the planet one comfortable piece at a time.</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div class="bg-white p-8 rounded-friendly text-center shadow-lg">
                    <i class="fas fa-tree text-5xl eco-green mb-4"></i>
                    <h3 class="text-2xl font-bold mb-4">tree planting promise</h3>
                    <p class="text-gray-600 mb-4">every single item you buy plants 5 trees in reforestation projects worldwide</p>
                    <div class="text-3xl font-bold eco-green tree-counter">2,847,392</div>
                    <div class="text-sm text-gray-500">trees planted so far</div>
                </div>
                
                <div class="bg-white p-8 rounded-friendly text-center shadow-lg">
                    <i class="fas fa-leaf text-5xl eco-green mb-4"></i>
                    <h3 class="text-2xl font-bold mb-4">sustainable materials</h3>
                    <p class="text-gray-600 mb-4">98% of our materials are organic, recycled, or sustainably sourced</p>
                    <div class="text-3xl font-bold eco-green">98%</div>
                    <div class="text-sm text-gray-500">sustainable materials used</div>
                </div>
                
                <div class="bg-white p-8 rounded-friendly text-center shadow-lg">
                    <i class="fas fa-globe text-5xl eco-green mb-4"></i>
                    <h3 class="text-2xl font-bold mb-4">carbon neutral</h3>
                    <p class="text-gray-600 mb-4">all shipping is carbon neutral and packaging is 100% recyclable</p>
                    <div class="text-3xl font-bold eco-green">0kg</div>
                    <div class="text-sm text-gray-500">net carbon footprint</div>
                </div>
            </div>
            
            <!-- Tree Map Visual -->
            <div class="bg-white rounded-friendly p-8 shadow-lg">
                <h3 class="text-2xl font-bold text-center mb-8">where your trees are planted</h3>
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div class="text-center">
                        <img src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150" alt="Forest restoration" class="w-full h-32 object-cover rounded-friendly mb-3" />
                        <h4 class="font-semibold mb-1">canada</h4>
                        <p class="text-sm text-gray-600">boreal forest restoration</p>
                        <div class="text-lg font-bold eco-green">847,392</div>
                        <div class="text-xs text-gray-500">trees planted</div>
                    </div>
                    <div class="text-center">
                        <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150" alt="Tropical reforestation" class="w-full h-32 object-cover rounded-friendly mb-3" />
                        <h4 class="font-semibold mb-1">brazil</h4>
                        <p class="text-sm text-gray-600">atlantic forest recovery</p>
                        <div class="text-lg font-bold eco-green">650,000</div>
                        <div class="text-xs text-gray-500">trees planted</div>
                    </div>
                    <div class="text-center">
                        <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150" alt="Reforestation project" class="w-full h-32 object-cover rounded-friendly mb-3" />
                        <h4 class="font-semibold mb-1">madagascar</h4>
                        <p class="text-sm text-gray-600">mangrove restoration</p>
                        <div class="text-lg font-bold eco-green">750,000</div>
                        <div class="text-xs text-gray-500">trees planted</div>
                    </div>
                    <div class="text-center">
                        <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150" alt="Ecosystem restoration" class="w-full h-32 object-cover rounded-friendly mb-3" />
                        <h4 class="font-semibold mb-1">kenya</h4>
                        <p class="text-sm text-gray-600">dryland restoration</p>
                        <div class="text-lg font-bold eco-green">600,000</div>
                        <div class="text-xs text-gray-500">trees planted</div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section py-20 bg-white" style="padding-top: 140px;">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 class="text-5xl font-bold text-gray-900 mb-6">about urbanwear</h2>
                    <p class="text-xl text-gray-700 mb-6 leading-relaxed">
                        we started with a simple belief: comfort shouldn't cost the earth. founded in 2019, urbanwear has planted over 2.8 million trees while creating the coziest, most sustainable clothing you'll ever wear.
                    </p>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                        every piece is made from organic, recycled, or sustainably sourced materials. we work directly with ethical manufacturers who share our values of fair wages, safe working conditions, and environmental responsibility.
                    </p>
                    
                    <!-- Our Values -->
                    <div class="grid grid-cols-2 gap-6">
                        <div class="text-center p-4">
                            <i class="fas fa-heart text-3xl eco-green mb-2"></i>
                            <h4 class="font-semibold mb-1">comfort first</h4>
                            <p class="text-sm text-gray-600">ultra-soft materials you'll never want to take off</p>
                        </div>
                        <div class="text-center p-4">
                            <i class="fas fa-globe text-3xl eco-green mb-2"></i>
                            <h4 class="font-semibold mb-1">planet positive</h4>
                            <p class="text-sm text-gray-600">every purchase actively restores ecosystems</p>
                        </div>
                        <div class="text-center p-4">
                            <i class="fas fa-handshake text-3xl eco-green mb-2"></i>
                            <h4 class="font-semibold mb-1">ethically made</h4>
                            <p class="text-sm text-gray-600">fair wages & safe working conditions</p>
                        </div>
                        <div class="text-center p-4">
                            <i class="fas fa-recycle text-3xl eco-green mb-2"></i>
                            <h4 class="font-semibold mb-1">circular design</h4>
                            <p class="text-sm text-gray-600">made to last, designed to be recycled</p>
                        </div>
                    </div>
                </div>
                
                <div>
                    <img src="https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" alt="Sustainable fashion team" class="w-full rounded-friendly shadow-2xl" />
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


    <script>
    let cartCount = 3;
    let treesPlanted = 2847392;
    
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    function addToCart(productId, productName, price) {
        cartCount++;
        treesPlanted += 5;
        document.getElementById('cart-count').textContent = cartCount;
        
        // Update tree counters
        const treeCounters = document.querySelectorAll('.tree-counter');
        treeCounters.forEach(counter => {
            counter.textContent = treesPlanted.toLocaleString();
        });
        
        // Show eco-friendly notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sustainability-badge text-white px-8 py-4 rounded-friendly font-semibold shadow-2xl z-50 text-center';
        notification.innerHTML = \`
            <i class="fas fa-check-circle text-2xl mb-2 block"></i>
            <div class="text-lg mb-1">\${productName} added!</div>
            <div class="text-sm opacity-90">+5 trees will be planted 🌱</div>
        \`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    function addToCartFromProduct() {
        cartCount++;
        treesPlanted += 5;
        document.getElementById('cart-count').textContent = cartCount;
        
        // Update tree counters
        const treeCounters = document.querySelectorAll('.tree-counter');
        treeCounters.forEach(counter => {
            counter.textContent = treesPlanted.toLocaleString();
        });
        
        // Show notification
        const notification = document.createElement('div');
        notification.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sustainability-badge text-white px-8 py-4 rounded-friendly font-semibold shadow-2xl z-50 text-center';
        notification.innerHTML = \`
            <i class="fas fa-tree text-2xl mb-2 block"></i>
            <div class="text-lg mb-1">added to cart!</div>
            <div class="text-sm opacity-90">5 trees will be planted 🌱</div>
        \`;
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
    
    function showProductDetail(productId) {
        const products = {
            'organic-hoodie': {
                title: 'organic comfort hoodie',
                price: '$78',
                description: 'made from 100% organic cotton that\'s grown without harmful pesticides. ultra-soft fleece lining for maximum comfort. every purchase plants 5 trees and supports regenerative farming practices.',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
            },
            'recycled-tee': {
                title: 'everyday impact tee',
                price: '$35',
                description: 'crafted from recycled fibers and organic cotton blend. soft, breathable, and gets better with every wash. plants 5 trees with every purchase.',
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
            },
            'earth-joggers': {
                title: 'earth joggers',
                price: '$68',
                description: 'ultra-soft bamboo blend joggers that move with you. bamboo naturally regulates temperature and is incredibly sustainable. plants 5 trees with purchase.',
                image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
            },
            'womens-hoodie': {
                title: 'cozy comfort hoodie',
                price: '$78',
                description: 'made from 100% organic cotton that\'s grown without harmful pesticides. ultra-soft fleece lining for maximum comfort. every purchase plants 5 trees and supports regenerative farming practices.',
                image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
            },
            'womens-tee': {
                title: 'everyday impact tee',
                price: '$35',
                description: 'crafted from recycled fibers and organic cotton blend. soft, breathable, and gets better with every wash. plants 5 trees with every purchase.',
                image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
            },
            'womens-joggers': {
                title: 'earth joggers',
                price: '$68',
                description: 'ultra-soft bamboo blend joggers that move with you. bamboo naturally regulates temperature and is incredibly sustainable. plants 5 trees with purchase.',
                image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
            },
            'womens-dress': {
                title: 'flow midi dress',
                price: '$88',
                description: 'made from sustainable TENCEL lyocell that flows beautifully and feels incredible. breathable, moisture-wicking, and biodegradable. plants 5 trees with purchase.',
                image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
            }
        };
        
        const product = products[productId];
        if (product) {
            document.getElementById('product-title').textContent = product.title;
            document.getElementById('product-price').textContent = product.price;
            document.getElementById('product-description').textContent = product.description;
            document.getElementById('product-image').src = product.image;
            showSection('product');
        }
    }
    
    function completeOrder() {
        // Show order completion
        const notification = document.createElement('div');
        notification.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
        notification.innerHTML = \`
            <div class="bg-white p-12 rounded-friendly text-center max-w-md mx-4">
                <i class="fas fa-check-circle text-6xl eco-green mb-6"></i>
                <h3 class="text-2xl font-bold mb-4">order complete!</h3>
                <p class="text-gray-600 mb-6">thank you for your sustainable purchase. your 15 trees will be planted within 30 days.</p>
                <button onclick="this.parentElement.parentElement.remove(); showSection('home');" class="sustainability-badge text-white px-8 py-3 rounded-friendly font-semibold">continue shopping</button>
            </div>
        \`;
        document.body.appendChild(notification);
    }
    
    // Animate tree counter on page load
    setTimeout(() => {
        const counters = document.querySelectorAll('.tree-counter');
        counters.forEach(counter => {
            const finalValue = parseInt(counter.textContent.replace(/,/g, ''));
            let currentValue = finalValue - 100000;
            const increment = 2000;
            
            const animate = () => {
                currentValue += increment;
                if (currentValue < finalValue) {
                    counter.textContent = currentValue.toLocaleString();
                    setTimeout(animate, 50);
                } else {
                    counter.textContent = finalValue.toLocaleString();
                }
            };
            animate();
        });
    }, 1000);
    </script>
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
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        body { font-family: "Inter", sans-serif; }
        .gradient-hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #a8edea 100%); }
        .section { display: none; }
        .section.active { display: block; }
        .nav-link { cursor: pointer; transition: all 0.3s ease; }
        .nav-link:hover { transform: translateY(-1px); }
        .card-hover { transition: all 0.4s ease; }
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15); }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-50 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div onclick="showSection('hero')" class="flex items-center cursor-pointer">
                    <i class="fas fa-brain text-3xl text-purple-600 mr-3"></i>
                    <span class="text-3xl font-bold text-gray-900">Taskly AI</span>
                </div>
                <div class="hidden md:flex space-x-8">
                    <a onclick="showSection('hero')" class="nav-link text-gray-700 hover:text-purple-600 font-medium">Home</a>
                    <a onclick="showSection('features')" class="nav-link text-gray-700 hover:text-purple-600 font-medium">Features</a>
                    <a onclick="showSection('pricing')" class="nav-link text-gray-700 hover:text-purple-600 font-medium">Pricing</a>
                    <a onclick="showSection('testimonials')" class="nav-link text-gray-700 hover:text-purple-600 font-medium">Testimonials</a>
                    <a onclick="showSection('contact')" class="nav-link text-gray-700 hover:text-purple-600 font-medium">Contact</a>
                </div>
                <div class="flex space-x-4">
                    <button class="text-purple-600 hover:text-purple-700 font-medium transition-colors">Sign In</button>
                    <button onclick="showSection('pricing')" class="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-all duration-300 hover:scale-105 font-semibold">Get Started</button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="section active">

        <section class="gradient-hero text-white pt-20 pb-16 min-h-screen flex items-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div class="max-w-5xl mx-auto">
                    <h1 class="text-7xl font-bold mb-8 leading-tight">Supercharge Your Productivity with AI</h1>
                    <p class="text-2xl mb-12 opacity-90 font-light leading-relaxed">Taskly AI transforms how teams work by intelligently organizing tasks, predicting deadlines, and optimizing workflows automatically.</p>
                    <div class="flex justify-center gap-6 mb-16">
                        <button onclick="showSection('pricing')" class="bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">Start Free Trial</button>
                        <button onclick="alert('Demo video would play here!')" class="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300">Watch Demo</button>
                    </div>
                    <div class="max-w-5xl mx-auto">
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" alt="AI dashboard interface" class="rounded-2xl shadow-2xl" />
                    </div>
                </div>
            </div>
        </section>
    </section>

    <!-- Features Section -->
    <section id="features" class="section py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20">
                <h2 class="text-6xl font-bold text-gray-900 mb-8">Intelligent Features</h2>
                <p class="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">Powered by advanced AI algorithms that learn from your work patterns and adapt to your team's unique workflow</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div class="card-hover text-center p-10 rounded-3xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
                    <div class="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <i class="fas fa-robot text-3xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-6">Smart Prioritization</h3>
                    <p class="text-gray-600 text-lg leading-relaxed">AI automatically prioritizes your tasks based on deadlines, importance, and team dependencies. Never miss what matters most.</p>
                </div>
                <div class="card-hover text-center p-10 rounded-3xl bg-gradient-to-br from-purple-50 to-purple-100 shadow-lg">
                    <div class="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <i class="fas fa-clock text-3xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-6">Deadline Prediction</h3>
                    <p class="text-gray-600 text-lg leading-relaxed">Predictive analytics forecast project completion times with 95% accuracy. Plan better, deliver faster.</p>
                </div>
                <div class="card-hover text-center p-10 rounded-3xl bg-gradient-to-br from-green-50 to-green-100 shadow-lg">
                    <div class="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <i class="fas fa-users text-3xl text-white"></i>
                    </div>
                    <h3 class="text-2xl font-semibold mb-6">Team Sync</h3>
                    <p class="text-gray-600 text-lg leading-relaxed">Real-time collaboration with intelligent conflict resolution and resource optimization. Work together seamlessly.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Section -->
    <section id="pricing" class="section py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20">
                <h2 class="text-6xl font-bold text-gray-900 mb-8">Simple Pricing</h2>
                <p class="text-2xl text-gray-600">Choose the plan that fits your team size and unlock the power of AI</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                <div class="card-hover bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
                    <h3 class="text-3xl font-semibold mb-6">Starter</h3>
                    <div class="text-5xl font-bold mb-8">$9<span class="text-xl text-gray-500">/month</span></div>
                    <ul class="space-y-4 mb-10">
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-4 text-lg"></i><span class="text-lg">Up to 5 team members</span></li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-4 text-lg"></i><span class="text-lg">Basic AI features</span></li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-4 text-lg"></i><span class="text-lg">100 projects</span></li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-4 text-lg"></i><span class="text-lg">Email support</span></li>
                    </ul>
                    <button onclick="alert('Starter plan selected!')" class="w-full bg-gray-100 text-gray-900 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-lg">Get Started</button>
                </div>
                <div class="bg-purple-600 text-white p-10 rounded-3xl shadow-2xl transform scale-105 relative">
                    <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">MOST POPULAR</span>
                    </div>
                    <h3 class="text-3xl font-semibold mb-6 mt-4">Professional</h3>
                    <div class="text-5xl font-bold mb-8">$29<span class="text-xl opacity-75">/month</span></div>
                    <ul class="space-y-4 mb-10">
                        <li class="flex items-center"><i class="fas fa-check mr-4 text-lg"></i><span class="text-lg">Up to 25 team members</span></li>
                        <li class="flex items-center"><i class="fas fa-check mr-4 text-lg"></i><span class="text-lg">Advanced AI features</span></li>
                        <li class="flex items-center"><i class="fas fa-check mr-4 text-lg"></i><span class="text-lg">Unlimited projects</span></li>
                        <li class="flex items-center"><i class="fas fa-check mr-4 text-lg"></i><span class="text-lg">Priority support</span></li>
                        <li class="flex items-center"><i class="fas fa-check mr-4 text-lg"></i><span class="text-lg">Analytics dashboard</span></li>
                    </ul>
                    <button onclick="alert('Professional plan selected!')" class="w-full bg-white text-purple-600 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">Get Started</button>
                </div>
                <div class="card-hover bg-white p-10 rounded-3xl shadow-lg border border-gray-200">
                    <h3 class="text-3xl font-semibold mb-6">Enterprise</h3>
                    <div class="text-5xl font-bold mb-8">$99<span class="text-xl text-gray-500">/month</span></div>
                    <ul class="space-y-4 mb-10">
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-4 text-lg"></i><span class="text-lg">Unlimited team members</span></li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-4 text-lg"></i><span class="text-lg">Custom AI training</span></li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-4 text-lg"></i><span class="text-lg">White-label options</span></li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-4 text-lg"></i><span class="text-lg">24/7 phone support</span></li>
                        <li class="flex items-center"><i class="fas fa-check text-green-500 mr-4 text-lg"></i><span class="text-lg">Custom integrations</span></li>
                    </ul>
                    <button onclick="showSection('contact')" class="w-full bg-gray-100 text-gray-900 py-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors text-lg">Contact Sales</button>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="section py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20">
                <h2 class="text-6xl font-bold text-gray-900 mb-8">What Our Users Say</h2>
                <p class="text-2xl text-gray-600">Join thousands of teams already using AI to work smarter</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div class="card-hover bg-gradient-to-br from-purple-50 to-blue-50 p-10 rounded-3xl shadow-lg">
                    <div class="flex text-yellow-400 text-2xl mb-8">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="text-gray-700 text-lg mb-8 leading-relaxed italic">"Taskly AI has completely transformed how our team manages projects. The AI predictions are incredibly accurate and have helped us deliver every project on time."</p>
                    <div class="flex items-center">
                        <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="User" class="w-16 h-16 rounded-full mr-4 object-cover" />
                        <div>
                            <div class="font-semibold text-lg">Alex Johnson</div>
                            <div class="text-gray-600">CTO, TechCorp</div>
                        </div>
                    </div>
                </div>
                <div class="card-hover bg-gradient-to-br from-green-50 to-teal-50 p-10 rounded-3xl shadow-lg">
                    <div class="flex text-yellow-400 text-2xl mb-8">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="text-gray-700 text-lg mb-8 leading-relaxed italic">"The smart prioritization feature is a game-changer. I never miss important tasks anymore, and my productivity has increased by 40% since using Taskly AI."</p>
                    <div class="flex items-center">
                        <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="User" class="w-16 h-16 rounded-full mr-4 object-cover" />
                        <div>
                            <div class="font-semibold text-lg">Sarah Chen</div>
                            <div class="text-gray-600">Product Manager, Innovate</div>
                        </div>
                    </div>
                </div>
                <div class="card-hover bg-gradient-to-br from-orange-50 to-red-50 p-10 rounded-3xl shadow-lg">
                    <div class="flex text-yellow-400 text-2xl mb-8">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <p class="text-gray-700 text-lg mb-8 leading-relaxed italic">"Taskly AI's team sync feature has revolutionized our remote work. Everyone stays on the same page, and conflicts are resolved automatically."</p>
                    <div class="flex items-center">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="User" class="w-16 h-16 rounded-full mr-4 object-cover" />
                        <div>
                            <div class="font-semibold text-lg">Michael Rodriguez</div>
                            <div class="text-gray-600">Founder, StartupX</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section py-20 bg-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h2 class="text-6xl font-bold mb-8">Get in Touch</h2>
                    <p class="text-2xl mb-12 opacity-90 leading-relaxed">Ready to supercharge your team's productivity? Contact our experts and discover how Taskly AI can transform your workflow.</p>
                    <div class="space-y-8">
                        <div class="flex items-center">
                            <i class="fas fa-envelope text-3xl mr-6 text-purple-400"></i>
                            <div>
                                <div class="text-xl font-semibold">Email Us</div>
                                <div class="text-lg opacity-75">hello@taskly.ai</div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-phone text-3xl mr-6 text-purple-400"></i>
                            <div>
                                <div class="text-xl font-semibold">Call Us</div>
                                <div class="text-lg opacity-75">+1 (555) 123-4567</div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <i class="fas fa-clock text-3xl mr-6 text-purple-400"></i>
                            <div>
                                <div class="text-xl font-semibold">Support Hours</div>
                                <div class="text-lg opacity-75">24/7 for Enterprise customers</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white bg-opacity-10 backdrop-blur-lg p-10 rounded-3xl">
                    <form class="space-y-6">
                        <div class="grid grid-cols-2 gap-6">
                            <input type="text" placeholder="First Name" class="px-6 py-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg" />
                            <input type="text" placeholder="Last Name" class="px-6 py-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg" />
                        </div>
                        <input type="email" placeholder="Work Email" class="w-full px-6 py-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg" />
                        <input type="text" placeholder="Company Name" class="w-full px-6 py-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg" />
                        <select class="w-full px-6 py-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 text-lg">
                            <option value="" class="text-gray-900">Team Size</option>
                            <option value="1-5" class="text-gray-900">1-5 members</option>
                            <option value="6-25" class="text-gray-900">6-25 members</option>
                            <option value="26-100" class="text-gray-900">26-100 members</option>
                            <option value="100+" class="text-gray-900">100+ members</option>
                        </select>
                        <textarea placeholder="Tell us about your team's needs" rows="4" class="w-full px-6 py-4 rounded-lg bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none text-lg"></textarea>
                        <button type="submit" class="w-full bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 text-lg">
                            <i class="fas fa-rocket mr-2"></i>Get Started Today
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 gradient-hero text-white">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-6xl font-bold mb-8">Ready to Transform Your Workflow?</h2>
            <p class="text-2xl mb-12 opacity-90 leading-relaxed">Join thousands of teams already using AI to work smarter, not harder.</p>
            <div class="flex justify-center gap-6">
                <button onclick="showSection('pricing')" class="bg-white text-purple-600 px-10 py-4 rounded-lg font-semibold text-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Start Free Trial
                </button>
                <button onclick="alert('Demo would be scheduled!')" class="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-xl hover:bg-white hover:text-purple-600 transition-all duration-300">
                    Schedule Demo
                </button>
            </div>
        </div>
    </section>

    <script>
    function showSection(sectionId) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.add('active');
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    </script>
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
