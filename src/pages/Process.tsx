
import { QualityJourney } from '../components/QualityJourney';

export const Process = () => {
    return (
        <div className="min-h-screen bg-[#050505] pt-24">
            <div className="container mx-auto px-6 text-center mb-12">
                <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">Our Methodology</span>
                <h2 className="text-3xl md:text-5xl font-serif text-white mt-4">Seed to <span className="text-[#E1C699] italic">Spoon</span></h2>
            </div>
            <QualityJourney />
        </div>
    );
};
