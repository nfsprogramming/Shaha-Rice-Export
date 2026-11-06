import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <>
            <nav className="absolute top-0 w-full z-50 px-4 md:px-8 py-4 flex justify-between items-center mix-blend-difference">
                <Link to="/">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="flex items-center gap-3"
                    >
                        <Home className="w-5 h-5 text-[#E1C699] opacity-80" />
                        <span className="text-sm md:text-2xl font-serif font-bold tracking-widest text-[#E1C699]">SHAHA RICE EXPORTS</span>
                    </motion.div>
                </Link>

                <div className="flex items-center gap-8 text-white/80">
                    <Link to="/about" className={`hidden md:block uppercase text-xs tracking-[0.2em] hover:text-[#C5A266] transition-colors ${location.pathname === '/about' ? 'text-[#C5A266]' : ''}`}>About</Link>
                    <Link to="/products" className={`hidden md:block uppercase text-xs tracking-[0.2em] hover:text-[#C5A266] transition-colors ${location.pathname === '/products' ? 'text-[#C5A266]' : ''}`}>Products</Link>
                    <Link to="/prices" className={`hidden md:block uppercase text-xs tracking-[0.2em] hover:text-[#C5A266] transition-colors ${location.pathname === '/prices' ? 'text-[#C5A266]' : ''}`}>Prices</Link>
                    <Link to="/blog" className={`hidden md:block uppercase text-xs tracking-[0.2em] hover:text-[#C5A266] transition-colors ${location.pathname === '/blog' ? 'text-[#C5A266]' : ''}`}>Blog</Link>
                    <Link to="/process" className={`hidden md:block uppercase text-xs tracking-[0.2em] hover:text-[#C5A266] transition-colors ${location.pathname === '/process' ? 'text-[#C5A266]' : ''}`}>Process</Link>
                    <Link to="/contact" className={`hidden md:block uppercase text-xs tracking-[0.2em] hover:text-[#C5A266] transition-colors ${location.pathname === '/contact' ? 'text-[#C5A266]' : ''}`}>Enquiry</Link>
                    <Menu
                        className="w-6 h-6 cursor-pointer hover:text-[#C5A266] transition-colors relative z-[60]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    />
                </div>
            </nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 z-[55] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {[
                                { path: '/', label: 'Home' },
                                { path: '/about', label: 'About Us' },
                                { path: '/products', label: 'Products' },
                                { path: '/prices', label: 'Live Prices' },
                                { path: '/blog', label: 'News & Recipes' },
                                { path: '/process', label: 'Our Process' },
                                { path: '/contact', label: 'Contact Enquiry' },
                            ].map((item, index) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`uppercase text-2xl md:text-4xl font-serif tracking-widest hover:text-[#C5A266] transition-colors ${location.pathname === item.path ? 'text-[#C5A266]' : 'text-white'}`}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        {item.label}
                                    </motion.div>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
