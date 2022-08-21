import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const NewsLetter = () => {
    return (
        <Container fluid className="newsletter">
            <div className="newsletter_background parallax-window" />
            <Container>
                <Row>
                    <Col>
                        <div
                            className="newsletter_container d-flex flex-lg-row flex-column align-items-center justify-content-start">

                            <div className="newsletter_content text-lg-left text-center">
                                <div className="newsletter_title">подпишитесь на наши новости</div>
                            </div>

                            <div className="newsletter_form_container ms-auto">
                                <Form className="newsletter_form d-flex flex-row align-items-center
                                    justify-content-center">
                                    <Form.Control className="newsletter_input"
                                                  type="email" placeholder="Введите email"
                                                  required />
                                    <Button className="newsletter_button"
                                            type="submit" variant="light">
                                        Подписаться
                                    </Button>
                                </Form>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default NewsLetter;