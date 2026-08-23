import React from "react";
import HeroSection from "@/components/home/HeroSection";
import ProjectGallery from "@/components/home/ProjectGallery";
import PhilosophySection from "@/components/home/PhilosophySection";
import { Link } from "react-router-dom";

const HERO_IMAGE = "/images/p1.jpg";

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={HERO_IMAGE} />
      <ProjectGallery />
      <PhilosophySection />
      <div className="px-6 md:px-8 pb-8 flex justify-end">
        <Link to="/admin" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground">
          Admin
        </Link>
      </div>
    </div>
  );
}