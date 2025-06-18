import React, { useState, useEffect } from 'react';
import { Menu, X, Linkedin, Calendar, ChevronDown } from 'lucide-react';
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Track active section for navigation highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'expertise', 'industries', 'impact', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Expertise', href: '#expertise', id: 'expertise' },
    { name: 'Industries', href: '#industries', id: 'industries' },
    { name: 'Impact', href: '#impact', id: 'impact' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const menuVariants = {
    closed: { 
      opacity: 0, 
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const navItemVariants = {
    hover: {
      scale: 1.02,
      y: -1,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-brand-midnight-blue/95 backdrop-blur-lg shadow-lg border-b border-secondary-100 dark:border-brand-steel-navy py-2' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container flex items-center justify-between">
        {/* Modern Logo with enhanced micro-interactions */}
        <motion.a 
          href="#hero" 
          className="flex items-center group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="flex items-center space-x-3">
            <motion.div 
              className="w-10 h-10 rounded-lg overflow-hidden bg-white shadow-lg group-hover:shadow-xl transition-all duration-300"
              whileHover={{ rotate: 5, scale: 1.05 }}
            >
              <img 
                src="https://i.postimg.cc/Hs7ycqZd/Whats-App-Image-2025-06-13-at-10-13-10-PM.jpg" 
                alt="AW Search Professional Logo"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div className="flex flex-col">
              <motion.span 
                className={`font-bold transition-colors duration-300 ${
                  isScrolled ? 'text-brand-deep-blue dark:text-white' : 'text-white'
                } text-base`}
                whileHover={{ scale: 1.02 }}
              >
                AW Search Professional
              </motion.span>
              <motion.span 
                className={`transition-colors duration-300 ${
                  isScrolled ? 'text-brand-glacier-blue dark:text-brand-sky-blue' : 'text-brand-sky-blue'
                } text-xs`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Leadership for Transformation
              </motion.span>
            </div>
          </div>
        </motion.a>

        {/* Modern Desktop Navigation with enhanced active states */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              className={`font-medium transition-all duration-300 relative group px-4 py-2 rounded-lg ${
                activeSection === link.id
                  ? isScrolled 
                    ? 'text-brand-royal-blue dark:text-brand-sky-blue bg-brand-sky-blue/10' 
                    : 'text-brand-sky-blue bg-white/10'
                  : isScrolled 
                    ? 'text-secondary-700 dark:text-white hover:text-brand-royal-blue dark:hover:text-brand-sky-blue' 
                    : 'text-white/90 hover:text-white'
              } text-sm`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {link.name}
              
              {/* Modern active indicator */}
              <motion.span 
                className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-brand-sky-blue transition-all duration-300 ${
                  activeSection === link.id ? 'w-6' : 'w-0 group-hover:w-6'
                }`}
                layoutId="activeIndicator"
              />
              
              {/* Subtle hover background */}
              <motion.div
                className="absolute inset-0 bg-brand-sky-blue/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                initial={false}
                animate={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* Modern Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-2">
          <motion.a 
            href="https://www.linkedin.com/in/pw11/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-2.5 rounded-lg transition-all duration-300 interactive-element ${
              isScrolled 
                ? 'text-brand-deep-blue dark:text-brand-sky-blue hover:bg-brand-sky-blue/10' 
                : 'text-white hover:bg-white/10'
            }`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Connect with us on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </motion.a>
          
          <ThemeToggle />
          
          <motion.a 
            href="https://calendar.app.google/7u9CUX6KpQGAaL776"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group relative overflow-hidden text-sm px-4 py-2.5"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
            Book Call
            
            {/* Modern shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full"
              animate={{ x: ['0%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.a>
        </div>

        {/* Modern Mobile Menu Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <ThemeToggle />
          <motion.button
            className={`p-2.5 focus:outline-none transition-all duration-300 rounded-lg interactive-element ${
              isScrolled 
                ? 'text-secondary-800 dark:text-white hover:bg-secondary-100 dark:hover:bg-brand-steel-navy' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Modern Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <Dialog
            as={motion.div}
            static
            open={isMenuOpen}
            onClose={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-50 lg:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            {/* Modern backdrop */}
            <motion.div 
              className="fixed inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            <Dialog.Panel className="fixed inset-y-0 right-0 w-full max-w-sm bg-white/95 dark:bg-brand-midnight-blue/95 backdrop-blur-lg shadow-2xl border-l border-secondary-200 dark:border-brand-steel-navy">
              <div className="flex flex-col h-full">
                {/* Modern header */}
                <motion.div 
                  className="flex items-center justify-between border-b border-secondary-200 dark:border-brand-steel-navy p-4"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg overflow-hidden bg-white shadow-lg">
                      <img 
                        src="https://i.postimg.cc/Hs7ycqZd/Whats-App-Image-2025-06-13-at-10-13-10-PM.jpg" 
                        alt="AW Search Professional Logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="font-bold text-brand-deep-blue dark:text-white text-sm">AW Search</span>
                  </div>
                  <motion.button
                    onClick={() => setIsMenuOpen(false)}
                    className="text-secondary-800 dark:text-white focus:outline-none interactive-element p-2"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                </motion.div>
                
                {/* Modern navigation links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="flex flex-col space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className={`font-medium transition-all duration-300 p-3 rounded-lg relative group ${
                          activeSection === link.id
                            ? 'text-brand-royal-blue dark:text-brand-sky-blue bg-brand-sky-blue/10'
                            : 'text-secondary-800 dark:text-white hover:text-brand-royal-blue dark:hover:text-brand-sky-blue hover:bg-secondary-100 dark:hover:bg-brand-steel-navy'
                        } text-base`}
                        onClick={() => setIsMenuOpen(false)}
                        variants={linkVariants}
                        initial="closed"
                        animate="open"
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        whileHover={{ x: 5, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-between">
                          {link.name}
                          {activeSection === link.id && (
                            <motion.div
                              className="w-2 h-2 bg-brand-sky-blue rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ type: "spring", stiffness: 500 }}
                            />
                          )}
                        </div>
                        
                        {/* Modern hover background */}
                        <motion.div
                          className="absolute inset-0 bg-brand-sky-blue/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                          initial={false}
                          whileHover={{ opacity: 1 }}
                        />
                      </motion.a>
                    ))}
                  </div>
                </nav>
                
                {/* Modern action buttons */}
                <motion.div 
                  className="border-t border-secondary-200 dark:border-brand-steel-navy p-4 space-y-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <motion.a 
                    href="https://www.linkedin.com/in/pw11/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full p-3 border border-brand-royal-blue text-brand-royal-blue dark:text-brand-sky-blue hover:bg-brand-royal-blue hover:text-white dark:hover:bg-brand-sky-blue dark:hover:text-brand-midnight-blue rounded-lg transition-all duration-300 interactive-element text-sm"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    Connect on LinkedIn
                  </motion.a>
                  
                  <motion.a 
                    href="https://calendar.app.google/7u9CUX6KpQGAaL776"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full text-center group relative overflow-hidden text-sm"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ scale: 1.02, y: -1 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform" />
                    Book Appointment
                    
                    {/* Modern shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full"
                      animate={{ x: ['0%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </motion.a>
                </motion.div>
              </div>
            </Dialog.Panel>
          </Dialog>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;