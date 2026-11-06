
import React from 'react';
import { motion } from 'framer-motion';
import { Download, TrendingUp, Calendar, Package } from 'lucide-react';

const prices = [
    { variety: "Traditional Basmati Raw Rice", form: "Raw", length: "7.30 mm", price: "$1,182", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "Traditional Basmati White Sella Rice", form: "White Sella", length: "7.25 mm", price: "$1,125", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "Traditional Basmati Brown Rice", form: "Brown", length: "7.35 mm", price: "$1,068", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "1121 Basmati Raw Rice", form: "Raw", length: "8.35 mm", price: "$1,011", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "1121 Basmati Steam Rice", form: "Steam", length: "8.35 mm", price: "$966", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "1121 Basmati White Sella Rice", form: "White Sella", length: "8.35 mm", price: "$818", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "1121 Basmati Golden Sella Rice", form: "Golden Sella", length: "8.30 mm", price: "$955", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "1885 Basmati Raw Rice", form: "Raw", length: "—", price: "$932", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "1718 Basmati Steam Rice", form: "Steam", length: "8.35 mm", price: "$898", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "1509 Basmati White Sella Rice", form: "White Sella", length: "8.45 mm", price: "$773", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "1401 Basmati Golden Sella Rice", form: "Golden Sella", length: "8.35 mm", price: "$920", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "Pusa Basmati Steam Rice", form: "Steam", length: "7.40 mm", price: "$852", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "Sugandha Raw Rice", form: "Raw", length: "7.80 mm", price: "$830", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "Sharbati White Sella Rice", form: "White Sella", length: "7.00 mm", price: "$670", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "PR 11/14 Raw Rice", form: "Raw", length: "6.80 mm", price: "$557", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "Parmal Steam Rice", form: "Steam", length: "6.50 mm", price: "$477", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "Sona Masoori Steam Rice", form: "Steam", length: "5.20 mm", price: "$511", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "IR 64 Parboiled Rice", form: "Parboiled", length: "6.20 mm", price: "$398", year: "2025", packing: "50 Kg PP Bag" },
    { variety: "Swarna Raw Rice", form: "Raw", length: "6.10 mm", price: "$386", year: "2025", packing: "50 Kg PP Bag" }
];

export const Prices = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">Market Trends</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-4">Live <span className="text-[#E1C699] italic">Rice Prices</span></h1>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Stay updated with the latest FOB Mundra prices for our premium rice varieties. Market rates are subject to fluctuation based on global demand and supply.
                    </p>
                    <div className="w-24 h-[1px] bg-[#C5A266] mx-auto my-8 opacity-50"></div>
                </motion.div>

                {/* Price Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="overflow-x-auto relative rounded-sm border border-white/5 bg-[#111]"
                >
                    <table className="w-full text-left text-sm text-gray-400">
                        <thead className="bg-[#1a1a1a] text-xs uppercase text-[#C5A266]">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium tracking-wider">Variety</th>
                                <th scope="col" className="px-6 py-4 font-medium tracking-wider">Form</th>
                                <th scope="col" className="px-6 py-4 font-medium tracking-wider">Avg. Length</th>
                                <th scope="col" className="px-6 py-4 font-medium tracking-wider">Crop Year</th>
                                <th scope="col" className="px-6 py-4 font-medium tracking-wider">Packing</th>
                                <th scope="col" className="px-6 py-4 font-medium tracking-wider text-right">Price (FOB)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {prices.map((item, index) => (
                                <tr key={index} className="hover:bg-white/[0.02] transition-colors group">
                                    <td className="px-6 py-4 font-medium text-white group-hover:text-[#E1C699] transition-colors">
                                        {item.variety}
                                    </td>
                                    <td className="px-6 py-4">{item.form}</td>
                                    <td className="px-6 py-4">{item.length}</td>
                                    <td className="px-6 py-4">{item.year}</td>
                                    <td className="px-6 py-4">{item.packing}</td>
                                    <td className="px-6 py-4 text-right font-serif text-[#C5A266] text-lg">
                                        {item.price}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <InfoCard
                        icon={<TrendingUp />}
                        title="Market Volatility"
                        desc="Prices are indicative and subject to change based on daily market conditions and currency fluctuations."
                    />
                    <InfoCard
                        icon={<Package />}
                        title="Bulk Orders"
                        desc="Special rates available for large volume orders. Contact our sales team for a custom quote."
                    />
                    <InfoCard
                        icon={<Calendar />}
                        title="Validity"
                        desc="These prices are valid for the current week. Please confirm final rates before booking."
                    />
                </div>

                <div className="mt-12 text-center">
                    <button
                        className="inline-flex items-center gap-2 bg-[#C5A266] text-black px-8 py-3 rounded-sm uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors duration-300"
                        onClick={() => {
                            const date = new Date().toLocaleDateString();
                            let content = `SHAHA RICE EXPORTS - LIVE PRICE LIST (${date})\n`;
                            content += "=================================================================================\n";
                            content += "Variety                               | Form        | Length   | Price (FOB)\n";
                            content += "---------------------------------------------------------------------------------\n";

                            prices.forEach(p => {
                                content += `${p.variety.padEnd(38)}| ${p.form.padEnd(12)}| ${p.length.padEnd(9)}| ${p.price}\n`;
                            });

                            content += "=================================================================================\n\n";
                            content += "Note: Prices are subject to market fluctuations. Valid for current week.\n";
                            content += "Contact: support@shahariceexports.com\n";
                            content += "Website: www.shahariceexports.com";

                            const blob = new Blob([content], { type: 'text/plain' });
                            const url = window.URL.createObjectURL(blob);
                            const link = document.createElement('a');
                            link.href = url;
                            link.download = `shaha-rice-prices-${new Date().toISOString().split('T')[0]}.txt`;
                            document.body.appendChild(link);
                            link.click();
                            document.body.removeChild(link);
                            window.URL.revokeObjectURL(url);
                        }}
                    >
                        <Download size={16} />
                        Download Price List
                    </button>
                </div>
            </div>
        </div>
    );
};

const InfoCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-[#111] border border-white/5 p-6 rounded-sm hover:border-[#C5A266]/30 transition-all duration-300"
    >
        <div className="text-[#C5A266] mb-4">{icon}</div>
        <h3 className="text-white font-serif mb-2">{title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </motion.div>
);
