import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-primary/5 border border-border transition-all duration-300"
    >
      <div className="aspect-[4/3] overflow-hidden bg-secondary/30">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            {product.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-primary">
            ${Number(product.price).toFixed(2)}
          </span>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
          {product.description}
        </p>
        
        <Button className="w-full rounded-xl bg-secondary hover:bg-secondary/80 text-secondary-foreground font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
          <Plus className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </motion.div>
  );
}
