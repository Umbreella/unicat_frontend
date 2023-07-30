import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";
import LargeEvent from "./LargeEvent";

const LatestEventsSection = (props) => {
    const section= {
        title: "Предстоящие события",
        subtitle: "Имеется спорная точка зрения, гласящая примерно" +
            " следующее: предприниматели в сети интернет освещают" +
            " чрезвычайно интересные особенности картины в целом, однако" +
            " конкретные выводы, разумеется, указаны как претенденты на" +
            " роль ключевых факторов.",
    }

    const data = props.data;

    return (
        <div className="events">
            <Container>
                <TitleSection section={section}/>
                <Row className="events_row">
                    {
                        data.edges.map(({node}) =>
                            <div className="col-lg-4" key={node.id}>
                                <LargeEvent data={node}/>
                            </div>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default LatestEventsSection;