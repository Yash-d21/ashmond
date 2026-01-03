
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientTicker from './components/ClientTicker';
import Services from './components/Services';
import Founders from './components/Founders';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorSpotlight from './components/CursorSpotlight';

function App() {
  return (
    <div className="bg-background min-h-screen text-accent relative selection:bg-accent selection:text-gold-light">
      <div className="bg-noise"></div>
      
      {/* Global Cursor Effect */}
      <CursorSpotlight />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <ClientTicker />
        <Services />
        <Portfolio />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
