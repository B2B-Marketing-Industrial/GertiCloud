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

    const ref_faq = useRef(null);
    const ref_diferenciais = useRef(null);
    const ref_planos = useRef(null);

  return (
    <>
      <Header ref_faq={ref_faq} ref_diferenciais={ref_diferenciais} ref_planos={ref_planos} />
      <Hero />
       <main>
        <Features />
        <Services />
         <WhyUs ref_diferenciais={ref_diferenciais} />
         <TargetAudience />
         {/* <Pricing /> */}
           <Faq ref_faq={ref_faq} />
       </main>
       <Footer />
     </>
  )
}

export default App;