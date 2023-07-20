import React from 'react';
import TechnicalRouter from "../../components/routes/TechnicalRouter";
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";

const IndexTechnical = () => {
    return (
        <Container>
            <Row className="vh-100">
                <Col className="col-lg-6 col-md-8 m-auto">
                    <div className="navbar-brand w-100 text-center mb-4">
                        <NavLink to={HOME_ROUTE}>
                            Unic<span>at</span>
                        </NavLink>
                    </div>
                    <TechnicalRouter/>
                </Col>
            </Row>
        </Container>
    );
};

export default IndexTechnical;