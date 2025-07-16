import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Heart, DollarSign, Rocket, Zap, Home, ArrowRight } from 'lucide-react';

interface IndustryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  delay: number;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ icon, title, description, color, delay }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="industry-card hover-lift group">
        {/* Enhanced background decoration */}
        <motion.div 
          className={`absolute top-0 right-0 w-16 h-16 ${color} opacity-10 rounded-full transform translate-x-4 -translate-y-4 group-hover:scale-125 group-hover:opacity-20 transition-all duration-500`}
          whileHover={{ rotate: 180 }}
        />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-sky-blue/5 to-brand-glacier-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Icon Container */}
          <div className="flex-shrink-0 mb-3">
            <motion.div 
              className={`${color.replace('bg-', 'text-')} w-10 h-10 flex items-center justify-center rounded-lg bg-opacity-20 ${color} group-hover:scale-110 group-hover:bg-opacity-100 group-hover:text-white transition-all duration-300 interactive-element`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              {icon}
            </motion.div>
          </div>
          
          {/* Content Container */}
          <div className="flex-grow space-y-2">
            <h3 className="font-sans font-semibold text-brand-deep-blue dark:text-white group-hover:text-brand-royal-blue dark:group-hover:text-brand-sky-blue transition-colors text-lg">
              {title}
            </h3>
            
            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed group-hover:text-secondary-700 dark:group-hover:text-secondary-200 transition-colors text-sm">
              {description}
            </p>
          </div>
          
          {/* Hover indicator */}
          <motion.div
            className="flex items-center text-brand-royal-blue dark:text-brand-sky-blue opacity-0 group-hover:opacity-100 transition-all duration-300 mt-3 interactive-element"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <span className="font-medium mr-2 text-xs">Explore</span>
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const IndustriesSection: React.FC = () => {
  const industries = [
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Smart Cities",
      description: "Urban technology, IoT infrastructure, and sustainable city development leadership.",
      color: "bg-brand-sky-blue"
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Life Sciences",
      description: "Biotech, pharmaceuticals, medical devices, and healthcare innovation executives.",
      color: "bg-brand-glacier-blue"
    },
    {
      icon: <DollarSign className="h-5 w-5" />,
      title: "Fintech",
      description: "Digital banking, payments, blockchain, and financial services transformation.",
      color: "bg-brand-royal-blue"
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Digital Startups",
      description: "High-growth tech companies, unicorns, and venture-backed organizations.",
      color: "bg-brand-oxford-blue"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Energy & Resources",
      description: "Renewable energy, clean tech, and sustainable resource management leaders.",
      color: "bg-brand-steel-navy"
    },
    {
      icon: <Home className="h-5 w-5" />,
      title: "Real Estate & Infrastructure",
      description: "PropTech, construction technology, and infrastructure development executives.",
      color: "bg-brand-deep-blue"
    }
  ];

  return (
    <section id="industries" className="section bg-white dark:bg-brand-midnight-blue relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-brand-sky-blue/5 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-24 h-24 border border-brand-glacier-blue/5 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 25,
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
            Industries We Transform
          </motion.h2>
          <motion.p 
            className="text-secondary-600 dark:text-secondary-300 text-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Specialized expertise across high-growth and transformational sectors
          </motion.p>
        </div>

        {/* RESPONSIVE INDUSTRIES CARDS WITH EXACT SPECIFICATIONS - 3-2-1 LAYOUT */}
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <IndustryCard 
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              color={industry.color}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-gradient-to-r from-brand-oxford-blue to-brand-steel-navy text-white rounded-xl max-w-3xl mx-auto relative overflow-hidden shadow-xl group p-6">
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-brand-sky-blue/10 to-brand-glacier-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            <div className="relative z-10 space-y-4">
              <motion.h3 
                className="font-serif font-bold text-xl"
                whileInView={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Don't See Your Industry?
              </motion.h3>
              <p className="text-brand-sky-blue max-w-2xl mx-auto text-base">
                Our network spans across emerging sectors and traditional industries undergoing digital transformation.
              </p>
              <motion.a 
                href="https://calendar.app.google/Mc8eZhHu3hP1LTQ6A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-brand-sky-blue text-brand-midnight-blue hover:bg-white font-semibold group interactive-element inline-flex"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Discuss your specific industry sector with our team"
              >
                Discuss Your Sector
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;