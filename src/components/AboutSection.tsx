import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Users, TrendingUp, Sparkles, Star } from 'lucide-react';

const AboutSection: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const achievements = [
    { icon: <Globe className="h-5 w-5" />, label: "Global Reach", value: "Singapore, APAC and Europe" },
    { icon: <Award className="h-5 w-5" />, label: "Premium Clients", value: "Dropbox, Bain, Emirates" },
    { icon: <Users className="h-5 w-5" />, label: "Leadership Focus", value: "C-Suite & VP Levels" },
    { icon: <TrendingUp className="h-5 w-5" />, label: "Success Rate", value: "100% Placement Success" },
  ];

  return (
    <section id="about" className="section bg-white dark:bg-brand-midnight-blue relative overflow-hidden">
      {/* Subtle background animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-brand-sky-blue/5 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-brand-glacier-blue/5 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="section-title">
          <motion.h2 
            className="font-serif font-bold"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            Global Reach. Deep Expertise.
          </motion.h2>
          <motion.p 
            className="text-secondary-600 dark:text-secondary-300 max-w-4xl mx-auto text-large"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
          >
            AW Search Professional is redefining global executive search with unmatched industry insight.
          </motion.p>
        </div>

        <div className="grid-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeIn}
            className="relative"
          >
            <div className="relative group">
              {/* Enhanced background decoration */}
              <motion.div 
                className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-brand-sky-blue/20 to-brand-glacier-blue/20 rounded-xl"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Updated professional executive team image */}
              <motion.img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Professional executive team in modern boardroom setting" 
                className="rounded-xl shadow-brand w-full h-auto object-cover relative z-10 group-hover:shadow-xl transition-all duration-500"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* ENHANCED FLOATING BADGE - MOVED TO BOTTOM */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-gradient-to-br from-brand-royal-blue via-brand-oxford-blue to-brand-steel-navy text-white rounded-2xl shadow-2xl border-2 border-brand-sky-blue/30 backdrop-blur-sm z-20 overflow-hidden"
                style={{ 
                  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                  minWidth: 'clamp(140px, 20vw, 180px)'
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  rotateY: 5,
                  rotateX: 5
                }}
                animate={{ 
                  boxShadow: [
                    "0 12px 30px rgba(4, 67, 120, 0.4)",
                    "0 20px 40px rgba(4, 67, 120, 0.6)",
                    "0 12px 30px rgba(4, 67, 120, 0.4)"
                  ],
                  borderColor: [
                    "rgba(51, 155, 211, 0.3)",
                    "rgba(51, 155, 211, 0.6)",
                    "rgba(51, 155, 211, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
              >
                {/* Animated gradient background overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-brand-sky-blue/20 via-transparent to-brand-glacier-blue/20"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    backgroundSize: '200% 200%'
                  }}
                />
                
                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Main number with enhanced animation */}
                  <motion.div 
                    className="font-bold text-white mb-2"
                    style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)' }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      textShadow: [
                        "0 0 10px rgba(255, 255, 255, 0.3)",
                        "0 0 20px rgba(255, 255, 255, 0.5)",
                        "0 0 10px rgba(255, 255, 255, 0.3)"
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    25+
                  </motion.div>
                  
                  {/* Label with gradient text - FIXED: Combined duplicate style attributes */}
                  <motion.p 
                    className="bg-gradient-to-r from-brand-sky-blue via-white to-brand-glacier-blue bg-clip-text text-transparent font-semibold mb-1"
                    style={{ 
                      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                      backgroundSize: '200% 200%'
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    Years of Excellence
                  </motion.p>
                  
                  {/* Subtitle */}
                  <p className="text-brand-sky-blue/90 font-medium" style={{ fontSize: 'clamp(0.75rem, 1.25vw, 0.875rem)' }}>
                    Industry Leadership
                  </p>
                </div>
                
                {/* Enhanced floating icons */}
                <Sparkles className="absolute -top-2 -right-2 h-4 w-4 text-brand-sky-blue micro-pulse" />
                <Star className="absolute -bottom-1 -left-1 h-3 w-3 text-brand-glacier-blue micro-bounce" />
                
                {/* Floating particles */}
                <motion.div
                  className="absolute top-1 left-1/2 w-1 h-1 bg-white/60 rounded-full"
                  animate={{
                    y: [0, -8, 0],
                    opacity: [0.6, 1, 0.6],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute bottom-2 right-1/4 w-1.5 h-1.5 bg-brand-sky-blue/70 rounded-full"
                  animate={{
                    y: [0, -6, 0],
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.3, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    delay: 1
                  }}
                />
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12"
                  animate={{ x: ['-100%', '200%'] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 2,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div 
              variants={fadeIn}
            >
              <h3 className="font-serif font-bold mb-4 text-brand-deep-blue dark:text-white text-xl">
                Transforming Leadership Landscapes
              </h3>
              
              <motion.p 
                className="text-secondary-700 dark:text-secondary-300 mb-4 leading-relaxed text-base"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Over 25+ years, we've delivered thousands of strategic leadership hires across Singapore, APAC, and Europe — from startups to global innovators like{' '}
                <motion.span 
                  className="font-semibold text-brand-royal-blue dark:text-brand-sky-blue"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Dropbox, Bain, and Emirates
                </motion.span>.
              </motion.p>
              
              <motion.p 
                className="text-secondary-700 dark:text-secondary-300 mb-6 leading-relaxed text-base"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                We don't just fill positions; we architect leadership teams that drive industry transformation and sustainable growth.
              </motion.p>
            </motion.div>

            {/* RESPONSIVE ACHIEVEMENT CARDS WITH EXACT SPECIFICATIONS */}
            <motion.div 
              className="achievement-grid"
              variants={staggerContainer}
            >
              {achievements.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="achievement-card group hover-lift"
                  variants={fadeIn}
                  whileHover={{ 
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="flex items-center gap-3 h-full w-full">
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="w-10 h-10 bg-brand-sky-blue/20 rounded-lg flex items-center justify-center text-brand-royal-blue dark:text-brand-sky-blue group-hover:bg-brand-sky-blue group-hover:text-white transition-all duration-300 interactive-element"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-brand-deep-blue dark:text-white group-hover:text-brand-royal-blue dark:group-hover:text-brand-sky-blue transition-colors">
                        {item.label}
                      </h4>
                      <p className="text-secondary-600 dark:text-secondary-300 group-hover:text-secondary-700 dark:group-hover:text-secondary-200 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;