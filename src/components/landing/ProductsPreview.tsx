import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FileText, Users, Video, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Users,
    title: "100–200 Verified Leads",
    description: "Curated business leads in CSV/Excel format plus a freelancing guide to get started.",
    price: "₹199",
  },
  {
    icon: Video,
    title: "Video Editing Toolkit",
    description: "Complete templates, presets, and resources to level up your editing workflow.",
    price: "₹299",
  },
  {
    icon: FileText,
    title: "Premium Resource Bundle",
    description: "Comprehensive digital toolkit with guides, templates, and actionable strategies.",
    price: "₹499",
  },
];

const ProductsPreview = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Digital Products</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            High-value digital products at accessible prices. Buy once, benefit forever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border p-6 hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center mb-4">
                <product.icon size={20} className="text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{product.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{product.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xl font-bold text-foreground">{product.price}</span>
                <Link
                  to="/products"
                  className="text-sm font-medium text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;
