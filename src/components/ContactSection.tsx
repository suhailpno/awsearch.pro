import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Send, Calendar, Linkedin, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { EMAILJS_CONFIG } from '../utils/emailConfig';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || 'Not provided',
          message: data.message,
          to_name: 'AW Search Professional',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      reset();
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  return (
    <section id="contact" className="section bg-white dark:bg-brand-midnight-blue relative overflow-hidden">
      {/* Background animations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-24 h-24 border border-brand-sky-blue/10 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
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
            duration: 20,
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
            Let's Find Your Next Leader
          </motion.h2>
          <motion.p 
            className="text-secondary-600 dark:text-secondary-300 text-large"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            Ready to transform your leadership team? Let's discuss your vision with a focus on Singapore and APAC markets.
          </motion.p>
        </div>

        <div className="grid-2">
          {/* Compact Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="premium-card bg-gradient-to-br from-brand-oxford-blue to-brand-steel-navy text-white relative overflow-hidden shadow-xl h-full p-6">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Header Section */}
                <div className="flex-shrink-0 mb-6">
                  <motion.h3 
                    className="font-serif font-bold text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Connect with Paul Williams
                  </motion.h3>
                </div>
                
                {/* Contact Items */}
                <div className="flex-grow space-y-4">
                  {[
                    {
                      icon: <Calendar className="w-5 h-5" />,
                      title: "Book Direct",
                      content: "Schedule a Strategic Call",
                      link: "https://calendar.app.google/7u9CUX6KpQGAaL776",
                      delay: 0.3
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      title: "LinkedIn",
                      content: "Connect with Paul",
                      link: "https://www.linkedin.com/in/pw11/",
                      delay: 0.4
                    },
                    {
                      icon: <MapPin className="w-5 h-5" />,
                      title: "APAC Focus",
                      content: "Singapore • APAC • Global Reach",
                      delay: 0.5
                    },
                    {
                      icon: <Clock className="w-5 h-5" />,
                      title: "Response Time",
                      content: "Within 24 hours",
                      delay: 0.6
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-3 group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: item.delay }}
                      whileHover={{ x: 5 }}
                    >
                      <div className="w-10 h-10 bg-brand-sky-blue/20 rounded-lg flex items-center justify-center text-brand-sky-blue group-hover:bg-brand-sky-blue group-hover:text-white transition-all duration-300 interactive-element">
                        {item.icon}
                      </div>
                      <div>
                        <p className="font-semibold mb-1 text-sm">{item.title}</p>
                        {item.link ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-brand-sky-blue hover:text-white transition-colors group-hover:underline interactive-element text-xs"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-brand-glacier-blue text-xs">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Footer Section */}
                <motion.div 
                  className="flex-shrink-0 border-t border-brand-sky-blue/20 pt-6 mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h4 className="font-bold mb-3 text-sm">Flexible Engagement Models</h4>
                  <p className="text-brand-glacier-blue leading-relaxed text-xs">
                    We offer retained, equity, JV, and split-fee models — tailored to early-stage and enterprise clients across Singapore and APAC.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Compact Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="premium-card h-full relative overflow-hidden p-6">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-sky-blue/5 to-brand-glacier-blue/5 opacity-50"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                {/* Header Section */}
                <div className="flex-shrink-0 mb-6">
                  <motion.h3 
                    className="font-serif font-bold text-brand-deep-blue dark:text-white text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    Send a Message
                  </motion.h3>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div 
                      className="p-3 bg-success-50 border border-success-200 rounded-lg flex items-center gap-2 mt-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <CheckCircle className="h-4 w-4 text-success-500" />
                      <p className="text-success-700 text-sm">Thank you! Paul will get back to you within 24 hours.</p>
                    </motion.div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <motion.div 
                      className="p-3 bg-error-50 border border-error-200 rounded-lg flex items-center gap-2 mt-3"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                    >
                      <AlertCircle className="h-4 w-4 text-error-500" />
                      <p className="text-error-700 text-sm">Something went wrong. Please try again.</p>
                    </motion.div>
                  )}
                </div>
                
                {/* Form Section */}
                <form onSubmit={handleSubmit(onSubmit)} className="flex-grow space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <motion.div
                      variants={inputVariants}
                      whileFocus="focus"
                      initial="blur"
                    >
                      <label htmlFor="name" className="label">
                        Full Name *
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className={`input ${errors.name ? "border-error-500 focus:ring-error-500 focus:border-error-500" : "focus:ring-brand-sky-blue focus:border-brand-sky-blue"}`}
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                      {errors.name && (
                        <motion.p 
                          className="text-error-500 mt-1 text-xs"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.name.message}
                        </motion.p>
                      )}
                    </motion.div>
                    
                    <motion.div
                      variants={inputVariants}
                      whileFocus="focus"
                      initial="blur"
                    >
                      <label htmlFor="email" className="label">
                        Email Address *
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        {...register("email", { 
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address"
                          }
                        })}
                        className={`input ${errors.email ? "border-error-500 focus:ring-error-500 focus:border-error-500" : "focus:ring-brand-sky-blue focus:border-brand-sky-blue"}`}
                        placeholder="your.email@company.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <motion.p 
                          className="text-error-500 mt-1 text-xs"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>
                  
                  <motion.div
                    variants={inputVariants}
                    whileFocus="focus"
                    initial="blur"
                  >
                    <label htmlFor="phone" className="label">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      {...register("phone")}
                      className="input focus:ring-brand-sky-blue focus:border-brand-sky-blue"
                      placeholder="+65 9123 4567"
                      disabled={isSubmitting}
                    />
                  </motion.div>
                  
                  <motion.div
                    variants={inputVariants}
                    whileFocus="focus"
                    initial="blur"
                  >
                    <label htmlFor="message" className="label">
                      Tell us about your leadership needs *
                    </label>
                    <textarea 
                      id="message"
                      rows={4}
                      {...register("message", { required: "Message is required" })}
                      className={`input resize-none ${errors.message ? "border-error-500 focus:ring-error-500 focus:border-error-500" : "focus:ring-brand-sky-blue focus:border-brand-sky-blue"}`}
                      placeholder="What leadership roles are you looking to fill in Singapore or APAC? What are your key challenges and requirements?"
                      disabled={isSubmitting}
                    ></textarea>
                    {errors.message && (
                      <motion.p 
                        className="text-error-500 mt-1 text-xs"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors.message.message}
                      </motion.p>
                    )}
                  </motion.div>
                  
                  <motion.button 
                    type="submit" 
                    className={`btn-primary w-full group relative overflow-hidden interactive-element ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    aria-label="Send message to AW Search Professional"
                  >
                    <div className="flex items-center justify-center">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </div>
                    
                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  </motion.button>
                  
                  <p className="text-secondary-500 dark:text-secondary-400 text-center text-xs">
                    We'll respond within 24 hours with next steps.
                  </p>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;