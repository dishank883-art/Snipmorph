import { Link } from "wouter";
import { ArrowLeft, TreePine, Globe, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UrbanWearImpact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-4">
            <Link href="/urbanwear">
              <Button variant="ghost" size="sm" data-testid="link-back-home">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground" data-testid="page-title">Our Impact</h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-green-50 to-white dark:from-green-950/20 dark:to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Together, We're <span className="text-green-600">Reforesting</span> the Planet
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Every purchase plants trees. Every tree fights climate change. Every customer becomes part of our mission to create a more sustainable world.
          </p>
          <div className="bg-white dark:bg-card rounded-2xl shadow-lg p-8 inline-block">
            <div className="text-6xl font-bold text-green-600 mb-2">2.5M+</div>
            <div className="text-lg text-muted-foreground">Trees Planted</div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="stat-trees">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <TreePine className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">2,567,843</div>
              <div className="text-muted-foreground">Trees Planted</div>
            </div>
            
            <div className="text-center" data-testid="stat-countries">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">47</div>
              <div className="text-muted-foreground">Countries Reached</div>
            </div>
            
            <div className="text-center" data-testid="stat-customers">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">156,000+</div>
              <div className="text-muted-foreground">Eco Warriors</div>
            </div>
            
            <div className="text-center" data-testid="stat-carbon">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-950/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">15,000</div>
              <div className="text-muted-foreground">Tons CO₂ Offset</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">How Every Purchase Makes a Difference</h2>
            <p className="text-xl text-muted-foreground">Simple steps, powerful impact</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center" data-testid="step-1">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-foreground mb-4">You Shop</h3>
              <p className="text-muted-foreground">Browse our sustainable streetwear collection and make a purchase you love.</p>
            </div>
            
            <div className="text-center" data-testid="step-2">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-foreground mb-4">We Plant</h3>
              <p className="text-muted-foreground">For every item purchased, we plant 10 trees in reforestation projects worldwide.</p>
            </div>
            
            <div className="text-center" data-testid="step-3">
              <div className="w-24 h-24 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-foreground mb-4">Earth Wins</h3>
              <p className="text-muted-foreground">Your trees fight climate change, create habitats, and restore damaged ecosystems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reforestation Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Active Reforestation Projects</h2>
            <p className="text-xl text-muted-foreground">Supporting communities and ecosystems around the world</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-card rounded-xl overflow-hidden shadow-lg" data-testid="project-madagascar">
              <img
                src="https://cdn.pixabay.com/photo/2019/11/04/14/37/madagascar-4601292_1280.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Madagascar Reforestation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Madagascar Coastal Restoration</h3>
                <p className="text-muted-foreground mb-4">
                  Restoring mangrove forests to protect coastal communities and marine life while providing sustainable livelihoods.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600 font-medium">340,000 trees planted</span>
                  <span className="text-muted-foreground">2023 - Ongoing</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl overflow-hidden shadow-lg" data-testid="project-canada">
              <img
                src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400"
                alt="Canada Forest Restoration"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Canadian Forest Recovery</h3>
                <p className="text-muted-foreground mb-4">
                  Rehabilitating forest areas affected by wildfires with native species to restore biodiversity and carbon sequestration.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-green-600 font-medium">185,000 trees planted</span>
                  <span className="text-muted-foreground">2023 - Ongoing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Make Your Impact?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of eco-warriors who choose style with substance. Every purchase plants trees, every tree fights climate change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/urbanwear/women">
              <Button size="lg" variant="secondary" data-testid="button-shop-women">
                Shop Women's Collection
              </Button>
            </Link>
            <Link href="/urbanwear/men">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" data-testid="button-shop-men">
                Shop Men's Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
