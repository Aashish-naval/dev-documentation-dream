import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-foreground">Swishh</h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-sm">
              Your premium digital marketplace. Buy powerful digital products, refer others, and earn commissions effortlessly.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/products" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Products</Link>
              <Link to="/services" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-3">Support</h4>
            <div className="space-y-2">
              <a href="mailto:hello@swishh.in" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Swishh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
