import React from 'react';
import {Card, Col, ProgressBar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {LESSON_COURSE, CERTIFICATES} from "../../utils/consts";

const CourseInProfile = (props) => {
    const course = props.course;

    return (
        <Col className="col-lg-4 col-md-6 col-12">
            <Card className="mb-4">
                <Card.Body>
                    <Card.Title>
                        {course.title}
                    </Card.Title>
                    <Card.Text>
                        {course.text}
                    </Card.Text>
                    <div className="mt-3">
                        {
                            course.progress !== 100 ?
                                <ProgressBar now={course.progress} /> :
                                <div style={{ height: 16 }}/>
                        }
                    </div>

                    <div className="courses_button w-100 mt-3">
                        {
                            course.progress !== 100 ?
                                <NavLink to={LESSON_COURSE}>
                                    Продолжить
                                </NavLink> :
                                <NavLink to={CERTIFICATES} style={{ background: "#198654" }}>
                                    Сертификат
                                </NavLink>
                        }
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseInProfile;