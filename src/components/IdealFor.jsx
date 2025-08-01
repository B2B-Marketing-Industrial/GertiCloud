// src/components/IdealFor.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// Importando os novos ícones
import { FaRocket, FaHeadset, FaLifeRing, FaShoppingCart } from 'react-icons/fa';

// Nova lista com os perfis de cliente e seus benefícios
const idealForList = [
  {
    icon: <FaRocket size={40} />,
    title: 'Startups de Software (SAAS)',
    text: 'Escale sua aplicação de forma inteligente. Com nossa infraestrutura flexível e suporte especializado, você pode crescer sem queimar seu caixa ou se preocupar com a infra.'
  },
  {
    icon: <FaHeadset size={40} />,
    title: 'Donos de PME',
    text: 'Sua empresa depende do site/sistema funcionando 24h. Quando algo der errado (e sempre dá), você quer falar com alguém que resolva, não com bot ou ticket que demora dias.'
  },
  {
    icon: <FaLifeRing size={40} />,
    title: 'Desenvolvedores em Empresas Pequenas',
    text: 'Você é o "cara da TI" mas não tem tempo de ser especialista em infraestrutura. Precisa de alguém para te dar suporte técnico de verdade quando travar.'
  },
  {
    icon: <FaShoppingCart size={40} />,
    title: 'Donos de E-commerce',
    text: 'Seu site não pode cair na Black Friday. Garantimos o desempenho e a segurança para você aguentar os picos de venda e nunca perder um cliente por instabilidade.'
  }
];

const IdealFor = () => {
  return (
    <section className="features-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Para Quem é a Gerti Cloud?</h2>
            {/* O subtítulo aqui pode ser removido ou simplificado, pois a copy dos cards já é bem explicativa */}
            <p className="lead text-muted">Soluções pensadas para quem vive a tecnologia no dia a dia e não tem tempo a perder.</p>
          </Col>
        </Row>
        <Row>
  {idealForList.map((item, index) => (
    // 1. Removemos as classes de alinhamento da Coluna
    <Col xs={12} md={6} lg={3} key={index} className="mb-4 d-flex">
      {/* 2. Adicionamos text-center ao card para centralizar o ÍCONE */}
      <div className="feature-card h-100 text-center">
        <div className="feature-icon mb-3">
          {item.icon}
        </div>
        {/* 3. Adicionamos text-start ao título e parágrafo para alinhar o TEXTO à esquerda */}
        <h4 className="text-start">{item.title}</h4>
        <p className="text-muted text-start">{item.text}</p>
      </div>
    </Col>
  ))}
</Row>
      </Container>
    </section>
  );
};

export default IdealFor;