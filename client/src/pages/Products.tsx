import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Search } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CATEGORIES = ["All", "Milk", "Cheese", "Yogurt", "Butter", "Cream"];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  
  const { data: products, isLoading } = useProducts(
    activeCategory === "All" ? undefined : activeCategory
  );

  const filteredProducts = products?.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Header */}
      <div className="bg-primary pt-32 pb-20 rounded-b-[3rem]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-display font-bold mb-6"
          >
            Our Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-primary-foreground/80 max-w-2xl mx-auto"
          >
            Explore our wide range of organic dairy products, sourced directly 
            from our sustainable farms to ensure maximum freshness and quality.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        {/* Filters & Search Bar */}
        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-6 flex flex-col md:flex-row gap-6 items-center justify-between border border-border/50">
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-secondary/30 text-foreground/70 hover:bg-secondary/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 rounded-xl border-gray-200 focus-visible:ring-primary"
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="py-16">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-[420px] bg-gray-100 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <Filter size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground">No products found</h3>
              <p className="text-muted-foreground mt-2">Try adjusting your search or category filter.</p>
              <Button 
                variant="outline" 
                className="mt-6 rounded-full"
                onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
