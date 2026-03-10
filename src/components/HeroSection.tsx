import { motion } from "framer-motion";
import heroImage from "@/assets/hero-board-game.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with slow pan */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src={heroImage}
          alt="Premium mystery board game setup with magnifying glass and vintage clue cards"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </motion.div>

      {/* Floating dice parallax elements */}
      <motion.div
        className="absolute top-20 right-[15%] w-8 h-8 border gold-border rotate-45 opacity-20 parallax-float"
        aria-hidden
      />
      <motion.div
        className="absolute bottom-32 left-[10%] w-6 h-6 border gold-border rounded-full opacity-15 parallax-float-delayed"
        aria-hidden
      />
      <motion.div
        className="absolute top-[40%] left-[8%] w-4 h-4 bg-primary/10 rotate-12 opacity-20 parallax-float"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xs tracking-[0.4em] uppercase text-primary mb-6"
        >
          A Premium Board Game Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-wider leading-none mb-8"
        >
          <span className="gold-gradient-text">Innocent</span>
          <br />
          <span className="text-foreground">Until Proven</span>
          <br />
          <span className="gold-gradient-text">Guilty</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="divider-gold mb-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 font-body leading-relaxed"
        >
          An investigative masterpiece where deduction meets artistry.
          Every clue is hand-crafted. Every accusation carries weight.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#preorder"
            className="magnetic-btn px-10 py-4 bg-primary text-primary-foreground font-display text-sm tracking-[0.2em] uppercase hover:shadow-[0_0_40px_hsl(43_70%_45%/0.3)] transition-all duration-500"
          >
            Pre-Order Now
          </a>
          <a
            href="#storyline"
            className="magnetic-btn px-10 py-4 border gold-border text-primary font-display text-sm tracking-[0.2em] uppercase hover:bg-primary/10 transition-all duration-300"
          >
            Discover the Mystery
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
