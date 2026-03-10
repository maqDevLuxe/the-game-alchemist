import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const StorylineSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="storyline" ref={ref} className="section-padding relative overflow-hidden">
      {/* Background ornament */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border gold-border" />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border gold-border" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">The Narrative</p>
          <h2 className="text-4xl md:text-5xl font-display tracking-wider mb-6">
            The Immersive <span className="gold-gradient-text">Storyline</span>
          </h2>
          <div className="divider-gold mb-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-6 text-lg text-muted-foreground leading-relaxed font-body italic"
        >
          <p>
            "The Ashworth Estate has stood silent for three decades. Tonight, its doors open
            for one final gathering—six guests, each carrying secrets that could shatter
            reputations or reveal a killer."
          </p>
          <p>
            "As the grandfather clock strikes midnight, the lights extinguish. When they return,
            one chair sits empty. The investigation begins—but in this house of mirrors,
            every truth casts a shadow of doubt."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {["5 Unique Scenarios", "Branching Narratives", "Replayable Endings"].map((tag) => (
            <span key={tag} className="px-5 py-2 border gold-border text-xs tracking-[0.15em] uppercase text-primary">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StorylineSection;
