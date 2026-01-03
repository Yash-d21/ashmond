
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-background">
      {/* Premium Ambient Lighting - Bone Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-subtle rounded-full blur-[120px]" />
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-light/10 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-200/40 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-black/10 bg-surface/80 backdrop-blur-sm shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-light animate-pulse-slow"></div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-accent uppercase">
              Management & Strategic Consulting
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-accent mb-8 leading-[1]"
        >
          Ashmond <span className="font-serif italic font-thin text-gold-light/40">&</span> Co.
          <br />
          <span className="text-4xl md:text-6xl font-light mt-6 block tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent to-gray-600">Hands to Build.</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-dark to-gold-light">Brains to Scale.</span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-800 mb-12 font-light leading-relaxed tracking-wide italic"
        >
          "We partner with founders on <strong className="text-accent font-bold">long-term management and strategy</strong>, helping them define direction, make high quality decisions, and scale with clarity."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#contact"
            className="group relative px-10 py-4 bg-accent text-white font-medium text-sm tracking-widest uppercase rounded-full overflow-hidden flex items-center gap-3 hover:bg-black transition-all shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)]"
          >
            <span className="relative z-10">Start the Conversation</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="px-10 py-4 text-accent border-2 border-accent/20 rounded-full hover:bg-accent hover:text-white transition-all text-sm tracking-widest uppercase font-bold"
          >
            View Our Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
