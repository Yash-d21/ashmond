
import React from 'react';
import { CLIENT_LOGOS } from '../constants';

const ClientTicker: React.FC = () => {
  return (
    <div className="w-full py-12 bg-white border-y border-black/10 overflow-hidden relative">
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-white via-transparent to-white" />
      
      <div className="flex animate-scroll whitespace-nowrap hover:pause">
        {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, index) => (
          <div 
            key={`${client}-${index}`} 
            className="inline-flex items-center justify-center mx-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
          >
            <span className="text-xl md:text-2xl font-serif font-black text-accent tracking-wide">
              {client}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientTicker;
