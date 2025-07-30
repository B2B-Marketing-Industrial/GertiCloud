import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import { FaDollarSign, FaHeadset, FaShieldAlt, FaHandshake } from 'react-icons/fa';

const whyUsList = [
  {
    eventKey: '0',
    icon: <FaDollarSign />,
    title: 'Previsibilidade de Custos, em Reais',
    text: 'Diga adeus à variação do dólar e às taxas ocultas de transferência.Conosco, sua fatura é previsível, em Reais, permitindo que você planeje seu crescimento com total tranquilidade financeira.'
  },
  {
    eventKey: '1',
    icon: <FaHeadset />,
    title: 'Suporte Humano e Especialista',
    text: 'Chega de tickets sem resposta e suporte robotizado. Fale diretamente com especialistas em nuvem, em português, prontos para resolver seus desafios e atuar como uma extensão da sua equipe.'
  },
  {
    eventKey: '2',
    icon: <FaShieldAlt />,
    title: 'Desempenho e Segurança Confiáveis',
    text: 'Quebre o paradigma da instabilidade. Nossa infraestrutura no Brasil garante baixa latência e performance superior, com segurança robusta e conformidade com a LGPD para você dormir tranquilo.'
  },
  {
    eventKey: '3',
    icon: <FaHandshake />,
    title: 'Parceria Estratégica Real',
    text: 'Não somos apenas um provedor, somos seu parceiro de tecnologia. Ajudamos você a tomar as melhores decisões, otimizar sua infraestrutura e usar a nuvem como uma alavanca para o sucesso do seu negócio.'
  }
];

const WhyUs = () => {
  return (
    <section className="why-us-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Coluna do Título */}
          <Col lg={5} className="mb-4 mb-lg-0 text-center text-lg-start">
            <h2 className="section-title">A Alternativa Inteligente aos Gigantes da Nuvem</h2>
            <p className="lead text-muted">Combinamos a tecnologia que você precisa com a parceria que sua empresa merece.</p>
          </Col>

          {/* Coluna do Accordion */}
          <Col lg={7}>
            <Accordion defaultActiveKey="0" className="why-us-accordion">
              {whyUsList.map((item) => (
                <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                  <Accordion.Header>
                    <span className="accordion-icon me-3">{item.icon}</span>
                    {item.title}
                  </Accordion.Header>
                  <Accordion.Body>
                    {item.text}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;