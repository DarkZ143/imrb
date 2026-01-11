import { motion } from "framer-motion";

interface NavItemProps {
    text: string;
}

const NavItem: React.FC<NavItemProps> = ({ text }) => {
    return (
        <motion.a
            href="#"
            className="relative text-sm tracking-wide text-white/80 hover:text-white"
            whileHover="hover"
        >
            {text}

            <motion.span
                initial={{ width: 0 }}
                variants={{
                    hover: { width: "100%" },
                }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 -bottom-1 h-0.5 bg-cyan-400"
            />
        </motion.a>
    );
};

export default NavItem;
