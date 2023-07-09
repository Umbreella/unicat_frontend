import React from 'react';
import {Card, Col, Image, ProgressBar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {
    LESSON_COURSE,
    CERTIFICATES,
    COURSES_ROUTE,
    MY_COURSES
} from "../../utils/consts";

const CourseInProfile = (props) => {
    const data = props.data;

    return (
        <Col className="col-lg-4 col-12">
            <Card className="mb-4 my_course">
                <Card.Img variant="top" src={data.preview}/>
                <Card.Body>
                    <Card.Title>
                        {data.title}
                    </Card.Title>
                    {
                        data.progress !== 100 &&
                        <div className="mt-3">
                            <ProgressBar now={data.progress}/>
                        </div>
                    }
                    <div className="courses_button w-100 mt-3">
                        <NavLink
                            to={MY_COURSES + data.id + LESSON_COURSE}>
                            {
                                data.progress === 100 ?
                                    <>
                                        Содержание
                                    </> :
                                    <>
                                        Продолжить
                                    </>
                            }
                        </NavLink>
                    </div>
                    {
                        data.progress >= 60 &&
                            <div className="courses_button w-100 mt-3">
                                <NavLink to={CERTIFICATES}
                                         style={{background: "#198654"}}>
                                    Сертификат
                                </NavLink>
                            </div>
                    }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CourseInProfile;