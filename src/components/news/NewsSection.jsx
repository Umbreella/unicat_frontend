import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SmallNews from "./SmallNews";
import LargeNews from "./LargeNews";
import TitleSection from "../others/TitleSection";

const NewsSection = () => {
    const section= {
        title: "Последние новости",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing" +
            "elit. Donec vel gravida arcu. Vestibulum feugiat, sapien " +
            "ultrices fermentum congue, quam velit venenatis sem"
    }

    return (
        <div className="news">
            <Container>
                <TitleSection section={section}/>
                <Row className="news_row">
                    <Col className="col-lg-7 news_col">
                        {
                            <LargeNews />
                        }
                    </Col>

                    <Col className="col-lg-5 news_col">
                        <div className="news_posts_small">
                            {
                                [...Array(4)].map(() =>
                                    <SmallNews />
                                )
                            }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsSection;