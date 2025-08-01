// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/hero-image.jpg'; 
import { Container, Row, Col, Button, Image as BootstrapImage } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero-section text-center">
      {/* A imagem agora serve como fundo, controlada pelo CSS */}
      <BootstrapImage src={heroImage} className="hero-background-image" alt="Fundo abstrato de nuvem tecnológica" />
      {/* A camada de gradiente por cima da imagem */}
      <div className="hero-overlay"></div>

      {/* O conteúdo de texto que fica na frente de tudo */}
      <Container className="hero-content h-100">
        <Row className="align-items-center justify-content-center h-100">
          <Col md={10} lg={8}>
            <h1 className="hero-title">Resolva em Minutos, não em Tickets.</h1>
            <p className="hero-subtitle">
              A nuvem de alta performance e segurança com o suporte em português que seu negócio realmente precisa. Rápido, sem pressão e em português.
              Agende 15 minutos e descubra o plano ideal para você.
            </p>
            <Button 
            href="https://api.whatsapp.com/send/?phone=551139959564&text&type=phone_number&app_absent=0" 
            className="btn-gerti-green"
            target="_blank" // Para abrir em uma nova aba
            rel="noopener noreferrer" // Boas práticas de segurança
          >
           Fale com um Especialista
          </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;