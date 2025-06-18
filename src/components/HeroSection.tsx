import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Star } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden brand-gradient pt-20 md:pt-24 lg:pt-28"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 border border-brand-sky-blue/20 rounded-full"
          animate={{
            y: [0, 30, 0],
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-48 h-48 border-2 border-brand-glacier-blue/30 rounded-full"
          animate={{
            y: [0, -40, 0],
            rotate: -360,
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-brand-royal-blue/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-sky-blue/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Trust Badge */}
          <motion.div
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm rounded-full text-brand-sky-blue text-sm font-medium mb-6 md:mb-8 border border-brand-sky-blue/20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Star className="h-4 w-4 mr-2 fill-current" />
            Trusted by Global Industry Leaders
            <Users className="h-4 w-4 ml-2" />
          </motion.div>
          
          {/* Enhanced Main Heading - Fully Responsive */}
          <motion.h1 
            className="text-white mb-6 md:mb-8 font-serif leading-tight"
            style={{
              fontSize: 'clamp(2rem, 6vw, 4rem)',
              lineHeight: 'clamp(1.1, 1.2, 1.2)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Connecting Top Talent with{' '}
            <motion.span 
              className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              Leading Organizations
            </motion.span>
          </motion.h1>
          
          {/* Enhanced Subtitle - Fully Responsive */}
          <motion.p 
            className="text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              lineHeight: 'clamp(1.5, 1.6, 1.7)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We identify inspired leaders shaping tomorrow's ventures across tech, life sciences, and beyond.
          </motion.p>
          
          {/* Enhanced CTA Buttons - Fully Responsive */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="#expertise" 
              className="btn bg-brand-sky-blue text-brand-midnight-blue hover:bg-white font-semibold shadow-2xl w-full sm:w-auto group relative overflow-hidden"
              style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                padding: 'clamp(0.875rem, 2vw, 1.25rem) clamp(1.5rem, 4vw, 2.5rem)',
                minHeight: '48px'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Your Next Leader
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full"
                animate={{ x: ['0%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
            </motion.a>
            
            <motion.a 
              href="https://calendar.app.google/7u9CUX6KpQGAaL776"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-white text-white hover:bg-white hover:text-brand-midnight-blue font-semibold backdrop-blur-sm w-full sm:w-auto group relative overflow-hidden"
              style={{ 
                fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                padding: 'clamp(0.875rem, 2vw, 1.25rem) clamp(1.5rem, 4vw, 2.5rem)',
                minHeight: '48px'
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              
              {/* Hover background */}
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;