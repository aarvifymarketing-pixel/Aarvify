import { Link } from 'react-router-dom';
import {
    ShieldCheck,
    TrendingUp,
    Users,
    PhoneCall,
    CheckCircle,
    ArrowRight,
    Building2,
    Lock,
    Cpu,
    BarChart3,
    Smartphone,
    ShoppingBag,
    Signal
} from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { organizationSchema, localBusinessSchema } from '../utils/schemas';
import PartnerLogos from '../components/PartnerLogos';

const Home = () => {
    const mainServices = [
        {
            title: 'Debt Recovery',
            desc: 'High-efficiency recovery strategies for Credit Cards, PL, and Business Loans.',
            icon: <ShieldCheck size={32} />,
            link: '/services'
        },
        {
            title: 'Loan Collections',
            desc: 'Systematic call-center and field-force driven collection strategies.',
            icon: <PhoneCall size={32} />,
            link: '/services'
        },
        {
            title: 'BPO Services',
            desc: 'Customer support, lead generation, and back-office outsourcing.',
            icon: <Users size={32} />,
            link: '/services'
        },
        {
            title: 'NPA Management',
            desc: 'Expert strategic solutions to reduce non-performing assets and improve balance sheet health.',
            icon: <TrendingUp size={32} />,
            link: '/services'
        },
    ];

    return (
        <div className="bg-white font-sans">
            <SEO
                title="Professional BPO & Debt Recovery Solutions in India"
                description="AARVIFY TECH SERVICES PRIVATE LIMITED: India's premier platform for debt recovery, loan collections, and business process outsourcing."
                keywords="debt recovery, BPO India, credit card collections, loan recovery agency, IndiaFilings style"
                schema={{ ...organizationSchema, ...localBusinessSchema }}
            />

            {/* Immersive Hero Section - Professional & Corporate */}
            <section className="relative min-h-[45vh] lg:min-h-[500px] flex items-center overflow-hidden">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Corporate Operations"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-deepblue via-deepblue/95 to-primary/40"></div>
                </div>

                <div className="container-custom relative z-10 pt-12 md:pt-16 pb-6 lg:pb-8">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 text-white">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="mb-8"
                            >
                                <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
                                    <span className="text-sm font-bold tracking-wider uppercase text-lightblue">Next Gen BPO Solutions</span>
                                </div>
                                <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                                    Accelerate Growth With <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-lightblue to-white">Intelligent Recovery.</span>
                                </h1>
                                <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
                                    AARVIFY blends ethical practices with AI-driven strategies to maximize debt recovery and streamline business operations.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link to="/get-started" className="px-8 py-4 bg-white text-deepblue font-bold rounded-xl hover:bg-lightblue hover:text-white transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 group">
                                        Partner With Us <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <Link to="/services" className="px-8 py-4 bg-transparent border border-white/30 hover:border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center justify-center backdrop-blur-sm">
                                        Explore Services
                                    </Link>
                                </div>
                            </motion.div>
                        </div>

                        {/* Floating Stats Card on Right */}
                        <div className="lg:col-span-5 hidden lg:block relative">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative z-10 text-right"
                            >
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl inline-block text-left max-w-md">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                                            <TrendingUp size={24} />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm uppercase tracking-wide">Performance</p>
                                            <p className="text-2xl font-bold text-white">₹1000Cr+ <span className="text-sm text-green-400 font-normal">Dues Managed</span></p>
                                        </div>
                                    </div>
                                    <div className="h-px bg-white/10 mb-6"></div>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-lightblue" />
                                            <span>Secure Operations</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-lightblue" />
                                            <span>Data Driven Decisions</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-lightblue" />
                                            <span>Customized Collection Strategy</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-lightblue" />
                                            <span>Empathetic & Ethical Approach</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-300">
                                            <CheckCircle size={18} className="text-lightblue" />
                                            <span>Automation & Scaling</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl p-10 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Stats Bar - Minimalist Professional Version */}
            <section className="bg-white border-b border-gray-100 relative z-20 -mt-8 mx-2 md:mx-auto max-w-7xl rounded-2xl shadow-xl py-2 px-2 md:px-12">
                <div className="grid grid-cols-3 gap-1 md:gap-8 text-center divide-x divide-gray-100">
                    <motion.div whileHover={{ scale: 1.05 }} className="p-0.5">
                        <p className="text-lg lg:text-3xl font-bold text-deepblue mb-0.5">₹1000Cr+</p>
                        <p className="text-[7px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest">Dues Managed</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="p-0.5">
                        <p className="text-lg lg:text-3xl font-bold text-deepblue mb-0.5">PAN India</p>
                        <p className="text-[7px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest">Presence</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} className="p-0.5">
                        <p className="text-lg lg:text-3xl font-bold text-deepblue mb-0.5">100+</p>
                        <p className="text-[7px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest">Debt Counsellors</p>
                    </motion.div>
                </div>
            </section>

            {/* Strategic Solutions (Services) - High-End Cards */}
            <section className="py-12 md:py-16 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">What We Do</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-deepblue mt-2 mb-6">Strategic Solutions</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-lightblue mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {mainServices.map((service, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl border border-gray-100 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-bl-[100px] -mr-8 -mt-8 transition-all group-hover:scale-110"></div>

                                <div className="relative z-10">
                                    <div className="mb-6 text-primary p-4 bg-gray-50 rounded-2xl w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                                        {service.icon}
                                    </div>

                                    <h3 className="text-xl font-bold text-deepblue mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">{service.desc}</p>

                                    <Link to={service.link} className="inline-flex items-center font-bold text-sm text-primary group-hover:translate-x-2 transition-transform uppercase tracking-wide">
                                        View Details <ArrowRight size={16} className="ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-20 bg-deepblue text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                        <div>
                            <span className="text-lightblue font-bold tracking-wider uppercase text-sm">Target Sectors</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-2">Industries We Empower</h2>
                        </div>
                        <div className="text-gray-300">
                            We provide specialized debt recovery and BPO solutions tailored to the unique regulatory and operational needs of diverse sectors.
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Banking & Finance', icon: <Building2 size={32} /> },
                            { name: 'Fintech & NBFCs', icon: <Smartphone size={32} /> },
                            { name: 'Retail & E-commerce', icon: <ShoppingBag size={32} /> },
                            { name: 'Telecommunication', icon: <Signal size={32} /> }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/5 border border-white/10 p-6 rounded-2xl flex flex-col items-center text-center hover:bg-white/10 transition-colors"
                            >
                                <div className="mb-4 text-lightblue p-3 bg-white/5 rounded-full">{item.icon}</div>
                                <h3 className="font-bold text-lg">{item.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Feature Split - Professional Layout */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-gray-50">
                                <img
                                    src="https://images.pexels.com/photos/7433825/pexels-photo-7433825.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="AARVIFY Young Indian Professional Team"
                                    className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-deepblue/10"></div>
                            </div>
                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 5 }}
                                className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden md:block"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <p className="text-deepblue font-bold text-lg">100%</p>
                                        <p className="text-gray-500 text-xs uppercase">Resolution Rate</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-deepblue mt-2 mb-8 leading-tight">
                                Smarter Recovery.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-lightblue">Ethical Results.</span>
                            </h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                We redefine debt recovery by combining data intelligence with a human-centric approach. Our secure processes ensure your brand reputation is protected while maximizing returns.
                            </p>

                            <div className="space-y-6 mb-10">
                                {[
                                    { text: 'RBI Compliant Framework', sub: '100% adherence to regulatory guidelines.' },
                                    { text: 'Real-time Analytics', sub: 'Live dashboards for complete transparency.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex group">
                                        <div className="mr-6">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                                <CheckCircle size={20} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-deepblue group-hover:text-primary transition-colors">{item.text}</h4>
                                            <p className="text-gray-500 text-sm mt-1">{item.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link to="/about" className="px-8 py-4 bg-deepblue text-white font-bold rounded-xl hover:bg-primary transition-all shadow-lg inline-flex items-center gap-2">
                                Discover Our Method <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technology & Security */}
            <section className="py-20 bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Backbone</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-deepblue mt-2 mb-4">Technology & Security</h2>
                        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Lock size={40} />,
                                title: "Bank-Grade Security",
                                desc: "Advanced infrastructure with 256-bit encryption ensuring complete data privacy and protection."
                            },
                            {
                                icon: <Cpu size={40} />,
                                title: "AI-Powered Dialers",
                                desc: "Smart predictive dialing systems that optimize connect rates and agent productivity by 40%."
                            },
                            {
                                icon: <BarChart3 size={40} />,
                                title: "Real-Time Intelligence",
                                desc: "Advanced analytics dashboard providing clients with live updates on recovery status and field movement."
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center border-t-4 border-deepblue">
                                <div className="text-primary mb-6 flex justify-center">{item.icon}</div>
                                <h3 className="text-xl font-bold text-deepblue mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Operational Excellence (Process) - Timeline Style */}
            <section className="py-24 bg-secondary/10">
                <div className="container-custom">
                    <div className="text-center mb-20">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Workflow</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-deepblue mt-2 mb-4">Operational Excellence</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">From analysis to resolution, our process is designed for speed and compliance.</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                        {[
                            { step: '01', title: 'Analysis', desc: 'Portfolio segmentation using AI scoring models.' },
                            { step: '02', title: 'Strategy', desc: 'Omnichannel outreach planning customized per segment.' },
                            { step: '03', title: 'Execution', desc: 'Field & Tele-calling deployment with live tracking.' },
                            { step: '04', title: 'Closure', desc: 'Settlement & Documentation with full audit trails.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:-translate-y-2 transition-transform duration-300">
                                <div className="w-12 h-12 bg-deepblue text-white rounded-xl flex items-center justify-center text-xl font-bold mb-6 shadow-lg mx-auto md:mx-0">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-deepblue mb-3">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Continuous Scrolling Marquee */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="container-custom mb-12">
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Testimonials</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-deepblue mt-2">Trusted by Leaders</h2>
                </div>

                <div className="relative">
                    {/* Gradient Overlays for smooth edges */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                    <motion.div
                        className="flex gap-8 px-4"
                        animate={{
                            x: [0, -2000], // Smooth continuous scroll
                        }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 40,
                                ease: "linear",
                            },
                        }}
                        style={{ width: "max-content" }}
                        onHoverStart={() => {
                            // Marquee pauses via CSS
                        }}
                        whileHover={{ x: undefined }} // We'll handle pause with CSS for maximum reliability
                    >
                        {/* CSS for pause on hover applied via className */}
                        <div className="flex gap-8 hover:[animation-play-state:paused] marquee-track">
                            {[...Array(3)].map((_, setIdx) => (
                                <div key={setIdx} className="flex gap-8">
                                    {[
                                        {
                                            name: "Rajesh Malhotra",
                                            role: "VP Collections, Payment Bank",
                                            img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
                                            text: "AARVIFY transformed our NPA management. Their tech-driven approach reduced our delinquency rates significantly in just two quarters."
                                        },
                                        {
                                            name: "Priya Venkatesh",
                                            role: "Ops Head, FinTech Unicorn",
                                            img: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
                                            text: "We were struggling with skip tracing. AARVIFY's digital scouting capabilities are unmatched. They found contacts we thought were lost forever."
                                        },
                                        {
                                            name: "Amitabh Verma",
                                            role: "Regional Manager, NBFC",
                                            img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
                                            text: "Ethical conduct is their USP. In an industry known for aggression, AARVIFY maintains dignity while ensuring superior results and transparency."
                                        },
                                        {
                                            name: "Vikram Singh",
                                            role: "Head of Risk, Retail Banking",
                                            img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
                                            text: "The real-time dashboard provided by AARVIFY gives us unparalleled visibility into our portfolio. A truly modern partner for a digital age."
                                        },
                                        {
                                            name: "Anjali Deshmukh",
                                            role: "Director, Microfinance Corp",
                                            img: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
                                            text: "Their commitment to compliance is exceptional. Every audit we've conducted has shown AARVIFY's adherence to regulatory guidelines is 100%."
                                        },
                                        {
                                            isLogoReview: true,
                                            name: "Leading Private Bank",
                                            role: "Annual Performance Review",
                                            img: "https://www.google.com/s2/favicons?domain=hdbfs.com&sz=128",
                                            text: "Ranked as the #1 Recovery Partner for three consecutive months. Excellence in resolution rates and documentation quality."
                                        },
                                        {
                                            isLogoReview: true,
                                            name: "Fintech Growth Partner",
                                            role: "Strategic Recovery Audit",
                                            img: "https://www.google.com/s2/favicons?domain=sliceit.com&sz=128",
                                            text: "AARVIFY's seamless API integration and automated skip tracing have increased our recovery efficiency by 45% year-on-year."
                                        }
                                    ].map((item, i) => (
                                        <div key={`${setIdx}-${i}`} className="w-[400px] flex-shrink-0 bg-gray-50 p-8 rounded-2xl border border-gray-100 relative group hover:bg-white hover:shadow-2xl hover:border-primary transition-all duration-300">
                                            <div className="text-6xl text-gray-200 font-serif absolute top-4 right-6 group-hover:text-primary/20 transition-colors">"</div>
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="relative">
                                                    <img
                                                        src={item.img}
                                                        alt={item.name}
                                                        className={`w-14 h-14 rounded-full object-cover ring-4 ring-white shadow-md transition-all ${item.isLogoReview ? 'bg-white p-2' : ''}`}
                                                    />
                                                    {!item.isLogoReview && <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>}
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-deepblue leading-tight">{item.name}</h4>
                                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{item.role}</p>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 italic leading-relaxed relative z-10 text-sm">{item.text}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <style>{`
                    .marquee-track:hover {
                        animation-play-state: paused !important;
                    }
                `}</style>
            </section>

            {/* Trusted Partners */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container-custom text-center">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-12">Trusted Partners</p>
                    <PartnerLogos />
                </div>
            </section>

            {/* CTA Strip - High Impact */}
            <section className="py-20 bg-deepblue relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="container-custom relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Optimize Your Recovery?</h2>
                    <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
                        Join the industry leaders who trust AARVIFY for their BPO and Debt Management needs.
                    </p>
                    <Link to="/contact" className="px-10 py-5 bg-white text-deepblue font-bold rounded-xl text-lg shadow-2xl hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1 inline-flex items-center gap-3">
                        Start Collaboration <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
