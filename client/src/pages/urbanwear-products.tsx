import { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Search, Filter, ArrowLeft, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Product } from "@shared/schema";

function formatPrice(priceInCents: number) {
  return `$${(priceInCents / 100).toFixed(2)}`;
}

export default function UrbanWearProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Fetch all products
  const { data: allProducts = [], isLoading } = useQuery<Product[]>({
    queryKey: ['/api/products'],
    queryFn: async () => {
      const response = await fetch('/api/products?limit=100');
      if (!response.ok) throw new Error('Failed to fetch products');
      return response.json();
    }
  });

  // Filter products to only show those with visible images and apply search/category filters
  const filteredProducts = useMemo(() => {
    let products = allProducts.filter(product => {
      // Only show products with valid image URLs (basic check)
      return product.image && product.image.trim() !== '';
    });

    // Apply search filter
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower) ||
        (product.material || "").toLowerCase().includes(searchLower) ||
        (product.sustainableFeature || "").toLowerCase().includes(searchLower)
      );
    }

    // Apply category filter
    if (selectedCategory !== "all") {
      products = products.filter(product => product.category.toLowerCase() === selectedCategory);
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        products.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0));
        break;
      case "newest":
      default:
        products.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
        break;
    }

    return products;
  }, [allProducts, searchTerm, selectedCategory, sortBy]);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = new Set(allProducts.map(p => p.category.toLowerCase()));
    return Array.from(cats).sort();
  }, [allProducts]);

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
            <h1 className="text-3xl font-bold text-foreground" data-testid="page-title">Our Products</h1>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-border bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  data-testid="input-search"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48" data-testid="select-category">
                  <Filter className="w-4 h-4 mr-2" />
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-48" data-testid="select-sort">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-muted h-80 rounded-2xl mb-4"></div>
                <div className="bg-muted h-4 rounded mb-2"></div>
                <div className="bg-muted h-4 rounded mb-2 w-3/4"></div>
                <div className="bg-muted h-6 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-foreground mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6">
              {searchTerm || selectedCategory !== "all" 
                ? "Try adjusting your search or filter criteria"
                : "No products are currently available"
              }
            </p>
            {(searchTerm || selectedCategory !== "all") && (
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                variant="outline"
                data-testid="button-clear-filters"
              >
                Clear Filters
              </Button>
            )}
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <div className="text-sm text-muted-foreground">
                Showing {filteredProducts.length} of {allProducts.length} products
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  data-testid={`card-product-${product.id}`}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Hide products with broken images
                        const card = e.currentTarget.closest('[data-testid^="card-product-"]') as HTMLElement;
                        if (card) card.style.display = 'none';
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      plants 10 trees
                    </div>
                    {product.isNewArrival && (
                      <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        New
                      </div>
                    )}
                    {product.isBestseller && (
                      <div className="absolute top-12 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Bestseller
                      </div>
                    )}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors" data-testid={`button-wishlist-${product.id}`}>
                        <Heart className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-xs text-green-600 font-medium uppercase tracking-wide bg-green-50 px-2 py-1 rounded">
                        {product.sustainableFeature || product.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xl font-bold text-foreground">
                        {formatPrice(product.price)}
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700" data-testid={`button-add-cart-${product.id}`}>
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}