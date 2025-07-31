import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import techProfessionalImage from '../assets/tech-professional.png';

// Lista de perfis para quem o serviço é indicado
const audienceList = [
  { 
    title: 'Profissionais de TI e Admins de Sistemas', 
    text: 'Para consolidar servidores e otimizar a gestão da sua infraestrutura com total flexibilidade.' 
  },
  { 
    title: 'Desenvolvedores de Software', 
    text: 'Para criar, testar e implantar aplicações em ambientes isolados, seguros e escaláveis.' 
  },
  { 
    title: 'Empresas e Organizações', 
    text: 'Para hospedar sistemas críticos com alta performance e garantir a continuidade do negócio.' 
  },
  { 
    title: 'Provedores de Serviços em Nuvem', 
    text: 'Para fornecer seus próprios serviços (SaaS, IaaS) com uma base de infraestrutura robusta e confiável.' 
  }
];


const TargetAudience = () => {
  return (
    <section className="audience-section py-5">
      <Container>
        <Row className="align-items-center">
          {/* Coluna da Imagem */}
          <Col lg={5} className="mb-4 mb-lg-0 text-center">
            <Image src={techProfessionalImage} className="audience-image" />
          </Col>
          
          {/* As classes de alinhamento agora estão na Coluna pai, aplicando a todos os filhos */}
          <Col lg={7} className="text-center text-lg-start"> 
            <div className="ps-lg-5">
              
              {/* As classes de alinhamento foram REMOVIDAS daqui... */}
              <h2 className="section-title">A Solução Ideal para Empresas Inovadoras</h2>
              
              {/* ...e daqui, mas o texto continua o mesmo. */}
              <p className="lead text-muted mb-4">Nossa plataforma foi desenhada para atender às necessidades específicas de quem vive a tecnologia no dia a dia.</p>
              
              <ul className="list-unstyled">
                {audienceList.map((item, index) => (
                  <li key={index} className="d-flex mb-3 align-items-start audience-list-item">
                    <FaCheckCircle className="audience-checkmark me-3" size={22} />
                    {/* Adicionamos text-start aqui para alinhar o texto com o checkmark */}
                    <span className="text-muted text-start">{item.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default TargetAudience;