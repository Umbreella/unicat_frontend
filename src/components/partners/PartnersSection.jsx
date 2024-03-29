import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SmallPartner from "./SmallPartner";
import partner_1 from '../../images/partner_1.png';
import partner_2 from '../../images/partner_2.png';
import partner_3 from '../../images/partner_3.png';
import partner_4 from '../../images/partner_4.png';
import partner_5 from '../../images/partner_5.png';
import partner_6 from '../../images/partner_6.png';

const PartnersSection = () => {
    const partners = [
        {
            image: partner_1,
        },
        {
            image: partner_2,
        },
        {
            image: partner_3,
        },
        {
            image: partner_4,
        },
        {
            image: partner_5,
        },
        {
            image: partner_6,
        },
    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 3,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
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
                            {
                                partners.map((value, index) =>
                                    <SmallPartner key={index} data={value}/>
                                )
                            }
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PartnersSection;