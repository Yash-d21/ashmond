
import React, { useRef, useState, useEffect } from 'react';
import { PORTFOLIO } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Layers, X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedId]);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-surface relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-gold-light/[0.1] to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
           <div className="max-w-xl">
            <span className="text-xs font-bold tracking-[0.2em] text-gold-light uppercase block mb-6">Selected Works</span>
            <h2 className="text-4xl md:text-6xl font-bold text-accent font-serif">Built to Scale.</h2>
          </div>
          <div className="hidden md:flex items-center gap-4 text-xs font-bold tracking-[0.2em] text-accent uppercase">
             <div className="w-12 h-[2px] bg-gold-light"></div>
             Swipe to Explore
          </div>
        </div>

        <div className="-mx-6 md:-mx-0">
          <div 
            ref={containerRef}
            className="flex items-start overflow-x-auto gap-5 px-6 md:px-0 pb-12 snap-x snap-mandatory touch-pan-x"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              paddingRight: '2rem'
            }}
          >
             <style>{`
              #portfolio .flex::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {PORTFOLIO.map((item) => (
              <div key={item.title} className="w-[300px] md:w-[350px] h-[450px] shrink-0 snap-center relative">
                {selectedId !== item.title ? (
                  <motion.div
                    layoutId={`card-${item.title}`}
                    onClick={() => setSelectedId(item.title)}
                    className="w-full h-full border border-black/10 bg-white hover:bg-white rounded-xl overflow-hidden cursor-pointer group flex flex-col relative z-0 shadow-md hover:shadow-2xl hover:shadow-black/10 transition-all duration-500"
                    whileHover={{ y: -8 }}
                  >
                    <div className="p-8 flex flex-col h-full relative">
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex flex-col gap-2">
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold-light"></span>
                                    <span className="text-[10px] font-black tracking-[0.2em] text-accent uppercase">{item.category}</span>
                                </div>
                                <h3 className="font-serif text-accent text-2xl leading-tight group-hover:text-gold-light transition-colors">{item.title}</h3>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center text-accent group-hover:border-gold-light group-hover:text-gold-light transition-all">
                                <ArrowUpRight size={18} />
                            </div>
                        </div>

                        <p className="text-gray-900 text-sm font-medium leading-relaxed line-clamp-[6] flex-grow">
                            {item.description}
                        </p>

                        <div className="mt-6 pt-4 border-t border-black/5 flex items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-gold-light">Impact:</span>
                            <span className="text-xs text-accent tracking-wide font-black">{item.stats}</span>
                        </div>
                    </div>
                  </motion.div>
                ) : (
                   <div className="w-full h-full opacity-0" />
                )}
              </div>
            ))}
            <div className="w-4 shrink-0" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-white/95 backdrop-blur-md z-[60]"
                    onClick={() => setSelectedId(null)}
                />
                <div className="fixed inset-0 flex items-center justify-center z-[70] p-4 pointer-events-none">
                     {PORTFOLIO.map(item => {
                         if (item.title !== selectedId) return null;
                         return (
                            <motion.div
                                layoutId={`card-${item.title}`}
                                key={item.title}
                                className="w-full max-w-2xl bg-white border border-black/10 rounded-2xl overflow-hidden pointer-events-auto relative shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)]"
                                transition={{ type: "spring", stiffness: 350, damping: 30 }}
                            >
                                <div className="absolute top-0 left-0 w-full h-1.5 bg-gold-light" />
                                
                                <button 
                                    onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-black/5 hover:bg-black/10 text-accent transition-colors z-20 group"
                                >
                                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>

                                <div className="p-8 md:p-12 overflow-y-auto max-h-[85vh]">
                                     <div className="flex items-center gap-3 mb-6">
                                        <span className="w-2.5 h-2.5 rounded-full bg-gold-light animate-pulse"></span>
                                        <span className="text-xs font-black tracking-[0.2em] text-gold-light uppercase">{item.category}</span>
                                     </div>

                                     <motion.h3 
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="text-4xl md:text-5xl font-serif text-accent mb-8"
                                     >
                                        {item.title}
                                     </motion.h3>

                                     <motion.p 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-lg md:text-xl text-gray-900 font-medium leading-relaxed mb-10"
                                     >
                                         {item.description}
                                     </motion.p>

                                     {item.subProjects && (
                                         <motion.div 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 }}
                                            className="mb-10"
                                         >
                                             <div className="flex items-center gap-2 mb-4 text-xs font-black tracking-[0.2em] text-accent uppercase">
                                                 <Layers size={16} className="text-gold-light" />
                                                 <span>Ecosystem Ventures</span>
                                             </div>
                                             <div className="flex flex-wrap gap-3">
                                                 {item.subProjects.map(sub => (
                                                     <span key={sub} className="px-4 py-2 bg-accent text-white rounded-lg text-sm font-bold border border-black/5 hover:bg-gold-light transition-all cursor-default">
                                                         {sub}
                                                     </span>
                                                 ))}
                                             </div>
                                         </motion.div>
                                     )}

                                     <motion.div 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                        className="pt-8 border-t border-black/10 flex items-center justify-between"
                                     >
                                          <div>
                                              <span className="block text-[10px] font-black uppercase tracking-widest text-accent mb-1">Key Impact</span>
                                              <span className="text-xl text-accent font-serif italic font-bold">{item.stats}</span>
                                          </div>
                                          <button className="px-8 py-4 bg-accent text-white text-xs font-black uppercase tracking-widest rounded-full hover:bg-black transition-colors flex items-center gap-2 group shadow-lg">
                                              <span>View Case Study</span>
                                              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                          </button>
                                     </motion.div>
                                </div>
                            </motion.div>
                         )
                     })}
                </div>
            </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
