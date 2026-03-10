import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import craftsmanshipImg from "@/assets/craftsmanship.jpg";

const details = [
  { label: "Hand-Finished Walnut Tokens", value: "48 Pieces" },
  { label: "Gold-Leaf Evidence Cards", value: "200+ Cards" },
  { label: "Linen-Embossed Board", value: "Premium Stock" },
  { label: "Velvet-Lined Case", value: "Artisan Craft" },
];

const CraftsmanshipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="craftsmanship" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <img
              src={craftsmanshipImg}
              alt="Premium hand-crafted game components with gold-leaf details"
              className="w-full aspect-square object-cover dramatic-shadow"
            />
            <div className="absolute inset-0 border gold-border" />
            <div className="absolute -bottom-4 -right-4 w-full h-full border gold-border -z-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Materials</p>
          <h2 className="text-4xl md:text-5xl font-display tracking-wider mb-6">
            The <span className="gold-gradient-text">Craftsmanship</span>
          </h2>
          <div className="divider-gold !mx-0 mb-8" />
          <p className="text-muted-foreground leading-relaxed mb-10">
            Every component is a testament to artisanal excellence. From sustainably sourced walnut
            wood tokens to gold-leaf embossed evidence cards on 350gsm premium cardstock—this is
            not merely a game, it is an heirloom.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {details.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                className="border-l-2 border-primary/30 pl-4"
              >
                <p className="font-display text-lg text-primary">{d.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{d.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CraftsmanshipSection;
