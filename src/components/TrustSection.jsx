import React from "react";
import { Container, Accordion } from "react-bootstrap";
import { FaRoute, FaPiggyBank, FaLock } from "react-icons/fa";
import employeePhoto from "@/assets/funcionario-gerti.png";

const objections = [
  {
    eventKey: "0",
    icon: <FaRoute />,
    title: "“A migração parece complicada…”",
    text: (
      <>
        Nós sabemos. Nossa equipe <strong>guia e acompanha</strong> a migração,
      garantindo <strong>transição segura</strong>, <strong>sem interrupções</strong> para seu
      cliente; se necessário, executamos o projeto com mão de obra especializada.
      </>
    ),
  },
  {
    eventKey: "1",
    icon: <FaPiggyBank />,
    title: "“Será que é realmente mais barato?”",
    text: (
      <>
        Sim. Além de economizar <strong>até 40%</strong> em relação aos gigantes
        internacionais, você economiza com a <strong>previsibilidade do câmbio</strong> e com o{" "}
        <strong>tempo da sua equipe</strong>, que passa a focar no que realmente importa.
      </>
    ),
  },
  {
    eventKey: "2",
    icon: <FaLock />,
    title: "“Meus dados estarão seguros?”",
    text: (
      <>
        Absolutamente. A segurança é nossa obsessão. Implementamos{" "}
        <strong>medidas avançadas de proteção, testes rigorosos</strong> e nossa infratestrutura de Data Center é certificada <strong> 
        Tier III Design, Tier III Facility,PCI DSS Compliant Type II SOC</strong> para
        garantir que seus dados estejam sempre seguros e sua operação protegida.
      </>
    ),
  },
];

export default function TrustSection({ ref_confiança }) {
  return (
    <section className="trust-section py-5 bg-light" ref={ref_confiança} aria-labelledby="trust-heading">
      <Container>
        <div className="trust-grid">
          {/* Área de texto (desktop: coluna esquerda, topo) */}
        <div className="trust-area-text text-center text-md-start">
            <h2 id="trust-heading" className="section-title fw-bold mb-2">
              Nossa promessa é ser seu parceiro, não apenas mais um boleto para pagar.
            </h2>
            <p className="lead text-muted mb-0">
              Sabemos que mudar de provedor gera dúvidas.
              Veja nosso compromisso com você:
            </p>
          </div>

          {/* Foto (desktop: coluna direita, ocupando toda a altura) */}
          <div className="trust-area-photo text-center">
            <img
              src={employeePhoto}
              alt="Especialista de suporte da GERTI Cloud — atendimento humano em português"
              className="trust-portrait shadow-sm"
              loading="lazy"
            />
          </div>

          {/* Acordeão (desktop: esquerda, abaixo do texto) */}
          <div className="trust-area-accordion">
            <Accordion defaultActiveKey="0" className="trust-accordion mt-3 mt-lg-4">
              {objections.map((item) => (
                <Accordion.Item eventKey={item.eventKey} key={item.eventKey}>
                  <Accordion.Header>
                    <span className="accordion-icon me-3 d-inline-flex align-items-center">
                      {item.icon}
                    </span>
                    <span className="fw-semibold">{item.title}</span>
                  </Accordion.Header>
                  <Accordion.Body>{item.text}</Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
