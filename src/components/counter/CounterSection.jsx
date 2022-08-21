import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FeedBackForm from "../forms/FeedBackForm";

const CounterSection = () => {
    return (
        <div className="counter">
            <div className="counter_background" />
            <Container style={{minHeight: 490}}>
                <Row>
                    <Col className="col-lg-6">
                        <div className="counter_content">
                            <h2 className="counter_title">Начните обучение сегодня</h2>
                            <div className="counter_text"><p>Simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry’s standard dumy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <div className="counter_form">
                    <div className="row fill_height">
                        <div className="col fill_height">
                            <FeedBackForm />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CounterSection;