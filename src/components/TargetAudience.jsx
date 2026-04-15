import { Container, Row, Col } from 'react-bootstrap';
import { cardAudienceValues } from '../hooks/cardAudienceInfo';
import CardAudience from './CardAudience';

const TargetAudience = () => {
  return (
    <section className="features-section py-5">
      <Container>
        <Row className="text-center mb-5">
          <Col>
            <h2 className="section-title">Escolha o Combo de Cloud Pensado para o Seu Negócio</h2>
            <p className="lead text-muted">Soluções pensadas para quem vive a tecnologia no dia a dia e não tem tempo a perder. Identifique o seu perfil abaixo, confira a configuração recomendada e chame nosso time técnico no WhatsApp para fazermos o setup por você. Preço em Reais e suporte humano de verdade.</p>
          </Col>
        </Row>
        <Row className="g-4">
          {cardAudienceValues.map((info, i) => (
            <Col key={i} xs={12} md={6} lg={6} xl={3} className="d-flex">
              <CardAudience item={info} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TargetAudience; 