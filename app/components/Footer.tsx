"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import * as lucideReact from "lucide-react";
import Image from "next/image";

const Footer: React.FC = () => {
    const router = useRouter();
    return (
        <footer className="relative mt-20 overflow-hidden">
            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/4 top-1/3 w-96 h-96 bg-cyan-500/10 blur-[160px]" />
                <div className="absolute right-1/4 bottom-1/3 w-96 h-96 bg-purple-500/10 blur-[160px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">

                {/* BRAND */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-2"
                >
                     <Image src="/darkz.png" alt="Logo" width={50} height={50} />
                    <h3 className="text-2xl font-bold tracking-wide" onClick={() => router.push("/")}>
                        Dark<span className="text-cyan-400">Z</span>
                    </h3>

                    <p className="text-white/60 max-w-sm leading-relaxed">
                        Crafting modern web experiences with performance, creativity,
                        and scalable architecture at the core.
                    </p>

                    <motion.a
                        whileHover={{ x: 6 }}
                        href="https://docs.google.com/forms/d/e/1FAIpQLSfHaF8pkWGbsASAzkC68oIVX4Sw_eppOalg426FwsZdp5thUQ/viewform?usp=publish-editor"
                        className="inline-flex items-center gap-2 text-cyan-400"
                    >
                        Let’s work together <lucideReact.ArrowUpRight size={18} />
                    </motion.a>
                </motion.div>

                {/* QUICK LINKS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="space-y-4"
                >
                    <h4 className="text-lg font-semibold">Quick Links</h4>

                    {["Home", "Services", "Projects", "About"].map((item) => (
                        <motion.a
                            key={item}
                            whileHover={{ x: 6 }}
                            href={item === "Home" ? "#home" : `#${item.toLowerCase()}`}
                            className="block text-white/60 hover:text-white transition"
                        >
                            {item}
                        </motion.a>
                    ))}
                </motion.div>

                {/* SOCIALS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-6"
                >
                    <h4 className="text-lg font-semibold">Connect</h4>

                    <div className="flex gap-5">
                        {[
                            { icon: lucideReact.Github, link: "https://github.com/DarkZ143" },
                            { icon: lucideReact.Linkedin, link: "https://www.linkedin.com/in/rahul-kumar-612320205/" },
                            { icon: lucideReact.Instagram, link: "https://www.instagram.com/rstarbhardwaj/" },
                            { icon: lucideReact.Mail, link: "mailto:rahulbhardwajthestar58@gmail.com" },
                        ].map(({ icon: Icon, link }, index) => (
                            <motion.a
                                key={index}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, rotate: 6 }}
                                whileTap={{ scale: 0.95 }}
                                className="
                  p-3 rounded-full
                  bg-white/5 border border-white/10
                  hover:border-cyan-400/60
                  shadow-lg shadow-cyan-500/10
                "
                            >
                                <Icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* BOTTOM BAR */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="border-t border-white/10"
            >
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
                    <span>© {new Date().getFullYear()} DarkZ143. All rights reserved.</span>
                    <span>Built with Modern Stacks</span>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;
