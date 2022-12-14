import React, {useEffect, useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import SidebarSection from "../../components/sidebar/SidebarSection";
import CoursesSidebar from "../../components/sidebar/CoursesSidebar";
import GallerySidebar from "../../components/sidebar/GallerySidebar";
import TagsSidebar from "../../components/sidebar/TagsSidebar";
import CategoriesSidebar from "../../components/sidebar/CategoriesSidebar";
import DownloadSidebar from "../../components/sidebar/DownloadSidebar";
import {getFirstCourses, getNewCourses} from "../../http/CourseApi";
import {useQuery} from "@apollo/client";
import {createQuery} from "../../http";
import CoursesWithFilters from "../../components/courses/CoursesWithFilters";
import {getFirstTeacher} from "../../http/TeacherApi";
import {getCategories} from "../../http/CategoryApi";

const Courses = () => {
    const sidebar_sections = [
        {
            title: "Галерея",
            body: <GallerySidebar/>
        },
        {
            title: "Теги",
            body: <TagsSidebar/>
        },
    ]

    const [endCursor, setEndCursor] = useState('');

    const coursesQuery = getFirstCourses(1, endCursor);
    const newCoursesQuery = getNewCourses();
    const teachersQuery = getFirstTeacher(1);
    const categoriesQuery = getCategories();

    const resultQuery = createQuery([coursesQuery, newCoursesQuery, teachersQuery, categoriesQuery]);
    const {data} = useQuery(resultQuery);

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <>
            <div className="courses">
                <Container>
                    <Row>
                        <div className="col-lg-8">
                            <CoursesWithFilters data={data?.allCourses}
                                                setEndCursor={setEndCursor}/>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar">
                                <SidebarSection section={{
                                    title: "Категории",
                                    body: <CategoriesSidebar data={data?.allCategories}/>
                                }}/>
                                <SidebarSection section={{
                                    title: "Новые курсы",
                                    body: <CoursesSidebar data={data?.newCourses}/>
                                }}/>
                                <SidebarSection section={{
                                    title: null,
                                    body: <DownloadSidebar/>
                                }}/>
                                {/*<SidebarSection section={sidebar_sections[2]}/>*/}
                                {/*<SidebarSection section={sidebar_sections[3]}/>*/}
                                {/*<SidebarSection section={sidebar_sections[4]}/>*/}
                            </div>
                        </div>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Courses;