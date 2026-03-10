import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import galleryCards from "@/assets/gallery-cards.jpg";
import galleryDice from "@/assets/gallery-dice.jpg";
import galleryBox from "@/assets/gallery-box.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

const images = [
  { src: galleryCards, alt: "Hand-illustrated mystery character cards", span: "md:col-span-2 md:row-span-2" },
  { src: galleryDice, alt: "Custom gold polyhedral dice on antique map", span: "" },
  { src: galleryBox, alt: "Premium game box in dark library setting", span: "" },
  { src: craftsmanship, alt: "Velvet-lined component case with wooden tokens", span: "md:col-span-2" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" ref={ref} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-primary mb-4">Visual Tour</p>
          <h2 className="text-4xl md:text-5xl font-display tracking-wider">
            Component <span className="gold-gradient-text">Gallery</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`overflow-hidden group relative ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-500" />
              <div className="absolute inset-0 border gold-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-3" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
