import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Ready to start earning?
        </h2>
        <p className="mt-4 text-muted-foreground text-lg max-w-md mx-auto">
          Join Swishh today — buy a product, share your link, and watch your earnings grow.
        </p>
        <div className="mt-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
          >
            Get Started Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
