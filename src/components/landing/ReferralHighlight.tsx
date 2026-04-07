import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { TrendingUp, ArrowRight } from "lucide-react";

const ReferralHighlight = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-gradient-to-br from-primary to-[hsl(250,60%,58%)] p-10 md:p-16 text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_60%)]" />
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={28} className="text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Earn ₹1,000 by referring<br className="hidden md:block" /> just 1 client
            </h2>
            <p className="mt-4 text-primary-foreground/80 text-lg max-w-lg mx-auto">
              No investment needed. Just refer clients to Swishh and earn commissions on every sale.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/refer-and-earn"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-foreground text-primary font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Learn How It Works
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReferralHighlight;
