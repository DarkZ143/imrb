"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};



const About: React.FC = () => {
    const route = useRouter();
    return (
        <section className="min-h-screen px-6 py-30 relative overflow-hidden">

            {/* BACKGROUND GLOWS */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/20 blur-[140px]" />
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 blur-[140px]" />
            </div>

            <div className="max-w-6xl mx-auto space-y-24">

                {/* INTRO */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold">
                        About <span className="text-cyan-400">Me</span>
                    </h1>
                    <p className="text-white/65 max-w-3xl leading-relaxed">
                        I’m <span className="text-white">Rahul Kumar</span>, a developer and
                        creative technologist who loves building meaningful digital
                        experiences. I combine logic, design, and creativity to craft
                        products that feel alive.
                    </p>
                </motion.div>

                {/* EDUCATION */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold mb-6">Education</h2>

                    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                        <h3 className="text-lg font-medium text-cyan-400">
                            Bachelor of Technology
                        </h3>
                        <p className="text-white/70 mt-2">
                            Computer Science and Design (2022-2026)
                        </p>
                        <p className="text-white/60">
                            Dr. A.P.J. Abdul Kalam Technical University, Lucknow, India
                        </p>
                        <h3 className="text-lg font-medium text-cyan-400 pt-4">
                            Intermediate
                        </h3>
                        <p className="text-white/70 mt-2">Physics, Chemistry, Mathematics (2018-2019)</p>
                        <p className="text-white/60">
                            Board of Secondary Education, Bhopal, Madhya Pradesh, India
                        </p>
                    </div>
                </motion.div>

                {/* SKILLS */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold mb-8">Skills</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                        {/* FRONTEND */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                        >
                            <h3 className="text-lg font-semibold mb-4 bg-linear-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                                Frontend
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Framer Motion", "Vanta JS"].map(
                                    (skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.15 }}
                                            className="px-4 py-2 rounded-full text-sm
              bg-cyan-400/10 border border-cyan-400/20
              cursor-pointer"
                                        >
                                            {skill}
                                        </motion.span>
                                    )
                                )}
                            </div>
                        </motion.div>

                        {/* BACKEND */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                        >
                            <h3 className="text-lg font-semibold mb-4 bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                Backend
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {["Node.js", "Firebase", "MongoDB", "REST API", "Authentication", "Nodemailer"].map(
                                    (skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.15 }}
                                            className="px-4 py-2 rounded-full text-sm
              bg-purple-400/10 border border-purple-400/20
              cursor-pointer"
                                        >
                                            {skill}
                                        </motion.span>
                                    )
                                )}
                            </div>
                        </motion.div>

                        {/* TOOLS */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                        >
                            <h3 className="text-lg font-semibold mb-4 bg-linear-to-r from-emerald-400 to-lime-400 bg-clip-text text-transparent">
                                Tools
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {["Git", "GitHub", "Docker", "VS Code", "Figma", "Postman", "Cloudniary"].map(
                                    (skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.15 }}
                                            className="px-4 py-2 rounded-full text-sm
              bg-emerald-400/10 border border-emerald-400/20
              cursor-pointer"
                                        >
                                            {skill}
                                        </motion.span>
                                    )
                                )}
                            </div>
                        </motion.div>

                        {/* PLATFORMS */}
                        <motion.div
                            whileHover={{ y: -6 }}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl"
                        >
                            <h3 className="text-lg font-semibold mb-4 bg-linear-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                                Platforms
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {["Cloudniary", "AWS", "Windows", "Vercel", "hostinger", "Netlify"].map(
                                    (skill) => (
                                        <motion.span
                                            key={skill}
                                            whileHover={{ scale: 1.15 }}
                                            className="px-4 py-2 rounded-full text-sm
              bg-orange-400/10 border border-orange-400/20
              cursor-pointer"
                                        >
                                            {skill}
                                        </motion.span>
                                    )
                                )}
                            </div>
                        </motion.div>

                    </div>
                </motion.div>


                {/* CERTIFICATIONS */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold mb-6">Certifications</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            "AI Entrepreneurship",
                            "Industrial Training",
                            "Web Development",
                            "HTML & CSS",
                            "JavaScript Basics",
                            "Data Structures & Algorithms",
                        ].map((cert) => (
                            <motion.div
                                key={cert}
                                whileHover={{ y: -6 }}
                                className="
                  p-6 rounded-xl bg-white/5
                  border border-white/10
                  backdrop-blur-xl
                "
                            >
                                <p className="text-white/80">{cert}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* FREELANCING / PROJECTS */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-2xl font-semibold mb-6">
                        Freelancing & Projects
                    </h2>

                    <div className="space-y-4 text-white/65 max-w-4xl">
                        <p>
                            I’ve worked on personal and freelance projects including
                            websites, document automation software, creative tools,
                            and experimental platforms like an online operating system.
                        </p>
                        <p>
                            My focus is always on performance, usability, and clean
                            architecture.
                        </p>
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center pt-10"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="
              px-8 py-4 rounded-full font-semibold text-black
              bg-linear-to-r from-cyan-400 to-purple-500
              shadow-xl shadow-cyan-500/30
            "
                        onClick={() => route.push("https://docs.google.com/forms/d/e/1FAIpQLSfHaF8pkWGbsASAzkC68oIVX4Sw_eppOalg426FwsZdp5thUQ/viewform?usp=publish-editor")}
                    >
                        Let’s Work Together
                    </motion.button>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
