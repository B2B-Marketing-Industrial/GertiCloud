// src/App.jsx

import React from 'react';
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
  return (
    <>
      <Header />
      <Hero />
       <main>
        <Features />
        <Services />
         <WhyUs />
         <TargetAudience />
         {/* <Pricing /> */}
           <Faq />
       </main>
       <Footer />
     </>
  )
}

export default App;