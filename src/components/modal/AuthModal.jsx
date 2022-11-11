import React, {useState} from 'react';
import {Modal, Tab, Tabs} from "react-bootstrap";
import AuthForm from "../forms/AuthForm";
import RegForm from "../forms/RegForm";

const AuthModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            fullscreen="sm-down"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <div className="navbar-brand w-100 text-center p-lg-4">
                    Unic<span>at</span>
                </div>
            </Modal.Header>
            <Modal.Body>
                <div className="tabs_auth_container">
                    <Tabs
                        defaultActiveKey="authForm"
                        fill={true}
                    >
                        <Tab eventKey="authForm" title="Вход">
                            <AuthForm />
                        </Tab>
                        <Tab eventKey="regForm" title="Регистрация">
                            <RegForm />
                        </Tab>
                    </Tabs>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default AuthModal;