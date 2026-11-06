
import { motion } from 'framer-motion';
import { news, recipes } from '../data/blogData';

export const Blog = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">Knowledge Hub</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-4">News & <span className="text-[#E1C699] italic">Recipes</span></h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Stay informed with the latest industry updates and discover diverse culinary creations using our premium rice.
                    </p>
                    <div className="w-24 h-[1px] bg-[#C5A266] mx-auto my-8 opacity-50"></div>
                </motion.div>

                {/* News Section */}
                <div className="mb-24">
                    <h2 className="text-2xl font-serif text-[#C5A266] mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-[#C5A266]"></span>
                        Latest Industry News
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="group bg-[#111] border border-white/5 overflow-hidden hover:border-[#C5A266]/30 transition-all duration-300 rounded-sm"
                            >
                                <div className="aspect-[16/9] overflow-hidden">
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="text-[#C5A266] text-xs uppercase tracking-widest mb-3">{item.date}</div>
                                    <h3 className="text-lg font-serif text-white mb-3 group-hover:text-[#E1C699] transition-colors line-clamp-2">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">{item.summary}</p>
                                    <button className="text-white/60 text-xs uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all group-hover:text-white">
                                        Read More <span className="w-4 h-[1px] bg-[#E1C699]"></span>
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Recipes Section */}
                <div>
                    <h2 className="text-2xl font-serif text-[#C5A266] mb-8 flex items-center gap-4">
                        <span className="w-8 h-[1px] bg-[#C5A266]"></span>
                        Culinary Inspirations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {recipes.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                className="group relative aspect-square overflow-hidden rounded-sm cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-60 transition-opacity duration-300" />
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-lg font-serif text-white mb-1 group-hover:text-[#E1C699] transition-colors">{item.title}</h3>
                                    <p className="text-gray-400 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
