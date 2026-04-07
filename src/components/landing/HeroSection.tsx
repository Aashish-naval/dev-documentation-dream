import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 to-background" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            Earn while you share
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] text-balance max-w-4xl mx-auto">
            Premium digital products.{" "}
            <span className="bg-gradient-to-r from-primary to-[hsl(250,60%,58%)] bg-clip-text text-transparent">
              Real earnings.
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Buy powerful digital products starting at ₹199, share with your network, and earn commissions on every sale. Simple, transparent, and rewarding.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity shadow-lg shadow-primary/20"
            >
              Explore Products
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-secondary text-secondary-foreground font-medium text-sm hover:bg-secondary/80 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { value: "10%", label: "Commission" },
            { value: "₹100", label: "Min. Payout" },
            { value: "UPI", label: "Instant Pay" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
