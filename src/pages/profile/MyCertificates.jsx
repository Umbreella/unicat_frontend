import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import LargeCertiicates from "../../components/certificates/LargeCertiicates";

const MyCertificates = () => {
    const my_courses = [
        {
            title: "Мобильная разработка",
            date: "12.10.2022"
        }
    ]

    return (
        <Container>
            <Row>
                <Col>
                    <div className="single_course_title"
                         style={{
                             padding: "30px 0" }}>
                        Сертификаты
                    </div>

                    <Row>
                        {
                            my_courses.map((value, index, array) =>
                                <LargeCertiicates key={index} certificate={value}/>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MyCertificates;