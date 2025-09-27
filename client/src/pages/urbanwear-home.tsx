import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { ShoppingBag, Heart, Search, ChevronDown, Leaf, Recycle, Trees, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import type { Product } from "@shared/schema";

function formatPrice(priceInCents: number) {
  return `$${(priceInCents / 100).toFixed(2)}`;
}

export default function UrbanWearHome() {
  const [treesPlanted] = useState(2847392);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [womenMenuOpen, setWomenMenuOpen] = useState(false);
  const [menMenuOpen, setMenMenuOpen] = useState(false);


  // Tree counter animation
  const animatedTreeCount = treesPlanted.toLocaleString();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Impact Banner */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 py-3 text-center border-b">
        <div className="flex justify-center items-center space-x-4 text-sm">
          <Trees className="w-4 h-4 text-green-600" />
          <span className="font-medium text-gray-800">
            every item plants 10 trees • <span className="font-bold text-green-600">{animatedTreeCount}</span> trees planted & counting
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/urbanwear" className="flex items-center space-x-2 text-2xl font-bold text-gray-900 hover:text-green-600 transition-colors" data-testid="link-logo">
              <Leaf className="w-7 h-7 text-green-600" />
              <span>UrbanWear</span>
            </Link>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="nav-women" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent group hover:text-gray-900 font-medium text-[#fcfcfc]">
                    Women's
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-56 p-4 space-y-2">
                      <NavigationMenuLink asChild>
                        <Link href="/urbanwear/women?category=hoodies" className="block py-2 text-gray-700 hover:text-green-600 transition-colors" data-testid="link-women-hoodies">
                          Hoodies & Sweatshirts
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/urbanwear/women?category=tees" className="block py-2 text-gray-700 hover:text-green-600 transition-colors" data-testid="link-women-tees">
                          T-Shirts & Tops
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/urbanwear/women?category=pants" className="block py-2 text-gray-700 hover:text-green-600 transition-colors" data-testid="link-women-pants">
                          Pants & Joggers
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/urbanwear/women?category=dresses" className="block py-2 text-gray-700 hover:text-green-600 transition-colors" data-testid="link-women-dresses">
                          Dresses
                        </Link>
                      </NavigationMenuLink>
                      <div className="border-t pt-2 mt-2">
                        <NavigationMenuLink asChild>
                          <Link href="/urbanwear/women" className="block py-2 text-green-600 font-medium hover:text-green-700 transition-colors" data-testid="link-women-all">
                            View All Women's
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger data-testid="nav-men" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent group hover:text-gray-900 font-medium text-[#f0f1f2]">
                    Men's
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-56 p-4 space-y-2">
                      <NavigationMenuLink asChild>
                        <Link href="/urbanwear/men?category=hoodies" className="block py-2 text-gray-700 hover:text-green-600 transition-colors" data-testid="link-men-hoodies">
                          Hoodies & Sweatshirts
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/urbanwear/men?category=tees" className="block py-2 text-gray-700 hover:text-green-600 transition-colors" data-testid="link-men-tees">
                          T-Shirts
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="/urbanwear/men?category=pants" className="block py-2 text-gray-700 hover:text-green-600 transition-colors" data-testid="link-men-pants">
                          Pants & Joggers
                        </Link>
                      </NavigationMenuLink>
                      <div className="border-t pt-2 mt-2">
                        <NavigationMenuLink asChild>
                          <Link href="/urbanwear/men" className="block py-2 text-green-600 font-medium hover:text-green-700 transition-colors" data-testid="link-men-all">
                            View All Men's
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/urbanwear/impact" className="text-gray-700 hover:text-gray-900 font-medium" data-testid="nav-impact">
                      Our Impact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/urbanwear/about" className="text-gray-700 hover:text-gray-900 font-medium" data-testid="nav-about">
                      About
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                data-testid="button-search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-red-500 transition-colors" data-testid="button-wishlist">
                <Heart className="w-5 h-5" />
              </button>
              <div className="relative">
                <button className="p-2 text-gray-600 hover:text-gray-900 transition-colors" data-testid="button-cart">
                  <ShoppingBag className="w-5 h-5" />
                </button>
                <span className="absolute -top-1 -right-1 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
                  3
                </span>
              </div>
              
              {/* Mobile Menu Button */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm" className="md:hidden" data-testid="button-mobile-menu">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="flex items-center justify-between mb-8">
                    <Link href="/urbanwear" className="flex items-center space-x-2 text-xl font-bold text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                      <Leaf className="w-6 h-6 text-green-600" />
                      <span>UrbanWear</span>
                    </Link>
                  </div>
                  
                  <div className="space-y-4">
                    <Collapsible open={womenMenuOpen} onOpenChange={setWomenMenuOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left font-medium text-gray-900" data-testid="mobile-women">
                        Women's
                        <ChevronDown className={`w-4 h-4 transition-transform ${womenMenuOpen ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 pl-4">
                        <Link href="/urbanwear/women?category=hoodies" className="block py-2 text-gray-700 hover:text-green-600" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-women-hoodies">
                          Hoodies & Sweatshirts
                        </Link>
                        <Link href="/urbanwear/women?category=tees" className="block py-2 text-gray-700 hover:text-green-600" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-women-tees">
                          T-Shirts & Tops
                        </Link>
                        <Link href="/urbanwear/women?category=pants" className="block py-2 text-gray-700 hover:text-green-600" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-women-pants">
                          Pants & Joggers
                        </Link>
                        <Link href="/urbanwear/women?category=dresses" className="block py-2 text-gray-700 hover:text-green-600" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-women-dresses">
                          Dresses
                        </Link>
                        <Link href="/urbanwear/women" className="block py-2 text-green-600 font-medium" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-women-all">
                          View All Women's
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Collapsible open={menMenuOpen} onOpenChange={setMenMenuOpen}>
                      <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-left font-medium text-gray-900" data-testid="mobile-men">
                        Men's
                        <ChevronDown className={`w-4 h-4 transition-transform ${menMenuOpen ? 'rotate-180' : ''}`} />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-2 pl-4">
                        <Link href="/urbanwear/men?category=hoodies" className="block py-2 text-gray-700 hover:text-green-600" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-men-hoodies">
                          Hoodies & Sweatshirts
                        </Link>
                        <Link href="/urbanwear/men?category=tees" className="block py-2 text-gray-700 hover:text-green-600" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-men-tees">
                          T-Shirts
                        </Link>
                        <Link href="/urbanwear/men?category=pants" className="block py-2 text-gray-700 hover:text-green-600" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-men-pants">
                          Pants & Joggers
                        </Link>
                        <Link href="/urbanwear/men" className="block py-2 text-green-600 font-medium" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-men-all">
                          View All Men's
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>
                    
                    <Link href="/urbanwear/impact" className="block py-3 text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-impact">
                      Our Impact
                    </Link>
                    
                    <Link href="/urbanwear/about" className="block py-3 text-gray-900 font-medium" onClick={() => setMobileMenuOpen(false)} data-testid="mobile-about">
                      About
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        {searchOpen && (
          <div className="border-t bg-white p-4">
            <div className="max-w-2xl mx-auto relative">
              <Input
                placeholder="Search sustainable clothing..."
                className="w-full pr-10"
                data-testid="input-search"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setSearchOpen(false)}
                data-testid="button-search-close"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Comfort Made Sustainable
            </h1>
            <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Every piece plants trees, captures carbon, and creates positive impact. Because feeling good should do good too.
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <Link href="/urbanwear/women">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-10 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105" data-testid="button-shop-womens">
                  SHOP WOMEN'S
                </Button>
              </Link>
              <Link href="/urbanwear/men">
                <Button variant="secondary" className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 text-lg font-semibold transition-all duration-300" data-testid="button-shop-mens">
                  SHOP MEN'S
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Product Showcase */}
          {!newArrivalsLoading && newArrivals.length >= 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {newArrivals.slice(0, 3).map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                  data-testid={`card-hero-product-${product.id}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <Leaf className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm text-green-600 font-medium">plants 10 trees</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.material}</p>
                    <div className="text-2xl font-bold">{formatPrice(product.price)}</div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Impact Counter */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="flex justify-center items-center space-x-8 flex-wrap">
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-green-600 mb-2">{animatedTreeCount}</div>
                <div className="text-gray-600 font-medium">trees planted</div>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600 font-medium">sustainable materials</div>
              </div>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold text-green-600 mb-2">15k+</div>
                <div className="text-gray-600 font-medium">happy customers</div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Most Popular Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Most Popular Categories</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Women's Hoodies & Sweatshirts", href: "/urbanwear/women/hoodies", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" },
              { name: "Men's Hoodies", href: "/urbanwear/men/hoodies", image: "https://cdn.pixabay.com/photo/2021/09/13/07/08/man-6620481_1280.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" },
              { name: "Women's Joggers & Pants", href: "/urbanwear/women/pants", image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" },
              { name: "Men's Sweatpants & Joggers", href: "/urbanwear/men/pants", image: "https://cdn.pixabay.com/photo/2014/12/25/20/52/runner-580055_1280.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" },
              { name: "Women's Dresses", href: "/urbanwear/women/dresses", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" },
              { name: "Men's T-Shirts", href: "/urbanwear/men/tees", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" },
              { name: "Women's T-Shirts", href: "/urbanwear/women/tees", image: "https://cdn.pixabay.com/photo/2020/04/09/14/42/girls-5021801_1280.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" },
              { name: "Accessories", href: "/urbanwear/accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=500" }
            ].map((category, index) => (
              <Link key={index} href={category.href}>
                <div className="group cursor-pointer" data-testid={`category-${category.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
                  <div className="relative rounded-2xl overflow-hidden mb-4 aspect-square">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-center font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Tree Counter */}
      <section className="bg-green-600 py-6 overflow-hidden">
        <div className="flex animate-scroll">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center space-x-8 text-white whitespace-nowrap px-8">
              <span className="text-lg font-medium">TOGETHER WE'VE PLANTED</span>
              <span className="text-2xl font-bold">{animatedTreeCount}</span>
              <span className="text-lg font-medium">TREES</span>
              <Trees className="w-6 h-6" />
            </div>
          ))}
        </div>
      </section>

      {/* Every Item Plants Trees Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Every Item Plants 10 Trees</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Join Us in Protecting the World We Live In. We're on a mission to restore the planet by planting trees and creating Earth-First, sustainably made apparel.
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/urbanwear/impact">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-semibold" data-testid="button-our-impact">
                  OUR IMPACT
                </Button>
              </Link>
              <Link href="/urbanwear/about">
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 font-semibold" data-testid="button-about-us">
                  ABOUT US
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600"
                alt="Forest restoration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Forest Restoration</h3>
                <p className="text-sm">Restoring ecosystems worldwide</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2021/10/28/14/32/jeans-6749852_1280.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600"
                alt="Sustainable materials"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Sustainable Materials</h3>
                <p className="text-sm">Organic cotton, hemp, and recycled fibers</p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600"
                alt="Community impact"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Community Impact</h3>
                <p className="text-sm">Creating jobs in communities that need them most</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Rewarded Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
                <Recycle className="w-10 h-10 text-green-600" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Rewarded For Doing Good</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our Rewards Program to earn points that can be used as cash on future purchases.
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 font-semibold" data-testid="button-create-account">
                CREATE ACCOUNT
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 font-semibold" data-testid="button-login">
                LOG IN TO VIEW POINTS
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
