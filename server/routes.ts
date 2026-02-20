import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

async function seedDatabase() {
  const existingProducts = await storage.getProducts();
  if (existingProducts.length === 0) {
    await storage.createProduct({
      name: "Purvi Fresh Paneer",
      description: "Premium quality cottage cheese, preservative-free and chemical-free. Made from locally sourced fresh milk.",
      category: "Paneer",
      price: "15.00",
      imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80",
    });
    
    await storage.createProduct({
      name: "Purvi Fresh Ghee",
      description: "Traditional clarified butter made with all-natural ingredients. Rich in taste and nutrition.",
      category: "Ghee",
      price: "25.00",
      imageUrl: "https://images.unsplash.com/photo-1589134732653-a7cefb7936a7?auto=format&fit=crop&q=80",
    });

    await storage.createProduct({
      name: "Purvi Fresh Pasteurized Milk",
      description: "Freshly sourced from Nepali farmers, our milk is pasteurized to ensure safety while retaining nutrition.",
      category: "Milk",
      price: "1.50",
      imageUrl: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80",
    });

    await storage.createProduct({
      name: "Purvi Fresh Khoa",
      description: "Thickened milk solids, perfect for making traditional sweets. No preservatives added.",
      category: "Khoa",
      price: "18.00",
      imageUrl: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80",
    });

    await storage.createProduct({
      name: "Purvi Fresh Chenna",
      description: "Fresh cheese solids made from high-quality cow milk. Essential for authentic dessert recipes.",
      category: "Chenna",
      price: "12.00",
      imageUrl: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&q=80",
    });
  }
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Seed the database with Purvi Fresh products
  seedDatabase().catch(console.error);

  app.get(api.products.list.path, async (req, res) => {
    try {
      const products = await storage.getProducts();
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
