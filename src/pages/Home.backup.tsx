import { Link } from 'react-router-dom';
import {
    Search,
    ShieldCheck,
    TrendingUp,
    Users,
    PhoneCall,
    ExternalLink,
    CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { organizationSchema, localBusinessSchema } from '../utils/schemas';

import PartnerLogos from '../components/PartnerLogos';

const Home = () => {
    const mainServices = [
        {
            title: 'Debt Recovery',
            desc: 'High-efficiency recovery for Credit Cards, PL, and Business Loans.',
            icon: <ShieldCheck className="text-primary" size={24} />,
            link: '/services'
        },
        {
            title: 'Loan Collections',
            desc: 'Systematic call-center and field-force driven collection strategies.',
            icon: <PhoneCall className="text-primary" size={24} />,
            link: '/services'
        },
        {
            title: 'BPO Services',
            desc: 'Customer support, lead generation, and back-office outsourcing.',
            icon: <Users className="text-primary" size={24} />,
            link: '/services'
        },
        {
            title: 'Skip Tracing',
            desc: 'Precision locating of absconding debtors using advanced digital scouting tools.',
            icon: <Search className="text-primary" size={24} />,
            link: '/services'
        },
        {
            title: 'NPA Management',
            desc: 'Expert strategic solutions to reduce non-performing assets and improve balance sheet health.',
            icon: <TrendingUp className="text-primary" size={24} />,
            link: '/services'
        },
        {
            title: 'Field Investigation',
            desc: 'Robust on-ground verification and scouting services conducted across all major cities.',
            icon: <CheckCircle className="text-primary" size={24} />,
            link: '/services'
        },
    ];


    return (
        <div className="bg-white">
            <SEO
                title="Professional BPO & Debt Recovery Solutions in India"
                description="AARVIFY TECH SERVICES PRIVATE LIMITED: India's premier platform for debt recovery, loan collections, and business process outsourcing."
                keywords="debt recovery, BPO India, credit card collections, loan recovery agency, IndiaFilings style"
                schema={{ ...organizationSchema, ...localBusinessSchema }}
            />

            {/* IndiaFilings Style Hero Section */}
            <section className="bg-secondary/50 pt-32 pb-20">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-deepblue leading-tight mb-6 px-4"
                        >
                            India's Trusted Platform for <br className="hidden md:block" />
                            <span className="text-primary italic block md:inline mt-2 md:mt-0">Professional BPO</span> & Recovery
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto px-4"
                        >
                            We help Banks and NBFCs streamline their debt recovery through tech-enabled ethics and professional outsourcing solutions.
                        </motion.p>

                        {/* Search Focus CTA */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative max-w-2xl mx-auto shadow-2xl rounded-2xl overflow-hidden mb-8 mx-4 md:mx-auto"
                        >
                            <div className="flex flex-col sm:flex-row bg-white p-2">
                                <div className="w-full sm:flex-1 flex items-center px-4 border-b sm:border-b-0 border-gray-100 pb-2 sm:pb-0 mb-2 sm:mb-0">
                                    <Search className="text-gray-400 mr-3 shrink-0" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Search services..."
                                        className="w-full h-12 outline-none text-gray-700 font-medium text-sm sm:text-base placeholder:text-xs sm:placeholder:text-base"
                                    />
                                </div>
                                <button className="w-full sm:w-auto bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-deepblue transition-all text-sm sm:text-base">
                                    GET STARTED
                                </button>
                            </div>
                        </motion.div>

                        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
                            <span className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-1" /> SECURE OPERATIONS</span>
                            <span className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-1" /> 100% COMPLIANT</span>
                            <span className="flex items-center"><CheckCircle size={14} className="text-green-500 mr-1" /> PAN INDIA PRESENCE</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-white border-y border-gray-100 py-8 shadow-sm">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                        <div>
                            <p className="text-3xl font-black text-primary">₹100Cr+</p>
                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mt-1">Dues Managed</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-primary">4</p>
                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mt-1">NBFC Partners</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-primary">100+</p>
                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mt-1">Expert Agents</p>
                        </div>
                        <div>
                            <p className="text-3xl font-black text-primary">PAN India</p>
                            <p className="text-[10px] uppercase tracking-widest font-black text-gray-400 mt-1">Presence</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid (Modular Style) */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-black text-deepblue mb-3">Popular Services</h2>
                            <p className="text-gray-500">Fast, reliable and digital solutions for your business.</p>
                        </div>
                        <Link to="/services" className="text-primary font-bold flex items-center hover:underline">
                            View all services <Search size={16} className="ml-2" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {mainServices.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 bg-secondary rounded-xl group-hover:bg-primary/10 transition-colors">
                                        {service.icon}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-deepblue mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed mb-4">{service.desc}</p>
                                        <Link to={service.link} className="text-xs font-black uppercase tracking-widest text-primary flex items-center hover:opacity-70">
                                            Know more <ExternalLink size={12} className="ml-1" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Content & Image Section (IndiaFilings Alternating Layout) */}
            <section className="section-padding bg-white">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-4xl font-black text-deepblue mb-6">Unlocking Recovery with <span className="text-primary">Advanced AI</span> & Ethics</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                India's debt recovery landscape is shifting towards digital. We combine AI-driven skip tracing with human empathy to ensure that your customers are treated with respect while your bottom line stays healthy.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    'Real-time tracking of field collection updates.',
                                    'Automated legal notices and compliance checks.',
                                    'Voice-AI integration for reminder calls.',
                                    'Customized portals for banking partners.'
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center text-gray-700 font-medium">
                                        <CheckCircle className="text-green-500 mr-3" size={18} /> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <motion.div
                            className="relative group"
                            whileHover={{ perspective: 1000, rotateY: -8, rotateX: 5, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        >
                            <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 to-lightblue/30 rounded-[3rem] -rotate-3 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-white backdrop-blur-sm bg-white/30 z-10 transition-transform duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.25)]">
                                <img
                                    src="https://images.pexels.com/photos/7648306/pexels-photo-7648306.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="Voice-AI & Digital Recovery"
                                    className="w-full h-full object-cover aspect-[4/3]"
                                    loading="eager"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-deepblue/20 to-transparent"></div>
                                {/* Floating Tech Element Overlay */}
                                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl transform translate-y-20 group-hover:translate-y-0 transition-transform duration-500 border border-white/50">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                                            <div className="w-2 h-2 bg-primary rounded-full animate-ping"></div>
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-primary">Live Tracking</p>
                                            <p className="text-xs font-bold text-deepblue">AI-Analytics Active</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center flex-row-reverse">
                        <motion.div
                            className="order-2 lg:order-1 relative group"
                            whileHover={{ perspective: 1000, rotateY: 5, rotateX: 5 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        >
                            <div className="absolute -inset-4 bg-lightblue/20 rounded-[3rem] rotate-3 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-gray-100 z-10">
                                <img
                                    src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=2"
                                    alt="AARVIFY Professional Team"
                                    className="w-full h-full object-cover aspect-video shadow-inner"
                                    loading="eager"
                                />
                            </div>
                        </motion.div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-black text-deepblue mb-6">Building Career with <span className="text-primary">AARVIFY Tech</span></h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                We are one of the fastest growing BPO firms in Gurugram. Join a team of 100+ professionals and build a career that matters in the financial services sector.
                            </p>
                            <Link to="/career" className="btn-primary inline-flex items-center">
                                VIEW OPENINGS <TrendingUp className="ml-2" size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trusted Partners */}
            <section className="bg-gray-50 border-y border-gray-100 py-16">
                <div className="container-custom">
                    <p className="text-center text-xs font-black uppercase tracking-[0.3em] text-gray-400 mb-12">Trusted by Leading Financial Institutions</p>
                    <PartnerLogos />
                </div>
            </section>

            {/* Simple Call to Action */}
            <section className="bg-deepblue text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 -skew-x-12 translate-x-1/2"></div>
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-black mb-8 text-white">Ready to transform your debt recovery cycle?</h2>
                    <p className="text-lightblue/80 text-xl mb-12 max-w-2xl mx-auto">
                        Talk to our experts today for a customized recovery strategy that works.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link to="/contact" className="bg-white text-deepblue px-12 py-5 rounded-2xl font-black shadow-2xl hover:bg-lightblue hover:text-white transition-all text-lg">
                            LET'S TALK
                        </Link>
                        <Link to="/services" className="bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-black hover:border-white transition-all text-lg">
                            EXPLORE SERVICES
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
