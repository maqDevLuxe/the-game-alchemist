import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "The Art of Deduction: Designing Asymmetric Mystery Games",
    excerpt: "How we balanced six unique roles to create emergent narrative moments every session.",
    date: "Feb 2026",
    category: "Game Design",
  },
  {
    title: "From Forest to Table: Sourcing Sustainable Walnut",
    excerpt: "Our journey to find ethically harvested hardwood for every hand-finished token.",
    date: "Jan 2026",
    category: "Craftsmanship",
  },
  {
    title: "Why Board Games Are the New Dinner Party",
    excerpt: "The tabletop renaissance and why premium experiences are leading the charge.",
    date: "Dec 2025",
    category: "Culture",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Dispatches</p>
          <h2 className="text-4xl md:text-5xl font-display tracking-wider">
            Tabletop Strategy <span className="gold-gradient-text">Blog</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="glass-card p-8 group cursor-pointer hover:border-primary/30 transition-all duration-500"
            >
              <span className="text-xs tracking-[0.2em] uppercase text-primary">{post.category}</span>
              <h3 className="font-display text-lg tracking-wider mt-3 mb-4 group-hover:gold-gradient-text transition-all">
                {post.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">{post.date}</span>
                <ArrowRight size={16} className="text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
