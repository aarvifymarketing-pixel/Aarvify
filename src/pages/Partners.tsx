import React from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import PartnerIcon from '../components/PartnerIcon';

// import homeCredit from '../assets/partners/home-credit.png';
// import finnable from '../assets/partners/finnable.png';
// import loantap from '../assets/partners/loantap.png';
// import iloan from '../assets/partners/i-loan.png';

const Partners: React.FC = () => {
    const partners = [
        {
            name: "Home Credit",
            desc: "One of the world's leading consumer finance providers, focusing on responsible lending to people with little or no credit history.",
            website: "https://www.homecredit.co.in/"
        },
        {
            name: "Finnable",
            desc: "A fintech startup that aims to provide loans to employees of high-quality companies with transparency and speed.",
            website: "https://www.finnable.com/"
        },
        {
            name: "Loan Tap",
            desc: "An online platform that provides customized loan products to salaried professionals, ensuring quick and seamless credit access.",
            website: "https://loantap.in/"
        },
        {
            name: "I Loan",
            desc: "Providing accessible financial solutions and loan products across various consumer segments with a customer-first approach.",
            website: "#"
        }
    ];

    return (
        <>
            <SEO
                title="Our Partners | Collaboration & Trust"
                description="AARVIFY TECH SERVICES is proud to partner with leading financial institutions like Home Credit, Finnable, and Loan Tap to provide recovery services."
                canonical="https://aarvify.com/partners"
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[40vh] flex items-center text-white">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/3184419/pexels-photo-3184419.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Our Partners"
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
                            Strategic Network
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                            Trusted By Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-lightblue">Leaders</span>.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            We collaborate with India's most innovative financial institutions to manage and recover their delinquency portfolios with integrity.
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

            {/* Why Lenders Trust Us Section - Modern White Version */}
            <section className="pt-24 pb-12 bg-white relative overflow-hidden z-10 -mt-10 rounded-t-[40px]">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50/50 -skew-x-12 transform translate-x-1/4 -z-10"></div>

                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Our Excellence</span>
                            <h2 className="text-4xl md:text-5xl font-black text-deepblue mb-8 leading-tight">
                                Why Lenders <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-lightblue">Trust Us.</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-xl">
                                AARVIFY is the most advanced end-to-end collections agency in India, serving our clients with decades of in-market operational experience combined with best-in-class technology systems.
                            </p>


                        </motion.div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="bg-white p-10 rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 group hover:border-primary/20 transition-all"
                            >
                                <div className="text-5xl font-black text-primary mb-3 group-hover:scale-110 transition-transform origin-left">100+</div>
                                <div className="text-deepblue font-bold text-xl mb-2">Agents</div>
                                <p className="text-gray-500 text-sm leading-relaxed">Coverage in both desk and field collections nationwide.</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="bg-deepblue p-10 rounded-[2.5rem] shadow-2xl text-white transform lg:translate-y-12"
                            >
                                <div className="text-5xl font-black text-lightblue mb-3">2+</div>
                                <div className="font-bold text-xl mb-2 text-white">Years</div>
                                <p className="text-gray-300 text-sm leading-relaxed text-white/80">Average Collections Leadership Experience.</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-custom section-padding pt-8 lg:pt-12">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-black text-deepblue"
                    >
                        Trusted by Top Financial Institutions in India
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-primary mx-auto mt-6 rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col md:flex-row items-center gap-10"
                        >
                            <div className="w-full md:w-1/3 flex justify-center items-center bg-white border border-gray-100 rounded-2xl p-4 h-48 md:h-56">
                                <PartnerIcon name={partner.name} className="w-full h-full object-contain p-2 hover:scale-105 transition-transform duration-300 bg-transparent" />
                            </div>
                            <div className="md:w-2/3">
                                <h2 className="text-2xl font-black text-deepblue mb-4">{partner.name}</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                                    {partner.desc}
                                </p>
                                <div className="flex items-center space-x-2 text-primary font-bold text-sm">
                                    <div className="w-4 h-0.5 bg-primary"></div>
                                    <span>Portfolio Management Partner</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Collaboration CTA */}
            <section className="container-custom pb-24">
                <div className="bg-secondary rounded-3xl p-12 text-center">
                    <h2 className="text-3xl font-black mb-6">Become a Partner</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8">
                        Are you a financial institution looking to optimize your recovery process? Let's discuss how our technology-driven approach can help your business.
                    </p>
                    <a href="/contact" className="btn-primary inline-block">
                        Start a Collaboration
                    </a>
                </div>
            </section>
        </>
    );
};

export default Partners;
