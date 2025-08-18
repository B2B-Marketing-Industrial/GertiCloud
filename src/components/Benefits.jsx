// src/components/Benefits.jsx
import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaWhatsapp, FaWallet, FaMousePointer, FaShieldVirus, FaCheckCircle } from 'react-icons/fa';

const benefitsList = [
  { 
    icon: <FaWhatsapp size={24} />, 
    title: 'Suporte que Funciona de Verdade', 
    items: [
      'Especialista brasileiro responde em menos de 5 minutos',
      'Sem bot, sem IA, sem ticket perdido',
      'WhatsApp direto com o time técnico'
    ] 
  },
  { 
    icon: <FaWallet size={24} />, 
    title: 'Preço Justo, Sem Pegadinha', 
    items: [
      'Pague um valor fixo por mês em reais',
      'Sem cobrança de NAT, sem taxa de setup',
      'Sem "susto na fatura" no final do mês'
    ] 
  },
  { 
    icon: <FaMousePointer size={24} />, 
    title: 'Simples de Usar', 
    items: [
      'Interface pensada para quem não é especialista em DevOps',
      'Documentação em português claro',
      'Tutoriais práticos, não manuais técnicos'
    ] 
  },
  { 
    icon: <FaShieldVirus size={24} />, 
    title: 'Segurança Sem Complicação', 
    items: [
      'Proteção anti-DDoS incluída',
      'Backup automático configurado para você',
      'Monitoramento 24h com alerta no seu WhatsApp'
    ] 
  }
];

const Benefits = () => {
  return (
    // A classe 'bg-light' foi removida daqui
    <section className="benefits-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">O Que Você Ganha na Gerti Cloud ?</h2>
          </Col>
        </Row>
        <Row>
          {benefitsList.map((benefit, index) => (
            <Col lg={6} key={index} className="mb-4 d-flex align-items-stretch">
              <Card className="w-100 shadow-sm benefit-card">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div className="benefit-icon me-3">{benefit.icon}</div>
                    <Card.Title as="h4" className="mb-0">{benefit.title}</Card.Title>
                  </div>
                  <ListGroup variant="flush">
                    {benefit.items.map((item, i) => (
                      <ListGroup.Item key={i} className="d-flex bg-transparent border-0 px-0">
                        <FaCheckCircle className="text-success me-2 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Benefits;