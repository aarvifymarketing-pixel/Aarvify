import { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import {
    CreditCard,
    Banknote,
    ShieldCheck,
    Workflow,
    Headphones,
    Plus,
    Minus
} from 'lucide-react';

const Services = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const mainServices = [
        {
            title: "Debt Recovery",
            icon: <ShieldCheck size={40} className="text-primary" />,
            desc: "Comprehensive debt recovery solutions for corporate and retail defaults, utilizing ethical yet efficient collection methodologies.",
            features: ["Legal Compliance", "Skip Tracing", "Field Visits", "Arbitration Support"]
        },
        {
            title: "Loan Collections",
            icon: <Banknote size={40} className="text-primary" />,
            desc: "Specialized collection services for personal loans, business loans, and gold loans with a focus on NPA reduction.",
            features: ["Early Stage Collections", "Hardcore Collections", "Settlement Closures", "Repo Coordination"]
        },
        {
            title: "Credit Card Recovery",
            icon: <CreditCard size={40} className="text-primary" />,
            desc: "Dedicated delinquency management for credit card portfolios, helping banks recover outstanding dues while maintaining customer empathy.",
            features: ["Payment Reminders", "Delinquency Tracking", "Loss Mitigation", "Portfolio Scrubbing"]
        },
        {
            title: "BPO/Call Center Support",
            icon: <Headphones size={40} className="text-primary" />,
            desc: "State-of-the-art call center support for tele-calling, customer reminders, and financial verification services.",
            features: ["Predictive Dialers", "Quality Monitoring", "Multilingual Support", "24/7 Operations"]
        },
    ];

    const faqs = [
        {
            q: "What's so unique about AARVIFY?",
            a: "AARVIFY combines AI-driven analytics with a deeply empathetic approach, ensuring high recovery rates while strictly maintaining your brand's reputation and customer dignity."
        },
        {
            q: "How does your technology identify recovery potential?",
            a: "Our proprietary algorithms analyze historical payment patterns and digital footprints to segments portfolios, allowing us to focus efforts where they are most likely to yield results."
        },
        {
            q: "What data do you use?",
            a: "We utilize multi-dimensional data points ranging from traditional financial records to advanced digital signals, all processed within a secure, bank-grade encrypted environment."
        },
        {
            q: "How does a partnership with AARVIFY work?",
            a: "We work as an extension of your team. Our partnership begins with a portfolio audit, followed by a customized strategy deployment and real-time performance reporting through our dashboards."
        },
        {
            q: "What does implementation involve?",
            a: "Implementation is seamless and rapid. It involves secure data integration, setting up communication protocols, and deploying a dedicated team of debt counsellors tailored to your specific needs."
        },
        {
            q: "Who owns the relationship with the customer?",
            a: "You retain full ownership of the customer relationship. AARVIFY acts as a professional mediator, ensuring that all interactions are ethical and aimed at reaching a mutually beneficial resolution."
        }
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <>
            <SEO
                title="Our Services | Debt & Loan Collection"
                description="Explore our range of debt recovery, loan collection, credit card recovery, and BPO services. Ethical and professional financial solutions."
                keywords="loan collection services Gurugram, debt recovery agency, credit card delinquency management"
                schema={faqSchema}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[40vh] flex items-center text-white">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Our Services"
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
                            Our Expertise
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                            Premium Recovery <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-lightblue">Solutions</span>.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            We leverage advanced technology and professional persistence to optimize your recovery rates and reduce non-performing assets significantly.
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

            {/* Main Services Grid */}
            <section className="relative z-10 -mt-10 bg-white rounded-t-[40px] pt-20 pb-24">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {mainServices.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all"
                            >
                                <div className="bg-secondary rounded-2xl w-20 h-20 flex items-center justify-center mb-8">
                                    {service.icon}
                                </div>
                                <h2 className="text-2xl font-black mb-4">{service.title}</h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    {service.desc}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {service.features.map((feature, fidx) => (
                                        <div key={fidx} className="flex items-center space-x-2 text-sm font-semibold text-darkgray">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Flow */}
            <section className="bg-secondary/30 section-padding">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black mb-4 flex items-center justify-center">
                            <Workflow className="mr-3 text-primary" /> Our Process Flow
                        </h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full mb-6"></div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 relative">
                        {/* Connector line for desktop */}
                        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-primary/10 -translate-y-1/2 z-0"></div>

                        {[
                            { step: "01", title: "Data Driven Decisions", text: "Utilizing AI and machine learning to predict optimal contact channels and timing for maximum debtor engagement." },
                            { step: "02", title: "Customized Strategy", text: "Tailored collection approaches that align with specific client objectives to maximize recovery through data-driven efficiency." },
                            { step: "03", title: "Automation & Scaling", text: "Implementing cutting-edge automation solutions that allow for rapid scaling while maintaining high precision and accuracy." },
                            { step: "04", title: "Empathetic & Ethical Focus", text: "A human-centric recovery process ensuring all interactions are handled with compassion, integrity, and fairness." },
                        ].map((step, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm relative z-10 text-center border border-gray-100">
                                <div className="text-4xl font-black text-primary/10 mb-2">{step.step}</div>
                                <h3 className="font-bold text-darkgray mb-4">{step.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="container-custom section-padding">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl font-black mb-12 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
                                <button
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    className="w-full flex items-center justify-between p-6 text-left font-bold text-darkgray hover:bg-gray-50 transition-colors"
                                >
                                    {faq.q}
                                    {openFaq === i ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-primary" />}
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <p className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                                        {faq.a}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
