import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />
      
      {/* Hero */}
      <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* unsplash: scenic dairy farm sunrise */}
          <img 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop"
            alt="Farm sunrise"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6"
          >
            Rooted in <span className="text-primary">Tradition</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            For over 40 years, PureDairy has been dedicated to sustainable farming 
            and producing the highest quality dairy products for families across the country.
          </motion.p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-4 mt-12"
              >
                {/* unsplash: farmer holding cheese */}
                <img 
                  src="https://images.unsplash.com/photo-1627485937980-221c88ac04f9?q=80&w=800&auto=format&fit=crop" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover" 
                  alt="Artisanal cheese making"
                />
                {/* unsplash: cows in field */}
                <img 
                  src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=800&auto=format&fit=crop" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover" 
                  alt="Cows grazing"
                />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-4"
              >
                {/* unsplash: glass of milk */}
                <img 
                  src="https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=800&auto=format&fit=crop" 
                  className="rounded-2xl shadow-lg w-full h-48 object-cover" 
                  alt="Fresh glass of milk"
                />
                {/* unsplash: modern dairy facility */}
                <img 
                  src="https://images.unsplash.com/photo-1528750997573-59b8b6dd5809?q=80&w=800&auto=format&fit=crop" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover" 
                  alt="Processing facility"
                />
              </motion.div>
            </div>

            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold mb-6 text-foreground">From Our Family to Yours</h2>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                It all started in 1985 with a single barn and a small herd of Holsteins. 
                Our founders, the Miller family, believed that happy cows produce the best milk. 
                That philosophy remains at the core of everything we do today.
              </p>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                We've grown from a local farm stand to a regional favorite, but we haven't lost 
                our connection to the land. We practice regenerative agriculture, ensuring 
                that we leave the soil better than we found it for future generations.
              </p>

              <div className="space-y-4">
                {[
                  "Certified Organic & Non-GMO",
                  "Ethical Animal Welfare Standards",
                  "Sustainable Farming Practices",
                  "100% Recyclable Packaging"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-6 h-6 shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Years of Experience", value: "40+" },
              { label: "Acres of Pasture", value: "500" },
              { label: "Happy Cows", value: "1,200" },
              { label: "Product Awards", value: "25+" },
            ].map((stat, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-4xl md:text-5xl font-display font-bold">{stat.value}</div>
                <div className="text-primary-foreground/80 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
