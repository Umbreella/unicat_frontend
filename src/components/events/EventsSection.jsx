import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";
import LargeEvent from "./LargeEvent";

const EventsSection = (props) => {
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
                        data?.edges?.map(({node}, index, array) =>
                            <LargeEvent key={node.id} item={node}/>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default EventsSection;