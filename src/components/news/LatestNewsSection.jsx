import React from 'react';
import {Container, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";
import LargeNews from "./LargeNews";
import SmallNews from "./SmallNews";

const LatestNewsSection = (props) => {
    const data = props.data;
    const section = {
        title: "Последние новости",
        subtitle: "С другой стороны, экономическая повестка сегодняшнего" +
            " дня обеспечивает широкому кругу (специалистов) участие в" +
            " формировании системы массового участия.",
    }

    const largeNews = data.edges[0];
    const smallNews = data.edges.slice(1, 5);

    return (
        <div className="news">
            <Container>
                <TitleSection section={section}/>
                <Row className="news_row">
                    <div className="col-lg-7 news_col">
                        {
                            <LargeNews data={largeNews.node}/>
                        }
                    </div>

                    <div className="col-lg-5 news_col">
                        <div className="news_posts_small">
                            {
                                smallNews.map(({node}) =>
                                    <SmallNews key={node.id} data={node}/>
                                )
                            }
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default LatestNewsSection;