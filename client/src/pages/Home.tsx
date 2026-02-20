import { motion } from "framer-motion";
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { useProducts } from "@/hooks/use-products";

export default function Home() {
  const { data: products, isLoading } = useProducts();

  // Featured products (take first 3)
  const featuredProducts = products?.slice(0, 3) || [];

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-secondary/30 rounded-bl-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 shadow-sm text-primary font-medium text-sm mb-6">
              <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
              Fresh from the farm to your table
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6">
              Pure, Natural <br />
              <span className="text-primary">Dairy Goodness</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              We believe in the power of nature. Our products are crafted with care, 
              using only the finest ingredients from our sustainable local farms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="rounded-full px-8 text-lg h-14 bg-primary hover:bg-primary/90 text-white shadow-xl shadow-primary/25 hover:shadow-primary/30 transition-all hover:-translate-y-1">
                  Shop Products
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-full px-8 text-lg h-14 border-2 hover:bg-secondary/50 transition-all">
                  Our Story
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Hero Image - Pouring Milk/Fresh Dairy */}
            {/* unsplash: pouring milk into glass bottle scenic farm background */}
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1550583724-b2692b85b150?q=80&w=1200&auto=format&fit=crop" 
                alt="Fresh milk pouring"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs"
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full text-green-600">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">100% Organic</p>
                  <p className="text-sm text-muted-foreground">Certified quality</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Leaf, 
                title: "100% Organic Feed", 
                desc: "Our cows graze on natural pastures free from synthetic pesticides." 
              },
              { 
                icon: Truck, 
                title: "Daily Fresh Delivery", 
                desc: "From milking to your doorstep within 24 hours for maximum freshness." 
              },
              { 
                icon: ShieldCheck, 
                title: "Quality Certified", 
                desc: "Rigorously tested and certified to meet the highest safety standards." 
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-secondary/20 hover:bg-secondary/40 transition-colors text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Selection</span>
              <h2 className="text-4xl font-display font-bold mt-2 text-foreground">Featured Products</h2>
            </div>
            <Link href="/products">
              <Button variant="ghost" className="hidden sm:flex group text-primary hover:text-primary hover:bg-primary/5">
                View All Products <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-[400px] bg-gray-100 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
          
          <div className="mt-12 text-center sm:hidden">
            <Link href="/products">
              <Button className="w-full bg-primary text-white rounded-xl">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2.5rem] overflow-hidden bg-primary text-primary-foreground px-8 py-20 md:px-20 text-center">
             {/* unsplash: green pastures panoramic cows */}
             <div className="absolute inset-0 z-0 opacity-20">
              <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2000&auto=format&fit=crop" 
                alt="Green pasture" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Taste the Difference of <br/>Nature's Best
              </h2>
              <p className="text-primary-foreground/90 text-lg mb-10 leading-relaxed">
                Join thousands of happy families who trust PureDairy for their daily nutrition. 
                Subscribe today and get fresh milk delivered to your door.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 h-14 text-lg font-semibold">
                    Contact Us
                  </Button>
                </Link>
                <Link href="/products">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 h-14 text-lg">
                    Browse Catalog
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
