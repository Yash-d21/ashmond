
import React from 'react';
import { SERVICES } from '../constants';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 relative border-t border-black/10 bg-background">
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-24 md:flex md:items-end md:justify-between border-b border-black/10 pb-10">
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-gold-light uppercase block mb-6">Our Methodology</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-accent tracking-tight font-serif">
              Strategic Partnership <span className="italic text-gold-light font-serif">Model</span>.
            </h2>
            <p className="text-gray-800 max-w-xl text-lg font-light leading-relaxed">
              We do not operate as vendors. We work alongside founders as strategic partners, shaping priorities, direction, and long term decision making at the management level.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-16 h-16 rounded-full border border-gold-light/20 flex items-center justify-center">
              <span className="text-gold-light font-bold text-xl">Overview</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-10 bg-white hover:bg-subtle transition-colors duration-500"
            >
              <div className="absolute top-8 right-10 opacity-10 group-hover:opacity-100 transition-opacity duration-500">
                <service.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gold-light font-bold text-sm tracking-widest">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-bold text-accent group-hover:text-gold-light transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-800 leading-relaxed text-sm font-medium mb-8">
                    {service.description}
                  </p>
                </div>
                
                <div className="pt-6 border-t border-black/5">
                  <span className="text-[10px] uppercase font-black tracking-[0.2em] text-accent border-b border-gold-light pb-1 group-hover:text-gold-light transition-colors cursor-pointer">
                    Learn More
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
