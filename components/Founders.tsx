
import React from 'react';
import { FOUNDERS } from '../constants';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const Founders: React.FC = () => {
  return (
    <section id="founders" className="py-24 md:py-40 border-t border-black/5 relative bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="text-[10px] md:text-[11px] font-black tracking-[0.4em] text-gold-light uppercase mb-4 block">Governance</span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-accent font-bold tracking-tight">Managing Partners</h2>
          <div className="w-12 h-[1px] bg-gold-light/40 mt-6 mx-auto"></div>
        </motion.div>

        {/* Side by side grid: Asvaan next to Yashwanth - Perfectly Aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-20 gap-y-16">
          {FOUNDERS.map((founder, index) => (
            <motion.div 
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row items-start gap-6 md:gap-8 group"
            >
              {/* Photo Container - Balanced Scale */}
              <div className="w-32 md:w-40 lg:w-36 xl:w-44 shrink-0 mx-auto sm:mx-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-subtle border border-black/5 shadow-md rounded-sm">
                  <div className="absolute inset-0 bg-black/[0.04] z-10 pointer-events-none" />
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-700" />
                  
                  <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <a 
                      href={founder.linkedIn || "#"} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-center text-accent hover:bg-gold-light hover:text-white transition-all rounded-full border border-black/5"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Text Content - Optimized for Readability */}
              <div className="flex-grow text-center sm:text-left">
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-serif text-accent mb-1 font-bold tracking-tight leading-tight">
                    {founder.name}
                  </h3>
                  <p className="text-gold-light text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase leading-relaxed">
                    {founder.role}
                  </p>
                </div>
                <div className="w-8 h-[1px] bg-gold-light/30 mb-5 mx-auto sm:mx-0"></div>
                <p className="text-gray-600 leading-relaxed font-normal text-[13px] md:text-sm lg:text-[13px] xl:text-sm max-w-sm mx-auto sm:mx-0">
                  {founder.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
