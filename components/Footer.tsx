
import React from 'react';

const Footer: React.FC = () => {
  const logoUrl = "./4-removebg-preview.png";

  return (
    <footer className="py-24 bg-background border-t border-gold-light/10">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <div className="mb-12">
          <img src={logoUrl} alt="Ashmond & Co." className="h-[22px] md:h-[28px] mx-auto opacity-70 hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="flex flex-wrap justify-center gap-10 md:gap-16 mb-12">
          <a href="https://www.linkedin.com/company/ashmond/about/" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-[10px] font-black uppercase tracking-widest hover:text-gold-light transition-colors">LinkedIn</a>
          <a href="https://www.tarsnetworks.tech/" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-[10px] font-black uppercase tracking-widest hover:text-gold-light transition-colors">TARS Networks</a>
        </div>

        <div className="pt-12 border-t border-black/5 w-full max-w-5xl">
          <p className="text-accent/40 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Ashmond & Co. Strategic Management & Operating Consulting.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
