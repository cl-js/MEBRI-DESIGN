import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import InquiryForm from "@/components/contact/InquiryForm";
import FAQ from "@/components/contact/FAQ";

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

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="pt-24 md:pt-32">
      {/* Header */}
      <section className="px-6 md:px-8 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-4">
              Contact
            </span>
            <h1 className="font-body text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-foreground mb-6 leading-tight">
              Let's create something
              <br />
              <span className="text-muted-foreground">you'll wear with pride.</span>
            </h1>
            <p className="font-body text-lg text-muted-foreground max-w-2xl">
              Whether you're dreaming of a bespoke Habesha Kemis, a bridal ensemble, or a reimagined traditional piece, I'd love to hear your vision. Share it below and I'll respond within 48 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Form */}
      <section className="px-6 md:px-8 py-16 md:py-24 border-t border-border" aria-label="Commission inquiry form">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-8">
              Commission Inquiry
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <InquiryForm />
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-8 py-16 md:py-24 border-t border-border" aria-label="Frequently asked questions">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-8">
              Collaboration FAQ
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <FAQ />
          </FadeIn>
        </div>
      </section>

      {/* Contact Info & Social */}
      <section className="px-6 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24 border-t border-border" aria-label="Contact information">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <FadeIn>
              <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-4">
                Phone
              </span>
              <a
                href="tel:+251934290520"
                className="font-body text-lg text-foreground hover:text-cobalt transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt focus:ring-offset-4"
              >
                +251 93 429 0520
              </a>
            </FadeIn>

            <FadeIn delay={0.1}>
              <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-4">
                Location
              </span>
              <p className="font-body text-lg text-foreground">Addis Ababa, Ethiopia</p>
              <p className="font-body text-sm text-muted-foreground mt-1">Available for commissions worldwide</p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground block mb-4">
                Messaging & Social
              </span>
              <div className="flex flex-col gap-2">
                  <a href="https://wa.me/251934290520" target="_blank" rel="noopener noreferrer" className="font-body text-base text-foreground hover:text-cobalt transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt focus:ring-offset-4">WhatsApp &lt;-&gt;</a>
                  <a href="https://t.me/MTdesignerandmodel" target="_blank" rel="noopener noreferrer" className="font-body text-base text-foreground hover:text-cobalt transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt focus:ring-offset-4">Telegram &lt;-&gt;</a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-body text-base text-foreground hover:text-cobalt transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt focus:ring-offset-4">Instagram &lt;-&gt;</a>
                  <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="font-body text-base text-foreground hover:text-cobalt transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt focus:ring-offset-4">Behance &lt;-&gt;</a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}