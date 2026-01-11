"use client";

import React from "react";
import Image from "next/image";
import Resume from "../rbresume.png";
import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";


const ResumePage = () => {
    return (
        <div className="bg-black min-h-screen text-white">
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
                    <h2 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-3">
                        <FileText className="text-cyan-400" size={26} />
                        My <span className="text-cyan-400">Resume</span>
                    </h2>

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
        </div>
    );
};

export default ResumePage;
