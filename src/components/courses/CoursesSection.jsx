import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import TitleSection from "../others/TitleSection";
import LargeCourse from "./LargeCourse";
import {NavLink} from "react-router-dom";
import {COURSES_ROUTE} from "../../utils/consts";

const CoursesSection = (props) => {
    const section = {
        title: "Новые курсы",
        subtitle: "Следует отметить, что граница обучения кадров создаёт" +
            " необходимость включения в производственный план целого ряда" +
            " внеочередных мероприятий с учётом комплекса экспериментов," +
            " поражающих по своей масштабности и грандиозности.",
    }
    const data = props.data;

    return (
        <div className="courses">
            <div className="section_background parallax-window"/>
            <Container>
                <TitleSection section={section}/>
                <Row className="courses_row">
                    {
                        data?.edges?.map(({node}, index, array) =>
                            <LargeCourse key={node.id} item={node}
                                         style={{col: "col-lg-4"}}/>
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