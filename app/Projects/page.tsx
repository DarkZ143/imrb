"use client";

import React from "react";

import { motion } from "framer-motion";
import {
    ExternalLink,
    Download,
    Github,
    Layers,
    Cpu,
    Music,
} from "lucide-react";

const projects = [
    {
        title: "Modulae - Modern Furniture Store",
        description:
            "An e-commerce platform for modern furniture with a sleek design, smooth animations, and seamless user experience.",
        tech: "Next.js • Tailwind • TypeScript",
        action: "visit",
        link: "https://modulae.in",
        icon: Cpu,
    },
    {
        title: "DocMagic Converter & Manager",
        description:
            "A powerful offline document editor with ultra-fast PDF & image operations, built as a desktop-grade product.",
        tech: "Electron • High Performance • Offline",
        action: "download",
        link: "https://docsmagic.netlify.app",
        icon: Layers,
    },
    {
        title: "School of Future - School Website",
        description:
            "An educational platform offering interactive courses with immersive UI and engaging learning experiences.",
        tech: "Next.js • TypeScript • Tailwind",
        action: "visit",
        link: "https://schoolofuture.netlify.app",
        icon: Cpu,
    },
    {
        title: "Bhargawa Construction",
        description:
            "A construction company website with modern design aesthetics and interactive UI elements to showcase services effectively.",
        tech: "Next.js • TypeScript • Tailwind",
        action: "visit",
        link: "https://bhargawaconstruction.netlify.app",
        icon: Cpu,
    },
    {
        title: "Bhardwaj Innovation",
        description:
            "A product-based company website with immersive visuals and futuristic UI interactions.",
        tech: "Next.js • TypeScript • Firebase",
        action: "visit",
        link: "https://binv.netlify.app",
        icon: Cpu,
    },
    {
        title: "Dessert Ordering Website (Ongoing)",
        description:
            "A modern dessert ordering platform with real-time features and engaging UI.",
        tech: "Next.js • Firebase • Tailwind",
        action: "visit",
        link: "https://dessertwala.netlify.app",
        icon: Layers,
    },
    {
        title: "Music Portfolio",
        description:
            "A visually expressive music portfolio with smooth animations and sound-centric UX.",
        tech: "Next.js • React • Vanta",
        action: "visit",
        link: "https://therbsound.vercel.app",
        icon: Music,
    },
];

const container = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
};

const card = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
};

export default function Projects() {
    return (
        <>


            {/* PROJECTS SECTION */}
            <section className="relative py-34 px-6 overflow-hidden bg-black">
                {/* BACKGROUND GLOWS */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-24 left-24 w-96 h-96 bg-cyan-500/10 blur-[160px]" />
                    <div className="absolute bottom-24 right-24 w-96 h-96 bg-purple-500/10 blur-[160px]" />
                </div>

                {/* TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Selected <span className="text-cyan-400">Projects</span>
                    </h1>
                    <p className="mt-4 text-white/60 max-w-xl mx-auto">
                        A curated set of projects showcasing my skills across software,
                        web, and creative technology.
                    </p>
                </motion.div>

                {/* GRID */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
                >
                    {projects.map((project, index) => {
                        const Icon = project.icon;

                        return (
                            <motion.div
                                key={index}
                                variants={card}
                                whileHover={{ y: -14 }}
                                className="
                  group relative rounded-3xl p-6
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  hover:border-cyan-400/40
                  transition
                "
                            >
                                {/* GLOW */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-linear-to-br from-cyan-400/20 to-purple-500/20" />

                                {/* CONTENT */}
                                <div className="relative z-10 flex flex-col h-full">
                                    {/* ICON */}
                                    <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-white/5">
                                        <Icon className="text-cyan-400" />
                                    </div>

                                    <h3 className="text-2xl font-semibold mb-3">
                                        {project.title}
                                    </h3>

                                    <p className="text-white/60 mb-4 flex-1">
                                        {project.description}
                                    </p>

                                    <p className="text-sm text-cyan-400 mb-6">
                                        {project.tech}
                                    </p>

                                    {/* ACTION */}
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.08 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="
                      inline-flex items-center justify-center gap-2
                      px-6 py-3 rounded-full
                      bg-linear-to-r from-cyan-400 to-purple-500
                      text-black font-semibold
                      shadow-lg shadow-cyan-500/30
                    "
                                    >
                                        {project.action === "download" ? (
                                            <>
                                                <Download size={18} />
                                                Download
                                            </>
                                        ) : (
                                            <>
                                                <ExternalLink size={18} />
                                                Visit Project
                                            </>
                                        )}
                                    </motion.a>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* GITHUB CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-20 text-center"
                >
                    <p className="text-white/60 mb-4">
                        Many more projects are available on my GitHub
                    </p>

                    <motion.a
                        href="https://github.com/darkz143"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="
              inline-flex items-center gap-2
              px-7 py-3 rounded-full
              border border-white/10
              bg-white/5
              hover:border-cyan-400
            "
                    >
                        <Github size={18} />
                        Visit GitHub
                    </motion.a>
                </motion.div>
            </section>


        </>
    );
}
