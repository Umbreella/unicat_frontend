import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";
import LargeEvent from "./LargeEvent";

const EventsSection = () => {
    const section= {
        title: "Предстоящие события",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing" +
            "elit. Donec vel gravida arcu. Vestibulum feugiat, sapien " +
            "ultrices fermentum congue, quam velit venenatis sem"
    }

    return (
        <div className="events">
            <Container>
                <TitleSection section={section}/>
                <Row className="events_row">
                    {
                        [...Array(3)].map(() =>
                            <LargeEvent />
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default EventsSection;