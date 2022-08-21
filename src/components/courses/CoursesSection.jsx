import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";
import LargeCourse from "./LargeCourse";
import {NavLink} from "react-router-dom";
import {COURSES_ROUTE} from "../../utils/consts";

const CoursesSection = () => {
    const section= {
        title: "Популярные курсы",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing" +
            "elit. Donec vel gravida arcu. Vestibulum feugiat, sapien " +
            "ultrices fermentum congue, quam velit venenatis sem"
    }

    return (
        <div className="courses">
            <div className="section_background parallax-window" />
            <Container>
                <TitleSection section={section} />
                <Row className="courses_row">
                    {
                        [...Array(3)].map(() =>
                            <LargeCourse />
                        )
                    }
                </Row>
                <Row>
                    <Col>
                        <div className="courses_button trans_200">
                            <NavLink to={COURSES_ROUTE}>
                                Все курсы
                            </NavLink>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default CoursesSection;