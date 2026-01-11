'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Code2,
    Palette,
    Smartphone,
    Database,
    Music,
    Headphones,
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
        {
            title: "Simple Web Design",
            desc: "HTML & CSS only",
            price: "₹500 / Page",
            icon: Layout,
        },
        {
            title: "Advanced Web Design",
            desc: "React.js powered websites",
            price: "₹1,200 / Page",
            icon: Code2,
        },
        {
            title: "Next.js Website Development",
            desc: "SEO-friendly, fast & scalable Next.js websites",
            price: "₹2,000 – ₹15,000 (based on features)",
            icon: Cpu,
        },
        {
            title: "Figma to Web",
            desc: "Pixel-perfect frontend from Figma designs",
            price: "₹1,000 / Page",
            icon: Palette,
        },
        {
            title: "Firebase-Based Web Apps",
            desc: "Auth, Firestore, real-time data & hosting",
            price: "₹3,000 – ₹25,000",
            icon: Database,
        },
        {
            title: "Android UI/UX Design",
            desc: "Mobile-first UX & UI for Android apps",
            price: "₹1,500 / Page",
            icon: Smartphone,
        },
        {
            title: "Deployment & Hosting",
            desc: "Vercel, Firebase, VPS & production setup",
            price: "₹1,000 – ₹5,000",
            icon: Cpu,
        },
        {
            title: "Software Design",
            desc: "Modern & scalable app architecture design",
            price: "₹1,500 / Page",
            icon: Cpu,
        },
        {
            title: "Sound Design",
            desc: "Custom sounds for apps & games",
            price: "₹500 – ₹10,000",
            icon: Headphones,
        },
        {
            title: "Mixing & Mastering",
            desc: "Professional audio finishing",
            price: "₹1,000 – ₹10,000",
            icon: Music,
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
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-center mb-16"
                    >
                        My <span className="text-cyan-400">Services</span>
                    </motion.h2>

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
