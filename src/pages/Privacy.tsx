
import { motion } from 'framer-motion';

export const Privacy = () => {
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
                    <h1 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-8">Privacy <span className="text-[#E1C699] italic">Policy</span></h1>
                    <div className="w-24 h-[1px] bg-[#C5A266] mx-auto opacity-50"></div>
                </motion.div>

                <div className="space-y-12 text-gray-400 font-light leading-relaxed text-lg text-justify">
                    <Section title="1. Introduction">
                        At SHAHA RICE EXPORTS, we prioritize your privacy and are committed to safeguarding your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you engage with our products and services.
                    </Section>

                    <Section title="2. Information We Collect">
                        We may collect personal information such as your name, contact details, company information, and transaction history when you interact with us. This data helps us tailor our services to meet your specific needs.
                    </Section>

                    <Section title="3. Use of Information">
                        Your information is used to provide and enhance our products and services, process transactions, and communicate with you about your orders or inquiries. We may also use your data to inform you about updates, promotions, or new offerings that may be of interest to you.
                    </Section>

                    <Section title="4. Data Security">
                        We implement stringent security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our practices are designed to comply with industry standards and legal requirements.
                    </Section>

                    <Section title="5. Sharing of Information">
                        SHAHA RICE EXPORTS does not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to trusted partners who assist us in operating our business and serving you, under strict confidentiality agreements.
                    </Section>

                    <Section title="6. Global Market Engagement">
                        In providing our services globally, your information may be processed in countries outside your residence. We ensure that any international data transfers comply with applicable data protection laws.
                    </Section>

                    <Section title="7. Your Rights">
                        You have the right to access, correct, or delete your personal information held by us. If you wish to exercise these rights or have any concerns about your privacy, please contact our data protection team.
                    </Section>

                    <Section title="8. Changes to This Policy">
                        We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Any modifications will be posted on our website, and we encourage you to review this policy periodically.
                    </Section>

                    <Section title="9. Contact Us">
                        For any questions or concerns regarding our Privacy Policy or the handling of your personal information, please reach out to us at support@shahariceexports.com.
                    </Section>

                    <div className="pt-8 border-t border-white/10 text-sm text-gray-500 italic">
                        By using our services, you agree to the terms outlined in this Privacy Policy. Your continued use of our services signifies your acceptance of any changes to this policy.
                    </div>
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
