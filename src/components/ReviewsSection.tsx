import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    quote: "A masterclass in game design. The craftsmanship alone justifies the price—the gameplay makes it priceless.",
    author: "Tabletop Gaming Magazine",
    rating: 5,
    type: "critic",
  },
  {
    quote: "We've played 30+ sessions and every single one felt fresh. This is the holy grail of mystery games.",
    author: "Sarah K., Board Game Geek",
    rating: 5,
    type: "player",
  },
  {
    quote: "The production quality rivals luxury goods. Opening the box is an experience in itself.",
    author: "Dicebreaker",
    rating: 5,
    type: "critic",
  },
  {
    quote: "Replaced our entire game night rotation. The asymmetric roles create genuine tension and unforgettable moments.",
    author: "Marcus T., Kickstarter Backer",
    rating: 5,
    type: "player",
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" ref={ref} className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-display tracking-wider">
            Critic & Player <span className="gold-gradient-text">Reviews</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass-card p-8"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed italic mb-6">"{r.quote}"</p>
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{r.author}</p>
                <span className="text-xs tracking-[0.15em] uppercase text-primary/60">{r.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
