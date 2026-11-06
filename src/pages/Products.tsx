
import { useState } from 'react';
import { motion } from 'framer-motion';
import { riceVarieties, type RiceVariety } from '../data/riceData';
import { SpecsOverlay } from '../components/SpecsOverlay';

export const Products = () => {
    const [selectedRice, setSelectedRice] = useState<RiceVariety | null>(null);

    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-24">
            <div className="container mx-auto px-6 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center md:text-left"
                >
                    <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">Our Products</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 mt-4">Indian <span className="text-[#E1C699] italic">Varieties</span></h2>
                    <p className="text-gray-500 max-w-xl leading-relaxed">
                        Discover the heritage of Indian agriculture through our curated selection of the finest grains.
                    </p>
                </motion.div>
            </div>

            <div className="container mx-auto px-6">
                {Object.entries(riceVarieties.reduce((acc, rice) => {
                    if (!acc[rice.category]) acc[rice.category] = {};
                    if (!acc[rice.category][rice.series]) acc[rice.category][rice.series] = [];
                    acc[rice.category][rice.series].push(rice);
                    return acc;
                }, {} as Record<string, Record<string, RiceVariety[]>>)).map(([category, seriesData]) => (
                    <div key={category} className="mb-24">
                        <h3 className="text-2xl md:text-3xl font-serif text-[#E1C699] mb-12 border-l-2 border-[#E1C699] pl-6">{category}</h3>
                        {Object.entries(seriesData).map(([series, products]) => (
                            <div key={series} className="mb-16">
                                <h4 className="text-xl text-white/80 font-serif mb-8 ml-2">{series}</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                    {products.map((rice, index) => (
                                        <motion.div
                                            key={rice.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.05, duration: 0.5 }}
                                            className="group relative bg-white/[0.02] border border-white/5 overflow-hidden hover:border-[#E1C699]/30 transition-colors duration-500 cursor-pointer rounded-sm"
                                            onClick={() => setSelectedRice(rice)}
                                        >
                                            <div className="aspect-[3/4] overflow-hidden relative">
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                                                <img src={rice.image} alt={rice.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                                                <div className="absolute top-4 right-4 z-20">
                                                    <span className="bg-[#E1C699] text-black text-[10px] uppercase font-bold tracking-widest px-3 py-1">{rice.tag}</span>
                                                </div>
                                            </div>
                                            <div className="p-6 relative z-20 -mt-20">
                                                <h3 className="text-xl font-serif text-white mb-2 leading-tight">{rice.name}</h3>
                                                {rice.price && (
                                                    <p className="text-[#E1C699] font-medium mb-3">{rice.price}</p>
                                                )}
                                                <button className="text-white/60 text-xs uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all group-hover:text-white">
                                                    View Specs <span className="w-4 h-[1px] bg-[#E1C699]"></span>
                                                </button>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <SpecsOverlay rice={selectedRice} onClose={() => setSelectedRice(null)} />
        </div>
    );
};
