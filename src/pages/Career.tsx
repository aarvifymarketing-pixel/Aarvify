import { useState } from 'react';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { Briefcase, Send, MapPin, Search, Mail, FileText } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface JobFormData {
    fullName: string;
    email: string;
    phone: string;
    jobPosition: string;
    resume: FileList;
    coverLetter: string;
}

const Career = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

    const jobs = [
        {
            id: "dr-agent-01",
            title: "Debt Recovery Agent",
            type: "Full-time",
            location: "Gurugram, India",
            description: "Manage a portfolio of delinquent accounts. Communicate with customers via telephone and field visits to negotiate payments and settle dues.",
            requirements: ["Minimum 6 months experience in collections", "Excellent communication skills", "Fluency in Hindi and English", "Goal-oriented approach"]
        },
        {
            id: "cc-exec-02",
            title: "Call Center Executive",
            type: "Full-time",
            location: "Gurugram, India",
            description: "Handle inbound and outbound calls. Remind customers of payment due dates and provide assistance with payment portals.",
            requirements: ["Freshers welcome", "Basic computer knowledge", "Good listening skills", "Problem-solving attitude"]
        }
    ];

    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm<JobFormData>();

    const onSubmit = async (data: JobFormData) => {
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const formData = new FormData();
            formData.append('fullName', data.fullName);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('jobPosition', data.jobPosition);
            formData.append('coverLetter', data.coverLetter);

            if (data.resume && data.resume[0]) {
                formData.append('resume', data.resume[0]);
            }

            const response = await fetch('http://localhost:5000/api/apply', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to send application');
            }

            setSubmitStatus({
                type: 'success',
                msg: 'Thank you for your application! Our HR team will contact you soon.'
            });
            reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus({
                type: 'error',
                msg: 'Something went wrong. Please try emailing your resume directly to info@aarvify.com'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const jobSchemas = jobs.map(job => ({
        "@context": "https://schema.org",
        "@type": "JobPosting",
        "title": job.title,
        "description": job.description,
        "datePosted": "2024-10-01",
        "employmentType": "FULL_TIME",
        "hiringOrganization": {
            "@type": "Organization",
            "name": "AARVIFY TECH SERVICES PRIVATE LIMITED",
            "sameAs": "https://aarvify.com"
        },
        "jobLocation": {
            "@type": "Place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No. 190, Udyog Vihar, Phase 4",
                "addressLocality": "Gurugram",
                "addressRegion": "Haryana",
                "postalCode": "122016",
                "addressCountry": "IN"
            }
        }
    }));

    return (
        <>
            <SEO
                title="Careers | Join Our Team"
                description="Launch your career in debt recovery and financial services with AARVIFY. Explore job openings in Gurugram for agents and executives."
                keywords="BPO jobs Gurugram, debt recovery agent hiring, calling jobs in finance recovery"
                schema={jobSchemas}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden min-h-[40vh] flex items-center text-white">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
                        alt="Join AARVIFY Team"
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
                            Career Opportunities
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tight">
                            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-lightblue">Future</span> With Us.
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            We are looking for motivated individuals to join our growing team in Gurugram. Build your career with the leaders in debt recovery and financial services.
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

            {/* Jobs Listing */}
            <section className="relative z-10 -mt-10 bg-white rounded-t-[40px] pt-20 pb-24">
                <div className="container-custom">
                    <div className="flex items-center space-x-4 mb-12">
                        <Search className="text-gray-400" />
                        <h2 className="text-3xl font-black">Open Opportunities</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-24">
                        {jobs.map((job, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 pt-12 transform rotate-12 -translate-y-4 translate-x-4 opacity-[0.03] group-hover:rotate-0 transition-transform">
                                    <Briefcase size={120} />
                                </div>

                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-2 inline-block">
                                            {job.type}
                                        </span>
                                        <h3 className="text-2xl font-black text-darkgray">{job.title}</h3>
                                    </div>
                                </div>

                                <div className="flex items-center text-gray-500 text-sm mb-6 space-x-4 font-semibold">
                                    <span className="flex items-center"><MapPin size={16} className="mr-1" /> {job.location}</span>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <p className="text-gray-600 text-sm leading-relaxed">{job.description}</p>
                                    <div className="space-y-2">
                                        <p className="font-bold text-xs uppercase text-gray-400">Requirements:</p>
                                        <ul className="text-sm text-gray-600 list-disc pl-5 grid grid-cols-1 gap-1">
                                            {job.requirements.map((req, i) => <li key={i}>{req}</li>)}
                                        </ul>
                                    </div>
                                </div>

                                <a href="#apply" className="text-primary font-bold flex items-center hover:underline group/apply">
                                    Apply for this position <Send size={16} className="ml-2 transition-transform group-hover/apply:translate-x-1" />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Application Form */}
                    <div id="apply" className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 grid lg:grid-cols-2">
                        <div className="bg-primary p-12 text-white">
                            <h2 className="text-4xl font-black mb-8 leading-tight">Apply for a <span className="text-lightblue">fulfilling</span> career.</h2>
                            <p className="text-lightblue/80 text-lg mb-12">
                                Fill out the form to start your application. Alternatively, you can directly email your resume to info@aarvify.com
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                        <Mail />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-lightblue/60">Email Resume</p>
                                        <p className="font-bold">info@aarvify.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                        <FileText />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold uppercase tracking-widest text-lightblue/60">Format</p>
                                        <p className="font-bold">PDF or DOCX required</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-12">
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                                        <input
                                            {...register("fullName", { required: "Full name is required" })}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                            placeholder="John Doe"
                                        />
                                        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                                        <input
                                            {...register("email", {
                                                required: "Email is required",
                                                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
                                            })}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                                        <div className="relative flex items-center">
                                            <div className="absolute left-4 flex items-center space-x-1.5 pointer-events-none border-r border-gray-200 pr-3">
                                                <span className="text-lg">🇮🇳</span>
                                                <span className="text-gray-500 font-bold text-sm">+91</span>
                                            </div>
                                            <input
                                                {...register("phone", {
                                                    required: "Phone number is required",
                                                    pattern: {
                                                        value: /^[0-9]{10}$/,
                                                        message: "Please enter a valid 10-digit number"
                                                    }
                                                })}
                                                type="tel"
                                                maxLength={10}
                                                onInput={(e) => {
                                                    e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                                                }}
                                                className="w-full pl-20 pr-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium tracking-wider"
                                                placeholder="XXXXX XXXXX"
                                            />
                                        </div>
                                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-2">Position</label>
                                        <select
                                            {...register("jobPosition", { required: "Please select a position" })}
                                            className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all appearance-none cursor-pointer"
                                        >
                                            <option value="">Select Position</option>
                                            <option value="Assistant Manager">Assistant Manager</option>
                                            <option value="Team Leader">Team Leader</option>
                                            <option value="HR">HR</option>
                                            <option value="IT">IT</option>
                                            <option value="Trainer">Trainer</option>
                                            <option value="Debt Recovery Agent">Debt Recovery Agent</option>
                                        </select>
                                        {errors.jobPosition && <p className="text-red-500 text-xs mt-1">{errors.jobPosition.message}</p>}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Resume Upload</label>
                                    <div className={`relative border-2 border-dashed rounded-xl p-8 transition-all text-center cursor-pointer group ${watch('resume')?.[0] ? 'border-green-400 bg-green-50/30' : 'border-gray-200 hover:border-primary'}`}>
                                        <input
                                            type="file"
                                            {...register("resume", { required: "Resume is required" })}
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            accept=".pdf,.docx"
                                        />
                                        <div className={`${watch('resume')?.[0] ? 'text-green-600' : 'text-gray-400 group-hover:text-primary'} transition-colors`}>
                                            {watch('resume')?.[0] ? (
                                                <>
                                                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                                                        <FileText size={24} />
                                                    </div>
                                                    <p className="font-bold text-sm">File Selected Successfully!</p>
                                                    <p className="text-xs font-medium mt-1 truncate max-w-xs mx-auto text-green-700">
                                                        {watch('resume')[0].name}
                                                    </p>
                                                    <p className="text-[10px] uppercase tracking-wider mt-2 opacity-70">Click to change file</p>
                                                </>
                                            ) : (
                                                <>
                                                    <FileText className="mx-auto mb-2" size={32} />
                                                    <p className="font-bold text-sm">Click to upload or drag & drop</p>
                                                    <p className="text-xs">PDF, DOCX (Max 5MB)</p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    {errors.resume && <p className="text-red-500 text-xs mt-1">{errors.resume.message}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Cover Letter / Message</label>
                                    <textarea
                                        {...register("coverLetter")}
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all"
                                        rows={4}
                                        placeholder="Tell us why you are a good fit..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full btn-primary py-4 text-lg flex items-center justify-center disabled:opacity-50"
                                >
                                    {isSubmitting ? "Sending Application..." : "Submit Application"}
                                </button>

                                {submitStatus && (
                                    <p className={`text-center font-bold text-sm ${submitStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                                        {submitStatus.msg}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Career;
