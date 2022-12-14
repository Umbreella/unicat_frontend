import React, {useEffect} from 'react';
import {Container, Image, Row, Tab, Tabs} from "react-bootstrap";
import FeatureSidebar from "../../components/sidebar/FeatureSidebar";
import {NavLink, useParams} from "react-router-dom";
import CurriculumCourse from "../../components/tabs/CurriculumCourse";
import ReviewsCourse from "../../components/tabs/ReviewsCourse";
import SidebarSection from "../../components/sidebar/SidebarSection";
import TutorSidebar from "../../components/sidebar/TutorSidebar";
import CoursesSidebar from "../../components/sidebar/CoursesSidebar";
import {getCurrentCourses, getNewCourses} from "../../http/CourseApi";
import {useQuery} from "@apollo/client";
import {createQuery} from "../../http";
import {Interweave} from "interweave";

const CurrentCourse = () => {
    const params = useParams();
    const currentCourseQuery = getCurrentCourses(params.id);
    const newCoursesQuery = getNewCourses();
    const {data} = useQuery(createQuery([currentCourseQuery, newCoursesQuery]));

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    if (data === undefined)
        return <></>

    const {course: infoCourse, newCourses} = data;
    const {teacher: infoTeacher} = infoCourse;

    return (
        <div className="single_course">
            <Container>
                <Row>
                    <div className="col-lg-8">
                        <div className="single_course_container">
                            <div className="single_course_title">
                                {infoCourse.title}
                            </div>
                            <div
                                className="single_course_info d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

                                <div className="single_course_info_item">
                                    <div className="single_course_info_title">
                                        Teacher:
                                    </div>
                                    <div className="single_course_info_text">
                                        <NavLink to="/">
                                            {infoTeacher.fullName}
                                        </NavLink>
                                    </div>
                                </div>

                                <div className="single_course_info_item">
                                    <div className="single_course_info_title">
                                        Reviews:
                                    </div>
                                    <div className="rating_r rating_r_4">
                                        <i></i><i></i><i></i><i></i><i></i>
                                    </div>
                                </div>

                                <div className="single_course_info_item">
                                    <div className="single_course_info_title">
                                        Categories:
                                    </div>
                                    <div className="single_course_info_text">
                                        <NavLink to="/">
                                            {infoCourse.category.title}
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="single_course_image">
                                <Image className="w-100" src={infoCourse.preview}/>
                            </div>

                            <div className="course_tabs_container">
                                <Tabs>
                                    <Tab eventKey="description"
                                         title="Описание">
                                        <Interweave
                                            content={infoCourse.description}/>
                                    </Tab>
                                    <Tab eventKey="curriculum"
                                         title="Учебный план">
                                        <CurriculumCourse/>
                                    </Tab>
                                    <Tab eventKey="reviews"
                                         title="Отзывы">
                                        <ReviewsCourse/>
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="sidebar_current_course">
                            <SidebarSection section={{
                                title: "Особенность курса",
                                body: <FeatureSidebar data={{
                                    price: infoCourse.price,
                                    duration: infoCourse.duration,
                                    countLectures: infoCourse.countLectures,
                                    countIndependents: infoCourse.countIndependents,
                                    learningFormat: infoCourse.learningFormat
                                }}/>
                            }}/>
                            <SidebarSection section={{
                                title: "Преподаватель",
                                body: <TutorSidebar data={infoTeacher}/>
                            }}/>
                            <SidebarSection section={{
                                title: "Новые курсы",
                                body: <CoursesSidebar data={newCourses}/>
                            }}/>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default CurrentCourse;