import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ProjectGallery from "@/components/home/ProjectGallery";
import PhilosophySection from "@/components/home/PhilosophySection";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#080808] text-[#f4f1eb] min-h-screen selection:bg-[#c9a45c] selection:text-black">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="group flex items-center gap-3" aria-label="MEBRI home">
            <span className="grid h-9 w-9 place-items-center border border-[#c9a45c]/60 text-xs font-semibold tracking-[0.25em] text-[#c9a45c] transition group-hover:bg-[#c9a45c] group-hover:text-black">M</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/80">MEBRI / ATELIER</span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
            <Link to="/projects" className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/65 transition hover:text-[#c9a45c]">Collections</Link>
            <Link to="/about" className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/65 transition hover:text-[#c9a45c]">The Atelier</Link>
            <Link to="/contact" className="border border-[#c9a45c]/60 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.28em] text-[#c9a45c] transition hover:bg-[#c9a45c] hover:text-black">Bespoke</Link>
          </nav>
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">Addis Ababa · ET</span>
        </div>
      </header>

      <main>
        <div className="relative pt-14">
          <HeroSection />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#080808] to-transparent" />
        </div>

        <section className="border-y border-white/10 bg-[#0b0b0b] px-6 py-28 md:px-10 md:py-40" aria-labelledby="statement">
          <div className="mx-auto max-w-6xl">
            <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.45em] text-[#c9a45c]">01 / Identity</p>
            <h2 id="statement" className="max-w-5xl font-serif text-4xl font-light leading-[1.05] tracking-[-0.035em] text-white md:text-7xl lg:text-8xl">Ethiopian heritage,<br /><span className="italic text-white/45">re-cut for tomorrow.</span></h2>
            <div className="mt-12 flex flex-col justify-between gap-8 border-t border-white/10 pt-8 md:flex-row md:items-end">
              <p className="max-w-xl text-sm leading-7 text-white/50 md:text-base">MEBRI is a contemporary fashion studio where textile memory, precise tailoring and modern silhouette meet. Each garment is designed as an expression of identity—not simply an outfit.</p>
              <Link to="/about" className="shrink-0 font-mono text-[10px] uppercase tracking-[0.3em] text-[#c9a45c] underline decoration-[#c9a45c]/30 underline-offset-8 transition hover:decoration-[#c9a45c]">Discover the atelier →</Link>
            </div>
          </div>
        </section>

        <ProjectGallery />
        <PhilosophySection />

        <section className="relative overflow-hidden border-t border-white/10 bg-[#080808] px-6 py-28 md:px-10 md:py-40" aria-labelledby="bespoke-title">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#c9a45c]/10 blur-3xl" />
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.45em] text-[#c9a45c]">04 / Private Atelier</p>
              <h2 id="bespoke-title" className="max-w-4xl font-serif text-5xl font-light leading-none tracking-[-0.04em] md:text-8xl">Made for<br /><span className="italic text-white/45">your story.</span></h2>
              <p className="mt-8 max-w-xl text-sm leading-7 text-white/50">Request a private consultation for custom tailoring, editorial styling or a one-of-one MEBRI creation.</p>
            </div>
            <Link to="/contact" className="inline-flex min-h-14 items-center justify-center border border-[#c9a45c] bg-[#c9a45c] px-7 font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-black transition hover:bg-transparent hover:text-[#c9a45c]">Book a private fitting</Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 font-mono text-[9px] uppercase tracking-[0.25em] text-white/30 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} MEBRI DESIGN</span>
          <div className="flex gap-5"><Link to="/accessibility" className="transition hover:text-white">Accessibility</Link><Link to="/privacy" className="transition hover:text-white">Privacy</Link></div>
        </div>
      </footer>
    </div>
  );
}
