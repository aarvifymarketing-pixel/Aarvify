import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Building2, MapPin, Hash, Calendar } from 'lucide-react';
import { breadcrumbSchema } from '../utils/schemas';

const About: React.FC = () => {
    const breadcrumbs = breadcrumbSchema([
        { name: 'Home', item: 'https://aarvify.com/' },
        { name: 'About Us', item: 'https://aarvify.com/about' }
    ]);

    return (
        <>
            <SEO
                title="About Us | Company History & Mission"
                description="Learn about AARVIFY TECH SERVICES PRIVATE LIMITED. Our mission, vision, and commitment to professional debt recovery services in India."
                canonical="https://aarvify.com/about"
                schema={breadcrumbs}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[40vh] flex items-center text-white">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="About AARVIFY"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-deepblue via-deepblue/95 to-primary/40"></div>
                </div>

                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
                </div>

                <div className="container-custom relative z-10 text-center py-16 md:py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <span className="bg-primary/10 text-primary border border-primary/20 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-[0.2em] mb-8 inline-block backdrop-blur-sm">
                            About AARVIFY
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                            Empowering Financial <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-lightblue">Stability</span>.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            A professionally managed company dedicated to providing ethical and results-driven debt recovery solutions for India's evolving financial ecosystem.
                        </p>
                    </motion.div>
                </div>

                {/* Decorative Wave */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                    <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C0,95.83,158,111.9,321.39,56.44Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* Stats/Company Details Wrapper */}
            <section className="container-custom relative z-10 -mt-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                        { label: 'Incorporated', value: 'Sept 26, 2024', icon: <Calendar className="text-primary" /> },
                        { label: 'CIN', value: 'U62020DL2024PTC437124', icon: <Hash className="text-primary" /> },
                        { label: 'City', value: 'Gurugram', icon: <Building2 className="text-primary" /> },
                        { label: 'Experience', value: 'Expert Team', icon: <Award className="text-primary" /> },
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-5 rounded-xl shadow-lg border border-gray-100 flex items-center space-x-3 min-w-0">
                            <div className="bg-secondary p-2.5 rounded-lg flex-shrink-0">{item.icon}</div>
                            <div className="min-w-0 flex-1">
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
                                <p className="font-bold text-deepblue whitespace-nowrap text-[11px] sm:text-xs xl:text-sm mt-0.5 overflow-hidden text-ellipsis">
                                    {item.value}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* History & Mission */}
            <section className="container-custom section-padding">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-black mb-6">Our History</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            AARVIFY TECH SERVICES PRIVATE LIMITED was incorporated on September 26, 2024, with a vision to redefine the debt collection landscape in India. Recognizing the challenges faced by financial institutions in managing non-performing assets (NPAs), we set out to build a firm that balances firm recovery strategies with professional empathy.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            Registered in Delhi with CIN U62020DL2024PTC437124, our operational headquarters in Gurugram's Udyog Vihar serves as a hub for our technology-enabled recovery operations.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <Target className="text-primary mb-4" size={32} />
                                <h3 className="font-bold text-xl mb-2">Mission</h3>
                                <p className="text-gray-500 text-sm">To provide innovative and ethical debt recovery solutions that empower financial institutions to maintain healthy balance sheets.</p>
                            </div>
                            <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
                                <Eye className="text-primary mb-4" size={32} />
                                <h3 className="font-bold text-xl mb-2">Vision</h3>
                                <p className="text-gray-500 text-sm">To become the most trusted debt recovery partner in India, known for our integrity, technology, and commitment to results.</p>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                            alt="AARVIFY Office"
                            className="rounded-3xl shadow-xl"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-primary text-white p-8 rounded-2xl hidden md:block">
                            <div className="text-4xl font-black mb-1">Gurugram</div>
                            <div className="text-lightblue/70 font-bold">Operational HQ</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Address Info */}
            <section className="container-custom section-padding">
                <div className="bg-deepblue rounded-3xl p-12 text-white flex flex-col md:flex-row items-center justify-between">
                    <div className="mb-8 md:mb-0">
                        <h2 className="text-3xl font-black mb-4 text-white">Visit Our Office</h2>
                        <p className="text-lightblue/80 max-w-md">Our headquarters is located in the heart of Gurugram's industrial hub.</p>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-md">
                            <MapPin className="text-lightblue" size={32} />
                        </div>
                        <div>
                            <p className="font-bold text-xl">Gurugram Office</p>
                            <p className="text-lightblue/70">Plot No. 190, Udyog Vihar, Phase 4,</p>
                            <p className="text-lightblue/70">Gurugram, Haryana 122016</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
