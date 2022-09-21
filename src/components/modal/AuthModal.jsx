import React from 'react';
import { Modal } from "react-bootstrap";
import AuthForm from "../forms/AuthForm";

const AuthModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            fullscreen="sm-down"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <div className="navbar-brand w-100 text-center p-lg-4">
                    Unic<span>at</span>
                </div>
            </Modal.Header>
            <Modal.Body >
                <AuthForm />
            </Modal.Body>
        </Modal>
    );
};

export default AuthModal;