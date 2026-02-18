import React, { useState } from 'react';
import SEO from '../components/SEO';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    ShieldCheck,
    BarChart3,
    Users,
    ArrowRight,
    CheckCircle2,
    Globe,
    Cpu,
    Sparkles,
    Shield,
    Zap,
    TrendingUp,
    Mail,
    Search,
    MessageSquare,
    ClipboardCheck,
    ChevronDown,
    Building2,
    Briefcase
} from 'lucide-react';

const GetStarted: React.FC = () => {
    const [activeStep, setActiveStep] = useState(1);
    const [selectedService, setSelectedService] = useState<string | null>('recovery');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [formData, setFormData] = useState({
        companyName: '',
        designation: '',
        email: '',
        portfolioSize: 'Medium (1Cr - 10Cr)',
        message: ''
    });

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const services = [
        { id: 'recovery', title: 'Debt Recovery', icon: <ShieldCheck size={28} />, desc: 'End-to-end recovery solutions for banks & FIs.' },
        { id: 'bpo', title: 'BPO Services', icon: <Cpu size={28} />, desc: 'Customer support and operational excellence.' },
        { id: 'verification', title: 'Verification', icon: <CheckCircle2 size={28} />, desc: 'Field visits and background checks.' },
        { id: 'telecalling', title: 'Tele-Collections', icon: <Users size={28} />, desc: 'High-conversion digital collections.' },
    ];

    const processSteps = [
        { title: 'Inquiry', desc: 'SLA-backed intake.', icon: <MessageSquare size={24} /> },
        { title: 'Analysis', desc: 'Risk & complexity profiling.', icon: <Search size={24} /> },
        { title: 'Strategy', desc: 'Hybrid deployment model.', icon: <TrendingUp size={24} /> },
        { title: 'Execution', desc: 'Real-time performance.', icon: <ClipboardCheck size={24} /> },
    ];

    const faqs = [
        { q: "What is your typical turnaround time (TAT)?", a: "For debt recovery, we typically initiate field actions within 48 hours of file assignment. Digital collections start within 2 hours." },
        { q: "How do you handle data security?", a: "We follow industry-leading security protocols. All data is stored in bank-grade encrypted servers with restricted access protocols." },
        { q: "Is your field force trained in compliance?", a: "Yes, 100% of our field agents are IIBF DRA trained and certified, undergoing rigorous ethical collection training monthly." },
        { q: "Can we monitor progress in real-time?", a: "Absolutely. Partners get access to a dedicated dashboard with live updates on every single case or call." }
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const nextStep = () => {
        setActiveStep(prev => prev + 1);
        const element = document.getElementById('onboarding-tool');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const prevStep = () => setActiveStep(prev => prev - 1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('https://backend-1-px7y.onrender.com/api/partner-onboarding', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    serviceType: selectedService || 'Not Selected'
                }),
            });

            if (response.ok) {
                setIsSuccess(true);
                window.scrollTo({ top: 300, behavior: 'smooth' });
            } else {
                alert('Submission failed. Please try again or email us at info@aarvify.com');
            }
        } catch (error) {
            console.error('Submission error:', error);
            alert('Could not connect to the server. Please check your internet or try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-4 pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-2xl w-full bg-[#0a1128] p-12 md:p-16 rounded-[4rem] shadow-2xl text-center border border-white/10"
                >
                    <div className="w-24 h-24 bg-primary text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl shadow-primary/20 rotate-12">
                        <CheckCircle2 size={48} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Partnership Protocol Activated!</h2>
                    <p className="text-gray-400 text-lg mb-12 font-light leading-relaxed">
                        Your strategic inquiry has been securely routed. A partnership director will contact you within <span className="text-primary font-bold">4 business hours</span>.
                    </p>
                    <Link to="/" className="inline-flex items-center gap-3 bg-white text-deepblue px-12 py-5 rounded-2xl font-black hover:bg-primary hover:text-white transition-all shadow-xl">
                        Exit Secure Portal <ArrowRight size={22} />
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <SEO
                title="Strategic Onboarding | AARVIFY TECH SERVICES"
                description="Securely start your partnership with India's leading debt recovery and BPO solutions provider."
                canonical="https://aarvify.com/get-started"
            />

            {/* Ultra-Premium Hero Section */}
            <section className="pt-20 pb-16 bg-[#0a1128] relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(37,62,141,0.25),transparent_50% )]"></div>
                    <div className="absolute -bottom-24 -left-24 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="container-custom relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                        <div className="lg:w-3/5">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full text-lightblue font-black text-[10px] tracking-[0.2em] mb-8 border border-white/10 uppercase"
                            >
                                <Sparkles size={16} className="text-primary animate-pulse" /> Strategic Partnership Portal
                            </motion.div>
                            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tighter">
                                Next-Gen <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-lightblue to-white">Operational</span> <br />
                                Excellence.
                            </h1>
                            <p className="text-lg text-gray-400 font-light max-w-2xl leading-relaxed mb-10">
                                India's most trusted partner for ethical debt recovery and high-performance BPO services. Configure your institutional requirements now.
                            </p>
                            <div className="flex flex-wrap gap-6">
                                <a href="#onboarding-tool" className="bg-primary text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-primary/30 flex items-center gap-3 group">
                                    Start Strategy Builder <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform" />
                                </a>
                                <div className="flex items-center gap-4 px-6 py-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                                    <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
                                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></div>
                                    </div>
                                    <span className="text-xs font-bold text-gray-300">Executive Desk Online</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-2/5 relative">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative bg-white/5 p-3 rounded-[3rem] border border-white/10 backdrop-blur-sm shadow-2xl group"
                            >
                                <img
                                    src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="Professional Team"
                                    className="rounded-[2.5rem] grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl"
                                />
                                <div className="absolute -top-8 -left-8 bg-white p-6 rounded-[2rem] shadow-2xl -rotate-6">
                                    <p className="text-2xl font-black text-deepblue leading-none">100+</p>
                                    <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase mt-1">Banks & NBFCs</p>
                                </div>
                                <div className="absolute -bottom-8 -right-8 bg-deepblue border border-white/10 p-8 rounded-[2.5rem] shadow-2xl text-white">
                                    <div className="flex gap-1 mb-2">
                                        {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={12} className="text-primary" />)}
                                    </div>
                                    <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest">Satisfaction</p>
                                    <p className="text-xl font-black">9.8/10 Rating</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Advantages */}
            <section className="py-20 bg-white relative">
                <div className="container-custom">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2 space-y-10">
                            <h2 className="text-base font-black text-primary uppercase tracking-[0.4em] scale-y-110">Market Dominance</h2>
                            <h3 className="text-5xl md:text-6xl font-black text-deepblue leading-tight tracking-tight">The AARVIFY <br /><span className="italic text-primary">Edge.</span></h3>
                            <p className="text-xl text-gray-500 font-light leading-relaxed">
                                We combine localized field intelligence with central AI-driven monitoring to deliver results where others fail.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-8">
                                {[
                                    { t: '5000+ Force', d: 'PAN-India field strength.', icon: <Users className="text-primary" /> },
                                    { t: 'DRA Certified', d: 'IIBF certified agents.', icon: <ShieldCheck className="text-primary" /> },
                                    { t: 'Real-time', d: 'Live data dashboards.', icon: <BarChart3 className="text-primary" /> },
                                    { t: 'Ethical', d: 'Zero brand risk.', icon: <Shield className="text-primary" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 p-6 bg-gray-50 rounded-[2rem] border border-gray-100/50">
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">{item.icon}</div>
                                        <div>
                                            <p className="font-black text-deepblue leading-none mb-1">{item.t}</p>
                                            <p className="text-xs text-gray-400 font-bold tracking-widest uppercase">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
                            <div className="space-y-6 pt-12">
                                <div className="bg-primary/5 p-8 rounded-[3rem] border border-primary/10">
                                    <Building2 className="text-primary mb-6" size={40} />
                                    <h4 className="text-xl font-black text-deepblue mb-4">Enterprise Grade</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">Customized models for tier-1 private and public sector banking giants.</p>
                                </div>
                                <div className="bg-secondary/40 p-8 rounded-[3rem] border border-gray-100">
                                    <Briefcase className="text-deepblue mb-6" size={40} />
                                    <h4 className="text-xl font-black text-deepblue mb-4">Risk Managed</h4>
                                    <p className="text-sm text-gray-500 leading-relaxed font-light">Legal and audit-ready collection processes across all regions.</p>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div className="bg-deepblue p-8 rounded-[3rem] text-white">
                                    <Zap className="text-primary mb-6" size={40} />
                                    <h4 className="text-xl font-black mb-4">Instant TAT</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light">Rapid mobilization within 48 hours for any new portfolio acquisition.</p>
                                </div>
                                <div className="bg-primary p-8 rounded-[3rem] text-white shadow-2xl shadow-primary/30">
                                    <TrendingUp className="text-white mb-6" size={40} />
                                    <h4 className="text-xl font-black mb-4">100% Recovery</h4>
                                    <p className="text-sm text-white/70 leading-relaxed font-light">Highest industry recovery rates for delinquent pre-legal portfolios.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-base font-black text-primary uppercase tracking-[0.4em] mb-4">Operational Roadmap</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-deepblue">From Intake to Resolution</h3>
                    </div>
                    <div className="grid md:grid-cols-4 gap-12">
                        {processSteps.map((step, i) => (
                            <div key={i} className="relative text-center group">
                                <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto mb-8 group-hover:bg-primary group-hover:text-white transition-all group-hover:scale-110 group-hover:-rotate-6">
                                    {step.icon}
                                </div>
                                <h5 className="font-black text-deepblue mb-3 uppercase tracking-[0.2em] text-[10px]">{step.title}</h5>
                                <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[200px] mx-auto">{step.desc}</p>
                                {i < 3 && <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-primary/20 to-transparent -z-10"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interactive Strategy Portal */}
            <section className="py-20 scroll-mt-32" id="onboarding-tool">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto rounded-[6rem] bg-white shadow-[0_100px_200px_-50px_rgba(0,0,0,0.15)] border border-gray-50 p-12 lg:p-20 relative overflow-hidden">

                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>

                        {/* Progress Header */}
                        <div className="flex flex-col items-center mb-20">
                            <h2 className="text-4xl md:text-5xl font-black text-deepblue mb-12">Partnership Builder</h2>
                            <div className="flex items-center gap-6">
                                {[1, 2, 3].map((step) => (
                                    <div key={step} className="flex items-center">
                                        <div className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center font-black text-xl transition-all duration-500 ${activeStep === step ? 'bg-primary text-white scale-125 shadow-2xl shadow-primary/40' :
                                            activeStep > step ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-300'
                                            }`}>
                                            {activeStep > step ? <CheckCircle2 size={32} /> : step}
                                        </div>
                                        {step < 3 && (
                                            <div className="w-16 h-1 mx-2 rounded-full bg-gray-100">
                                                <div className={`h-full bg-primary transition-all duration-1000 ${activeStep > step ? 'w-full' : 'w-0'}`}></div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <AnimatePresence mode="wait">
                            {activeStep === 1 && (
                                <motion.div
                                    key="step1"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="space-y-16"
                                >
                                    <div className="text-center max-w-2xl mx-auto">
                                        <h3 className="text-3xl font-black text-deepblue mb-6">Define Strategic Scope.</h3>
                                        <p className="text-gray-400 font-light text-xl">Select the core pillar for your organization's custom solution.</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                        {services.map((s) => (
                                            <button
                                                key={s.id}
                                                onClick={() => setSelectedService(s.id)}
                                                className={`p-10 rounded-[3.5rem] border-2 text-left transition-all duration-500 relative group overflow-hidden ${selectedService === s.id
                                                    ? 'border-primary bg-primary/5 shadow-2xl scale-[1.02]'
                                                    : 'border-gray-50 bg-white hover:border-primary/20'
                                                    }`}
                                            >
                                                <div className={`w-16 h-16 rounded-[1.75rem] flex items-center justify-center mb-8 transition-all duration-500 ${selectedService === s.id ? 'bg-primary text-white rotate-6 scale-110' : 'bg-secondary text-primary group-hover:bg-primary/10'
                                                    }`}>
                                                    {s.icon}
                                                </div>
                                                <h4 className="text-xl font-black text-deepblue mb-4 leading-none">{s.title}</h4>
                                                <p className="text-gray-500 text-xs font-light leading-relaxed mb-8 opacity-70">{s.desc}</p>

                                                <div className={`text-[10px] font-black uppercase tracking-[0.2em] transition-opacity duration-500 ${selectedService === s.id ? 'text-primary' : 'opacity-20'}`}>
                                                    {selectedService === s.id ? 'Currently Selected' : 'Choose Pillar'}
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex justify-center flex-col items-center gap-6">
                                        <motion.button
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={nextStep}
                                            className="px-20 py-7 rounded-[2.5rem] font-black text-xl bg-deepblue text-white shadow-[0_30px_60px_-15px_rgba(14,34,71,0.4)] hover:bg-primary transition-all flex items-center gap-4 group"
                                        >
                                            Continue Journey <ArrowRight size={32} className="group-hover:translate-x-3 transition-transform duration-500" />
                                        </motion.button>
                                        <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.3em]">Instant access to analysis in step 2</p>
                                    </div>
                                </motion.div>
                            )}

                            {activeStep === 2 && (
                                <motion.div
                                    key="step2"
                                    initial={{ opacity: 0, x: 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -100 }}
                                    className="grid lg:grid-cols-2 gap-20 items-center"
                                >
                                    <div className="space-y-10">
                                        <div className="inline-block p-6 bg-primary/10 rounded-[2.5rem]">
                                            <TrendingUp size={48} className="text-primary" />
                                        </div>
                                        <h3 className="text-5xl font-black text-deepblue leading-[1.1] tracking-tighter">Engineered for <br />Scale & Security.</h3>
                                        <div className="space-y-8">
                                            {[
                                                { t: '500+ Regional HUBS', d: 'Localized presence in 20 major states ensuring rapid field mobilization.' },
                                                { t: 'AES-256 Encryption', d: 'Bank-grade security protocols for all portfolio data processing.' },
                                                { t: 'Compliance Managed', d: '100% adherence to RBI, NPCI and local government guidelines.' }
                                            ].map((item, i) => (
                                                <div key={i} className="flex gap-8 group">
                                                    <div className="w-12 h-12 bg-green-500 text-white rounded-[1.25rem] flex items-center justify-center shrink-0 mt-1 shadow-xl shadow-green-100 group-hover:scale-110 transition-transform">
                                                        <CheckCircle2 size={24} />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-2xl font-black text-deepblue mb-3 leading-none">{item.t}</h4>
                                                        <p className="text-gray-500 text-base font-light leading-relaxed">{item.d}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-8 pt-6">
                                            <button onClick={prevStep} className="font-black text-xs uppercase tracking-[0.3em] text-gray-400 hover:text-deepblue transition-all">Back</button>
                                            <button onClick={nextStep} className="bg-primary text-white px-12 py-6 rounded-[2.5rem] font-black text-lg shadow-[0_30px_60px_rgba(37,62,141,0.3)] hover:bg-deepblue transition-all flex items-center gap-3">
                                                Access Portal <ArrowRight size={24} />
                                            </button>
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full"></div>
                                        <div className="relative bg-white p-12 rounded-[5rem] shadow-2xl border border-gray-50 transition-transform hover:scale-[1.02] duration-700">
                                            <div className="p-10 bg-deepblue text-white rounded-[3.5rem] relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full rotate-12"></div>
                                                <div className="flex gap-1 mb-6">
                                                    {[1, 2, 3, 4, 5].map(i => <Sparkles key={i} size={16} className="text-primary" />)}
                                                </div>
                                                <p className="text-lg font-light leading-relaxed opacity-70 italic mb-8">
                                                    "AARVIFY is a strategic asset. Their tech-driven field force is the standard for modern recovery."
                                                </p>
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-white/10 rounded-2xl"></div>
                                                    <div>
                                                        <p className="font-black text-sm uppercase tracking-widest">Director Collections</p>
                                                        <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.2em] mt-1">Tier-1 Private Bank</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-12 space-y-6">
                                                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl group">
                                                    <span className="font-black text-deepblue uppercase text-[10px] tracking-widest">Digital-First TAT</span>
                                                    <span className="font-black text-primary">&lt; 2 Hours</span>
                                                </div>
                                                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-3xl group">
                                                    <span className="font-black text-deepblue uppercase text-[10px] tracking-widest">Compliance Rating</span>
                                                    <span className="font-black text-green-500">A+ Certified</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {activeStep === 3 && (
                                <motion.div
                                    key="step3"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="max-w-5xl mx-auto"
                                >
                                    <div className="bg-[#fcfdfe] rounded-[5rem] shadow-[0_80px_160px_-40px_rgba(0,0,0,0.1)] border border-gray-100 flex flex-col lg:flex-row overflow-hidden min-h-[700px] relative">
                                        <div className="lg:w-[40%] bg-deepblue p-16 text-white flex flex-col justify-between relative overflow-hidden">
                                            <div className="absolute top-0 left-0 w-full h-full opacity-10">
                                                <Globe size={600} className="absolute -right-20 -bottom-20" />
                                            </div>
                                            <div className="relative z-10">
                                                <h3 className="text-5xl font-black mb-12 leading-tight tracking-tighter">Strategic <br />Intake</h3>
                                                <p className="text-lightblue/60 text-xl font-light leading-relaxed mb-16">
                                                    Bank-grade 256-bit encryption active. Your inquiry is protected by industry-leading security standards and immediate executive-level routing.
                                                </p>

                                                <div className="space-y-10">
                                                    <div className="flex items-center gap-8 group">
                                                        <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] flex items-center justify-center group-hover:bg-primary transition-all border border-white/10 group-hover:scale-110">
                                                            <Mail size={28} className="text-primary group-hover:text-white" />
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] opacity-40 mb-2">SECURE CHANNEL</p>
                                                            <p className="font-black text-2xl tracking-tight">info@aarvify.com</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-20 pt-10 border-t border-white/5 flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] opacity-40">
                                                <ShieldCheck size={24} className="text-green-500" /> ENTERPRISE DATA VAULT
                                            </div>
                                        </div>

                                        <div className="lg:w-[60%] p-12 lg:p-20 shadow-inner">
                                            <form onSubmit={handleSubmit} className="space-y-10">
                                                <div className="grid md:grid-cols-2 gap-10">
                                                    <div className="space-y-4">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Institutional Identity</label>
                                                        <input required name="companyName" value={formData.companyName} onChange={handleInputChange} type="text" className="w-full bg-white border-2 border-gray-50 p-6 rounded-[2rem] focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all font-black text-deepblue outline-none placeholder:text-gray-200" placeholder="e.g. ICICI Bank" />
                                                    </div>
                                                    <div className="space-y-4">
                                                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Authority Role</label>
                                                        <input required name="designation" value={formData.designation} onChange={handleInputChange} type="text" className="w-full bg-white border-2 border-gray-50 p-6 rounded-[2rem] focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all font-black text-deepblue outline-none placeholder:text-gray-200" placeholder="e.g. NPA Head" />
                                                    </div>
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Official Infrastructure Email</label>
                                                    <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-white border-2 border-gray-50 p-6 rounded-[2rem] focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all font-black text-deepblue outline-none placeholder:text-gray-200" placeholder="exec@corporate.com" />
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Operational Complexity</label>
                                                    <select name="portfolioSize" value={formData.portfolioSize} onChange={handleInputChange} className="w-full bg-white border-2 border-gray-50 p-6 rounded-[2rem] focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all font-black text-deepblue outline-none cursor-pointer appearance-none shadow-sm">
                                                        <option>Small Portfolio (Below 1Cr)</option>
                                                        <option>Standard Corporate (1Cr - 10Cr)</option>
                                                        <option>Enterprise Network (Above 10Cr)</option>
                                                        <option>Government/PSU Sector</option>
                                                    </select>
                                                </div>

                                                <div className="space-y-4">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Security / Special Intent</label>
                                                    <textarea rows={3} name="message" value={formData.message} onChange={handleInputChange} className="w-full bg-white border-2 border-gray-50 p-6 rounded-[2rem] focus:ring-8 focus:ring-primary/5 focus:border-primary transition-all font-black text-deepblue outline-none placeholder:text-gray-200" placeholder="Specify any regional complexities or compliance needs..."></textarea>
                                                </div>

                                                <div className="flex items-center gap-8 pt-6">
                                                    <button type="button" onClick={prevStep} className="font-black text-xs uppercase tracking-[0.3em] text-gray-300 hover:text-deepblue transition-all">Go Back</button>
                                                    <motion.button
                                                        whileHover={{ scale: 1.05, y: -5 }}
                                                        whileTap={{ scale: 0.95 }}
                                                        disabled={isSubmitting}
                                                        type="submit"
                                                        className={`flex-grow py-7 rounded-[2.5rem] font-black text-xl flex items-center justify-center gap-6 transition-all shadow-[0_40px_80px_-20px_rgba(37,62,141,0.4)] ${isSubmitting ? 'bg-gray-100 text-gray-400' : 'bg-primary text-white hover:bg-deepblue'
                                                            }`}
                                                    >
                                                        {isSubmitting ? (
                                                            <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full animate-spin"></div>
                                                        ) : (
                                                            <>Activate Protocol <ArrowRight size={32} /></>
                                                        )}
                                                    </motion.button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* General FAQ for Partners */}
            <section className="py-20 bg-white">
                <div className="container-custom max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-base font-black text-primary uppercase tracking-[0.4em] mb-4">Partner Q&A</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-deepblue">Frequently Asked Questions</h3>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border-b border-gray-100 last:border-0 pb-4">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between py-6 text-left group"
                                >
                                    <span className={`text-xl font-bold transition-colors ${openFaq === i ? 'text-primary' : 'text-deepblue group-hover:text-primary'}`}>{faq.q}</span>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${openFaq === i ? 'bg-primary text-white rotate-180' : 'bg-gray-50 text-gray-400'}`}>
                                        <ChevronDown size={24} />
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-500 text-lg font-light leading-relaxed pb-6 pr-12">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support section */}
            <section className="bg-gray-50 py-20 border-t border-gray-100 shadow-inner">
                <div className="container-custom">
                    <div className="grid md:grid-cols-3 gap-16 text-center">
                        <div className="p-12 group hover:bg-white hover:shadow-2xl rounded-[4rem] transition-all duration-700 bg-white/30 backdrop-blur-sm border border-white/10">
                            <div className="w-20 h-20 bg-white shadow-xl text-primary rounded-[2.25rem] flex items-center justify-center mx-auto mb-10 group-hover:bg-primary group-hover:text-white transition-all scale-110">
                                <ShieldCheck size={40} />
                            </div>
                            <h4 className="font-black text-2xl text-deepblue mb-6 uppercase tracking-tighter">Secure Data</h4>
                            <p className="text-gray-500 font-light leading-relaxed">Encrypted data vaults ensure your corporate files are never compromised.</p>
                        </div>
                        <div className="p-12 group hover:bg-white hover:shadow-2xl rounded-[4rem] transition-all duration-700 bg-white/30 backdrop-blur-sm border border-white/10">
                            <div className="w-20 h-20 bg-white shadow-xl text-primary rounded-[2.25rem] flex items-center justify-center mx-auto mb-10 group-hover:bg-primary group-hover:text-white transition-all scale-110">
                                <Zap size={40} />
                            </div>
                            <h4 className="font-black text-2xl text-deepblue mb-6 uppercase tracking-tighter">Rapid Onload</h4>
                            <p className="text-gray-500 font-light leading-relaxed">Dedicated implementation team for instant portfolio integration.</p>
                        </div>
                        <div className="p-12 group hover:bg-white hover:shadow-2xl rounded-[4rem] transition-all duration-700 bg-white/30 backdrop-blur-sm border border-white/10">
                            <div className="w-20 h-20 bg-white shadow-xl text-primary rounded-[2.25rem] flex items-center justify-center mx-auto mb-10 group-hover:bg-primary group-hover:text-white transition-all scale-110">
                                <TrendingUp size={40} />
                            </div>
                            <h4 className="font-black text-2xl text-deepblue mb-6 uppercase tracking-tighter">ROI Driven</h4>
                            <p className="text-gray-500 font-light leading-relaxed">Focused on maximizing collection percentage with ethical practices.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GetStarted;
