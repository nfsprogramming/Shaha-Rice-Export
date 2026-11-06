
import { motion } from 'framer-motion';
import { Award, Layers, Globe, Package, Leaf, Factory, Microscope, Truck, type LucideIcon } from 'lucide-react';

export const About = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
            {/* Header */}
            <div className="container mx-auto px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">Our Introduction</span>
                    <h1 className="text-4xl md:text-6xl font-serif text-white mt-6 mb-4">Welcome To <br /><span className="text-[#E1C699] italic">Shaha Rice Exports</span></h1>
                    <div className="w-24 h-[1px] bg-[#C5A266] mx-auto my-8 opacity-50"></div>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    {/* Text Section */}
                    <div className="md:w-1/2 space-y-8 text-gray-400 font-light leading-relaxed text-lg text-justify">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <strong className="text-white block mb-2 text-xl font-serif">Established in 2015</strong>
                            Shaha Rice Exports, based in Faridabad, Haryana (India), is a distinguished manufacturer, processor, and exporter of premium-quality agro-products. Our portfolio includes the finest Indian Basmati Rice, Non-Basmati Rice, Wheat, Maize (Corn), Barley, Oats, and a wide range of authentic Indian Spices.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            We are recognized among the top rice exporters in India, delivering authentic Indian grains to buyers across Asia, Europe, Africa, North America, and the Middle East. Our product range includes 1121 Steam Basmati Rice, Traditional Raw, Golden Sella, IR64, PR11, Swarna, and Sona Masoori, all processed using advanced rice milling and packaging technologies.
                        </motion.p>
                    </div>

                    {/* Highlight Section / Image Placeholder */}
                    <div className="md:w-1/2">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-[#111] border border-white/5 p-8 md:p-12 relative overflow-hidden group rounded-sm"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A266]/10 rounded-full blur-3xl group-hover:bg-[#C5A266]/20 transition-all duration-700"></div>

                            <h3 className="text-2xl font-serif text-white mb-6">Global Enterprise Solutions</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                At Shaha Rice Exports, we specialize in reliable bulk rice export solutions for wholesalers, supermarkets, food distributors, and catering companies.
                            </p>

                            <ul className="space-y-4 mb-8">
                                <ListItem text="Private Label Packaging Experts" />
                                <ListItem text="Flexible Sizing (1kg to 50kg)" />
                                <ListItem text="Consistent International Supply" />
                                <ListItem text="Strict Quality Assurance" />
                            </ul>

                            <div className="py-6 border-t border-white/10 flex items-center justify-between">
                                <span className="text-[#E1C699] text-xs uppercase tracking-widest">Since 2015</span>
                                <span className="text-white font-serif italic">Faridabad, India</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Statistics Section */}
            <div className="mt-32 border-t border-white/5 pt-16">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                    <StatItem icon="🏆" value="20+" label="Experience" />
                    <StatItem icon="🌾" value="50+" label="Rice Products" />
                    <StatItem icon="🌍" value="25+" label="Exporting Countries" />
                    <StatItem icon="👥" value="500+" label="Satisfied Clients" />
                    <StatItem icon="⭐" value="5.0" label="Google Review Rating" />
                </div>
            </div>
            {/* Why Choose Us Section */}
            <div className="container mx-auto px-6 mt-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">Why Choose Us</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white mt-4">Shaha Rice Exports?</h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <FeatureCard
                        Icon={Award}
                        title="Certified Exporters"
                        desc="ISO 9001:2015, FSSAI, HACCP, and GMP certified production and supply."
                    />
                    <FeatureCard
                        Icon={Layers}
                        title="Diverse Portfolio"
                        desc="Exporting IR64, Swarna, Sona Masoori, and Parboiled rice varieties in bulk."
                    />
                    <FeatureCard
                        Icon={Globe}
                        title="Global Reach"
                        desc="Trusted by importers across the USA, UAE, Europe, Africa, and the UK."
                    />
                    <FeatureCard
                        Icon={Package}
                        title="Custom Packaging"
                        desc="Flexible options from 1kg to 50kg, available for retail, wholesale, and private label."
                    />
                    <FeatureCard
                        Icon={Leaf}
                        title="Pesticide Free"
                        desc="100% Pesticide Residue-Free Rice – Fully compliant with EU and US standards."
                    />
                    <FeatureCard
                        Icon={Factory}
                        title="Modern Infrastructure"
                        desc="Equipped with advanced grading, sortex, and hygienic packaging machinery."
                    />
                    <FeatureCard
                        Icon={Microscope}
                        title="Quality Assurance"
                        desc="Continuous quality checks through dedicated in-house labs and testing units."
                    />
                    <FeatureCard
                        Icon={Truck}
                        title="Reliable Logistics"
                        desc="Fast turnaround time and assured on-time international deliveries."
                    />
                </div>
            </div>

            {/* Feedback Form Section */}
            <div className="container mx-auto px-6 mt-32">
                <div className="max-w-4xl mx-auto bg-[#111] border border-white/5 p-8 md:p-12 rounded-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A266]/5 rounded-full blur-3xl -z-10"></div>

                    <div className="text-center mb-12">
                        <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">Contact Now</span>
                        <h2 className="text-3xl md:text-4xl font-serif text-white mt-4">Leave Us a Message</h2>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 uppercase tracking-wider">Full Name</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-[#C5A266] transition-colors outline-none rounded-sm" placeholder="Enter your full name" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 uppercase tracking-wider">Email Address</label>
                                <input type="email" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-[#C5A266] transition-colors outline-none rounded-sm" placeholder="Enter your email" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 uppercase tracking-wider">Phone Number</label>
                                <input type="tel" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-[#C5A266] transition-colors outline-none rounded-sm" placeholder="Enter phone number" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs text-gray-400 uppercase tracking-wider">Subject</label>
                                <input type="text" className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-[#C5A266] transition-colors outline-none rounded-sm" placeholder="Enter subject" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs text-gray-400 uppercase tracking-wider">Write Message</label>
                            <textarea className="w-full bg-black/50 border border-white/10 p-4 text-white focus:border-[#C5A266] transition-colors outline-none rounded-sm h-40 resize-none" placeholder="Enter your message here..."></textarea>
                        </div>

                        <div className="text-center pt-4">
                            <button className="bg-[#C5A266] text-black px-12 py-4 uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

const FeatureCard = ({ Icon, title, desc }: { Icon: LucideIcon, title: string, desc: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#111] border border-white/5 p-8 hover:border-[#C5A266]/30 transition-all duration-300 group"
    >
        <div className="mb-4 text-[#C5A266] group-hover:scale-110 transition-transform duration-300">
            <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-xl font-serif text-white mb-3 group-hover:text-[#C5A266] transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);

const StatItem = ({ icon, value, label }: { icon: string, value: string, label: string }) => (
    <div className="flex flex-col items-center gap-2 group cursor-default">
        <span className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300 filter grayscale group-hover:grayscale-0">{icon}</span>
        <span className="text-3xl font-serif text-[#E1C699]">{value}</span>
        <span className="text-gray-500 text-[10px] uppercase tracking-widest group-hover:text-white transition-colors">{label}</span>
    </div>
);

const ListItem = ({ text }: { text: string }) => (
    <li className="flex items-center gap-4 text-sm text-gray-300">
        <span className="w-1.5 h-1.5 bg-[#C5A266] rounded-full"></span>
        {text}
    </li>
);
