import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {COURSES_ROUTE, HOME_ROUTE} from "../../utils/consts";

const NotFound = () => {
    return (
        <div className="d-flex align-items-center"
             style={{background: "#f6f6f6", minHeight: "100vh"}}>
            <Container>
                <Row>
                    <Col className="text-center pt-5 pb-5 ps-3 pe-3"
                         style={{background: "white"}}>
                        <div>
                            <h1 style={{fontSize: 165}}>
                                4
                                <span style={{color: "#00b7ff"}}>0</span>
                                4
                            </h1>
                        </div>
                        <p style={{fontSize: 18}}>
                            Запрошенная вами страница не может быть найдена
                        </p>
                        <div className="courses_button trans_200">
                            <NavLink to={HOME_ROUTE}>
                                Вернуться на главную
                            </NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NotFound;