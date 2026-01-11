"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Designs = [
    {
        image: "/Designs/ParadiseCollections.png",
        title: "Paradise Collections Poster",
        description: "Vibrant poster design showcasing tropical fashion vibes.",
        tech: "Figma • Photoshop",
    },
    {
        image: "/Designs/Gucci.png",
        title: "Gucci Man Collections",
        description: "Luxury fashion poster with bold typography and elegance.",
        tech: "Figma • Photoshop",
    },
    {
        image: "/Designs/Apple.png",
        title: "Apple iPhone Collection",
        description: "Minimal Apple-style product poster with clean aesthetics.",
        tech: "Figma • Photoshop",
    },
    {
        image: "/Designs/GreenTeaCream.png",
        title: "Green Tea Cream",
        description: "Eco-friendly product design with earthy green tones.",
        tech: "Figma • Photoshop",
    },
    {
        image: "/Designs/AudixFeel.png",
        title: "AudixFeel Headphones",
        description: "Modern tech poster with strong contrast and CTA.",
        tech: "Figma • Photoshop",
    },
    {
        image: "/Designs/Fogg.png",
        title: "Fogg Perfume",
        description: "Luxury perfume poster with premium visual hierarchy.",
        tech: "Figma • Photoshop",
    },
    {
        image: "/Designs/Fender.png",
        title: "Fender Acoustic Guitar",
        description: "Music-inspired poster highlighting brand energy.",
        tech: "Figma • Photoshop",
    },
    {
        image: "/Designs/StreetBoss.png",
        title: "Street Boss Shoes",
        description: "Trendy streetwear poster with bold CTA & discount.",
        tech: "Figma • Photoshop",
    },
    {
        image: "/Designs/NatureOil.jpg",
        title: "Nature Oil",
        description: "Organic product design with calm natural palette.",
        tech: "Figma • Photoshop",
    },
    {
        image: "/Designs/Zgc.png",
        title: "Zebronics Gaming Collection",
        description: "High-energy gaming poster with neon highlights.",
        tech: "Figma • Photoshop",
    },
];

export default function ProductDesign() {
    return (
        <div className="bg-black text-white">
            

            {/* HERO */}
            <section className="relative py-40 px-6 overflow-hidden">
                {/* BACKGROUND GLOW */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-24 left-24 w-96 h-96 bg-purple-500/10 blur-[160px]" />
                    <div className="absolute bottom-24 right-24 w-96 h-96 bg-cyan-500/10 blur-[160px]" />
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Visual <span className="text-cyan-400">Designs</span>
                    </h1>
                    <p className="mt-4 text-white/60 max-w-xl mx-auto">
                        A curated gallery of graphic and product design work blending
                        creativity, branding, and modern aesthetics.
                    </p>
                </motion.div>

                {/* GRID */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                    {Designs.map((design, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            whileHover={{ y: -12 }}
                            className="
                group relative rounded-3xl overflow-hidden
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-cyan-400/40
                transition
              "
                        >
                            {/* IMAGE */}
                            <div className="relative w-full aspect-video overflow-hidden">
                                <Image
                                    src={design.image}
                                    alt={design.title}
                                    fill
                                    className="
                    object-cover
                    transition duration-700
                    group-hover:scale-110
                  "
                                />
                                {/* OVERLAY */}
                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                            </div>

                            {/* CONTENT */}
                            <div className="p-6 relative">
                                <h2 className="text-2xl font-semibold mb-2">
                                    {design.title}
                                </h2>
                                <p className="text-white/60 mb-3">
                                    {design.description}
                                </p>
                                <span className="text-sm text-cyan-400">
                                    {design.tech}
                                </span>
                            </div>

                            {/* GLOW */}
                            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition blur-xl bg-linear-to-br from-cyan-400/20 to-purple-500/20" />
                        </motion.div>
                    ))}
                </div>
            </section>

        </div>
    );
}
