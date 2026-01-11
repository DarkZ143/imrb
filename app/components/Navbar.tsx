"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import WaveLine from "./WaveLine";
import NavItem from "./NavItem";
import Image from "next/image";

const MENU_ITEMS: string[] = [
    "Home",
    "Services",
    "Projects",
    "About me",
];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LEFT LOGO */}
                <div className="flex items-center gap-3">
                    {/*Logo Image */}
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                    />

                    <span className="text-xl font-semibold tracking-wide">
                        Rahul<span className="text-cyan-400">.dev</span>
                    </span>
                </div>

                {/* CENTER WAVES */}
                <div className="hidden md:flex flex-1 justify-center">
                    <WaveLine />
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-8">
                    {MENU_ITEMS.map((item: string) => (
                        <NavItem key={item} text={item} />
                    ))}

                    {/* CONTACT BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2 rounded-full bg-linear-to-r from-cyan-400 to-purple-500 text-black font-semibold shadow-lg"
                    >
                        Contact Me
                    </motion.button>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    aria-label="Toggle menu"
                    onClick={() => setOpen((prev) => !prev)}
                    className="md:hidden"
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: "100vh" }}
                        exit={{ height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="md:hidden bg-black/95 overflow-hidden"
                    >
                        <div className="flex flex-col items-center gap-8 pt-20">
                            {MENU_ITEMS.map((item: string) => (
                                <motion.a
                                    key={item}
                                    href="#"
                                    whileHover={{ scale: 1.1 }}
                                    className="text-xl"
                                >
                                    {item}
                                </motion.a>
                            ))}

                            <motion.button
                                whileHover={{ scale: 1.08 }}
                                className="mt-6 px-6 py-3 rounded-full bg-linear-to-r from-cyan-400 to-purple-500 text-black font-semibold"
                            >
                                Contact Me
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
