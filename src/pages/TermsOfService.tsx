import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, Info } from 'lucide-react';

const TermsOfService: React.FC = () => {
    return (
        <>
            <SEO
                title="Terms of Service | AARVIFY TECH SERVICES"
                description="Read the Terms of Service for AARVIFY TECH SERVICES PRIVATE LIMITED. Our terms govern the use of our website and debt recovery services."
                canonical="https://aarvify.com/terms-of-service"
            />

            <section className="bg-gray-50 py-20">
                <div className="container-custom">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <Scale size={64} className="mx-auto mb-6 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-black mb-6 text-deepblue">Terms of Service</h1>
                        <p className="text-lg text-gray-600">
                            Please read these terms carefully before using our services.
                        </p>                    </motion.div>
                </div>
            </section>

            <section className="container-custom py-20">
                <div className="max-w-4xl mx-auto prose prose-blue prose-lg">
                    <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm space-y-12">

                        <div>
                            <h2 className="flex items-center gap-4 text-2xl font-black text-deepblue mb-6">
                                <Info className="text-primary" /> 1. Acceptance of Terms
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                By accessing or using the AARVIFY website or our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                            </p>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-4 text-2xl font-black text-deepblue mb-6">
                                <FileText className="text-primary" /> 2. Use of Services
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                AARVIFY TECH SERVICES PRIVATE LIMITED provides professional debt recovery and technology services. Users are prohibited from using our platforms for any illegal purposes or to infringe upon the rights of others.
                            </p>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-4 text-2xl font-black text-deepblue mb-6">
                                <AlertCircle className="text-primary" /> 3. Intellectual Property
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                All content, trademarks, and data on this website, including but not limited to software, databases, text, graphics, icons, and hyperlinks are the property of or are licensed to AARVIFY and as such are protected from infringement by local and international legislation and treaties.
                            </p>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-4 text-2xl font-black text-deepblue mb-6">
                                <Scale className="text-primary" /> 4. Governing Law
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in Delhi/Gurugram.
                            </p>
                        </div>

                        <div>
                            <h2 className="flex items-center gap-4 text-2xl font-black text-deepblue mb-6">
                                <Info className="text-primary" /> 5. Changes to Terms
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                AARVIFY reserves the right to revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                            </p>
                        </div>

                        <div className="pt-10 border-t border-gray-100">
                            <p className="text-sm text-gray-500 italic text-center">
                                For any official inquiries regarding legal terms, please reach out to our legal department at info@aarvify.com.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsOfService;
