import React from 'react';
import TitleSection from "../others/TitleSection";
import {Accordion, Col, Row} from "react-bootstrap";
import SmallAccordion from "../accordions/SmallAccordion";

const FeaturesSection = () => {
    const section = {
        title: "Почему нужно выбрать именно нас",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing " +
            "elit. Donec vel gravida arcu. Vestibulum feugiat, sapien " +
            "ultrices fermentum congue, quam velit venenatis sem"
    }

    const accordions = [
        {
            eventKey: 0,
            header: "Номинация «Лучшая школа 2019»",
            body: "Lorem Ipsum has been the industry's standard dummy text " +
                "ever since the 1500s, when an unknown printer took a " +
                "galley of type and scrambled it to make a type specimen " +
                "book."
        },
        {
            eventKey: 1,
            header: "Номинация «Лучшая школа 2019»",
            body: "Lorem Ipsum has been the industry's standard dummy text " +
                "ever since the 1500s, when an unknown printer took a " +
                "galley of type and scrambled it to make a type specimen " +
                "book."
        }
    ]

    return (
        <div className="feature">
            <div className="feature_background"/>
            <div className="container">
                <TitleSection section={section}/>
                <Row className="feature_row">
                    <Col className="col-lg-6 feature_col">
                        <div className="feature_content">
                            <Accordion
                                className="accordions"
                                defaultActiveKey={1}>
                                <SmallAccordion item={accordions[0]}/>
                                <SmallAccordion item={accordions[1]}/>
                                <SmallAccordion item={accordions[0]}/>
                                <SmallAccordion item={accordions[0]}/>
                            </Accordion>
                        </div>
                    </Col>
                    <Col className="col-lg-6 feature_col">
                        <div
                            className="feature_video d-flex flex-column
                            align-items-center justify-content-center">
                            <div className="feature_video_background" />
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default FeaturesSection;