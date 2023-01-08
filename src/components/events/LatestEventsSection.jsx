import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";
import LargeEvent from "./LargeEvent";

const LatestEventsSection = (props) => {
    const section= {
        title: "Предстоящие события",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing" +
            "elit. Donec vel gravida arcu. Vestibulum feugiat, sapien " +
            "ultrices fermentum congue, quam velit venenatis sem"
    }

    const data = props.data;

    return (
        <div className="events">
            <Container>
                <TitleSection section={section}/>
                <Row className="events_row">
                    {
                        data.edges.map(({node}) =>
                            <div className="col-lg-4">
                                <LargeEvent key={node.id} data={node}/>
                            </div>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default LatestEventsSection;