import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {getCourses, getLatestCourses} from "../../http/graphql/CourseGQL";
import {gql, useQuery} from "@apollo/client";
import CoursesWithFilters from "../../components/courses/CoursesWithFilters";
import {getCategories} from "../../http/graphql/CategoryGQL";
import PageLoader from "../../components/loader/PageLoader";
import ErrorQuery from "../../components/errors/ErrorQuery";

const Courses = () => {
    const coursesQuery = getCourses();
    const newCoursesQuery = getLatestCourses();
    const categoriesQuery = getCategories();

    const resultQuery = gql`
        query CoursePage($firstCourse: Int, $afterCourse: String, 
                         $searchCourse: String,
                         $categoryIdFilter: String, 
                         $orderByCourse: String,
                         $minRatingCourse: Decimal, $maxRatingCourse: Decimal,
                         $minPriceCourse: Decimal, $maxPriceCourse: Decimal,
                         
                         $firstCategory: Int,
                         
                         $firstLatestCourse: Int) {
            ${coursesQuery}
            ${categoriesQuery}
            ${newCoursesQuery}
        }
    `;
    const {error, loading, data, fetchMore, refetch} = useQuery(resultQuery, {
        variables: {
            firstCourse: 8,
            firstLatestCourse: 3,
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

    if (error) {
        return <ErrorQuery/>;
    }

    return (
        <>
            <div className="courses">
                <Container>
                    {
                        loading ?
                            <PageLoader/> :
                            <Row>
                                <Col>
                                    <CoursesWithFilters
                                        data={{
                                            allCourses: data.allCourses,
                                            allCategories: data.allCategories,
                                        }}
                                        func={{
                                            loadMoreCourse: loadMoreCourse,
                                            updateFilteredData: updateFilteredData
                                        }}/>
                                </Col>
                                {/*<div className="col-lg-4">*/}
                                {/*    <div className="sidebar">*/}
                                {/*        <SidebarSection section={{*/}
                                {/*            title: "Категории",*/}
                                {/*            body: <CategoriesSidebar*/}
                                {/*                data={data.allCategories.edges.slice(0, 5)}/>*/}
                                {/*        }}/>*/}
                                {/*        <SidebarSection section={{*/}
                                {/*            title: "Новые курсы",*/}
                                {/*            body: <CoursesSidebar*/}
                                {/*                data={data.latestCourses}/>*/}
                                {/*        }}/>*/}
                                {/*        <SidebarSection section={{*/}
                                {/*            title: "Галерея",*/}
                                {/*            body: <GallerySidebar/>*/}
                                {/*        }}/>*/}
                                {/*        <SidebarSection section={{*/}
                                {/*            title: "Теги",*/}
                                {/*            body: <TagsSidebar/>*/}
                                {/*        }}/>*/}
                                {/*        <SidebarSection section={{*/}
                                {/*            title: null,*/}
                                {/*            body: <DownloadSidebar/>*/}
                                {/*        }}/>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </Row>
                    }
                </Container>
            </div>
        </>
    );
};

export default Courses;