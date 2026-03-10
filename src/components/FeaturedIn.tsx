import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const publications = [
  "Tabletop Gaming Magazine",
  "Dicebreaker",
  "Board Game Geek",
  "Polygon",
  "The Games Journal",
  "Ars Technica",
];

const FeaturedIn = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding border-y border-border/30">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        className="text-center text-xs tracking-[0.3em] uppercase text-muted-foreground mb-12"
      >
        As Featured In
      </motion.p>
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {publications.map((pub, i) => (
          <motion.span
            key={pub}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 0.4, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ opacity: 1 }}
            className="font-display text-sm md:text-base tracking-[0.15em] uppercase text-foreground cursor-default transition-opacity"
          >
            {pub}
          </motion.span>
        ))}
      </div>
    </section>
  );
};

export default FeaturedIn;
