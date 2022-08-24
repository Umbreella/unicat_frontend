import React from 'react';
import NewsLetterSection from "../components/others/NewsLetterSection";
import {Col, Container, Pagination, Row} from "react-bootstrap";
import CoursesSearchForm from "../components/forms/CoursesSearchForm";
import LargeCourse from "../components/courses/LargeCourse";
import SidebarSection from "../components/sidebar/SidebarSection";
import CoursesSidebar from "../components/sidebar/CoursesSidebar";
import GallerySidebar from "../components/sidebar/GallerySidebar";
import TagsSidebar from "../components/sidebar/TagsSidebar";
import CategoriesSidebar from "../components/sidebar/CategoriesSidebar";
import {NavLink} from "react-router-dom";

const Courses = () => {
    const sidebar_sections = [
        {
            title: "Категории",
            body: <CategoriesSidebar />
        },
        {
            title: "Новые курсы",
            body: <CoursesSidebar />
        },
        {
            title: "Галерея",
            body: <GallerySidebar />
        },
        {
            title: "Теги",
            body: <TagsSidebar />
        },
        {
            title: null,
            body:
                <div className="sidebar_section">
                    <div
                        className="sidebar_banner d-flex flex-column align-items-center justify-content-center text-center">
                        <div className="sidebar_banner_background"/>
                        <div className="sidebar_banner_overlay"/>
                        <div className="sidebar_banner_content">
                            <div className="banner_title">
                                Бесплатная книга
                            </div>
                            <div className="banner_button">
                                <NavLink to="/">
                                    скачать сейчас
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
        }
    ]


    return (
        <>
            <div className="courses">
                <Container>
                    <Row>
                        <Col className="col-lg-8">
                            <div className="courses_search_container">
                                <CoursesSearchForm />
                            </div>
                            <div className="courses_container">
                                <Row className="courses_row">
                                    <LargeCourse style={{col: "col-lg-6"}}/>
                                    <LargeCourse style={{col: "col-lg-6"}}/>
                                    <LargeCourse style={{col: "col-lg-6"}}/>
                                    <LargeCourse style={{col: "col-lg-6"}}/>
                                    <LargeCourse style={{col: "col-lg-6"}}/>
                                    <LargeCourse style={{col: "col-lg-6"}}/>
                                </Row>
                                <Row className="pagination_row">
                                    <Col>
                                        <div
                                            className="pagination_container d-flex flex-row align-items-center justify-content-start">
                                            <Pagination className="mx-auto">
                                                <Pagination.Prev />
                                                <Pagination.Item>{1}</Pagination.Item>
                                                <Pagination.Ellipsis />

                                                <Pagination.Item>{10}</Pagination.Item>
                                                <Pagination.Item>{11}</Pagination.Item>
                                                <Pagination.Item active>{12}</Pagination.Item>
                                                <Pagination.Item>{13}</Pagination.Item>
                                                <Pagination.Item >{14}</Pagination.Item>

                                                <Pagination.Ellipsis />
                                                <Pagination.Item>{20}</Pagination.Item>
                                                <Pagination.Next />
                                            </Pagination>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className="col-lg-4">
                            <div className="sidebar">
                                <SidebarSection section={sidebar_sections[0]}/>
                                <SidebarSection section={sidebar_sections[1]}/>
                                <SidebarSection section={sidebar_sections[2]}/>
                                <SidebarSection section={sidebar_sections[3]}/>
                                <SidebarSection section={sidebar_sections[4]}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <NewsLetterSection />
        </>
    );
};

export default Courses;