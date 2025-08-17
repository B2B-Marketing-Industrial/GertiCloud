// src/components/Pricing.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Pricing = () => {
  return (
    <section className="pricing-section py-5 bg-light">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Planos Flexíveis para o Seu Negócio</h2>
            <p className="lead text-muted">Em breve, nossos planos dinâmicos estarão disponíveis aqui. Estamos finalizando a conexão com nosso sistema.</p>
          </Col>
        </Row>
        {/* Espaço reservado para os cards de preço que virão da API */}
      </Container>
    </section>
  );
};

export default Pricing;