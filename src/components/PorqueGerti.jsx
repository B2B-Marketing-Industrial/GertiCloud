import { Button, Card } from "react-bootstrap";
import { ArrowRight, CheckCircleFill } from "react-bootstrap-icons";
import CardGerti from "./CardGerti";

function PorqueGerti() {

    const phoneNumber = "551139959564";
    const message = "Olá! Vi o site da GERTI Cloud e gostaria de saber mais sobre o suporte humano e a migração assistida.";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <section className="py-5 bg-white" id={"sobre"}>
            <div className="container my-5" >
                <div className="row align-items-center g-5">
                    <div className="col-lg-5 d-flex justify-content-lg-end justify-content-center align-items-center ">
                        <CardGerti />
                    </div>
                    <div className="col-lg-7 text-center text-lg-start order-last order-lg-first">
                        <h6 className="text-primary fw-bold text-uppercase mb-3">Por que a GERTI Cloud existe?</h6>
                        <h2 className="display-6 fw-bold mb-4">Infraestrutura robusta com o <span className="text-primary">suporte humano</span> que você merece</h2>
                        <p className="lead text-muted mb-4">Durante anos, o mercado de Cloud forçou uma escolha injusta. A GERTI nasceu para ser o fim desse dilema.</p>
                        <p className="mb-4">Operando nos melhores datacenters do Brasil, unimos o poder corporativo com a proximidade de um time que te conhece pelo nome.</p>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <Button className="d-flex align-items-center justify-content-center gap-2 px-4 py-2 rounded-3" href={whatsappLink} target="_blank">Quero ir para a GERTI <ArrowRight /></Button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default PorqueGerti;