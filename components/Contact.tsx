
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const bookingUrl = "https://cal.com/yashwanth-devulapally/30min?user=yashwanth-devulapally&overlayCalendar=true";

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-surface">
      {/* Premium Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-light/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="p-[1px] bg-gradient-to-b from-black/10 to-transparent rounded-2xl"
        >
          <div className="bg-white rounded-2xl p-10 md:p-24 border border-black/10 shadow-2xl shadow-black/[0.05]">
            <span className="text-xs font-bold tracking-[0.2em] text-gold-light uppercase block mb-6">Strategic Consultation</span>
            <h2 className="text-4xl md:text-5xl font-serif text-accent mb-8 font-bold">Secure Your Slot.</h2>
            <p className="text-gray-800 mb-12 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              We operate on a high-touch, limited-engagement model. Skip the back-and-forth and schedule a 30-minute discovery session directly with our managing partners.
            </p>
            
            <div className="flex flex-col items-center gap-6">
              <a 
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-12 py-6 bg-accent text-white text-sm font-black uppercase tracking-widest rounded-full hover:bg-gold-light transition-all shadow-2xl flex items-center gap-3 overflow-hidden"
              >
                <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Book 30min Consultation</span>
                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                
                {/* Visual Feedback Layer */}
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </a>
              
              <div className="flex items-center gap-4 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
                <span className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live Availability
                </span>
                <span className="opacity-30">|</span>
                <span>Direct Cal.com Scheduling</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
