import { motion } from "framer-motion";

interface NavItemProps {
    text: string;
    onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ text, onClick }) => {
    return (
        <motion.button
            type="button"
            onClick={onClick}
            className="relative text-sm tracking-wide text-white/80 hover:text-white bg-transparent border-none cursor-pointer"
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
        </motion.button>
    );
};

export default NavItem;
