import React from 'react';
import {Col, Row} from "react-bootstrap";

const TitleSection = (props) => {
    return (
        <Row>
            <Col>
                <div className="section_title_container text-center">
                    <h2 className="section_title">
                        {props.section.title}
                    </h2>
                    <div className="section_subtitle">
                        <p>
                            {props.section.subtitle}
                        </p>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default TitleSection;