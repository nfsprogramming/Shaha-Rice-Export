
import { motion } from 'framer-motion';

export const Terms = () => {
    return (
        <div className="min-h-screen bg-[#050505] text-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#C5A266] uppercase tracking-[0.3em] text-xs">Legal</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-8">Terms And <span className="text-[#E1C699] italic">Conditions</span></h1>
                    <div className="w-24 h-[1px] bg-[#C5A266] mx-auto opacity-50"></div>
                </motion.div>

                <div className="space-y-12 text-gray-400 font-light leading-relaxed text-lg text-justify">
                    <Section title="1. Introduction">
                        Welcome to SHAHA RICE EXPORTS. By accessing or using our services, you agree to be bound by the following terms and conditions. Please read them carefully.
                    </Section>

                    <Section title="2. Products and Services">
                        We are committed to delivering high-quality products and services. All our grains and related products are procured, processed, and packaged hygienically, adhering to industry standards to ensure superior nutritional value.
                    </Section>

                    <Section title="3. Clientele">
                        We serve a diverse range of customers, from small traders to large multinational corporations. Our resources and expertise are available to meet your specific needs, no matter the size of your business.
                    </Section>

                    <Section title="4. Global Market Engagement">
                        Our products are appreciated worldwide for their quality. We strive to maintain the highest standards to meet the demands of the global grain market.
                    </Section>

                    <Section title="5. Communication">
                        For inquiries or more information on how SHAHA RICE EXPORTS can assist in your success within the global grain market, please contact us.
                    </Section>

                    <Section title="6. Quality Assurance">
                        Our commitment to hygiene and quality control ensures that every product you receive meets our rigorous standards. We continually review and improve our processes to maintain this level of excellence.
                    </Section>

                    <Section title="7. Legal Compliance">
                        All transactions, contracts, and operations of SHAHA RICE EXPORTS comply with applicable laws and regulations. By engaging with us, you agree to adhere to these terms.
                    </Section>

                    <Section title="8. Amendments">
                        SHAHA RICE EXPORTS reserves the right to modify these terms and conditions at any time. Changes will be effective upon posting on our website. We encourage you to review this page regularly to stay informed.
                    </Section>

                    <Section title="9. Contact Information">
                        For any questions or concerns regarding our terms and conditions, please reach out to our customer service team.
                    </Section>
                </div>
            </div>
        </div>
    );
};

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    >
        <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
        <p>{children}</p>
    </motion.div>
);
