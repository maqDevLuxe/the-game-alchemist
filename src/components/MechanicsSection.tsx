import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Eye, Brain, Users, Fingerprint } from "lucide-react";

const mechanics = [
  {
    icon: Eye,
    title: "Hidden Evidence",
    description: "Discover clues concealed within beautifully illustrated scene cards. Each game generates a unique mystery from over 200 evidence combinations.",
  },
  {
    icon: Brain,
    title: "Deductive Reasoning",
    description: "Employ logical frameworks to eliminate suspects and narrow down motives. The truth hides in the details others overlook.",
  },
  {
    icon: Users,
    title: "Asymmetric Roles",
    description: "Each player assumes a distinct role with unique abilities—Detective, Witness, Suspect, or the elusive Mastermind.",
  },
  {
    icon: Fingerprint,
    title: "Evidence Chains",
    description: "Connect physical evidence to testimonies, building an irrefutable case—or a brilliant deception.",
  },
];

const MechanicsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="mechanics" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Game Design</p>
          <h2 className="text-4xl md:text-5xl font-display tracking-wider mb-6">
            Masterpiece <span className="gold-gradient-text">Mechanics</span>
          </h2>
          <div className="divider-gold" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {mechanics.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className={`glass-card p-8 md:p-10 transition-all duration-500 cursor-default ${
                hovered === i ? "gold-glow border-primary/30 scale-[1.02]" : ""
              }`}
            >
              <m.icon
                size={32}
                className={`mb-6 transition-colors duration-300 ${
                  hovered === i ? "text-primary" : "text-muted-foreground"
                }`}
              />
              <h3 className="font-display text-xl tracking-wider mb-4">{m.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{m.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanicsSection;
