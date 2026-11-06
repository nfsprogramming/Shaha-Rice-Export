
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const steps = [
    {
        id: "01",
        title: "Sourcing",
        location: "Indo-Gangetic Plains",
        desc: "Procured directly from the fertile foothills of the Himalayas, where the pristine waters and unique climate cultivate grains of unmatched aroma.",
        color: "#C5A266",
        image: "/images/process/sourcing.jpg"
    },
    {
        id: "02",
        title: "Milling",
        location: "Buhler Sortex Facilities",
        desc: "State-of-the-art Japanese and German milling technology ensures every grain is polished to perfection, maintaining nutritional integrity.",
        color: "#E1C699",
        image: "/images/process/milling.jpg"
    },
    {
        id: "03",
        title: "Quality Control",
        location: "ISO Certified Labs",
        desc: "Rigorous testing protocols for aflatoxin, pesticide residues, and moisture content. Zero compromise on purity standards.",
        color: "#C5A266",
        image: "/images/process/quality.jpg"
    },
    {
        id: "04",
        title: "Global Logistics",
        location: "Port to Port",
        desc: "Seamless export network ensuring freshness is locked in from our facility to your destination port anywhere in the world.",
        color: "#E1C699",
        image: "/images/process/logistics.jpg"
    }
];

export const QualityJourney = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <section ref={containerRef} className="py-32 bg-[#050505] relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">The Process</span>
                    <h2 className="text-4xl md:text-6xl font-serif text-white mt-4">Quality <span className="italic text-gray-500">Journey</span></h2>
                </div>

                <div className="space-y-32 relative">
                    {/* Line Container */}
                    <div className="absolute left-[50%] top-0 bottom-0 w-[2px] -translate-x-1/2 hidden md:block">
                        <div className="absolute inset-0 w-[1px] bg-white/10 mx-auto" />
                        <motion.div
                            style={{ scaleY: scrollYProgress }}
                            className="absolute top-0 w-[2px] bg-[#C5A266] origin-top h-full"
                        />
                    </div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ margin: "-20% 0px -20% 0px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            <div className="flex-1 text-center md:text-right">
                                {index % 2 === 0 ? (
                                    <StepContent step={step} align="right" />
                                ) : (
                                    <div className="hidden md:block w-full h-[300px] bg-white/[0.03] border border-white/5 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="relative flex items-center justify-center w-12 h-12 shrink-0">
                                <div className="w-4 h-4 rounded-full bg-[#0a0a0a] border-2 border-[#C5A266] z-10" />
                                <div className="absolute w-12 h-12 rounded-full border border-[#C5A266]/30 animate-ping opacity-20" />
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                {index % 2 !== 0 ? (
                                    <StepContent step={step} align="left" />
                                ) : (
                                    <div className="hidden md:block w-full h-[300px] bg-white/[0.03] border border-white/5 relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                        />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface StepItem {
    id: string;
    title: string;
    location: string;
    desc: string;
    color: string;
    image: string;
}

interface StepContentProps {
    step: StepItem;
    align: 'left' | 'right';
}

const StepContent = ({ step, align }: StepContentProps) => (
    <div className={`flex flex-col ${align === 'right' ? 'md:items-end' : 'md:items-start'} items-center`}>
        <span className="text-8xl font-serif text-white/5 font-bold absolute -translate-y-12 select-none">{step.id}</span>
        <span className="text-[#C5A266] uppercase tracking-widest text-xs mb-2 block">{step.location}</span>
        <h3 className="text-3xl font-serif text-white mb-4 relative z-10">{step.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed max-w-sm relative z-10">
            {step.desc}
        </p>
    </div>
);
