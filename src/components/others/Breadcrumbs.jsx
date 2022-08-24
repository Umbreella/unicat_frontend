import React from 'react';
import {Breadcrumb, Col, Container, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const Breadcrumbs = () => {
    if (useLocation().pathname === "/")
        return null;

    return (
        <div className="home">
            <div className="breadcrumbs_container">
                <Container>
                    <Row>
                        <Col>
                            <Breadcrumb>
                                <Breadcrumb.Item href="/">
                                    Главная
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>
                                    О нас
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Breadcrumbs;