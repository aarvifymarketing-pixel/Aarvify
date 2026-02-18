import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Partners', path: '/partners' },
        { name: 'Career', path: '/career' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-0' : 'bg-white border-b border-gray-100 py-1'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
                <div className="flex justify-between h-16 md:h-20 transition-all duration-300 relative">
                    <div className="flex items-start pt-1">
                        <Link to="/" className="group relative z-50">
                            <Logo className="h-16 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 self-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-semibold transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary border-b-2 border-primary' : 'text-darkgray'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/get-started" className="btn-primary py-2 px-5">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center self-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-darkgray hover:text-primary transition-colors p-2"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between px-3 py-4 rounded-md text-base font-medium ${location.pathname === link.path ? 'bg-secondary text-primary' : 'text-darkgray hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                    <ChevronRight size={18} className={location.pathname === link.path ? 'text-primary' : 'text-gray-300'} />
                                </Link>
                            ))}
                            <div className="pt-4 px-3">
                                <Link
                                    to="/get-started"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full btn-primary block text-center"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
