import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/landing/HowItWorks";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Gift,
  Users,
  IndianRupee,
  CheckCircle2,
  Zap,
  Globe,
  MessageSquare,
} from "lucide-react";

const earningExamples = [
  { referrals: 1, product: "₹100–₹200", service: "Up to ₹2,000" },
  { referrals: 5, product: "₹500–₹1,000", service: "Up to ₹10,000" },
  { referrals: 10, product: "₹1,000–₹2,000", service: "Up to ₹20,000" },
  { referrals: 25, product: "₹2,500–₹5,000", service: "Up to ₹50,000" },
];

const benefits = [
  "No investment or purchase required",
  "No experience needed — anyone can refer",
  "Earn on both product sales & service deals",
  "Unique referral code to track your earnings",
  "Instant commission credit on every successful sale",
  "No cap on how much you can earn",
];

const whatYouRefer = [
  {
    icon: Gift,
    title: "Digital Products",
    description:
      "Social media templates, business tools, and digital kits starting at ₹199. Earn 10% on every sale.",
  },
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional websites for businesses. Earn up to ₹2,000 per referral when a client signs up.",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Services",
    description:
      "Custom chatbot solutions for businesses. Earn up to ₹2,000 per successful referral.",
  },
];

const ReferAndEarn = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Zap size={14} />
              Zero Investment. Unlimited Earnings.
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Refer clients to Swishh.
              <br className="hidden md:block" />
              <span className="text-primary">Earn real money.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-2xl mx-auto">
              You don't need to buy anything. Just share Swishh with people who
              need digital products or services — and earn commissions on every
              successful sale.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                Start Referring Now
                <ArrowRight size={16} />
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-foreground font-medium text-sm hover:bg-muted transition-colors"
              >
                See How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You Refer */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              What Can You Refer?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              Share any of our offerings with your network and earn on every
              conversion.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatYouRefer.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl p-8 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <div id="how-it-works">
        <HowItWorks />
      </div>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Why people love
                <br />
                referring Swishh
              </h2>
              <p className="mt-4 text-muted-foreground">
                Our referral program is designed to be the simplest way to earn
                digital income — no strings attached.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="text-primary mt-0.5 shrink-0"
                  />
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Earning Potential Table */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Your Earning Potential
            </h2>
            <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
              The more you refer, the more you earn. There's no limit.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl border border-border/50 overflow-hidden"
          >
            <div className="grid grid-cols-3 bg-muted/50 px-6 py-4 text-sm font-semibold text-foreground">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-primary" />
                Referrals
              </div>
              <div className="flex items-center gap-2">
                <Gift size={16} className="text-primary" />
                Product Earnings
              </div>
              <div className="flex items-center gap-2">
                <IndianRupee size={16} className="text-primary" />
                Service Earnings
              </div>
            </div>
            {earningExamples.map((row, i) => (
              <div
                key={i}
                className="grid grid-cols-3 px-6 py-4 text-sm border-t border-border/50"
              >
                <div className="font-semibold text-foreground">
                  {row.referrals} referral{row.referrals > 1 ? "s" : ""}
                </div>
                <div className="text-muted-foreground">{row.product}</div>
                <div className="text-primary font-medium">{row.service}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
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
              <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
                Ready to start earning?
              </h2>
              <p className="mt-4 text-primary-foreground/80 text-lg max-w-lg mx-auto">
                Join hundreds of referrers who are already earning with Swishh.
                No investment, no risk — just share and earn.
              </p>
              <div className="mt-8">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary-foreground text-primary font-medium text-sm hover:opacity-90 transition-opacity"
                >
                  Get Your Referral Code
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ReferAndEarn;
