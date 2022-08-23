import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmallPartner from "./SmallPartner";

const PartnersSection = () => {
    const partners = [
        {
            title: "Partner 1"
        }
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="partners">
            <Container>
                <Row>
                    <Col>
                        <Carousel className="partners_slider"
                                  responsive={responsive}
                                  infinite={true}
                                  autoPlay={true}
                                  autoPlaySpeed={3000}>
                            <SmallPartner partner={partners[0]}/>
                            <SmallPartner partner={partners[0]}/>
                            <SmallPartner partner={partners[0]}/>
                            <SmallPartner partner={partners[0]}/>
                            <SmallPartner partner={partners[0]}/>
                            <SmallPartner partner={partners[0]}/>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PartnersSection;