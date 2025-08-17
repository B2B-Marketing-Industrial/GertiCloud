// src/App.jsx
import React, { useRef } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TargetAudience from './components/TargetAudience.jsx';
import WhyUs from './components/WhyUs.jsx';
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  // A CORREÇÃO ESTÁ AQUI: Adicionamos a criação da ref que faltava
  const ref_home = useRef(null);
  const ref_faq = useRef(null);
  const ref_ideal_for = useRef(null); 
  const ref_planos = useRef(null);

  return (
    <>
      <Header 
        ref_home={ref_home}
        ref_planos={ref_planos}
        ref_ideal_for={ref_ideal_for} // Agora esta variável existe
        ref_faq={ref_faq}
      />
      
      <section ref={ref_home}> <Hero /> </section>
      
      <main>
        <section ref={ref_ideal_for}>
        </section>
        <TargetAudience />
          <WhyUs />
        <section ref={ref_planos}> {/* <Pricing /> */} </section>
        <section ref={ref_faq}> <Faq /> </section>
      </main>
      
      <Footer />
    </>
  )
}

export default App;