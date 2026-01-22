"use client";

import React from "react";
import Image from "next/image";
import Resume from "../rbresume.jpg";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import Contact from "../components/Contact";


const ResumePage = () => {
    return (
        <div className="bg-gray-900 min-h-screen text-white">
            <section className="relative py-40 px-4 overflow-hidden">

                {/* BACKGROUND GLOWS (reduced) */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-32 left-1/4 w-72 h-72 bg-cyan-500/10 blur-[140px]" />
                    <div className="absolute bottom-32 right-1/4 w-72 h-72 bg-purple-500/10 blur-[140px]" />
                </div>

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10"
                >
                    <div className="text-center mb-10">
                        <motion.h2
                            className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <FileText className="text-cyan-400" size={26} />
                            My{" "}
                            <motion.span
                                className="font-bold"
                                animate={{
                                    color: [
                                        "#22d3ee", // cyan
                                        "#6366f1", // indigo
                                        "#8b5cf6", // violet
                                        "#ec4899", // pink
                                        "#22d3ee",
                                    ],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            >
                                Resume
                            </motion.span>
                        </motion.h2>


                        {/* TWO-LAYER SINE WAVE UNDERLINE */}
                        <div className="relative mt-3 flex justify-center">
                            <svg
                                width="220"
                                height="24"
                                viewBox="0 0 220 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="resumeWave1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#22d3ee" />
                                        <stop offset="50%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#ec4899" />
                                    </linearGradient>

                                    <linearGradient id="resumeWave2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#67e8f9" />
                                        <stop offset="50%" stopColor="#a78bfa" />
                                        <stop offset="100%" stopColor="#f472b6" />
                                    </linearGradient>
                                </defs>

                                {/* BACK WAVE */}
                                <motion.path
                                    d="M0 12 
                   C 22 2, 44 22, 66 12
                   S 110 2, 132 12
                   S 176 22, 198 12
                   S 220 2, 220 12"
                                    stroke="url(#resumeWave2)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    fill="transparent"
                                    opacity="0.35"
                                    animate={{
                                        strokeDasharray: ["0 360", "360 0"],
                                        strokeDashoffset: [0, -360],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                {/* FRONT WAVE */}
                                <motion.path
                                    d="M0 12 
                   C 18 6, 36 18, 54 12
                   S 90 6, 108 12
                   S 144 18, 162 12
                   S 198 6, 220 12"
                                    stroke="url(#resumeWave1)"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    fill="transparent"
                                    animate={{
                                        strokeDasharray: ["0 280", "280 0"],
                                        strokeDashoffset: [0, -280],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </svg>
                        </div>
                    </div>


                    <p className="mt-3 text-white/60 max-w-md mx-auto text-sm">
                        A concise overview of my skills, experience, and creative journey.
                    </p>
                </motion.div>

                {/* RESUME CONTAINER */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="
            max-w-3xl mx-auto
            rounded-2xl
            bg-white/5 backdrop-blur-lg
            border border-white/10
            p-4 md:p-6
          "
                >
                    {/* RESUME IMAGE */}
                    <motion.div
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.3 }}
                        className="relative rounded-xl overflow-hidden"
                    >
                        <Image
                            src={Resume}
                            alt="Resume"
                            className="w-full h-auto"
                            priority
                        />

                        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition" />
                    </motion.div>

                    {/* CTA */}
                    <div className="mt-6 flex justify-center">
                        <motion.a
                            href="/rbresume.pdf"
                            download
                            whileHover={{ scale: 1.06 }}
                            whileTap={{ scale: 0.95 }}
                            className="
      inline-flex items-center gap-2
      px-6 py-2.5 rounded-full
      text-sm font-semibold text-black
      bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500
      shadow-md shadow-cyan-500/20
      cursor-pointer
    "
                        >
                            <Download size={16} />
                            Download Resume
                        </motion.a>
                    </div>

                </motion.div>
            </section>
            <Contact />
        </div>
    );
};

export default ResumePage;
