import React from 'react';
import { Linkedin, Calendar, ArrowUp, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  return (
    <footer className="bg-brand-midnight-blue text-white relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 border border-brand-sky-blue/10 rounded-full parallax-element"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-24 h-24 border border-brand-glacier-blue/10 rounded-full parallax-element"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container relative z-10" style={{ padding: 'clamp(3rem, 6vw, 4rem) 1rem' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Enhanced Brand Section */}
          <div className="lg:col-span-2">
            <motion.div 
              className="flex items-center space-x-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="w-14 h-14 rounded-xl overflow-hidden bg-white shadow-lg"
                whileHover={{ scale: 1.05, rotate: 5 }}
              >
                <img 
                  src="https://i.postimg.cc/Hs7ycqZd/Whats-App-Image-2025-06-13-at-10-13-10-PM.jpg" 
                  alt="AW Search Professional Logo"
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="font-bold text-white heading-tertiary">
                  AW Search Professional
                </span>
                <span className="text-brand-sky-blue body-small">Leadership for Transformation</span>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-brand-glacier-blue mb-8 max-w-md leading-relaxed body-regular"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Global executive search firm identifying inspired leaders shaping tomorrow's ventures across tech, life sciences, and beyond.
            </motion.p>
            
            {/* Contact Information */}
            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 text-brand-glacier-blue">
                <MapPin className="h-4 w-4 text-brand-sky-blue" />
                <span className="body-small">Singapore • APAC </span>
              </div>
              <div className="flex items-center space-x-3 text-brand-glacier-blue">
                <Mail className="h-4 w-4 text-brand-sky-blue" />
                <a href="mailto:paul@awsearch.pro" className="body-small hover:text-brand-sky-blue transition-colors">
                  info@awsearch.pro
                </a>
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.a 
                href="https://www.linkedin.com/in/pw11/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brand-steel-navy rounded-xl flex items-center justify-center text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-midnight-blue transition-all duration-300 group hover-lift interactive-element"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              <motion.a 
                href="https://calendar.app.google/Mc8eZhHu3hP1LTQ6A"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-brand-steel-navy rounded-xl flex items-center justify-center text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-midnight-blue transition-all duration-300 group hover-lift interactive-element"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Schedule an appointment"
              >
                <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-6 text-white heading-tertiary">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About', href: '#about' },
                { name: 'Expertise', href: '#expertise' },
                { name: 'Industries', href: '#industries' },
                { name: 'Impact', href: '#impact' },
                { name: 'Contact', href: '#contact' }
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-brand-glacier-blue hover:text-brand-sky-blue transition-colors duration-300 relative group body-regular interactive-element"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-sky-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold mb-6 text-white heading-tertiary">
              Expertise
            </h3>
            <ul className="space-y-3">
              {[
                'Board & C-Suite',
                'Tech & Product Leaders',
                'Commercial & GTM',
                'Innovation Leaders',
                'Smart Cities & Life Sciences'
              ].map((service, index) => (
                <motion.li 
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href="#expertise" 
                    className="text-brand-glacier-blue hover:text-brand-sky-blue transition-colors duration-300 relative group body-regular interactive-element"
                  >
                    {service}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-sky-blue transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        {/* Enhanced Footer Bottom */}
        <motion.div 
          className="border-t border-brand-steel-navy pt-8 flex flex-col md:flex-row justify-between items-center"
          style={{ marginTop: 'clamp(2rem, 4vw, 3rem)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-brand-glacier-blue body-small">
            &copy; {currentYear} AW Search Professional. All rights reserved.
          </p>
          
          <div className="mt-6 md:mt-0 flex items-center space-x-8">
            <div className="flex space-x-6 text-brand-glacier-blue body-small">
              <motion.a 
                href="#" 
                className="hover:text-brand-sky-blue transition-colors duration-300 interactive-element"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-brand-sky-blue transition-colors duration-300 interactive-element"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
              <motion.a 
                href="#" 
                className="hover:text-brand-sky-blue transition-colors duration-300 interactive-element"
                whileHover={{ scale: 1.05 }}
              >
                Careers
              </motion.a>
            </div>
            
            {/* Scroll to top button */}
            <motion.button
              onClick={scrollToTop}
              className="w-12 h-12 bg-brand-steel-navy rounded-xl flex items-center justify-center text-brand-sky-blue hover:bg-brand-sky-blue hover:text-brand-midnight-blue transition-all duration-300 group hover-lift interactive-element"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;