"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

const Contact: React.FC = () => {
    const formRef = useRef<HTMLFormElement | null>(null);

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus("idle");

        const formData = new FormData(formRef.current!);

        const payload = {
            name: formData.get("user_name"),
            email: formData.get("user_email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("Failed");

            setStatus("success");
            formRef.current?.reset(); // ✅ SAFE
        } catch (error) {
            console.error(error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };


    return (
        <section className="relative py-34 px-6 overflow-hidden">

            {/* BACKGROUND GLOWS */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-24 left-20 w-96 h-96 bg-cyan-500/20 blur-[160px]" />
                <div className="absolute bottom-24 right-20 w-96 h-96 bg-purple-500/20 blur-[160px]" />
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6"
                >
                    <motion.h2
                        className="text-4xl md:text-5xl font-bold text-left"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Let’s{" "}
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
                            Connect
                        </motion.span>
                    </motion.h2>


                    <p className="text-white/65 leading-relaxed max-w-md">
                        Have an idea, project, or collaboration in mind?
                        Drop a message and let’s build something meaningful together.
                    </p>

                    <p className="text-sm text-white/50">
                        I usually reply within 24 hours 🚀
                    </p>
                </motion.div>

                {/* FORM */}
                <motion.form
                    ref={formRef}
                    onSubmit={sendEmail}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="
            p-8 rounded-2xl
            bg-white/5 backdrop-blur-xl
            border border-white/10
            space-y-6
          "
                >
                    <div>
                        <label className="text-sm text-white/60">Your Name</label>
                        <input
                            type="text"
                            name="user_name"
                            required
                            className="
                mt-2 w-full px-4 py-3 rounded-lg
                bg-black/40 border border-white/10
                focus:border-cyan-400 outline-none
              "
                        />
                    </div>

                    <div>
                        <label className="text-sm text-white/60">Email Address</label>
                        <input
                            type="email"
                            name="user_email"
                            required
                            className="
                mt-2 w-full px-4 py-3 rounded-lg
                bg-black/40 border border-white/10
                focus:border-purple-400 outline-none
              "
                        />
                    </div>

                    <div>
                        <label className="text-sm text-white/60">Message</label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            className="
                mt-2 w-full px-4 py-3 rounded-lg
                bg-black/40 border border-white/10
                focus:border-pink-400 outline-none resize-none
              "
                        />
                    </div>

                    {/* BUTTON */}
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={loading}
                        className="
              w-full py-3 rounded-full font-semibold text-black
              bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500
              shadow-xl shadow-cyan-500/30
              disabled:opacity-60
            "
                    >
                        {loading ? "Sending..." : "Send Message"}
                    </motion.button>

                    {/* STATUS */}
                    {status === "success" && (
                        <p className="text-green-400 text-sm text-center">
                            ✅ Message sent successfully! Check your inbox.
                        </p>
                    )}

                    {status === "error" && (
                        <p className="text-red-400 text-sm text-center">
                            ❌ Something went wrong. Please try again.
                        </p>
                    )}
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
