// src/components/Faq.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Accordion, ListGroup } from 'react-bootstrap';

// Conteúdo oficial do documento, agora organizado em categorias
const faqData = [
  { 
    category: 'Geral', 
    q: 'O que é computação em nuvem?', 
    a: 'Computação em nuvem é a entrega de serviços de computação, como servidores, armazenamento, bancos de dados e software, pela internet. Isso permite acesso flexível a recursos de TI sem a necessidade de infraestrutura física própria.' //
  },
  { 
    category: 'Geral', 
    q: 'Quais os benefícios de utilizar serviços de nuvem?', 
    a: 'Os principais benefícios incluem escalabilidade para ajustar recursos conforme a demanda, economia de custos com hardware e manutenção, acessibilidade de qualquer lugar e segurança avançada.' //
  },
  { 
    category: 'Recursos', 
    q: 'É possível personalizar os recursos para meu negócio?', 
    a: 'Sim, os serviços de nuvem oferecem total flexibilidade para personalizar recursos como capacidade de processamento, armazenamento e largura de banda, adaptando as soluções às necessidades específicas da sua empresa.' //
  },
  { 
    category: 'Recursos', 
    q: 'Posso integrar serviços de nuvem com minha infraestrutura existente?', 
    a: 'Sim, é possível criar uma arquitetura híbrida que combine recursos de nuvem com sua infraestrutura local, permitindo uma integração que atenda às suas necessidades.' //
  },
  { 
    category: 'Segurança', 
    q: 'Como a segurança dos meus dados é garantida?', 
    a: 'Implementamos medidas robustas de segurança, incluindo criptografia de dados, firewalls, controles de acesso rigorosos e monitoramento contínuo para proteger as informações armazenadas.' //
  },
  { 
    category: 'Segurança', 
    q: 'O que acontece com meus dados se houver uma falha?', 
    a: 'Provedores de nuvem implementam redundância e backups regulares para garantir a disponibilidade e integridade dos dados, mesmo em caso de falhas de hardware ou outros incidentes.' //
  },
  { 
    category: 'Faturamento', 
    q: 'Como funciona a cobrança pelos serviços?', 
    a: 'A maioria dos provedores adota um modelo de pagamento conforme o uso, onde você paga apenas pelos recursos consumidos. Na GERTI, focamos em planos com previsibilidade e faturamento em Reais para que você não tenha surpresas.' //
  },
  { 
    category: 'Migração', 
    q: 'Como é o processo de migração para a nuvem?', 
    a: 'A migração envolve a transferência de dados e aplicações para a infraestrutura de nuvem. Recomendamos um planejamento detalhado e oferecemos suporte de especialistas para assegurar uma transição suave e sem interrupções.' //
  }
];

function Faq(props) {
  const [activeCategory, setActiveCategory] = useState('Geral');
  const categories = [...new Set(faqData.map(item => item.category))];
  const filteredFaq = faqData.filter(item => item.category === activeCategory);

  return (
    <section className="faq-section py-5" ref={props.ref_faq}>
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Ainda com dúvidas?</h2>
            <p className="lead text-muted">Confira as perguntas mais comuns que separamos para você.</p>
          </Col>
        </Row>
        <Row>
          <Col md={4} lg={3} className="mb-4 mb-md-0">
            <ListGroup>
              {categories.map(category => (
                <ListGroup.Item 
                  key={category} 
                  action 
                  active={activeCategory === category}
                  onClick={() => setActiveCategory(category)}
                  className="fw-bold"
                >
                  {category}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={8} lg={9}>
            <Accordion defaultActiveKey="0">
              {filteredFaq.map((item, index) => (
                  <Accordion.Item eventKey={index.toString()} key={index}>
                    <Accordion.Header>{item.q}</Accordion.Header>
                    <Accordion.Body>{item.a}</Accordion.Body>
                  </Accordion.Item>
              ))}
            </Accordion>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faq;