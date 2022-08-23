import React from 'react';
import {Accordion} from "react-bootstrap";

const SmallAccordion = (props) => {
    return (
        <Accordion.Item
            className="accordion_container"
            eventKey={props.item.eventKey}>
            <Accordion.Header
                className="accordion d-flex flex-row align-items-center">
                {props.item.header}
            </Accordion.Header>
            <Accordion.Body>
                {props.item.body}
            </Accordion.Body>
        </Accordion.Item>
    );
};

export default SmallAccordion;