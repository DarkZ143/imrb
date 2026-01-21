'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code2,
    Smartphone,
    Database,

    Cpu,
    Layout,
} from "lucide-react";
import Contact from "../components/Contact";

type Service = {
    title: string;
    desc: string;
    price: string;
    icon: React.ElementType;
};

const Services = () => {
    const router = useRouter();

    const services: Service[] = [
        // 🌐 WEB DEVELOPMENT
        {
            title: "Simple Web Development",
            desc: "Static websites using HTML, CSS & modern layouts",
            price: "₹500 / Page",
            icon: Layout,
        },
        {
            title: "Advanced Web Development",
            desc: "Dynamic & interactive React.js powered websites",
            price: "₹1,200 / Page",
            icon: Code2,
        },
        {
            title: "Next.js Website Development",
            desc: "SEO-friendly, fast & scalable production websites",
            price: "₹2,000 – ₹15,000 (based on features)",
            icon: Code2,
        },
        {
            title: "Backend Development (Node.js)",
            desc: "Secure, scalable REST APIs using Node.js, Express & databases",
            price: "₹3,000 – ₹30,000",
            icon: Code2,
        },
        {
            title: "Firebase-Based Web Applications",
            desc: "Authentication, Firestore, real-time data & hosting",
            price: "₹3,000 – ₹25,000",
            icon: Database,
        },

        // 💻 SOFTWARE / APP DEVELOPMENT
        {
            title: "Android App UI/UX Design",
            desc: "Mobile-first UX & UI design for Android applications",
            price: "₹1,500 / Screen",
            icon: Smartphone,
        },
        {
            title: "Custom Software Design",
            desc: "Modern, scalable & secure software architecture design",
            price: "₹1,500 / Module",
            icon: Cpu,
        },
        {
            title: "Full Stack Application Development",
            desc: "End-to-end web & software app development solutions",
            price: "₹5,000 – ₹50,000",
            icon: Code2,
        },
        {
            title: "Deployment & Hosting Setup",
            desc: "Vercel, Firebase, VPS & production-ready deployments",
            price: "₹1,000 – ₹5,000",
            icon: Cpu,
        },
    ];


    const [selectedService, setSelectedService] = useState<Service | null>(null);

    return (
        <>

            {/* SERVICES SECTION */}
            <section className="relative py-34 px-6 overflow-hidden">
                {/* BACKGROUND GLOW */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[160px]" />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 blur-[160px]" />
                </div>

                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
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
                                Services
                            </motion.span>
                        </motion.h2>


                        {/* TWO-LAYER SINE WAVE UNDERLINE */}
                        <div className="relative mt-4 flex justify-center">
                            <svg
                                width="260"
                                height="26"
                                viewBox="0 0 260 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <defs>
                                    <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#22d3ee" />
                                        <stop offset="50%" stopColor="#6366f1" />
                                        <stop offset="100%" stopColor="#ec4899" />
                                    </linearGradient>

                                    <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#67e8f9" />
                                        <stop offset="50%" stopColor="#a78bfa" />
                                        <stop offset="100%" stopColor="#f472b6" />
                                    </linearGradient>
                                </defs>

                                {/* BACK WAVE (SOFT + SLOW) */}
                                <motion.path
                                    d="M0 13 
                   C 25 2, 50 24, 75 13
                   S 125 2, 150 13
                   S 200 24, 225 13
                   S 250 2, 260 13"
                                    stroke="url(#waveGradient2)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    fill="transparent"
                                    opacity="0.4"
                                    animate={{
                                        strokeDasharray: ["0 400", "400 0"],
                                        strokeDashoffset: [0, -400],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />

                                {/* FRONT WAVE (SHARP + FAST) */}
                                <motion.path
                                    d="M0 13 
                   C 20 6, 40 20, 60 13
                   S 100 6, 120 13
                   S 160 20, 180 13
                   S 220 6, 260 13"
                                    stroke="url(#waveGradient1)"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    fill="transparent"
                                    animate={{
                                        strokeDasharray: ["0 300", "300 0"],
                                        strokeDashoffset: [0, -300],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                        ease: "linear",
                                    }}
                                />
                            </svg>
                        </div>
                    </motion.div>


                    {/* GRID */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <motion.div
                                    key={index}
                                    onClick={() => setSelectedService(service)}
                                    whileHover={{ y: -12 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="
                    group cursor-pointer
                    rounded-2xl p-6
                    bg-white/5 backdrop-blur-xl
                    border border-white/10
                    hover:border-cyan-400/40
                    transition
                  "
                                >
                                    {/* ICON */}
                                    <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-xl
                    bg-linear-to-br from-cyan-400/20 to-purple-500/20">
                                        <Icon className="text-cyan-400" />
                                    </div>

                                    <h3 className="text-xl font-semibold mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-white/60 text-sm">
                                        {service.desc}
                                    </p>

                                    <motion.span
                                        whileHover={{ x: 6 }}
                                        className="inline-block mt-4 text-sm text-cyan-400"
                                    >
                                        View pricing →
                                    </motion.span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* POPUP */}
            <AnimatePresence>
                {selectedService && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.85, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="
                relative w-full max-w-md
                rounded-2xl p-8
                bg-black/70 backdrop-blur-xl
                border border-white/10
              "
                        >
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-4 right-4 text-white/50 hover:text-red-400"
                            >
                                ✕
                            </button>

                            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">
                                {selectedService.title}
                            </h3>

                            <p className="text-white/70 mb-4">
                                {selectedService.desc}
                            </p>

                            <p className="text-lg font-bold text-green-400 mb-6">
                                {selectedService.price}
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => router.push("/#contact")}
                                className="
                  w-full py-3 rounded-full font-semibold text-black
                  bg-linear-to-r from-cyan-400 to-purple-500
                  shadow-lg shadow-cyan-500/30
                "
                            >
                                Contact Me
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            <Contact />


        </>
    );
};

export default Services;
