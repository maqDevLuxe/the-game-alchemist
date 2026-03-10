import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search } from "lucide-react";

const navLinks = [
  { label: "The Game", href: "#mechanics" },
  { label: "Craftsmanship", href: "#craftsmanship" },
  { label: "Story", href: "#storyline" },
  { label: "Gallery", href: "#gallery" },
  { label: "Editions", href: "#editions" },
  { label: "Reviews", href: "#reviews" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20">
        <a href="#" className="font-display text-xl tracking-[0.3em] gold-gradient-text uppercase">
          Arcanum
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300 font-body"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <a
            href="#preorder"
            className="magnetic-btn px-6 py-2.5 border gold-border text-primary text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Pre-Order
          </a>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/30"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors font-body"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#preorder"
                className="magnetic-btn px-6 py-2.5 border gold-border text-primary text-xs tracking-[0.2em] uppercase text-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Pre-Order
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
