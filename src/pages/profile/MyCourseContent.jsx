import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {NavLink, useParams} from "react-router-dom";
import {gql, useQuery} from "@apollo/client";
import {getPrivateLessons} from "../../http/graphql/LessonsGQL";
import HorizontalLoader from "../../components/loader/HorizontalLoader";
import {getMyCourse} from "../../http/graphql/CourseGQL";
import PrivateLessonAccordion
    from "../../components/accordions/PrivateLessonAccordion";
import {COURSES_ROUTE} from "../../utils/consts";

const MyCourseContent = (props) => {
    const {courseId} = useParams();

    const currentCourseQuery = getMyCourse();
    const privateLessonsQuery = getPrivateLessons();
    const resultQuery = gql`
        query MyCourseContentPage($myCourseId: ID!, 
                                  $courseId: String!) {
            ${currentCourseQuery}
            ${privateLessonsQuery}
        }
    `;
    const {loading, data, error} = useQuery(resultQuery, {
        variables: {
            myCourseId: courseId,
            courseId: courseId,
        },
    });

    return (
        <Container>
            <Row>
                <Col>
                    {
                        loading ?
                            <div className="d-flex align-items-center"
                                 style={{minHeight: "50vh"}}>
                                <HorizontalLoader/>
                            </div> :
                            <>
                                {
                                    error ?
                                        <div className="w-100 mt-5 text-center" style={{fontSize: 16}}>
                                            У вас нет доступа к данному курсу, попробуйте посмотреть другие наши курсы.
                                            <div className="courses_button trans_200 mt-3">
                                                <NavLink to={COURSES_ROUTE}>
                                                    Все курсы
                                                </NavLink>
                                            </div>
                                        </div> :
                                        <>
                                            <div
                                                className="single_course_title text-center"
                                                style={{
                                                    padding: "30px 0"
                                                }}>
                                                {data.myCourse.title}
                                            </div>
                                            <Col className="my_lessons col-xl-9 col-md-10 m-auto">
                                                {
                                                    data.lessonsWithProgress.map((value) =>
                                                        <PrivateLessonAccordion key={value.id} data={{
                                                            info: courseId,
                                                            item: value,
                                                        }}/>
                                                    )
                                                }
                                            </Col>
                                        </>
                                }
                            </>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default MyCourseContent;