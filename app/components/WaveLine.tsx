import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type CodeParticle = {
    id: number;
    text: string;
    x: number;
    y: number;
    color: string;
};

const TOKENS = [
    "if",
    "else",
    "const",
    "let",
    "var",
    "return",
    "()",
    "{}",
    "[]",
    "=>",
    "0 1 0 1",
    "1 0 0 1",
    "true",
    "false",
    "null",
    "async",
    "await",
];

const NEON_COLORS = [
    "#22d3ee", // cyan
    "#38bdf8", // sky
    "#a855f7", // purple
    "#ec4899", // pink
    "#4ade80", // neon green
    "#67e8f9", // light aqua
];

const CodeAmbientNeon: React.FC = () => {
    const [particles, setParticles] = useState<CodeParticle[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const newParticle: CodeParticle = {
                id: Date.now(),
                text: TOKENS[Math.floor(Math.random() * TOKENS.length)],
                x: Math.random() * 80 + 10,
                y: Math.random() * 60 + 10,
                color: NEON_COLORS[Math.floor(Math.random() * NEON_COLORS.length)],
            };

            setParticles((prev) => [...prev, newParticle]);

            setTimeout(() => {
                setParticles((prev) =>
                    prev.filter((p) => p.id !== newParticle.id)
                );
            }, 4200);
        }, 900); // calm, non-marquee

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-105 h-20 overflow-hidden select-none">
            <AnimatePresence>
                {particles.map((p) => (
                    <motion.span
                        key={p.id}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 0.75, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 1.4 }}
                        className="absolute text-sm font-mono"
                        style={{
                            left: `${p.x}%`,
                            top: `${p.y}%`,
                            color: p.color,
                            textShadow: `0 0 8px ${p.color}`, // soft neon glow
                        }}
                    >
                        {p.text}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default CodeAmbientNeon;
