import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-display">PureDairy</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Bringing farm-fresh goodness directly to your table since 1985. 
              Ethically sourced, naturally processed, and delivered with love.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/products" className="text-primary-foreground/80 hover:text-white transition-colors">Our Products</Link>
              </li>
              <li>
                <Link href="/about" className="text-primary-foreground/80 hover:text-white transition-colors">Our Story</Link>
              </li>
              <li>
                <Link href="/contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><span className="text-primary-foreground/80">Fresh Milk</span></li>
              <li><span className="text-primary-foreground/80">Artisanal Cheese</span></li>
              <li><span className="text-primary-foreground/80">Organic Yogurt</span></li>
              <li><span className="text-primary-foreground/80">Grass-fed Butter</span></li>
              <li><span className="text-primary-foreground/80">Heavy Cream</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 mt-1" size={18} />
                <span className="text-primary-foreground/80">123 Green Valley Road,<br />Pasture County, PC 54321</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="shrink-0" size={18} />
                <span className="text-primary-foreground/80">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="shrink-0" size={18} />
                <span className="text-primary-foreground/80">hello@puredairy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} PureDairy Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
