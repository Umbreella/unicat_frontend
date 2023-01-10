import React from 'react';
import {Container, Row} from "react-bootstrap";
import SidebarSection from "../../components/sidebar/SidebarSection";
import CoursesSidebar from "../../components/sidebar/CoursesSidebar";
import CategoriesSidebar from "../../components/sidebar/CategoriesSidebar";
import DownloadSidebar from "../../components/sidebar/DownloadSidebar";
import {getCourses, getLatestCourses} from "../../http/graphql/CourseGQL";
import {gql, useQuery} from "@apollo/client";
import CoursesWithFilters from "../../components/courses/CoursesWithFilters";
import {getCategories} from "../../http/graphql/CategoryGQL";
import PageLoader from "../../components/loader/PageLoader";
import TagsSidebar from "../../components/sidebar/TagsSidebar";
import GallerySidebar from "../../components/sidebar/GallerySidebar";

const Courses = () => {
    const coursesQuery = getCourses();
    const newCoursesQuery = getLatestCourses();
    const categoriesQuery = getCategories();

    const resultQuery = gql`
        query CoursePage($firstCourse: Int, $afterCourse: String, 
                         $searchCourse: String,
                         $categoryIdFilter: String, $orderByCourse: String,
                         $firstCategory: Int,
                         $firstLatestCourse: Int) {
            ${coursesQuery}
            ${categoriesQuery}
            ${newCoursesQuery}
        }
    `;
    const {loading, data, fetchMore, refetch} = useQuery(resultQuery, {
        variables: {
            firstCourse: 8,
            firstLatestCourse: 4,
        }
    });

    const updateFilteredData = (variables) => {
        refetch(variables);
    }

    const loadMoreCourse = async (endCursor) => {
        await fetchMore({
            variables: {
                afterCourse: endCursor,
                firstNewCourse: 0,
            }
        })
    }

    return (
        <>
            <div className="courses">
                <Container>
                    {
                        loading ?
                            <PageLoader/> :
                            <Row>
                                <div className="col-lg-8">
                                    <CoursesWithFilters
                                        data={{
                                            allCourses: data.allCourses,
                                            allCategories: data.allCategories,
                                        }}
                                        func={{
                                            loadMoreCourse: loadMoreCourse,
                                            updateFilteredData: updateFilteredData
                                        }}/>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sidebar">
                                        <SidebarSection section={{
                                            title: "Категории",
                                            body: <CategoriesSidebar
                                                data={data.allCategories.edges.slice(0, 5)}/>
                                        }}/>
                                        <SidebarSection section={{
                                            title: "Новые курсы",
                                            body: <CoursesSidebar
                                                data={data.latestCourses}/>
                                        }}/>
                                        <SidebarSection section={{
                                            title: "Галерея",
                                            body: <GallerySidebar/>
                                        }}/>
                                        <SidebarSection section={{
                                            title: "Теги",
                                            body: <TagsSidebar/>
                                        }}/>
                                        <SidebarSection section={{
                                            title: null,
                                            body: <DownloadSidebar/>
                                        }}/>
                                    </div>
                                </div>
                            </Row>
                    }
                </Container>
            </div>
        </>
    );
};

export default Courses;