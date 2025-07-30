import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHdd, FaNetworkWired, FaUserShield, FaUndo } from 'react-icons/fa';


const servicesList = [
  {
    icon: <FaHdd size={40} />,
    title: 'Cloud Storage',
    text: 'Armazenamento de dados seguro, escalável e de alta disponibilidade.'
  },
  {
    icon: <FaNetworkWired size={40} />,
    title: 'Cloud Migration',
    text: 'Migre sua infraestrutura para a nuvem sem interrupções e com planejamento especialista.'
  },
  {
    icon: <FaUserShield size={40} />,
    title: 'Cloud Security',
    text: 'Soluções de segurança robustas para proteger seus ambientes na nuvem contra ameaças.'
  },
  {
    icon: <FaUndo size={40} />,
    title: 'Backup & Recovery',
    text: 'Garanta a continuidade do negócio com rotinas de backup e recuperação rápida de desastres.'
  }
];

const Services = () => {
  return (
    <section className="services-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Nossos serviços de Cloud</h2>
            <p className="lead text-muted">Explore nossa gama completa de serviços, do armazenamento seguro à integração perfeita, pensados para ajudar sua empresa a crescer.</p>
          </Col>
        </Row>
        <Row>
          {servicesList.map((service, index) => (
            <Col md={6} key={index} className="d-flex align-items-stretch mb-4">
              <Card className="service-card-horizontal w-100">
                <Card.Body className="d-flex align-items-center">
                  
                  {/* CAIXA 1: Apenas o ícone, para separá-lo do texto */}
                  <div className="service-icon-wrapper me-4">
                    {service.icon}
                  </div>
                  
                  {/* CAIXA 2: O conteúdo de texto agrupado */}
                  <div>
                    <Card.Title as="h5">{service.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {service.text}
                    </Card.Text>
                  </div>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;