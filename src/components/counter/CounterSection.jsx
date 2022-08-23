import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FeedBackForm from "../forms/FeedBackForm";

const CounterSection = () => {
    return (
        <div className="counter">
            <div className="counter_background" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="counter_content">
                            <h2 className="counter_title">Register Now</h2>
                            <div className="counter_text"><p>Simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry’s standard dumy text ever since the 1500s, when an
                                unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>

                            <div
                                className="milestones d-flex flex-md-row flex-column align-items-center justify-content-between">

                                <div className="milestone">
                                    <div className="milestone_counter" data-end-value="15">0</div>
                                    <div className="milestone_text">years</div>
                                </div>

                                <div className="milestone">
                                    <div className="milestone_counter" data-end-value="120" data-sign-after="k">0</div>
                                    <div className="milestone_text">years</div>
                                </div>

                                <div className="milestone">
                                    <div className="milestone_counter" data-end-value="670" data-sign-after="+">0</div>
                                    <div className="milestone_text">years</div>
                                </div>

                                <div className="milestone">
                                    <div className="milestone_counter" data-end-value="320">0</div>
                                    <div className="milestone_text">years</div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>

                <div className="counter_form">
                    <div className="row fill_height">
                        <div className="col fill_height">
                            <FeedBackForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>


    // <div className="counter">
    //     <div className="counter_background" />
    //     <Container>
    //         <Row>
    //             <Col className="col-lg-6 d-flex align-items-center">
    //                 <div className="counter_content">
    //                     <h2 className="counter_title">Начните обучение сегодня</h2>
    //                     <div className="counter_text"><p>Simply dummy text of the printing and typesetting industry.
    //                         Lorem Ipsum has been the industry’s standard dumy text ever since the 1500s, when an
    //                         unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    //                     </div>
    //                 </div>
    //             </Col>
    //
    //             <Col className="counter_form col-lg-6 ms-auto">
    //                 <div className="row fill_height">
    //                     <div className="col fill_height">
    //                         <FeedBackForm />
    //                     </div>
    //                 </div>
    //             </Col>
    //         </Row>
    //     </Container>
    // </div>
    );
};

export default CounterSection;