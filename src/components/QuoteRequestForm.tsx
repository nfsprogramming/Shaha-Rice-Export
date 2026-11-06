
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { riceVarieties } from '../data/riceData';

export const QuoteRequestForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        series: '',
        variety: '',
        quantity: '',
        packaging: '',
        port: '',
        email: ''
    });

    // Extract unique series
    const uniqueSeries = useMemo(() => {
        const series = Array.from(new Set(riceVarieties.map(r => r.series)));
        return [...series, "Others"];
    }, []);

    // Get varieties for selected series
    const availableVarieties = useMemo(() => {
        if (!formData.series || formData.series === "Others") return [];
        return riceVarieties
            .filter(r => r.series === formData.series)
            .map(r => r.name);
    }, [formData.series]);

    const handleNext = () => setStep(s => s + 1);
    const handleBack = () => setStep(s => Math.max(1, s - 1));

    // Dynamic steps definition
    const steps = [
        {
            title: "Select Series",
            field: "series",
            options: uniqueSeries,
            desc: "Choose from our premium rice collections"
        },
        {
            title: "Select Variety",
            field: "variety",
            options: formData.series === "Others" ? ["Standard", "Premium", "Custom"] : availableVarieties, // Fallback if others
            desc: "Pick the specific grain type"
        },
        // Removed separate "Processing" step as variety selection covers it (e.g., "1121 White Sella")
        {
            title: "Packaging",
            field: "packaging",
            options: ["5kg", "10kg", "25kg", "50kg Bulk", "Custom Branding"],
            desc: "Select bag size"
        },
        {
            title: "Destination",
            field: "details",
            isInput: true,
            desc: "Shipping details"
        }
    ];

    const updateField = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (step < steps.length) {
            setTimeout(handleNext, 300);
        }
    };

    return (
        <div className="w-full max-w-5xl mx-auto bg-[#0a0a0a] border border-white/10 p-1 rounded-sm shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-12 min-h-[600px]">
                {/* Progress Sidebar */}
                <div className="md:col-span-4 bg-[#111] p-8 md:p-10 relative flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/5">
                    <div>
                        <h3 className="text-[#C5A266] font-serif text-2xl mb-10">Quote Configuration</h3>
                        <div className="space-y-8">
                            {steps.map((s, i) => (
                                <div key={i} className={`flex items-start gap-4 transition-all duration-300 ${i + 1 === step ? 'opacity-100' : 'opacity-40'}`}>
                                    <div className={`mt-1 w-8 h-8 rounded-full border ${i + 1 === step ? 'border-[#C5A266] text-[#C5A266] shadow-[0_0_10px_rgba(197,162,102,0.3)]' : i + 1 < step ? 'bg-[#C5A266] border-[#C5A266] text-black' : 'border-white/20 text-white'} flex items-center justify-center text-xs font-bold shrink-0 transition-all`}>
                                        {i + 1 < step ? <Check className="w-4 h-4" /> : i + 1}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className={`text-sm uppercase tracking-widest font-bold ${i + 1 === step ? 'text-white' : 'text-gray-400'}`}>{s.title}</span>
                                        {i + 1 === step && <span className="text-xs text-[#C5A266] mt-1">{s.desc}</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {step > 1 && (
                        <div className="text-xs text-gray-500 mt-8 p-4 bg-white/[0.03] rounded border border-white/5">
                            <span className="text-[#C5A266] uppercase tracking-wider mb-2 block text-[10px]">Your Selection</span>
                            {formData.series && <div className="text-white mb-1"><span className="text-gray-500">Series:</span> {formData.series}</div>}
                            {formData.variety && <div className="text-white"><span className="text-gray-500">Variety:</span> {formData.variety}</div>}
                        </div>
                    )}
                </div>

                {/* Interaction Area */}
                <div className="md:col-span-8 p-8 md:p-12 relative flex flex-col justify-center bg-[#0a0a0a]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="w-full"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <h4 className="text-3xl md:text-4xl font-serif text-white leading-tight">
                                    {steps[step - 1].title}
                                </h4>
                                {step > 1 && (
                                    <button
                                        onClick={handleBack}
                                        className="text-gray-500 hover:text-[#C5A266] text-xs uppercase tracking-widest transition-colors flex items-center gap-2"
                                    >
                                        ← Back
                                    </button>
                                )}
                            </div>

                            {steps[step - 1].isInput ? (
                                <div className="space-y-8">
                                    <div className="group relative">
                                        <label className="text-[#C5A266] text-xs uppercase tracking-widest mb-2 block">Quantity (MT)</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. 25 Metric Tons"
                                            className="w-full bg-transparent border-b border-white/20 py-3 text-xl text-white focus:outline-none focus:border-[#C5A266] transition-colors placeholder:text-gray-700"
                                            onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                                        />
                                    </div>
                                    <div className="group relative">
                                        <label className="text-[#C5A266] text-xs uppercase tracking-widest mb-2 block">Port of Discharge</label>
                                        <input
                                            type="text"
                                            placeholder="e.g. Felixstowe, UK"
                                            className="w-full bg-transparent border-b border-white/20 py-3 text-xl text-white focus:outline-none focus:border-[#C5A266] transition-colors placeholder:text-gray-700"
                                            onChange={(e) => setFormData({ ...formData, port: e.target.value })}
                                        />
                                    </div>
                                    <div className="group relative">
                                        <label className="text-[#C5A266] text-xs uppercase tracking-widest mb-2 block">Contact Email</label>
                                        <input
                                            type="email"
                                            placeholder="your@company.com"
                                            className="w-full bg-transparent border-b border-white/20 py-3 text-xl text-white focus:outline-none focus:border-[#C5A266] transition-colors placeholder:text-gray-700"
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        />
                                    </div>
                                    <button className="mt-8 bg-[#C5A266] hover:bg-white text-black px-10 py-4 uppercase tracking-[0.25em] text-xs font-bold transition-colors w-full md:w-auto rounded-sm">
                                        Submit Request
                                    </button>
                                </div>
                            ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                    {steps[step - 1].options?.map((opt) => (
                                        <button
                                            key={opt}
                                            onClick={() => updateField(steps[step - 1].field, opt)}
                                            className="group flex items-center justify-between p-6 border border-white/10 hover:border-[#C5A266] hover:bg-[#C5A266]/5 transition-all duration-300 text-left rounded-sm"
                                        >
                                            <span className="text-white font-serif text-lg group-hover:text-[#C5A266] transition-colors">{opt}</span>
                                            <ArrowRight className="w-5 h-5 text-gray-700 group-hover:text-[#C5A266] -translate-x-2 group-hover:translate-x-0 transition-transform duration-300" />
                                        </button>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
