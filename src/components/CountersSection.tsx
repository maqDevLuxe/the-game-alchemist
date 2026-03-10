import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const counters = [
  { target: 125000, label: "Copies Sold", suffix: "+" },
  { target: 47, label: "Countries", suffix: "" },
  { target: 9200, label: "5-Star Reviews", suffix: "+" },
  { target: 15, label: "Awards Won", suffix: "" },
];

const AnimatedCounter = ({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return controls.stop;
  }, [inView, target]);

  return (
    <span>
      {display.toLocaleString()}{suffix}
    </span>
  );
};

const CountersSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding bg-muted/30 border-y border-border/30">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {counters.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="text-center"
          >
            <p className="font-display text-3xl md:text-5xl gold-gradient-text mb-2">
              <AnimatedCounter target={c.target} suffix={c.suffix} inView={inView} />
            </p>
            <p className="text-sm text-muted-foreground tracking-[0.15em] uppercase">{c.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CountersSection;
