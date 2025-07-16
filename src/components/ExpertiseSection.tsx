import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Code, TrendingUp, Lightbulb, ArrowRight } from 'lucide-react';

interface ExpertiseCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div 
      className="group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="expertise-card hover-lift group">
        {/* Enhanced background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-sky-blue/5 to-brand-glacier-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        
        {/* Animated border */}
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-brand-sky-blue/20 transition-all duration-300"></div>
        
        <div className="relative z-10 h-full flex flex-col justify-between">
          {/* Icon Container - Fixed Height */}
          <div className="flex-shrink-0 mb-4">
            <motion.div 
              className="text-brand-royal-blue dark:text-brand-sky-blue bg-brand-sky-blue/10 dark:bg-brand-sky-blue/20 w-12 h-12 flex items-center justify-center rounded-lg group-hover:bg-brand-royal-blue group-hover:text-white dark:group-hover:bg-brand-sky-blue dark:group-hover:text-brand-midnight-blue transition-all duration-300 interactive-element"
              whileHover={{ 
                rotate: 360,
                scale: 1.1
              }}
              transition={{ duration: 0.5 }}
            >
              {icon}
            </motion.div>
          </div>
          
          {/* Content Container - Flexible Height */}
          <div className="flex-grow space-y-3">
            <h3 className="font-sans font-semibold text-brand-deep-blue dark:text-white group-hover:text-brand-royal-blue dark:group-hover:text-brand-sky-blue transition-colors text-lg leading-tight">
              {title}
            </h3>
            
            <p className="text-secondary-600 dark:text-secondary-300 leading-relaxed group-hover:text-secondary-700 dark:group-hover:text-secondary-200 transition-colors text-sm">
              {description}
            </p>
          </div>
          
          {/* Hover arrow - Fixed Position */}
          <motion.div
            className="flex items-center text-brand-royal-blue dark:text-brand-sky-blue opacity-0 group-hover:opacity-100 transition-all duration-300 mt-4 interactive-element"
            initial={{ x: -10 }}
            whileHover={{ x: 0 }}
          >
            <span className="font-medium mr-2 text-xs">Learn More</span>
            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ExpertiseSection: React.FC = () => {
  const expertiseAreas = [
    {
      icon: <Crown className="h-6 w-6" />,
      title: "Board & C-Suite",
      description: "CEO, CTO, CFO, and Board Director placements for transformational leadership at the highest levels.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Tech & Product Leaders",
      description: "VP Engineering, Chief Product Officers, and technical leaders driving innovation and scalability.",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Commercial & GTM",
      description: "Revenue leaders, CMOs, and go-to-market executives who accelerate growth and market expansion.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation Leaders",
      description: "Chief Innovation Officers and digital transformation leaders reshaping industries.",
    },
  ];

  return (
    <section id="expertise" className="section bg-secondary-50 dark:bg-brand-steel-navy relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 border border-brand-sky-blue/10 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 border border-brand-glacier-blue/10 rounded-full"
          animate={{
            rotate: -360,
            scale: [1, 1.05, 1]
          }}
          transition={{
            duration: 22,
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
            Executive Talent. Delivered.
          </motion.h2>
          <motion.p 
            className="text-secondary-600 dark:text-secondary-300 text-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Specialized executive search across critical leadership functions
          </motion.p>
        </div>

        {/* RESPONSIVE EXPERTISE CARDS WITH EXACT SPECIFICATIONS - 4-2-1 LAYOUT */}
        <div className="expertise-grid">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard 
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="bg-white dark:bg-brand-midnight-blue rounded-xl shadow-xl max-w-4xl mx-auto relative overflow-hidden border border-brand-sky-blue/10 hover:border-brand-sky-blue/30 transition-all duration-500 group p-8">
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-sky-blue/5 to-brand-glacier-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10 space-y-6">
              <motion.h3 
                className="font-serif font-bold text-brand-deep-blue dark:text-white text-2xl"
                whileInView={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Ready to Transform Your Leadership Team?
              </motion.h3>
              <p className="text-secondary-600 dark:text-secondary-300 text-lg max-w-2xl mx-auto">
                Let's discuss your specific leadership needs and how we can help you find exceptional talent.
              </p>
              <motion.a 
                href="https://calendar.app.google/Mc8eZhHu3hP1LTQ6A"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group interactive-element inline-flex"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Schedule a strategic discussion about your leadership needs"
              >
                Schedule a Strategic Discussion
                <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;