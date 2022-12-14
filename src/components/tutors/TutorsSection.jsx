import React from 'react';
import SmallTutor from "./SmallTutor";
import {Container, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";

const TutorsSection = (props) => {
    const section = {
        title: "Наши преподаватели",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing" +
            "elit. Donec vel gravida arcu. Vestibulum feugiat, sapien " +
            "ultrices fermentum congue, quam velit venenatis sem"
    }
    const data = props.data;

    return (
        <div className="team">
            <div className="team_background parallax-window"
                 style={props.style ? props.style : null}/>
            <Container>
                <TitleSection section={section}/>
                <Row className="team_row">
                    {
                        data.edges.map(({node}) =>
                            <SmallTutor key={node.id} item={node}/>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default TutorsSection;