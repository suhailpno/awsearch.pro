import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const brandLogos = [
    { 
      image: 'https://i.postimg.cc/RV8D73w2/1.png',
      alt: "Brand Logo 1"
    },
    { 
      image: 'https://i.postimg.cc/W32WN0Pq/2.png',
      alt: "Brand Logo 2"
    },
    { 
      image: 'https://i.postimg.cc/k4fjBDn1/3.png',
      alt: "Brand Logo 3"
    },
    { 
      image: 'https://i.postimg.cc/52Cknx3y/4.png',
      alt: "Brand Logo 4"
    },
    { 
      image: 'https://i.postimg.cc/hGRZYHyr/5.png',
      alt: "Brand Logo 5"
    },
    { 
      image: 'https://i.postimg.cc/R01pxX2z/6.png',
      alt: "Brand Logo 6"
    },
    { 
      image: 'https://i.postimg.cc/fyy8XZyw/7.png',
      alt: "Brand Logo 7"
    },
    { 
      image: 'https://i.postimg.cc/mkn8yq17/8.png',
      alt: "Brand Logo 8"
    },
    { 
      image: 'https://i.postimg.cc/CMrP0Zrd/9.png',
      alt: "Brand Logo 9"
    },
    { 
      image: 'https://i.postimg.cc/gkwM2Y1s/10.png',
      alt: "Brand Logo 10"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="impact" className="section trusted-brands-light dark:trusted-brands-dark relative overflow-hidden">
      {/* Subtle background animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 border border-brand-sky-blue/10 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 border border-brand-glacier-blue/10 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="section-title">
          <motion.h2 
            className="font-serif font-bold text-brand-deep-blue dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Trusted by the World's Most Innovative Brands
          </motion.h2>
          <motion.p 
            className="text-brand-royal-blue dark:text-brand-sky-blue max-w-4xl mx-auto text-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            From digital-first unicorns to global enterprises, our placements fuel industry-shaping impact.
          </motion.p>
        </div>

        {/* RESPONSIVE BRAND LOGOS GRID WITH EXACT SPECIFICATIONS - 5-2-1 LAYOUT */}
        <motion.div 
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="brand-logo-grid">
            {brandLogos.map((brand, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="logo-card hover-lift overflow-hidden">
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-sky-blue/5 to-brand-glacier-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <motion.div 
                      className="w-full h-full flex items-center justify-center"
                      variants={imageVariants}
                    >
                      <img 
                        src={brand.image} 
                        alt={brand.alt}
                        className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-500"
                        style={{
                          filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))',
                          maxHeight: '70%',
                          maxWidth: '70%'
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="h-full flex items-center justify-center text-brand-deep-blue dark:text-white font-bold text-sm">Logo ${index + 1}</div>`;
                          }
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-brand-sky-blue/5 to-transparent"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ENHANCED PREMIUM TESTIMONIAL CARD */}
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="relative bg-white dark:bg-brand-steel-navy rounded-2xl shadow-2xl border border-brand-sky-blue/10 hover:border-brand-sky-blue/30 transition-all duration-500 group overflow-hidden">
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-sky-blue/5 via-transparent to-brand-glacier-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            {/* Animated Border Gradient */}
            <motion.div 
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(45deg, transparent, rgba(51, 155, 211, 0.1), transparent)',
                backgroundSize: '200% 200%'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Content Container */}
            <div className="relative z-10 p-8 lg:p-12">
              {/* Quote Icon with Enhanced Animation */}
              <motion.div 
                className="flex justify-center mb-6"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-brand-royal-blue to-brand-oxford-blue rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      boxShadow: "0 20px 40px rgba(4, 67, 120, 0.3)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="h-8 w-8" />
                  </motion.div>
                  
                  {/* Floating particles around quote */}
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-brand-sky-blue rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.5
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand-glacier-blue rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                </div>
              </motion.div>

              {/* Enhanced Star Rating */}
              <motion.div 
                className="flex justify-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.7 + (i * 0.1),
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                    >
                      <Star 
                        className="h-5 w-5 text-amber-400 fill-current group-hover:scale-110 transition-transform duration-300" 
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Enhanced Testimonial Text */}
              <motion.blockquote 
                className="text-brand-deep-blue dark:text-white mb-8 leading-relaxed font-medium text-lg lg:text-xl max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                "AW Search Professional transformed our executive team. Their ability to find candidates who align with our company culture and vision is exceptional. They didn't just fill positions; they{' '}
                <motion.span 
                  className="bg-gradient-to-r from-brand-royal-blue to-brand-sky-blue bg-clip-text text-transparent font-semibold"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  enhanced our leadership capabilities
                </motion.span>."
              </motion.blockquote>

              {/* Enhanced Author Section */}
              <motion.div 
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-4">
                  {/* Enhanced Avatar */}
                  <motion.div 
                    className="relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-brand-sky-blue to-brand-glacier-blue rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg relative overflow-hidden">
                      <span className="relative z-10">S</span>
                      
                      {/* Animated background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-brand-royal-blue via-brand-sky-blue to-brand-glacier-blue"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        style={{
                          backgroundSize: '200% 200%'
                        }}
                      />
                    </div>
                    
                    {/* Status indicator */}
                    <motion.div
                      className="absolute -bottom-1 -right-1 w-5 h-5 bg-success-500 rounded-full border-2 border-white dark:border-brand-steel-navy flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity
                      }}
                    >
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Author Info */}
                  <div className="text-left">
                    <motion.div 
                      className="font-bold text-brand-deep-blue dark:text-white text-lg group-hover:text-brand-royal-blue dark:group-hover:text-brand-sky-blue transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      Sarah Chen
                    </motion.div>
                    <motion.div 
                      className="text-brand-royal-blue dark:text-brand-sky-blue text-sm font-medium"
                      whileHover={{ scale: 1.02 }}
                    >
                      Chief People Officer
                    </motion.div>
                    <motion.div 
                      className="text-secondary-500 dark:text-secondary-400 text-xs"
                      whileHover={{ scale: 1.02 }}
                    >
                      TechUnicorn
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Enhanced Trust Badge */}
              <motion.div 
                className="mt-8 pt-6 border-t border-secondary-200 dark:border-brand-midnight-blue"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-center space-x-2 text-secondary-500 dark:text-secondary-400 text-sm">
                  <motion.div
                    className="w-2 h-2 bg-success-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                  <span>Verified Client Review</span>
                  <motion.div
                    className="w-2 h-2 bg-brand-sky-blue rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Enhanced Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100"
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;