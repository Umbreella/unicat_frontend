import React from 'react';
import {Col, Container, Image, Row, Tab, Tabs} from "react-bootstrap";
import FeatureSidebar from "../components/sidebar/FeatureSidebar";
import {NavLink} from "react-router-dom";
import image_course from "../images/course_image.jpg"
import DescriptionCourse from "../components/tabs/DescriptionCourse";
import CurriculumCourse from "../components/tabs/CurriculumCourse";
import ReviewsCourse from "../components/tabs/ReviewsCourse";
import SidebarSection from "../components/sidebar/SidebarSection";
import TutorSidebar from "../components/sidebar/TutorSidebar";
import CoursesSidebar from "../components/sidebar/CoursesSidebar";

const CurrentCourse = () => {
    const sidebar = [
        {
            title: "Особенность курса",
            body: <FeatureSidebar />
        },
        {
            title: "Преподаватель",
            body: <TutorSidebar />
        },
        {
            title: "Последние курсы",
            body: <CoursesSidebar />
        }
    ]

    return (
        <div className="single_course">
            <Container>
                <Row>
                    <Col className="col-lg-8">
                        <div className="single_course_container">
                            <div className="single_course_title">
                                Мобильные приложения
                            </div>
                            <div
                                className="single_course_info d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

                                <div className="single_course_info_item">
                                    <div className="single_course_info_title">
                                        Teacher:
                                    </div>
                                    <div className="single_course_info_text">
                                        <NavLink to="/">
                                            Jacke Masito
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
                                            Languages
                                        </NavLink>
                                    </div>
                                </div>
                            </div>

                            <div className="single_course_image">
                                <Image className="w-100" src={image_course}/>
                            </div>

                            <div className="course_tabs_container">
                                <Tabs>
                                    <Tab eventKey="description"
                                         title="Описание">
                                        <DescriptionCourse />
                                    </Tab>
                                    <Tab eventKey="curriculum"
                                         title="Учебный план">
                                        <CurriculumCourse />
                                    </Tab>
                                    <Tab eventKey="reviews"
                                         title="Отзывы">
                                        <ReviewsCourse />
                                    </Tab>
                                </Tabs>
                            </div>
                        </div>
                    </Col>

                    <div className="col-lg-4">
                        <div className="sidebar_current_course">
                            {
                                sidebar.map((value, index, array) =>
                                    <SidebarSection key={index} section={value} />
                                )
                            }
                        </div>
                    </div>

                </Row>
            </Container>
        </div>
    );
};

export default CurrentCourse;