import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import collectorsImg from "@/assets/collectors-edition.jpg";

const editions = [
  {
    name: "Standard Edition",
    price: "$79",
    features: ["200+ Evidence Cards", "Walnut Tokens", "Linen Board", "5 Scenarios"],
    highlight: false,
  },
  {
    name: "Collector's Edition",
    price: "$149",
    features: ["Gold-Leaf Cards", "Numbered Certificate", "Velvet Case", "7 Scenarios + Expansion", "Art Book"],
    highlight: true,
  },
  {
    name: "Grand Master Edition",
    price: "$249",
    features: ["Everything in Collector's", "Signed by Designers", "Metal Tokens", "Exclusive Scenario", "Display Stand"],
    highlight: false,
  },
];

const EditionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="editions" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-8"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Limited Availability</p>
          <h2 className="text-4xl md:text-5xl font-display tracking-wider mb-6">
            Exclusive Collector's <span className="gold-gradient-text">Editions</span>
          </h2>
          <div className="divider-gold mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 max-w-2xl mx-auto"
        >
          <img src={collectorsImg} alt="Collector's edition premium box set" className="w-full object-cover dramatic-shadow" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {editions.map((ed, i) => (
            <motion.div
              key={ed.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
              className={`glass-card p-8 text-center transition-all duration-500 hover:scale-[1.02] ${
                ed.highlight ? "gold-glow border-primary/40" : ""
              }`}
            >
              {ed.highlight && (
                <span className="inline-block px-4 py-1 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase mb-4 font-display">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-xl tracking-wider mb-2">{ed.name}</h3>
              <p className="font-display text-4xl gold-gradient-text mb-6">{ed.price}</p>
              <ul className="space-y-3 mb-8">
                {ed.features.map((f) => (
                  <li key={f} className="text-sm text-muted-foreground">{f}</li>
                ))}
              </ul>
              <a
                href="#preorder"
                className={`magnetic-btn inline-block px-8 py-3 text-xs tracking-[0.2em] uppercase font-display transition-all duration-300 ${
                  ed.highlight
                    ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(43_70%_45%/0.3)]"
                    : "border gold-border text-primary hover:bg-primary/10"
                }`}
              >
                Select Edition
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EditionsSection;
