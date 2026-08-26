import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Timeline from "@/components/about/Timeline";
import SkillsGrid from "@/components/about/SkillsGrid";
import { useLanguage } from "@/lib/LanguageContext";


const PORTRAIT = "https://wicesnjxvsfgyhgcqogc.supabase.co/storage/v1/object/public/Mebri-design/O4D.png";

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
  const { language } = useLanguage();
  const copy = {
    en: { label: "About", title: "Garments that carry", accent: "heritage.", experience: "Experience & Training", craft: "Craft & Technical Proficiency", intro: "I'm Mebrahtom Tadesse, a fashion designer, master cutter, and tailor based in Addis Ababa, Ethiopia. For over a decade I've been cutting, stitching, and shaping garments that honour the weave of Ethiopian tradition - from the white cotton of the Habesha Kemis to the bold tibeb borders of the highlands.", body: "My work lives at the meeting point of heritage and silhouette. I believe a garment is never just fabric - it is a story measured by hand, cut with intention, and worn with pride. Every seam carries the memory of the weavers, the warmth of the loom, and the quiet discipline of the atelier." },
    am: { label: "ስለ እኛ", title: "ቅርስን የሚያስተላልፉ", accent: "ልብሶች።", experience: "ልምድ እና ስልጠና", craft: "የእጅ ጥበብ እና ቴክኒክ", intro: "እኔ መብራህቶም ታደሰ ነኝ፤ በአዲስ አበባ የምሰራ የፋሽን ዲዛይነር፣ ዋና ቆራጭ እና ልብስ ሰፊ ነኝ። ከአስር ዓመታት በላይ የኢትዮጵያን ባህል የሚያከብሩ ልብሶችን እቆርጣለሁ፣ እሰፋለሁ።", body: "ስራዬ በቅርስ እና በዘመናዊ ቅርጽ መካከል ይገኛል። ልብስ ጨርቅ ብቻ ሳይሆን በእጅ የሚለካ፣ በዓላማ የሚቆረጥ እና በኩራት የሚለበስ ታሪክ ነው።" },
    ti: { label: "ብዛዕባ", title: "ክዳውንቲ ቅርሲ ዝሓዙ", accent: "እዮም።", experience: "ተመኩሮን ስልጠናን", craft: "ኢድ ጥበብን ቴክኒክን", intro: "ኣነ መብራህቶም ታደሰ እየ፤ ኣብ ኣዲስ ኣበባ ዝሰርሕ ዲዛይነር ፋሽን፣ ዋና ቀራጺን ሰፋይን እየ። ንልዕሊ ዓሰርተ ዓመታት ባህሊ ኢትዮጵያ ዝኽብሩ ክዳውንቲ እቐርጽን እሰፍንን።", body: "ስራሐይ ኣብ መንጎ ቅርሲን ዘመናዊ ቅርጽን ይነብር። ክዳን ጨርቂ ጥራይ ኣይኮነን፤ ብኢድ ዝልካዕ፣ ብዕላማ ዝቑረጽን ብኽብሪ ዝልበስን ዛንታ እዩ።" },
  }[language];
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
              {copy.label}
            </span>
            <h1 className="font-body text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-foreground mb-8 leading-tight">
              {copy.title}
              <br />
              <span className="text-muted-foreground">{copy.accent}</span>
            </h1>
            <p className="font-body text-lg leading-relaxed text-muted-foreground mb-6">
              {copy.intro}
            </p>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              {copy.body}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Experience */}
      <section className="px-6 md:px-8 py-24 md:py-32" aria-label="Experience">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-body text-3xl md:text-4xl font-light tracking-tight text-foreground block mb-12">
              {copy.experience}
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
              {copy.craft}
            </h2>
          </FadeIn>
          <SkillsGrid />
        </div>
      </section>


    </div>
  );
}