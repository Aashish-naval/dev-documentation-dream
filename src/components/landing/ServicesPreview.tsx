import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Globe, Bot, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    price: "₹10K – ₹30K",
    benefits: ["Professional design", "Mobile responsive", "SEO optimized", "More visibility & customers"],
  },
  {
    icon: Bot,
    title: "Chatbot Development",
    price: "₹5,000",
    benefits: ["24/7 customer support", "Lead generation", "Automated responses", "Easy integration"],
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Premium Services</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Take your business online with our professional development services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                <service.icon size={24} className="text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
              <div className="text-2xl font-bold text-primary mt-2">{service.price}</div>
              <ul className="mt-5 space-y-2.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
