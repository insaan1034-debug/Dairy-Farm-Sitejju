import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingProducts = await storage.getProducts();
  if (existingProducts.length === 0) {
    await storage.createProduct({
      name: "Farm Fresh Whole Milk",
      description: "Creamy, delicious whole milk sourced locally from pasture-raised cows.",
      category: "Milk",
      price: "4.99",
      imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80",
    });
    
    await storage.createProduct({
      name: "Aged Cheddar Cheese",
      description: "Sharp, crumbly, and full of flavor. Aged to perfection for 18 months.",
      category: "Cheese",
      price: "12.50",
      imageUrl: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80",
    });

    await storage.createProduct({
      name: "Probiotic Greek Yogurt",
      description: "Thick and creamy plain Greek yogurt, rich in probiotics and protein.",
      category: "Yogurt",
      price: "5.99",
      imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80",
    });

    await storage.createProduct({
      name: "Artisan Butter",
      description: "Rich, golden butter churned from high-fat cream. Perfect for baking or spreading.",
      category: "Butter",
      price: "6.50",
      imageUrl: "https://images.unsplash.com/photo-1589134732653-a7cefb7936a7?auto=format&fit=crop&q=80",
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the database with some initial products
  seedDatabase().catch(console.error);

  app.get(api.products.list.path, async (req, res) => {
    try {
      const products = await storage.getProducts();
      // Handle optional category filtering
      const category = req.query.category as string | undefined;
      if (category) {
        const filtered = products.filter(p => p.category.toLowerCase() === category.toLowerCase());
        res.json(filtered);
      } else {
        res.json(products);
      }
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch products" });
    }
  });

  app.get(api.products.get.path, async (req, res) => {
    try {
      const product = await storage.getProduct(Number(req.params.id));
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch product" });
    }
  });

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      res.status(500).json({ message: "Failed to submit message" });
    }
  });

  return httpServer;
}
