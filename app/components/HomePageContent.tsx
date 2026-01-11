"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const gradientText =
  "bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent";

const HomePageContent: React.FC = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-36 relative overflow-hidden">

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6">

          {/* GREET */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-widest text-sm text-cyan-400"
          >
            Hello 👋 I’m
          </motion.p>

          {/* NAME */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className={`text-5xl md:text-6xl font-extrabold ${gradientText}`}
          >
            Rahul Kumar
          </motion.h1>

          {/* ROLE */}
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-xl md:text-2xl text-white/80"
          >
            Full-Stack Developer • Cloud • AI Enthusiast
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/60 max-w-xl leading-relaxed"
          >
            I design and develop modern, high-performance web applications
            with rich user experiences, scalable architecture, and
            production-ready code. I love blending creativity with logic.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-5 pt-4"
          >
            {/* PRIMARY */}
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={()=>router.push("/Projects")}
              className="px-7 py-3 rounded-full font-semibold text-black
              bg-linear-to-r from-cyan-400 to-purple-500
              shadow-lg shadow-cyan-500/30"
            >
              View Projects
            </motion.button>

            {/* SECONDARY */}
            <motion.button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3 rounded-full font-semibold
  border border-white/20 text-white
  hover:border-purple-400 hover:text-purple-300
  transition"
            >
              Contact Me
            </motion.button>

          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, rotate: -3, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden
            border border-white/10
            shadow-2xl shadow-purple-500/20">

            <Image
              src="/Rahulimg.png"
              alt="Rahul Kumar"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />

            {/* IMAGE GLOW */}
            <div className="absolute inset-0 ring-1 ring-cyan-400/30" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomePageContent;
