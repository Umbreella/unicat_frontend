import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import NewsLetterForm from "../forms/NewsLetterForm";

const NewsLetterSection = () => {
    return (
        <Container fluid className="newsletter">
            <div className="newsletter_background parallax-window" />
            <Container>
                <Row>
                    <Col>
                        <div
                            className="newsletter_container d-flex flex-lg-row
                                flex-column align-items-center
                                justify-content-start">

                            <div className="newsletter_content text-lg-left
                                text-center">
                                <div className="newsletter_title">
                                    подпишитесь на наши новости
                                </div>
                            </div>
                            <div className="newsletter_form_container ms-auto">
                                <NewsLetterForm />
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default NewsLetterSection;