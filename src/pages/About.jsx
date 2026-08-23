import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Timeline from "@/components/about/Timeline";
import SkillsGrid from "@/components/about/SkillsGrid";


const PORTRAIT = "/public/images/aman.png";

function FadeIn({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 md:pt-32">
      {/* Hero */}
      <section className="px-6 md:px-8 pb-24 md:pb-40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          <FadeIn className="md:col-span-5">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={PORTRAIT}
                alt="Mebrahtom Tadesse  -  portrait"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </FadeIn>

          <FadeIn className="md:col-start-7 md:col-span-6 flex flex-col justify-end" delay={0.2}>
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-4">
              About
            </span>
            <h1 className="font-body text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-8 leading-tight">
              Garments that carry
              <br />
              <span className="text-muted-foreground">heritage.</span>
            </h1>
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-6">
              I'm Mebrahtom Tadesse, a fashion designer, master cutter, and tailor based in Addis Ababa, Ethiopia. For over a decade I've been cutting, stitching, and shaping garments that honour the weave of Ethiopian tradition  -  from the white cotton of the Habesha Kemis to the bold tibeb borders of the highlands.
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              My work lives at the meeting point of heritage and silhouette. I believe a garment is never just fabric  -  it is a story measured by hand, cut with intention, and worn with pride. Every seam carries the memory of the weavers, the warmth of the loom, and the quiet discipline of the atelier.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-8 py-24 md:py-32" aria-label="Experience">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-body text-3xl md:text-4xl font-light tracking-tight text-foreground block mb-12">
              Experience & Training
            </h2>
          </FadeIn>
          <Timeline />
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-8 py-24 md:py-32" aria-label="Craft & technique">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-body text-3xl md:text-4xl font-light tracking-tight text-foreground block mb-12">
              Craft & Technical Proficiency
            </h2>
          </FadeIn>
          <SkillsGrid />
        </div>
      </section>


    </div>
  );
}