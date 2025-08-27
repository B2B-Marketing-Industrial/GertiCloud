// src/components/Faq.jsx
import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
// use "@/..." só se seu alias estiver configurado em vite/jsconfig/tsconfig
import cloudFaq from "../assets/cloud-faq.svg"; 

const faqs = [
  {
    q: 'O que significa "suporte em 5 minutos" na prática?',
    a: 'Significa que ao acionar nosso canal de suporte prioritário (chat ou telefone), um especialista técnico real, que fala português, irá iniciar o atendimento com você em menos de 5 minutos. Nada de longas filas de espera ou robôs.'
  },
  {
    q: 'Como a Gerti consegue ser até 40% mais barata que a AWS ou Google?',
    a: 'Nossa estrutura é otimizada para o mercado brasileiro. Não temos os mesmos custos operacionais globais e não repassamos a variação do dólar para você. O resultado é um preço final mais justo e previsível, sem sacrificar a qualidade.'
  },
  {
    q: 'Não tenho uma equipe de DevOps. A Gerti Cloud é para mim?',
    a: 'Sim, com certeza. Nossa plataforma foi desenhada para ser intuitiva. E para tudo aquilo que você não souber ou não quiser fazer, nosso time de suporte atua como uma extensão da sua equipe, te ajudando a configurar e gerenciar sua infraestrutura.'
  },
  {
    q: 'Como funciona a migração na prática?',
    a: 'Primeiro, fazemos uma análise gratuita da sua estrutura atual. Depois, montamos um plano de migração detalhado. Por fim, nossa equipe acompanha ou executa a migração em conjunto com você, em um horário agendado para minimizar qualquer impacto na sua operação.'
  },
  {
    q: 'O que acontece se meu negócio crescer muito rápido?',
    a: 'Isso é ótimo! Nossa infraestrutura é feita para escalar. Você pode aumentar seus recursos com poucos cliques ou através da nossa API. E o mais importante: nosso time te ajudará a planejar esse crescimento de forma inteligente e com custos controlados.'
  },
];

export default function Faq({ ref_faq }) {
  return (
    <section className="faq-opt py-5" ref={ref_faq}>
      <Container>
        <Row className="align-items-center g-4 g-lg-5">
          {/* Ilustração à esquerda (no mobile vem primeiro) */}
          <Col lg={5} className="order-1 order-lg-0">
            <figure className="faq-illu-card">
              <img
                src={cloudFaq}
                alt="Ilustração de cloud e suporte humano — FAQ Gerti Cloud"
                className="faq-illu-img"
                width="560"
                height="420"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </Col>

          {/* Texto + acordeão à direita */}
          <Col lg={7}>
            <span className="faq-eyebrow">FAQ</span>
            <h2 className="faq-title">Perguntas que realmente importam</h2>
            <p className="faq-subtitle">
              Se não encontrar sua resposta, fale com a gente e resolvemos em minutos.
            </p>

            <Accordion defaultActiveKey="0" className="faq-accordion">
              {faqs.map((item, i) => (
                <Accordion.Item eventKey={String(i)} key={i}>
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
}
