
import { motion } from 'framer-motion';

export const Loading = () => {
    return (
        <div className="fixed inset-0 bg-[#050505] z-50 flex items-center justify-center">
            <div className="relative flex items-center justify-center w-24 h-24">
                <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-[#C5A266] z-10" />
                <motion.div
                    className="absolute w-full h-full rounded-full border border-[#C5A266]/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute w-[70%] h-[70%] rounded-full border border-[#C5A266]/50"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                />
            </div>
            <span className="absolute mt-32 text-[#C5A266] text-xs uppercase tracking-[0.3em] font-serif">Loading</span>
        </div>
    );
};
