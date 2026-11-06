
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Droplets, Ruler, CheckCircle2, Factory, ShieldCheck } from 'lucide-react';
import { type RiceVariety } from '../data/riceData';

interface SpecsOverlayProps {
    rice: RiceVariety | null;
    onClose: () => void;
}

export const SpecsOverlay: React.FC<SpecsOverlayProps> = ({ rice, onClose }) => {
    if (!rice) return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center px-4"
            >
                <div
                    className="absolute inset-0 bg-black/90 backdrop-blur-md"
                    onClick={onClose}
                />
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    className="relative w-full max-w-5xl bg-[#0a0a0a]/90 border border-[#C5A266]/20 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col md:flex-row max-h-[90vh]"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-30 text-gray-500 hover:text-white transition-colors p-2"
                    >
                        <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/10 hover:border-[#C5A266] transition-colors">
                            <X className="w-4 h-4" />
                        </div>
                    </button>

                    {/* Image Section */}
                    <div className="md:w-5/12 relative h-64 md:h-auto overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent to-[#0a0a0a]/90 z-10" />
                        <img
                            src={rice.image}
                            alt={rice.name}
                            className="w-full h-full object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-150 origin-center"
                        />
                        {/* Grain Magnifier Indicator */}
                        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 text-[#C5A266]/70 text-xs uppercase tracking-widest pointer-events-none">
                            <span className="w-2 h-2 rounded-full bg-[#C5A266] animate-pulse" />
                            Hover to Magnify Grain Polish
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="md:w-7/12 p-8 md:p-12 overflow-y-auto">
                        <div className="mb-8">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-block px-3 py-1 bg-[#C5A266]/10 border border-[#C5A266]/20 text-[#C5A266] text-[10px] uppercase font-bold tracking-widest mb-4"
                            >
                                {rice.series}
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-3xl md:text-5xl font-serif text-white mb-4 leading-tight"
                            >
                                {rice.name}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-400 font-light leading-relaxed"
                            >
                                {rice.desc}
                            </motion.p>
                        </div>

                        {/* Technical Grid - Glassmorphism */}
                        <div className="grid grid-cols-2 gap-4 mb-8">
                            <SpecCard
                                label="Average Length"
                                value={rice.specs.length}
                                icon={<Ruler className="w-4 h-4" />}
                                delay={0.3}
                            />
                            <SpecCard
                                label="Moisture Content"
                                value={rice.specs.moisture}
                                icon={<Droplets className="w-4 h-4" />}
                                delay={0.4}
                            />
                            <SpecCard
                                label="Milling Degree"
                                value={rice.specs.milling}
                                icon={<Factory className="w-4 h-4" />}
                                fullWidth
                                delay={0.5}
                            />
                            <SpecCard
                                label="Broken %"
                                value={rice.specs.broken}
                                icon={<ShieldCheck className="w-4 h-4" />}
                                delay={0.6}
                            />
                            <SpecCard
                                label="Purity"
                                value={rice.specs.purity}
                                icon={<CheckCircle2 className="w-4 h-4" />}
                                delay={0.7}
                            />
                        </div>

                        <div className="flex gap-4 mt-8 pt-8 border-t border-white/5">
                            <button className="flex-1 bg-[#C5A266] hover:bg-white text-black py-4 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300">
                                Request Export Quote
                            </button>
                            <button
                                className="px-6 border border-white/10 hover:border-[#C5A266] text-white hover:text-[#C5A266] transition-colors"
                                onClick={() => {
                                    // Create content for the spec sheet
                                    const content = `
SHAHA RICE EXPORTS - PRODUCT SPECIFICATION SHEET
------------------------------------------------
Product: ${rice.name}
Series: ${rice.series}
Category: ${rice.category}
Price: ${rice.price || 'N/A'}

DESCRIPTION
-----------
${rice.desc}

TECHNICAL SPECIFICATIONS
------------------------
Average Length   : ${rice.specs.length}
Moisture Content : ${rice.specs.moisture}
Milling Degree   : ${rice.specs.milling}
Broken %         : ${rice.specs.broken}
Purity           : ${rice.specs.purity}

------------------------------------------------
Contact us for bulk orders and export inquiries.
www.shaharice.com
`;
                                    // Create a Blob from the content
                                    const blob = new Blob([content], { type: 'text/plain' });

                                    // Create a download link
                                    const url = window.URL.createObjectURL(blob);
                                    const link = document.createElement('a');
                                    link.href = url;
                                    link.download = `${rice.name.replace(/\s+/g, '-').toLowerCase()}-specs.txt`;

                                    // Trigger download
                                    document.body.appendChild(link);
                                    link.click();

                                    // Cleanup
                                    document.body.removeChild(link);
                                    window.URL.revokeObjectURL(url);
                                }}
                            >
                                <span className="sr-only">Download Spec Sheet</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                    <polyline points="7 10 12 15 17 10" />
                                    <line x1="12" x2="12" y1="15" y2="3" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

interface SpecCardProps {
    label: string;
    value: string | number;
    icon: React.ReactNode;
    fullWidth?: boolean;
    delay?: number;
}

const SpecCard = ({ label, value, icon, fullWidth, delay = 0 }: SpecCardProps) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay }}
        className={`bg-white/[0.03] border border-white/5 p-4 md:p-6 backdrop-blur-sm hover:bg-white/[0.05] hover:border-[#C5A266]/30 transition-all duration-300 group ${fullWidth ? 'col-span-2' : ''}`}
    >
        <div className="flex items-start justify-between mb-2">
            <span className="text-gray-500 text-[10px] uppercase tracking-widest">{label}</span>
            <span className="text-[#C5A266]/50 group-hover:text-[#C5A266] transition-colors">{icon}</span>
        </div>
        <div className="text-white font-serif text-lg md:text-xl tracking-wide">{value}</div>
    </motion.div>
);
