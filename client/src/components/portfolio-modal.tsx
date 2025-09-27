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
    <title>UrbanWear Co. - Luxury Fashion</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@200;300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        .font-serif { font-family: "Playfair Display", serif; }
        .font-sans { font-family: "Inter", sans-serif; }
        .hero-gradient { background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); }
        .section { display: none; }
        .section.active { display: block; }
        .nav-link { cursor: pointer; transition: all 0.3s ease; }
        .card-hover { transition: all 0.3s ease; }
        .card-hover:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); }
        .cart-count { background: #ef4444; color: white; border-radius: 50%; padding: 2px 6px; font-size: 12px; position: absolute; top: -8px; right: -8px; }
        .product-card { cursor: pointer; }
    </style>
</head>
<body class="font-sans bg-white">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-50 border-b backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center py-4">
                <div onclick="showSection('home')" class="text-3xl font-serif font-bold text-black cursor-pointer">UrbanWear</div>
                <div class="hidden md:flex space-x-8">
                    <a onclick="showSection('home')" class="nav-link text-gray-700 hover:text-black font-medium">Home</a>
                    <a onclick="showSection('shop')" class="nav-link text-gray-700 hover:text-black font-medium">Shop</a>
                    <a onclick="showSection('product')" class="nav-link text-gray-700 hover:text-black font-medium">Products</a>
                    <a onclick="showSection('cart')" class="nav-link text-gray-700 hover:text-black font-medium">Cart</a>
                    <a onclick="showSection('checkout')" class="nav-link text-gray-700 hover:text-black font-medium">Checkout</a>
                </div>
                <div class="flex items-center space-x-4">
                    <i class="fas fa-search text-gray-700 hover:text-black cursor-pointer text-xl"></i>
                    <i class="fas fa-heart text-gray-700 hover:text-black cursor-pointer text-xl"></i>
                    <div class="relative">
                        <i onclick="showSection('cart')" class="fas fa-shopping-bag text-gray-700 hover:text-black cursor-pointer text-xl"></i>
                        <span id="cart-count" class="cart-count">2</span>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Home Section -->
    <section id="home" class="section active">

        <!-- Hero Section -->
        <section class="hero-gradient text-white pt-20 pb-0 min-h-screen flex items-center">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 class="text-7xl font-serif font-bold mb-8 leading-tight">Luxury Redefined</h1>
                        <p class="text-2xl mb-10 opacity-90 font-light leading-relaxed">Discover our exclusive collection of premium fashion pieces crafted for the modern urban lifestyle.</p>
                        <div class="flex gap-6">
                            <button onclick="showSection('shop')" class="bg-white text-black px-10 py-4 font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-lg">Shop Collection</button>
                            <button onclick="showSection('product')" class="border-2 border-white text-white px-10 py-4 font-semibold hover:bg-white hover:text-black transition-all duration-300 rounded-lg">Explore</button>
                        </div>
                    </div>
                    <div class="hidden lg:block">
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" alt="Luxury fashion model" class="rounded-2xl shadow-2xl w-full object-cover" />
                    </div>
                </div>
            </div>
        </section>
    </section>

    <!-- Shop Section -->
    <section id="shop" class="section py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-5xl font-serif font-bold text-gray-900 mb-6">Shop Collection</h2>
                <p class="text-xl text-gray-600">Curated pieces from our latest arrivals</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div onclick="showProductDetail('blazer')" class="product-card card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Premium Blazer" class="w-full h-80 object-cover" />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Premium Blazer</h3>
                        <p class="text-gray-600 mb-4">Tailored perfection</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$299</span>
                            <button onclick="event.stopPropagation(); addToCart('blazer')" class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div onclick="showProductDetail('dress')" class="product-card card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Silk Dress" class="w-full h-80 object-cover" />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Silk Dress</h3>
                        <p class="text-gray-600 mb-4">Timeless elegance</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$459</span>
                            <button onclick="event.stopPropagation(); addToCart('dress')" class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div onclick="showProductDetail('heels')" class="product-card card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Designer Heels" class="w-full h-80 object-cover" />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Designer Heels</h3>
                        <p class="text-gray-600 mb-4">Statement footwear</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$399</span>
                            <button onclick="event.stopPropagation(); addToCart('heels')" class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div onclick="showProductDetail('handbag')" class="product-card card-hover bg-white rounded-2xl shadow-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500" alt="Leather Handbag" class="w-full h-80 object-cover" />
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Leather Handbag</h3>
                        <p class="text-gray-600 mb-4">Handcrafted luxury</p>
                        <div class="flex justify-between items-center">
                            <span class="text-2xl font-bold">$689</span>
                            <button onclick="event.stopPropagation(); addToCart('handbag')" class="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Product Detail Section -->
    <section id="product" class="section py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <img id="product-image" src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800" alt="Product" class="w-full rounded-2xl shadow-2xl" />
                </div>
                <div class="flex flex-col justify-center">
                    <h1 id="product-title" class="text-5xl font-serif font-bold mb-6">Premium Blazer</h1>
                    <p id="product-description" class="text-xl text-gray-600 mb-8 leading-relaxed">A masterpiece of tailoring, this premium blazer combines classic elegance with contemporary style. Crafted from the finest materials, it's perfect for the modern professional.</p>
                    <div id="product-price" class="text-4xl font-bold mb-8">$299</div>
                    <div class="mb-8">
                        <h3 class="text-lg font-semibold mb-4">Size</h3>
                        <div class="flex gap-3">
                            <button class="border-2 border-gray-300 px-4 py-2 rounded-lg hover:border-black transition-colors">XS</button>
                            <button class="border-2 border-gray-300 px-4 py-2 rounded-lg hover:border-black transition-colors">S</button>
                            <button class="border-2 border-black bg-black text-white px-4 py-2 rounded-lg">M</button>
                            <button class="border-2 border-gray-300 px-4 py-2 rounded-lg hover:border-black transition-colors">L</button>
                            <button class="border-2 border-gray-300 px-4 py-2 rounded-lg hover:border-black transition-colors">XL</button>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <button onclick="addToCartFromProduct()" class="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex-1">Add to Cart</button>
                        <button class="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-colors">♡</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Cart Section -->
    <section id="cart" class="section py-20 bg-gray-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-5xl font-serif font-bold text-center mb-16">Shopping Cart</h2>
            <div id="cart-items" class="space-y-6 mb-8">
                <div class="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-6">
                    <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="Premium Blazer" class="w-20 h-20 object-cover rounded-lg" />
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold mb-2">Premium Blazer</h3>
                        <p class="text-gray-600">Size: M</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <button class="bg-gray-200 px-3 py-1 rounded">-</button>
                        <span class="font-semibold">1</span>
                        <button class="bg-gray-200 px-3 py-1 rounded">+</button>
                    </div>
                    <div class="text-xl font-bold">$299</div>
                    <button class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-lg flex items-center gap-6">
                    <img src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" alt="Silk Dress" class="w-20 h-20 object-cover rounded-lg" />
                    <div class="flex-1">
                        <h3 class="text-xl font-semibold mb-2">Silk Dress</h3>
                        <p class="text-gray-600">Size: S</p>
                    </div>
                    <div class="flex items-center gap-4">
                        <button class="bg-gray-200 px-3 py-1 rounded">-</button>
                        <span class="font-semibold">1</span>
                        <button class="bg-gray-200 px-3 py-1 rounded">+</button>
                    </div>
                    <div class="text-xl font-bold">$459</div>
                    <button class="text-red-500 hover:text-red-700">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="bg-white p-8 rounded-2xl shadow-lg">
                <div class="flex justify-between items-center mb-4">
                    <span class="text-lg">Subtotal:</span>
                    <span class="text-lg font-semibold">$758</span>
                </div>
                <div class="flex justify-between items-center mb-4">
                    <span class="text-lg">Shipping:</span>
                    <span class="text-lg font-semibold">Free</span>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between items-center mb-8">
                    <span class="text-2xl font-bold">Total:</span>
                    <span class="text-2xl font-bold">$758</span>
                </div>
                <button onclick="showSection('checkout')" class="w-full bg-black text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">Proceed to Checkout</button>
            </div>
        </div>
    </section>

    <!-- Checkout Section -->
    <section id="checkout" class="section py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-5xl font-serif font-bold text-center mb-16">Checkout</h2>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                <div>
                    <h3 class="text-2xl font-semibold mb-6">Shipping Information</h3>
                    <form class="space-y-6">
                        <div class="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                            <input type="text" placeholder="Last Name" class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>
                        <input type="email" placeholder="Email Address" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <input type="text" placeholder="Address" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <div class="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="City" class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                            <input type="text" placeholder="ZIP Code" class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>
                    </form>
                    
                    <h3 class="text-2xl font-semibold mb-6 mt-10">Payment Information</h3>
                    <form class="space-y-6">
                        <input type="text" placeholder="Card Number" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        <div class="grid grid-cols-2 gap-4">
                            <input type="text" placeholder="MM/YY" class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                            <input type="text" placeholder="CVV" class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black" />
                        </div>
                    </form>
                </div>
                
                <div class="bg-gray-50 p-8 rounded-2xl">
                    <h3 class="text-2xl font-semibold mb-6">Order Summary</h3>
                    <div class="space-y-4 mb-6">
                        <div class="flex justify-between">
                            <span>Premium Blazer (1)</span>
                            <span>$299</span>
                        </div>
                        <div class="flex justify-between">
                            <span>Silk Dress (1)</span>
                            <span>$459</span>
                        </div>
                        <hr />
                        <div class="flex justify-between text-lg font-semibold">
                            <span>Total</span>
                            <span>$758</span>
                        </div>
                    </div>
                    <button class="w-full bg-black text-white py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors">Complete Order</button>
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
    let cartCount = 2;
    
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
    
    function addToCart(productId) {
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
        alert('Product added to cart!');
    }
    
    function addToCartFromProduct() {
        cartCount++;
        document.getElementById('cart-count').textContent = cartCount;
        alert('Product added to cart!');
    }
    
    function showProductDetail(productId) {
        const products = {
            blazer: {
                title: 'Premium Blazer',
                price: '$299',
                description: 'A masterpiece of tailoring, this premium blazer combines classic elegance with contemporary style. Crafted from the finest materials, it\'s perfect for the modern professional.',
                image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
            },
            dress: {
                title: 'Silk Dress',
                price: '$459',
                description: 'An exquisite silk dress that embodies timeless elegance. The flowing silhouette and luxurious fabric make it perfect for special occasions.',
                image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
            },
            heels: {
                title: 'Designer Heels',
                price: '$399',
                description: 'Statement footwear that combines comfort with style. These designer heels are crafted from premium leather and feature a comfortable heel height.',
                image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
            },
            handbag: {
                title: 'Leather Handbag',
                price: '$689',
                description: 'Handcrafted luxury handbag made from the finest Italian leather. Features multiple compartments and a timeless design that complements any outfit.',
                image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800'
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
