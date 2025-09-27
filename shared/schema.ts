import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const products = pgTable("products", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  price: integer("price").notNull(), // price in cents
  originalPrice: integer("original_price"), // original price for sales
  description: text("description").notNull(),
  image: text("image").notNull(),
  category: text("category").notNull(), // hoodies, tees, pants, dresses, etc.
  gender: text("gender").notNull(), // women, men, unisex
  material: text("material").notNull(),
  sustainableFeature: text("sustainable_feature").notNull(),
  isNewArrival: boolean("is_new_arrival").default(false),
  isBestseller: boolean("is_bestseller").default(false),
  treeCount: integer("tree_count").default(10),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertProductSchema = createInsertSchema(products).omit({
  id: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;
