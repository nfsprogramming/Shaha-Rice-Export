
import { QuoteRequestForm } from '../components/QuoteRequestForm';

export const Contact = () => {
    return (
        <div className="min-h-screen bg-[#050505] pt-32 pb-24">
            <div className="container mx-auto px-6 mb-16 text-center">
                <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">Get in Touch</span>
                <h2 className="text-3xl md:text-5xl font-serif text-white mt-4">Global <span className="text-[#E1C699] italic">Inquiries</span></h2>
                <p className="text-gray-500 mt-6 max-w-xl mx-auto">
                    Ready to import the world's finest rice? Configure your shipment below and our export team will provide a tailored quote within 24 hours.
                </p>
            </div>
            <div className="container mx-auto px-6">
                <QuoteRequestForm />
            </div>
        </div>
    );
};
