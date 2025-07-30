// src/components/Hero.jsx
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
    return (
    // Nossa classe de estilo personalizada para o fundo e alinhamento
    <section className="hero-section text-center text-white">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {/* Título principal da página */}
            <h1 className="hero-title">Desempenho Máximo e Segurança Inabalável para Seu Negócio</h1>

            {/* Subtítulo com os detalhes  */}
            <p className="hero-subtitle">
              Servidores Cloud com link de alta velocidade, 20 TB de Transferência e Proteção Anti-DDoS de 10 Gbps inclusa.
            </p>

            {/* Botão de Chamada para Ação (CTA) */}
            <Button href="#planos" size="lg" className="btn-gerti-green">
              Experimente Agora Sem Compromisso
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
