"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type Service = {
    title: string;
    desc: string;
    gradient: string;
    link: string;
};

const services: Service[] = [
    {
        title: "Front End Development",
        desc: "Building fast, responsive, and visually engaging user interfaces using modern frameworks, animations, and performance-focused architecture.",
        gradient: "from-cyan-400 via-sky-500 to-blue-600",
        link: "/Services",
    },
    {
        title: "Backend Development",
        desc: "Designing secure, scalable, and high-performance server-side systems, APIs, databases, and authentication workflows.",
        gradient: "from-purple-400 via-pink-500 to-red-500",
        link: "/Services",
    },
    {
        title: "Full Stack Development",
        desc: "Delivering complete end-to-end solutions by seamlessly integrating frontend, backend, databases, and cloud infrastructure.",
        gradient: "from-emerald-400 via-lime-400 to-yellow-400",
        link: "/Services",
    },
];

const CreativeServices: React.FC = () => {
    const router = useRouter();

    const handleNavigate = (link: string) => {
        if (link.startsWith("http")) {
            window.open(link, "_blank");
        } else {
            router.push(link);
        }
    };

    return (
        <section className="py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold">
                        What I <span className="text-cyan-400">Create</span>
                    </h2>
                    <p className="text-white/60 mt-3 max-w-2xl">
                        I blend technology, creativity, and design to build engaging
                        digital experiences across sound, web, and visual design.
                    </p>
                </motion.div>

                {/* HORIZONTAL CARDS */}
                <div className="flex gap-8 overflow-x-auto scrollbar-hide pb-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            whileHover={{ y: -10 }}
                            onClick={() => handleNavigate(service.link)}
                            className="
                min-w-75 md:min-w-85 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                p-6 relative group cursor-pointer
              "
                        >
                            {/* GRADIENT GLOW */}
                            <div
                                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                transition duration-500 blur-xl bg-linear-to-r ${service.gradient}`}
                            />

                            {/* CONTENT */}
                            <div className="relative z-10 space-y-4">
                                <h3
                                    className={`text-xl font-semibold bg-linear-to-r ${service.gradient}
                  bg-clip-text text-transparent`}
                                >
                                    {service.title}
                                </h3>

                                <p className="text-white/65 leading-relaxed">
                                    {service.desc}
                                </p>

                                <motion.span
                                    whileHover={{ x: 6 }}
                                    className="inline-block text-sm text-cyan-400"
                                >
                                    Explore →
                                </motion.span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CreativeServices;
