import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FinalCTA({ ref_cta, onCTAClick }) {
  return (
    <section ref={ref_cta} className="final-cta">
      <div className="container">
        <div className="cta-card">
          <span className="cta-eyebrow">Consultoria gratuita</span>

          <h2 className="cta-title">
            Pare de lutar com sua infraestrutura.<br />
            Foque em crescer.
          </h2>

          <p className="cta-subtitle">
            Vamos te mostrar como uma parceria com a Gerti Cloud pode otimizar seus custos,
            aumentar sua produtividade e te dar a tranquilidade que você precisa para inovar.
          </p>

          <button type="button" className="btn btn-gerti-green cta-btn" onClick={onCTAClick}>
            Agende sua consultoria gratuita de 15 minutos
          </button>

          <p className="cta-footnote">
            Sem pressão, sem discurso de vendas. Vamos apenas analisar sua necessidade e
            mostrar como podemos ajudar.
          </p>
        </div>
      </div>
    </section>
  );
}
