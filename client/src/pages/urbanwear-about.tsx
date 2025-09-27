import { Link } from "wouter";
import { ArrowLeft, Heart, Leaf, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UrbanWearAbout() {
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
            <h1 className="text-3xl font-bold text-foreground" data-testid="page-title">About UrbanWear</h1>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Streetwear That <span className="text-green-600">Gives Back</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-6">
                Founded in 2019, UrbanWear was born from a simple belief: fashion should enhance both your style and the planet. We're on a mission to prove that streetwear can be both trendy and sustainable.
              </p>
              <p className="text-lg text-muted-foreground">
                Every piece in our collection represents our commitment to environmental responsibility, ethical manufacturing, and community impact.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="UrbanWear team"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-green-600 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">10 Trees</div>
                <div className="text-sm opacity-90">per item sold</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Core Values</h2>
            <p className="text-xl text-muted-foreground">What drives everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="value-sustainability">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-950/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Sustainability</h3>
              <p className="text-muted-foreground">Using eco-friendly materials and processes to minimize our environmental footprint.</p>
            </div>
            
            <div className="text-center" data-testid="value-quality">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-950/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Quality</h3>
              <p className="text-muted-foreground">Crafting durable, long-lasting pieces that stand the test of time and trends.</p>
            </div>
            
            <div className="text-center" data-testid="value-community">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-950/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Community</h3>
              <p className="text-muted-foreground">Supporting local communities and fair labor practices in our supply chain.</p>
            </div>
            
            <div className="text-center" data-testid="value-passion">
              <div className="w-16 h-16 bg-red-100 dark:bg-red-950/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Passion</h3>
              <p className="text-muted-foreground">Driven by love for fashion, nature, and making a positive difference.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="https://images.unsplash.com/photo-1569163139394-de44ede02e84?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Tree planting"
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2" data-testid="story-section">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  It started with a backpacking trip through Southeast Asia in 2018. Our founders, Maya and Alex, witnessed firsthand the devastating effects of deforestation and fast fashion on local communities.
                </p>
                <p>
                  Determined to create change, they returned home with a vision: build a fashion brand that would plant trees, not just take from the earth. After months of research and development, UrbanWear was born in early 2019.
                </p>
                <p>
                  Today, we've grown from a small startup to a movement. Our community of eco-warriors spans the globe, united by the belief that fashion can be a force for good. Every purchase tells a story of hope, growth, and environmental restoration.
                </p>
                <p className="font-medium text-foreground">
                  We're just getting started. Join us in rewriting fashion's future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Practices */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">How We're Making a Difference</h2>
            <p className="text-xl text-muted-foreground">Our commitment to sustainable fashion</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl shadow-sm" data-testid="practice-materials">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-950/30 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Sustainable Materials</h3>
              <p className="text-muted-foreground">
                Organic cotton, recycled polyester, and innovative eco-fabrics make up 95% of our collection.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm" data-testid="practice-carbon">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/30 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Carbon Neutral Shipping</h3>
              <p className="text-muted-foreground">
                All orders are shipped carbon-neutral through our partnership with environmental shipping providers.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-sm" data-testid="practice-waste">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/30 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">Zero Waste Goal</h3>
              <p className="text-muted-foreground">
                We're working toward zero waste in manufacturing and packaging by 2025.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 opacity-90">
            Together, we can make fashion a force for environmental restoration. Start your sustainable style journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/urbanwear/women">
              <Button size="lg" variant="secondary" data-testid="button-shop-women">
                Shop Women's Collection
              </Button>
            </Link>
            <Link href="/urbanwear/men">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" data-testid="button-shop-men">
                Shop Men's Collection
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}