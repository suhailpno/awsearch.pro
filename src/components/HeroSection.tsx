import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Star, Sparkles, Zap } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden brand-gradient pt-20 md:pt-24 lg:pt-28"
    >
      {/* Enhanced animated background elements with improved performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 border-2 border-brand-sky-blue/30 rounded-full"
          animate={{
            y: [0, 30, 0],
            rotate: 360,
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-48 h-48 border-2 border-brand-glacier-blue/40 rounded-full"
          animate={{
            y: [0, -40, 0],
            rotate: -360,
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Central pulse ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-brand-royal-blue/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.4, 0.1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Enhanced floating particles with varied sizes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 3 === 0 ? 'w-3 h-3 bg-brand-sky-blue/50' :
              i % 3 === 1 ? 'w-2 h-2 bg-brand-glacier-blue/40' :
              'w-1 h-1 bg-amber-400/60'
            }`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i * 8) % 50}%`,
            }}
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-oxford-blue/10 to-brand-midnight-blue/20" />
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Enhanced Trust Badge with micro-interactions */}
          <motion.div
            className="inline-flex items-center px-4 py-2 md:px-6 md:py-3 bg-white/15 backdrop-blur-md rounded-full text-brand-sky-blue text-sm font-medium mb-6 md:mb-8 border border-brand-sky-blue/30 shadow-lg"
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              borderColor: "rgba(51, 155, 211, 0.5)"
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-4 w-4 mr-2 fill-current" />
            </motion.div>
            Trusted by Global Industry Leaders
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Users className="h-4 w-4 ml-2" />
            </motion.div>
          </motion.div>
          
          {/* Enhanced Main Heading with improved typography and animations */}
          <motion.h1 
            className="text-white mb-6 md:mb-8 font-serif leading-tight relative"
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 4.5rem)',
              lineHeight: 'clamp(1.1, 1.2, 1.2)',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Connecting Top Talent with{' '}
            </motion.span>
            <motion.span 
              className="relative inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span
                className="bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent relative z-10"
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
              
              {/* Sparkle effects around the gradient text */}
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                <Sparkles className="h-4 w-4 text-amber-400" />
              </motion.div>
              <motion.div
                className="absolute -bottom-1 -left-1"
                animate={{
                  scale: [0, 1, 0],
                  rotate: [360, 180, 0]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 1.5
                }}
              >
                <Zap className="h-3 w-3 text-orange-400" />
              </motion.div>
            </motion.span>
          </motion.h1>
          
          {/* Enhanced Subtitle with better spacing and animation */}
          <motion.p 
            className="text-white/90 mb-8 md:mb-12 max-w-4xl mx-auto font-light leading-relaxed"
            style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              lineHeight: 'clamp(1.5, 1.6, 1.7)',
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              We identify inspired leaders shaping tomorrow's ventures across tech, life sciences, and beyond.
            </motion.span>
          </motion.p>
          
          {/* Enhanced CTA Buttons with improved interactions */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="#expertise" 
              className="btn bg-brand-sky-blue text-brand-midnight-blue hover:bg-white font-semibold shadow-2xl w-full sm:w-auto group relative overflow-hidden"
              style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                padding: 'clamp(1rem, 2vw, 1.25rem) clamp(2rem, 4vw, 2.5rem)',
                minHeight: '52px',
                boxShadow: '0 8px 32px rgba(51, 155, 211, 0.3)'
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: '0 12px 40px rgba(51, 155, 211, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.span
                className="relative z-10 flex items-center"
                whileHover={{ x: 2 }}
              >
                Find Your Next Leader
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.span>
              
              {/* Enhanced shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full"
                animate={{ x: ['0%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              />
              
              {/* Pulse effect on hover */}
              <motion.div
                className="absolute inset-0 bg-white/10 rounded-xl opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
            
            <motion.a 
              href="https://calendar.app.google/7u9CUX6KpQGAaL776"
              target="_blank"
              rel="noopener noreferrer"
              className="btn border-2 border-white text-white hover:bg-white hover:text-brand-midnight-blue font-semibold backdrop-blur-sm w-full sm:w-auto group relative overflow-hidden"
              style={{ 
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                padding: 'clamp(1rem, 2vw, 1.25rem) clamp(2rem, 4vw, 2.5rem)',
                minHeight: '52px'
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                backgroundColor: "rgba(255, 255, 255, 0.95)"
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.span
                className="relative z-10 flex items-center"
                whileHover={{ x: 2 }}
              >
                <Calendar className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Book a Consultation
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </motion.span>
              
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-white/10 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>

          {/* Enhanced floating call-to-action indicator */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.div
              className="flex flex-col items-center text-white/60 cursor-pointer group"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.1 }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="text-sm font-medium mb-2 group-hover:text-white/80 transition-colors">
                Discover Our Impact
              </span>
              <motion.div
                className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center group-hover:border-white/60 transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="w-1 h-3 bg-white/60 rounded-full mt-2 group-hover:bg-white/80 transition-colors"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;