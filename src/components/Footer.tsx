import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-deepblue text-white pt-20 pb-10">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Company Info */}
                    <div className="space-y-8">
                        <Link to="/" className="inline-block">
                            <Logo className="h-20 w-auto brightness-0 invert" />
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            AARVIFY is a leading tech-enabled BPO and debt management firm. We specialize in ethical, efficient, and compliant recovery solutions for India's top financial institutions.
                        </p>

                        <div className="flex space-x-4">
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all border border-white/10">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Navigation */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Navigation
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {['Home', 'About Us', 'Services', 'Partners', 'Career'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-white hover:translate-x-2 transition-all flex items-center group">
                                        <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Core Expertise */}
                    <div>
                        <h3 className="text-white font-bold text-lg mb-8 relative inline-block">
                            Expertise
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <ul className="space-y-4">
                            {['Debt Recovery', 'Loan Collections', 'NPA Management', 'BPO Solutions'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-gray-400 hover:text-white hover:translate-x-2 transition-all flex items-center group text-sm">
                                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform"></div>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Reach Us */}
                    <div className="space-y-6">
                        <h3 className="text-white font-bold text-lg mb-2 relative inline-block">
                            Reach Us
                            <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full"></span>
                        </h3>
                        <div className="flex items-start space-x-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0">
                                <MapPin size={20} />
                            </div>
                            <span className="text-gray-400 text-sm leading-relaxed">
                                Plot No. 190, Udyog Vihar, Phase 4, Gurugram, Haryana 122016, India
                            </span>
                        </div>
                        <div className="flex items-center space-x-4 hover:text-primary transition-colors cursor-pointer group">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                                <Mail size={20} />
                            </div>
                            <span className="text-gray-400 group-hover:text-white transition-colors">info@aarvify.com</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-xs text-center md:text-left">
                        &copy; {currentYear} AARVIFY TECH SERVICES PRIVATE LIMITED.
                    </p>
                    <div className="flex gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
