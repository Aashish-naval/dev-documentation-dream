import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul S.",
    text: "Made ₹3,000 in my first week just by sharing products with friends. The process is incredibly simple.",
    role: "Freelancer",
  },
  {
    name: "Priya M.",
    text: "The digital products are genuinely useful. I bought the leads pack and landed two clients within days.",
    role: "Marketing Consultant",
  },
  {
    name: "Amit K.",
    text: "Referred a client for website development and earned ₹2,000. Best referral program I've seen.",
    role: "Content Creator",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">What People Say</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Real results from real users who started earning with Swishh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed">"{t.text}"</p>
              <div className="mt-5 pt-4 border-t border-border">
                <div className="font-semibold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
