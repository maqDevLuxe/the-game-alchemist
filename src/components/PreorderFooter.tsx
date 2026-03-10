import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PreorderFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* CTA Section */}
      <section id="preorder" ref={ref} className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border gold-border" />
        </div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Limited First Edition</p>
            <h2 className="text-4xl md:text-6xl font-display tracking-wider mb-6">
              Secure Your <span className="gold-gradient-text">Copy</span>
            </h2>
            <div className="divider-gold mb-8" />
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              The first print run is limited to 5,000 numbered copies.
              Each comes with a certificate of authenticity and exclusive first-edition bonus scenario.
            </p>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="magnetic-btn inline-block px-14 py-5 bg-primary text-primary-foreground font-display text-sm tracking-[0.25em] uppercase hover:shadow-[0_0_60px_hsl(43_70%_45%/0.4)] transition-all duration-500"
            >
              Pre-Order Now — From $79
            </motion.a>

            <p className="text-xs text-muted-foreground mt-6 tracking-wider">
              Free worldwide shipping · 30-day guarantee · Ships Q2 2026
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <p className="font-display text-lg tracking-[0.2em] gold-gradient-text uppercase mb-4">Arcanum</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Premium board game publisher crafting investigative masterpieces since 2020.
              </p>
            </div>
            <div>
              <p className="font-display text-sm tracking-[0.15em] uppercase mb-4 text-foreground">The Game</p>
              <div className="space-y-3">
                {["Mechanics", "Craftsmanship", "Storyline", "Gallery"].map((l) => (
                  <a key={l} href={`#${l.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-display text-sm tracking-[0.15em] uppercase mb-4 text-foreground">Company</p>
              <div className="space-y-3">
                {["About Us", "Blog", "Press Kit", "Careers"].map((l) => (
                  <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-display text-sm tracking-[0.15em] uppercase mb-4 text-foreground">Connect</p>
              <div className="space-y-3">
                {["Instagram", "Twitter", "Discord", "Newsletter"].map((l) => (
                  <a key={l} href="#" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="divider-gold !w-full mb-8" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © 2026 Arcanum Games. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Refund Policy"].map((l) => (
                <a key={l} href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PreorderFooter;
