import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Globe, Award, Users } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      value: "1500+",
      label: "Leaders Placed",
      description: "Executive placements across global markets",
      color: "from-brand-royal-blue to-brand-oxford-blue"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "Global",
      label: "Singapore, APAC & Europe",
      description: "Presence in major business hubs",
      color: "from-brand-sky-blue to-brand-glacier-blue"
    },
    {
      icon: <Award className="h-6 w-6" />,
      value: "100%",
      label: "Success Rate",
      description: "Placements exceeding expectations",
      color: "from-brand-glacier-blue to-brand-steel-navy"
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "25+",
      label: "Years",
      description: "Executive search excellence",
      color: "from-brand-oxford-blue to-brand-deep-blue"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
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

  return (
    <section className="section-compact bg-white dark:bg-brand-midnight-blue relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 border border-brand-sky-blue/5 rounded-full"
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
          className="absolute bottom-10 right-10 w-20 h-20 border border-brand-glacier-blue/5 rounded-full"
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
        {/* RESPONSIVE STATS CARDS WITH EXACT SPECIFICATIONS - 3-3-1 LAYOUT */}
        <motion.div
          className="responsive-card-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={cardVariants}
            >
              <div className="responsive-card hover-lift group">
                {/* Gradient background overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between">
                  {/* Icon Container - Fixed Height */}
                  <div className="flex-shrink-0">
                    <motion.div
                      className="card-icon mx-auto bg-gradient-to-br from-brand-sky-blue/10 to-brand-glacier-blue/10 rounded-lg flex items-center justify-center text-brand-royal-blue dark:text-brand-sky-blue group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {stat.icon}
                    </motion.div>
                  </div>

                  {/* Content Container - Flexible Height */}
                  <div className="flex-grow flex flex-col justify-center space-y-2">
                    {/* Value with counter animation */}
                    <motion.div
                      className="card-value font-bold text-brand-royal-blue dark:text-brand-sky-blue"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ 
                        duration: 0.6, 
                        delay: 0.2 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      viewport={{ once: true }}
                    >
                      {stat.value}
                    </motion.div>

                    {/* Label - Fixed Height */}
                    <h3 className="card-title font-sans font-semibold text-brand-deep-blue dark:text-white group-hover:text-brand-royal-blue dark:group-hover:text-brand-sky-blue transition-colors">
                      {stat.label}
                    </h3>
                  </div>

                  {/* Description Container - Fixed Height */}
                  <div className="flex-shrink-0">
                    <p className="card-description text-secondary-600 dark:text-secondary-300 group-hover:text-secondary-700 dark:group-hover:text-secondary-200 transition-colors leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-brand-sky-blue/5 to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;