// src/App.jsx

import React, { useRef } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Services from './components/Services.jsx';
import WhyUs from './components/WhyUs.jsx';
import TargetAudience from './components/TargetAudience.jsx';
//import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  const ref_home = useRef(null); // 1. Crie a ref para o topo (Hero)
  const ref_faq = useRef(null);
  const ref_diferenciais = useRef(null);
  const ref_planos = useRef(null);

  return (
    <>
      {/* 2. Passe a nova ref para o Header */}
      <Header 
        ref_home={ref_home}
        ref_planos={ref_planos}
        ref_diferenciais={ref_diferenciais}
        ref_faq={ref_faq}
      />
      
      {/* 3. Anexe a ref à seção Hero */}
      <section ref={ref_home}>
        <Hero />
      </section>
      
      <main>
        <section ref={ref_diferenciais}>
          <Features />
        </section>
        
        {/* ... outras seções ... */}

        <section ref={ref_planos}>
          {/* <Pricing /> */}
        </section>
        
        <section ref={ref_faq}>
          <Faq />
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default App;