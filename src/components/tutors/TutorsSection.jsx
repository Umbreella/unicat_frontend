import React from 'react';
import SmallTutor from "./SmallTutor";
import {Container, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";

const TutorsSection = (props) => {
    const section= {
        title: "Наши преподаватели",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing" +
            "elit. Donec vel gravida arcu. Vestibulum feugiat, sapien " +
            "ultrices fermentum congue, quam velit venenatis sem"
    }

    return (
        <div className="team">
            <div className="team_background parallax-window"
                 style={props.style ? props.style : null}/>
            <Container>
                <TitleSection section={section}/>
                <Row className="team_row">
                    {
                        [...Array(4)].map((value, index, array) =>
                            <SmallTutor key={index}/>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TutorsSection;