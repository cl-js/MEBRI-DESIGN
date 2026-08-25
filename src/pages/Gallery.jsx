import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ASSET_ROOT = "https://wicesnjxvsfgyhgcqogc.supabase.co/storage/v1/object/public/Mebri-design";
const galleryImages = [
	"O3-1.png", "O4.png", "O5.png", "O6.png", "O7.png", "O8.png",
	"O9.png", "O10.png", "O11.png", "O12.png", "O1.png", "O2.png",
].map((file) => `${ASSET_ROOT}/${file}`);

const cinematicFrames = galleryImages.slice(0, 8);

export default function Gallery() {
	const [frame, setFrame] = useState(0);

	useEffect(() => {
		const timer = window.setInterval(() => {
			setFrame((current) => (current + 1) % cinematicFrames.length);
		}, 4200);
		return () => window.clearInterval(timer);
	}, []);

	return (
		<div className="bg-charcoal text-gallery">
			<section className="relative min-h-[88vh] overflow-hidden" aria-label="Cinematic gallery opening">
				{cinematicFrames.map((src, index) => (
					<motion.img
						key={src}
						src={src}
						alt={`Cinematic frame ${index + 1}`}
						initial={false}
						animate={{
							opacity: frame === index ? 1 : 0,
							scale: frame === index ? 1.06 : 1.14,
							x: frame === index ? `${(index % 2 ? -1 : 1) * 1.5}%` : 0,
							rotate: frame === index ? (index % 2 ? -0.35 : 0.35) : 0,
						}}
						transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
						className="absolute inset-0 h-full w-full object-cover object-center"
						loading={index === 0 ? "eager" : "lazy"}
					/>
				))}
				<div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/10 to-charcoal/20" />
				<div className="absolute inset-x-6 bottom-10 md:inset-x-8 md:bottom-14">
					<div className="flex items-end justify-between gap-8">
						<div>
							<p className="mb-4 font-mono text-[10px] uppercase tracking-[0.35em] text-white/60">
								Mebri Design / Moving Image Study
							</p>
							<h1 className="max-w-3xl font-body text-5xl font-light leading-[0.95] tracking-tight md:text-8xl">
								Orbiting the <em className="font-normal text-sage">silhouette.</em>
							</h1>
							<p className="mt-6 max-w-md font-mono text-xs uppercase leading-relaxed tracking-widest text-white/65">
								One continuous clockwise passage through form, fabric, and light.
							</p>
						</div>
						<div className="hidden shrink-0 font-mono text-xs tracking-widest text-white/60 sm:block">
							<span className="text-white">{String(frame + 1).padStart(2, "0")}</span>
							<span className="mx-2">/</span>
							{String(cinematicFrames.length).padStart(2, "0")}
						</div>
					</div>
					<div className="mt-8 flex gap-2" aria-label="Cinematic frame progress">
						{cinematicFrames.map((src, index) => (
							<button
								key={src}
								type="button"
								aria-label={`Show frame ${index + 1}`}
								onClick={() => setFrame(index)}
								className={`h-px flex-1 transition-colors duration-500 ${frame === index ? "bg-white" : "bg-white/30"}`}
							/>
						))}
					</div>
				</div>
			</section>

			<section className="bg-background px-6 py-24 text-foreground md:px-8 md:py-36" aria-label="Gallery frames">
				<div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
					<div>
						<p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">The full passage</p>
						<h2 className="max-w-xl font-body text-4xl font-light tracking-tight md:text-6xl">A body of work in motion.</h2>
					</div>
					<p className="max-w-xs font-mono text-xs uppercase leading-relaxed tracking-widest text-muted-foreground">
						Twelve frames / one atmosphere / captured in sequence
					</p>
				</div>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-6">
					{galleryImages.map((src, index) => (
						<figure key={src} className={`group overflow-hidden ${index % 5 === 0 ? "md:col-span-7" : "md:col-span-5"}`}>
							<img
								src={src}
								alt={`Mebri Design gallery frame ${index + 1}`}
								className="block h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
								loading="lazy"
							/>
							<figcaption className="flex justify-between py-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
								<span>Frame {String(index + 1).padStart(2, "0")}</span>
								<span>O{index === 0 ? "3-1" : index >= 10 ? index - 9 : index + 3}</span>
							</figcaption>
						</figure>
					))}
				</div>
			</section>
		</div>
	);
}
