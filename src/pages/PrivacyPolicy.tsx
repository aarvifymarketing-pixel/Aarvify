import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <SEO
                title="Privacy Policy | AARVIFY TECH SERVICES"
                description="Our privacy policy outlines how AARVIFY TECH SERVICES PRIVATE LIMITED collects, uses, and protects your personal data in compliance with Indian laws."
                canonical="https://aarvify.com/privacy-policy"
            />

            <section className="bg-gray-50 py-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <ShieldCheck size={64} className="mx-auto mb-6 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-black mb-6 text-deepblue">Privacy Policy</h1>
                        <p className="text-lg text-gray-600">
                            Effective Date: September 26, 2024. Your privacy is critical to us. We are committed to being transparent about our data practices.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="container-custom py-20">
                <div className="max-w-4xl mx-auto prose prose-blue prose-lg">
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm space-y-12">

                        <div>
                            <h2 className="flex items-center gap-4 text-2xl font-black text-deepblue mb-6">
                                <Lock className="text-primary" /> 1. Information We Collect
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We collect information that you provide directly to us, such as when you contact us via our website, apply for a job, or engage in business with us. This may include your name, email address, phone number, and any other information you choose to provide.
                            </p>
                            <p className="text-gray-600 leading-relaxed mt-4">
                                As a debt recovery firm, we also receive data from our clients (financial institutions) regarding portfolios for management purposes, which is handled under strict confidentiality agreements.
                            </p>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-4 text-2xl font-black text-deepblue mb-6">
                                <Eye className="text-primary" /> 2. How We Use Information
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-600">
                                <li>Provide, maintain, and improve our services.</li>
                                <li>Communicate with you about our services, including recovery-related updates.</li>
                                <li>Process job applications and career inquiries.</li>
                                <li>Comply with legal obligations and regulatory requirements.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-4 text-2xl font-black text-deepblue mb-6">
                                <ShieldCheck className="text-primary" /> 3. Data Protection
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.
                            </p>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-4 text-2xl font-black text-deepblue mb-6">
                                <FileText className="text-primary" /> 4. Compliance with Laws
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                AARVIFY TECH SERVICES PRIVATE LIMITED operates in compliance with the Information Technology Act, 2000 and other relevant Indian laws concerning data privacy and financial services.
                            </p>
                        </div>

                        <div className="pt-10 border-t border-gray-100">
                            <p className="text-sm text-gray-500 italic text-center">
                                If you have any questions about this Privacy Policy, please contact us at info@aarvify.com.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicy;
