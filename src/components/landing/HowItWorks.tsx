import { motion } from "framer-motion";
import { ShoppingCart, Share2, Wallet } from "lucide-react";

const steps = [
  {
    icon: ShoppingCart,
    title: "Buy a Product",
    description: "Choose from our curated digital products starting at just ₹199.",
  },
  {
    icon: Share2,
    title: "Share Your Link",
    description: "Get a unique referral code and share with your network — anyone can join.",
  },
  {
    icon: Wallet,
    title: "Earn Commissions",
    description: "Earn 10% on every product sale and up to ₹2,000 on service referrals.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Three simple steps to start earning. No experience needed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon size={24} className="text-primary" />
              </div>
              <div className="text-xs font-semibold text-primary mb-2">Step {i + 1}</div>
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
