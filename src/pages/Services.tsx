import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Globe, Bot, Check, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    price: "₹10,000 – ₹30,000",
    description: "Get a professional, mobile-responsive website that brings visibility and customers to your business.",
    features: [
      "Custom design tailored to your brand",
      "Mobile responsive & fast loading",
      "SEO optimized from day one",
      "Contact forms & lead capture",
      "Social media integration",
      "3 months free support",
    ],
    referralReward: "₹1,000 – ₹2,000",
  },
  {
    icon: Bot,
    title: "Chatbot Development",
    price: "₹5,000",
    description: "Automate customer conversations with an intelligent chatbot that works 24/7 for your business.",
    features: [
      "Custom-trained for your business",
      "24/7 automated responses",
      "Lead qualification & capture",
      "Easy website integration",
      "Multi-platform support",
      "1 month free support",
    ],
    referralReward: "₹500",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Services</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Professional development services to bring your business online. More visibility, more customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="bg-card rounded-2xl border border-border p-8 flex flex-col hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                  <service.icon size={24} className="text-accent-foreground" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">{service.title}</h2>
                <div className="text-3xl font-bold text-primary mt-2">{service.price}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{service.description}</p>

                <ul className="mt-6 space-y-3 flex-1">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                      <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-5 border-t border-border">
                  <div className="text-xs text-muted-foreground mb-4">
                    Referral reward: <span className="font-semibold text-primary">{service.referralReward}</span>
                  </div>
                  <a
                    href="mailto:hello@swishh.in"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Get Started <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
