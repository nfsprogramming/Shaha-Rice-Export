

import { motion } from "framer-motion";

const certs = [
    { name: "ISO 22000", id: "ISO", img: "/certificates/iso.svg" },
    { name: "HACCP Certified", id: "HACCP", img: "/certificates/haccp.svg" },
    { name: "GMP Standard", id: "GMP", img: "/certificates/gmp.svg" },
    { name: "FSSAI", id: "FSSAI", img: "/certificates/fssai.svg" },
    { name: "FDA Registered", id: "FDA", img: "/certificates/fda.svg" },
    { name: "Halal Certified", id: "HALAL", img: "/certificates/halal.svg" },
    { name: "Kosher Certified", id: "KOSHER", img: "/certificates/kosher.svg" },
    { name: "REX Registered", id: "REX", img: "/certificates/rex.svg" },
    { name: "APEDA Member", id: "APEDA", img: "/certificates/apeda.svg" }
];

export const Certifications = () => {
    // Duplicate the list to ensure seamless endless scrolling
    const duplicatedCerts = [...certs, ...certs, ...certs];

    return (
        <div className="w-full bg-[#080808] border-y border-white/5 py-12 overflow-hidden flex relative z-10">
            {/* Added mask for fade effect on edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#080808] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#080808] to-transparent z-20 pointer-events-none" />

            <motion.div
                className="flex items-center gap-16 md:gap-24 whitespace-nowrap"
                animate={{
                    x: [0, -1920], // Move roughly the width of one set of items
                }}
                transition={{
                    x: {
                        duration: 30, // Adjust speed (seconds to scroll one loop)
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                    },
                }}
            >
                {duplicatedCerts.map((cert, index) => (
                    <div key={`${cert.id}-${index}`} className="group flex flex-col items-center gap-4 cursor-pointer min-w-[120px]">
                        <div className="w-20 h-20 md:w-24 md:h-24 p-4 border border-white/10 rounded-full bg-white/[0.02] group-hover:bg-[#C5A266]/10 group-hover:border-[#C5A266]/50 transition-all duration-500 flex items-center justify-center">
                            <img src={cert.img} alt={cert.name} className="w-full h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_10px_rgba(197,162,102,0.3)]" />
                        </div>
                        <span className="text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-[#C5A266] transition-colors">
                            {cert.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};
