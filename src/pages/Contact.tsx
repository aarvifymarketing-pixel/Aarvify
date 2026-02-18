import { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('https://backend-1-px7y.onrender.com/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to send message');
            }

            setSubmitStatus({
                type: 'success',
                msg: 'Thank you! Your message has been sent successfully. We will be in touch shortly.'
            });
            reset();
        } catch (error) {
            console.error('Submission error:', error);
            setSubmitStatus({
                type: 'error',
                msg: error instanceof Error ? error.message : 'Something went wrong. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <SEO
                title="Contact Us | Reach Out to AARVIFY"
                description="Get in touch with AARVIFY TECH SERVICES PRIVATE LIMITED. Contact us for debt recovery services, job inquiries, or general support in Gurugram."
                keywords="contact debt recovery Gurugram, finance collection email, debt agency phone"
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[40vh] flex items-center text-white">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Contact AARVIFY"
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
                            Contact Us
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-lightblue">Touch</span> With Us.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Have questions about our recovery services or looking for a professional partner? Our dedicated team is ready to assist you in every step.
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

            {/* Contact Form & Info Section */}
            <section className="py-24 bg-white relative -mt-10">
                <div className="container-custom grid lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl font-black mb-10 text-darkgray leading-tight">
                            Reach out to our <br />
                            <span className="text-primary italic">Support Team</span>
                        </h2>

                        <div className="space-y-6">
                            <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl">
                                <div className="flex items-start space-x-6">
                                    <div className="bg-primary/10 p-5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <MapPin size={32} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-darkgray text-xl mb-2">Corporate Office</h3>
                                        <p className="text-gray-500 leading-relaxed">
                                            Plot No. 190, Udyog Vihar, Phase 4,<br />
                                            Gurugram, Haryana 122016, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="group p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-primary/20 hover:bg-white transition-all duration-500 shadow-sm hover:shadow-xl">
                                <div className="flex items-start space-x-6">
                                    <div className="bg-primary/10 p-5 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                        <Mail size={32} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-darkgray text-xl mb-2">Email Channels</h3>
                                        <a href="mailto:info@aarvify.com" className="text-gray-500 text-lg mb-1 hover:text-primary transition-colors inline-block">info@aarvify.com</a>
                                        <p className="text-primary/70 text-sm font-semibold uppercase tracking-widest">24/7 Expert Support Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-white p-10 rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative z-20"
                    >
                        <div className="flex items-center space-x-4 mb-10">
                            <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center">
                                <MessageSquare className="text-primary" size={24} />
                            </div>
                            <h2 className="text-3xl font-black text-darkgray">Send a Message</h2>
                        </div>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600 ml-1">Full Name</label>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all duration-300"
                                        placeholder="Arjun Sharma"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-600 ml-1">Work Email</label>
                                    <input
                                        {...register("email", {
                                            required: "Email is required",
                                            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                        })}
                                        className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all duration-300"
                                        placeholder="arjun@email.com"
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-600 ml-1">Subject</label>
                                <input
                                    {...register("subject", { required: "Subject is required" })}
                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all duration-300"
                                    placeholder="How can we help your business?"
                                />
                                {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-600 ml-1">Message Detail</label>
                                <textarea
                                    {...register("message", { required: "Message is required" })}
                                    className="w-full px-5 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-4 focus:ring-primary/5 focus:border-primary focus:bg-white transition-all duration-300"
                                    rows={5}
                                    placeholder="Describe your requirement in detail..."
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-primary text-white font-bold py-5 rounded-2xl shadow-[0_10px_30px_-5px_#274C77] hover:shadow-[0_20px_40px_-5px_#274C77] hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-4 disabled:opacity-70 disabled:cursor-not-allowed group text-lg"
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                        <span>Delivering...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </>
                                )}
                            </button>

                            {submitStatus && (
                                <p className={`text-center font-bold text-sm mt-4 p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                    {submitStatus.msg}
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-24 bg-gray-50/50">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-black text-darkgray mb-4">Our Operational Hub</h2>
                        <div className="w-20 h-1.5 bg-primary mx-auto rounded-full"></div>
                    </div>

                    <div className="relative rounded-[40px] overflow-hidden shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] border-8 border-white group">
                        <div className="h-[600px] w-full">
                            <iframe
                                title="AARVIFY Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913127404!2d77.07221221508003!3d28.49080498247614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d193855555555%3A0x6e36814c6e913a!2sPlot%20No.%20190%2C%20Phase%20IV%2C%20Udyog%20Vihar%2C%20Sector%2018%2C%20Gurugram%2C%20Haryana%20122015!5e0!3m2!1sen!2sin!4v1717584000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'grayscale(0.4) contrast(1.1)' }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="group-hover:grayscale-0 transition-all duration-1000"
                            ></iframe>
                        </div>

                        {/* Floating Info Card */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="absolute bottom-10 left-10 right-10 md:right-auto md:w-[400px] bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/50"
                        >
                            <div className="flex items-center space-x-4 mb-6">
                                <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-black text-darkgray text-lg">Work Location</h3>
                                    <p className="text-primary text-xs font-bold uppercase tracking-widest">Aarvify Corporate Office</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                                    <span className="text-gray-500 font-medium">Monday - Friday</span>
                                    <span className="text-darkgray font-bold">09:30 AM - 06:30 PM</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-gray-100 pb-3">
                                    <span className="text-gray-500 font-medium">Saturday</span>
                                    <span className="text-darkgray font-bold">09:30 AM - 04:30 PM</span>
                                </div>
                                <div className="flex justify-between items-center text-sm text-red-500">
                                    <span className="font-medium">Sunday</span>
                                    <span className="font-bold">Closed</span>
                                </div>
                            </div>

                            <a
                                href="https://www.google.com/maps/search/?api=1&query=Plot+No.+190+Udyog+Vihar+Phase+4+Gurugram+Haryana+122016"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-8 w-full bg-darkgray text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-primary transition-colors shadow-lg"
                            >
                                Get Directions <Send size={18} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
