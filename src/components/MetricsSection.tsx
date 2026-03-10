import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Users, Puzzle, Star } from "lucide-react";

const metrics = [
  { icon: Clock, label: "Playtime", value: "90–180 min", sub: "Per Session" },
  { icon: Users, label: "Players", value: "2–6", sub: "Investigators" },
  { icon: Puzzle, label: "Complexity", value: "3.8 / 5", sub: "BGG Weight" },
  { icon: Star, label: "Rating", value: "9.2 / 10", sub: "Community Score" },
];

const MetricsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Specifications</p>
          <h2 className="text-4xl md:text-5xl font-display tracking-wider">
            Complexity & <span className="gold-gradient-text">Playtime</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="text-center"
            >
              <m.icon size={28} className="mx-auto mb-4 text-primary" />
              <p className="font-display text-3xl md:text-4xl gold-gradient-text mb-2">{m.value}</p>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">{m.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
