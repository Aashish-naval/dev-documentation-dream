import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Users, Video, Download, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Users,
    title: "Business Leads Pack",
    description: "100–200 verified business leads in CSV/Excel format. Includes a comprehensive freelancing guide (PDF) to help you convert leads into clients.",
    price: "₹199",
    includes: ["100–200 Verified Leads (CSV/Excel)", "Freelancing Guide (PDF)", "Lifetime Access"],
  },
  {
    icon: Video,
    title: "Video Editing Toolkit",
    description: "Professional-grade video editing templates, presets, and resources. Everything you need to create stunning content.",
    price: "₹299",
    includes: ["Premium Templates", "Color Presets", "Sound Effects Pack", "Tutorial Guide"],
  },
  {
    icon: FileText,
    title: "Ultimate Digital Bundle",
    description: "Our most comprehensive package with guides, templates, strategies, and tools to build your digital income.",
    price: "₹499",
    includes: ["All Resources from Other Packs", "Advanced Strategy Guide", "Premium Templates", "Priority Support"],
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 md:pt-36 md:pb-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Digital Products</h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              High-value digital products at accessible prices. Each product is delivered as a ZIP file instantly after payment verification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card rounded-2xl border border-border p-8 flex flex-col hover:shadow-[var(--shadow-hover)] transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5">
                  <product.icon size={24} className="text-accent-foreground" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{product.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{product.description}</p>

                <div className="mt-6 pt-5 border-t border-border">
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">What's Included</div>
                  <ul className="space-y-2">
                    {product.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <Download size={12} className="text-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <span className="text-3xl font-bold text-foreground">{product.price}</span>
                  <a
                    href="https://forms.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    Buy Now <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Referral note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-14 text-center bg-accent/50 rounded-2xl p-8"
          >
            <p className="text-sm text-muted-foreground">
              Have a referral coupon code? Enter it during checkout to support the person who shared Swishh with you.{" "}
              <span className="font-medium text-primary">They earn 10% commission</span> on your purchase.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
