import { type User, type InsertUser, type Product, type InsertProduct } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Product methods
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  getProductsByGender(gender: string): Promise<Product[]>;
  getProductsByCategory(category: string, gender?: string): Promise<Product[]>;
  searchProducts(query: string, gender?: string): Promise<Product[]>;
  getNewArrivals(limit?: number): Promise<Product[]>;
  getBestsellers(limit?: number): Promise<Product[]>;
  createProduct(product: InsertProduct): Promise<Product>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.seedProducts();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Product methods
  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getProductsByGender(gender: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.gender === gender || product.gender === 'unisex'
    );
  }

  async getProductsByCategory(category: string, gender?: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter((product) => {
      const categoryMatch = product.category === category;
      const genderMatch = !gender || product.gender === gender || product.gender === 'unisex';
      return categoryMatch && genderMatch;
    });
  }

  async searchProducts(query: string, gender?: string): Promise<Product[]> {
    const lowerQuery = query.toLowerCase();
    return Array.from(this.products.values()).filter((product) => {
      const nameMatch = product.name.toLowerCase().includes(lowerQuery);
      const categoryMatch = product.category.toLowerCase().includes(lowerQuery);
      const materialMatch = product.material.toLowerCase().includes(lowerQuery);
      const genderMatch = !gender || product.gender === gender || product.gender === 'unisex';
      
      return (nameMatch || categoryMatch || materialMatch) && genderMatch;
    });
  }

  async getNewArrivals(limit = 8): Promise<Product[]> {
    return Array.from(this.products.values())
      .filter(product => product.isNewArrival)
      .slice(0, limit);
  }

  async getBestsellers(limit = 8): Promise<Product[]> {
    return Array.from(this.products.values())
      .filter(product => product.isBestseller)
      .slice(0, limit);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { 
      ...insertProduct, 
      id,
      originalPrice: insertProduct.originalPrice ?? null,
      isNewArrival: insertProduct.isNewArrival ?? false,
      isBestseller: insertProduct.isBestseller ?? false,
      treeCount: insertProduct.treeCount ?? 10
    };
    this.products.set(id, product);
    return product;
  }

  private seedProducts() {
    const sampleProducts: InsertProduct[] = [
      // Women's New Arrivals
      {
        name: "Cozy Comfort Hoodie",
        price: 7800, // $78.00
        description: "Ultra-soft organic cotton hoodie perfect for cool weather. Made with 100% organic cotton grown without harmful pesticides.",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        category: "hoodies",
        gender: "women",
        material: "100% Organic Cotton",
        sustainableFeature: "Organic cotton, plants 10 trees",
        isNewArrival: true,
        isBestseller: true,
        treeCount: 10
      },
      {
        name: "Everyday Impact Tee",
        price: 3500, // $35.00
        description: "Soft sustainable basics made from recycled materials. Perfect for everyday comfort with a positive environmental impact.",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        category: "tees",
        gender: "women",
        material: "Recycled Cotton Blend",
        sustainableFeature: "Made from recycled materials",
        isNewArrival: true,
        isBestseller: false,
        treeCount: 10
      },
      {
        name: "Flow Midi Dress",
        price: 8800, // $88.00
        description: "Breathable and sustainable midi dress made from TENCEL Lyocell. Perfect for casual or dressed-up occasions.",
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        category: "dresses",
        gender: "women",
        material: "TENCEL Lyocell",
        sustainableFeature: "TENCEL Lyocell from sustainable forests",
        isNewArrival: true,
        isBestseller: true,
        treeCount: 10
      },
      {
        name: "Earth Joggers",
        price: 6800, // $68.00
        description: "Ultra-soft bamboo comfort joggers. Made from bamboo blend for ultimate softness and breathability.",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        category: "pants",
        gender: "women",
        material: "Bamboo Blend",
        sustainableFeature: "Bamboo fiber, fast-growing renewable resource",
        isNewArrival: true,
        isBestseller: false,
        treeCount: 10
      },
      // Men's New Arrivals
      {
        name: "Classic Comfort Hoodie",
        price: 8200, // $82.00
        description: "Premium organic fleece hoodie for men. Made with the highest quality organic cotton for lasting comfort.",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        category: "hoodies",
        gender: "men",
        material: "100% Organic Cotton Fleece",
        sustainableFeature: "Organic cotton, ethical manufacturing",
        isNewArrival: true,
        isBestseller: true,
        treeCount: 10
      },
      {
        name: "Essential Impact Tee",
        price: 3800, // $38.00
        description: "Everyday sustainable comfort made from recycled cotton. A wardrobe staple that gives back to the planet.",
        image: "https://images.unsplash.com/photo-1583743814966-8936f37f1c78?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        category: "tees",
        gender: "men",
        material: "Recycled Cotton",
        sustainableFeature: "Made from 100% recycled cotton",
        isNewArrival: true,
        isBestseller: false,
        treeCount: 10
      },
      {
        name: "Adventure Joggers",
        price: 7200, // $72.00
        description: "Durable hemp comfort joggers built for adventure. Hemp blend provides durability and sustainability.",
        image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        category: "pants",
        gender: "men",
        material: "Hemp Blend",
        sustainableFeature: "Hemp fiber, requires minimal water",
        isNewArrival: true,
        isBestseller: false,
        treeCount: 10
      },
      {
        name: "Heritage Sweatshirt",
        price: 6500, // $65.00
        description: "Timeless sustainable style meets modern comfort. Made from organic fleece for a heritage look and feel.",
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
        category: "hoodies",
        gender: "men",
        material: "Organic Fleece",
        sustainableFeature: "Organic cotton fleece, low-impact dyes",
        isNewArrival: false,
        isBestseller: true,
        treeCount: 10
      }
    ];

    sampleProducts.forEach(insertProduct => {
      const id = randomUUID();
      const fullProduct: Product = { 
        ...insertProduct, 
        id,
        originalPrice: insertProduct.originalPrice ?? null,
        isNewArrival: insertProduct.isNewArrival ?? false,
        isBestseller: insertProduct.isBestseller ?? false,
        treeCount: insertProduct.treeCount ?? 10
      };
      this.products.set(id, fullProduct);
    });
  }
}

export const storage = new MemStorage();
