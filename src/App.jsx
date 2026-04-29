// src/App.jsx
import React, { useRef } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TargetAudience from './components/TargetAudience.jsx';
import Benefits from './components/Benefits.jsx';
import SupportProcess from './components/SupportProcess.jsx';
import Pricing from './components/Pricing.jsx';
import TrustSection from './components/TrustSection.jsx';
import FinalCTA from "./components/FinalCTA.jsx";
import Faq from './components/Faq.jsx';
import Footer from './components/Footer.jsx';
import './App.css';
import PorqueGerti from './components/PorqueGerti.jsx';

function App() {
  const ref_home = useRef(null);
  const ref_faq = useRef(null);
  const ref_ideal_for = useRef(null);
  const ref_benefits = useRef(null);
  const ref_planos = useRef(null);
  const ref_cta = useRef(null);
  const ref_porque_gerti = useRef(null);

  // WhatsApp com mensagem pré-preenchida
  const msg = encodeURIComponent('Olá! Quero agendar a consultoria gratuita de 15 minutos.');
  const CTA_URL = `https://api.whatsapp.com/send?phone=551139959564&text=${msg}`;

  const handleCTAClick = () => {
    if (window.gtag) window.gtag('event', 'cta_click', { location: 'final_cta' });
    window.open(CTA_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Header
        ref_home={ref_home}
        ref_planos={ref_planos}
        ref_ideal_for={ref_ideal_for}
        ref_benefits={ref_benefits}
        ref_faq={ref_faq}
      />

      <section ref={ref_home}><Hero /></section>

      <main>
        <section ref={ref_ideal_for}></section>
        <TargetAudience />

        <section ref={ref_porque_gerti}></section>
        <PorqueGerti />

        <section ref={ref_benefits}>
          <Benefits />
        </section>

        <SupportProcess />

        <section ref={ref_planos}>
          <Pricing />
        </section>

        <TrustSection />

        {/* CTA final com o botão que abre o WhatsApp com a mensagem */}
        <FinalCTA ref_cta={ref_cta} onCTAClick={handleCTAClick} />

        {/* (se esse bloco abaixo está vazio, pode remover) */}
        <section ref={ref_planos}>{/* <Pricing /> */}</section>

        <section ref={ref_faq}><Faq /></section>
      </main>

      <Footer />
    </>
  );
}

export default App;
