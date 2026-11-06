
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5 bg-black text-center relative z-10">
            <div className="flex justify-center gap-6 mb-8 text-gray-500 text-xs uppercase tracking-widest flex-wrap">
                <Link to="/about" className="cursor-pointer hover:text-[#E1C699]">About</Link>
                <Link to="/products" className="cursor-pointer hover:text-[#E1C699]">Products</Link>
                <Link to="/process" className="cursor-pointer hover:text-[#E1C699]">Process</Link>
                <Link to="/prices" className="cursor-pointer hover:text-[#E1C699]">Prices</Link>
                <Link to="/contact" className="cursor-pointer hover:text-[#E1C699]">Contact</Link>
                <Link to="/terms" className="cursor-pointer hover:text-[#E1C699]">Terms & Conditions</Link>
                <Link to="/privacy" className="cursor-pointer hover:text-[#E1C699]">Privacy Policy</Link>
            </div>
            <div className="flex justify-center gap-6 mb-8 text-gray-500">
                <span className="cursor-pointer hover:text-[#E1C699]">LinkedIn</span>
                <span className="cursor-pointer hover:text-[#E1C699]">Instagram</span>
                <span className="cursor-pointer hover:text-[#E1C699]">WhatsApp</span>
            </div>
            <p className="text-gray-600 text-xs tracking-widest uppercase">© 2025 Shaha Rice Exports. All Rights Reserved.</p>
        </footer>
    );
};
