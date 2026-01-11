"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import WaveLine from "./WaveLine";
import NavItem from "./NavItem";
import Image from "next/image";

const MENU_ITEMS: string[] = [
    "Home",
    "Services",
    "Projects",
    "Resume",
    "About me",
];

const Navbar: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const router = useRouter();
    const pathname = usePathname();

    const handleNav = (item: string) => {
        setOpen(false);

        // ROUTES
        if (item === "Services") {
            router.push("/Services");
            return;
        }

        if (item === "Projects") {
            router.push("/Projects");
            return;
        }
        if (item === "Resume") {
            window.open("/Resume");
            return;
        }

        // SCROLL TARGETS
        const scrollMap: Record<string, string> = {
            Home: "home",
            "About me": "about",
        };

        const targetId = scrollMap[item];
        if (!targetId) return;

        if (pathname !== "/") {
            router.push("/");
            setTimeout(() => {
                document
                    .getElementById(targetId)
                    ?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        } else {
            document
                .getElementById(targetId)
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleContact = () => {
        setOpen(false);

        if (pathname !== "/") {
            router.push("/");
            setTimeout(() => {
                document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
            }, 300);
        } else {
            document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* LEFT LOGO */}
                <div
                    onClick={() => handleNav("Home")}
                    className="flex items-center gap-3 cursor-pointer"
                >
                    <Image src="/darkz.png" alt="Logo" width={50} height={50} className="mb-4" />
                    <span className="text-xl font-semibold tracking-wide" onClick={() => router.push("/")}>
                        Dark<span className="text-cyan-400">Z</span>
                    </span>
                </div>

                {/* CENTER WAVES */}
                <div className="hidden md:flex flex-1 justify-center">
                    <WaveLine />
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden md:flex items-center gap-8">
                    {MENU_ITEMS.map((item: string) => (
                        <div key={item} onClick={() => handleNav(item)}>
                            <NavItem text={item} />
                        </div>
                    ))}

                    {/* CONTACT BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleContact}
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
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="
          fixed inset-0
          bg-black/40
          backdrop-blur-sm
          z-998
        "
                            onClick={() => setOpen(false)}
                        />

                        {/* SLIDE MENU */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="
          fixed top-0 left-0
          h-screen w-full
          md:hidden
          bg-black/90
          z-999
        "
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                aria-label="Close menu"
                                onClick={() => setOpen(false)}
                                className="absolute top-6 right-6 text-white"
                            >
                                <X size={30} />
                            </button>

                            {/* MENU ITEMS */}
                            <div className="flex flex-col items-center gap-8 pt-28">
                                {MENU_ITEMS.map((item: string) => (
                                    <motion.button
                                        key={item}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            handleNav(item);
                                            setOpen(false);
                                        }}
                                        className="text-xl text-white"
                                    >
                                        {item}
                                    </motion.button>
                                ))}

                                <motion.button
                                    whileHover={{ scale: 1.08 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        handleContact();
                                        setOpen(false);
                                    }}
                                    className="
              mt-6 px-6 py-3 rounded-full
              bg-linear-to-r from-cyan-400 to-purple-500
              text-black font-semibold
            "
                                >
                                    Contact Me
                                </motion.button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

        </nav>
    );
};

export default Navbar;
