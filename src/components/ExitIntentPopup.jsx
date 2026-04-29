import { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

function ExitIntentPopup() {
    const [show, setShow] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e) => {

            if (e.clientY < 0 && !hasShown) {
                setShow(true);
                setHasShown(true);
            }
        };

        document.addEventListener("mouseleave", handleMouseLeave);
        return () => document.removeEventListener("mouseleave", handleMouseLeave);
    }, [hasShown]);

    return (
        <Modal show={show} onHide={() => setShow(false)} centered>
            <Modal.Header closeButton className="border-0 p-4 d-flex justify-content-center">
                <Modal.Title className="fw-bold">Não gostou do nosso preço?</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-start p-4 pt-0">
                <p className="lead">Espere um pouco!</p>
                <Button variant="primary" size="lg" className="w-100 mt-3 fw-bold" href="https://wa.me/551139959564?text=Oi! Estava saindo do site e decido pedir meu desconto." target="_blank">Clique aqui e peça seu desconto</Button>
            </Modal.Body>
        </Modal>
    );
}

export default ExitIntentPopup;