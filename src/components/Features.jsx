import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCloudUploadAlt, FaShieldAlt, FaRocket, FaHandHoldingUsd } from 'react-icons/fa';

// Lista de diferenciais para renderizar
const featuresList = [
  {
    icon: <FaCloudUploadAlt size={40} />,
    title: 'Escalabilidade Descomplicada',
    text: 'Ajuste seus recursos conforme a demanda, com total flexibilidade e sem interrupções.'
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: 'Segurança à Prova de Falhas',
    text: 'Proteção robusta e monitoramento constante para garantir a integridade dos seus dados.'
  },
  {
    icon: <FaRocket size={40} />,
    title: 'Performance Acelerada',
    text: 'Infraestrutura de ponta para garantir a máxima velocidade e disponibilidade para suas aplicações.'
  },
  {
    icon: <FaHandHoldingUsd size={40} />,
    title: 'Economia que Cresce com Você',
    text: 'Reduza custos operacionais com soluções que acompanham o crescimento do seu negócio.'
  }
];

const Features = () => {
  return (
    <section className="features-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Cloud para o Seu Negócio Crescer</h2>
            <p className="lead text-muted">Reduza custos operacionais com soluções que acompanham o crescimento do seu negócio.</p>
          </Col>
        </Row>
        <Row>
  {featuresList.map((feature, index) => (
    <Col xs={12} md={6} lg={3} key={index} className="mb-4 text-center text-md-start">
      {/* div com a nova classe aqui */}
      <div className="feature-card h-100">
        <div className="feature-icon mb-3">
          {feature.icon}
        </div>
        <h4>{feature.title}</h4>
        <p className="text-muted">{feature.text}</p>
      </div>
    </Col>
  ))}
</Row>
      </Container>
    </section>
  );
};

export default Features;