import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gameplayImg from "@/assets/gameplay-cinematic.jpg";

const CinematicImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.img
        style={{ y }}
        src={gameplayImg}
        alt="Cinematic gameplay scene with players around a mahogany table"
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
      <div className="absolute inset-0 bg-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-5xl lg:text-6xl tracking-wider text-center px-6 gold-gradient-text"
        >
          Every Game Night Becomes Legendary
        </motion.p>
      </div>
    </section>
  );
};

export default CinematicImage;
