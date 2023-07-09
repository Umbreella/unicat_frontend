import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CourseInProfile from "../../components/courses/CourseInProfile";
import {getMyCourses} from "../../http/graphql/CourseGQL";
import {gql, useQuery} from "@apollo/client";
import YouDontHaveCourses from "../../components/courses/YouDontHaveCourses";
import HorizontalLoader from "../../components/loader/HorizontalLoader";
import MyCoursesOrderByForm from "../../components/forms/MyCoursesOrderByForm";

const MyCourses = () => {
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const myCourseQuery = getMyCourses();
    const resultQuery = gql`
        query MyCoursesPage($firstMyCourse: Int, $afterMyCourse: String,
                            $searchMyCourse: String, 
                            $isCompletedMyCourse: Boolean,
                            $orderByMyCourse: String,
                            ) {
            ${myCourseQuery}
        }
    `;
    const {loading, data, error, fetchMore, refetch} = useQuery(resultQuery, {
        variables: {
            firstMyCourse: 6,
        }
    });

    const updateFilteredData = (variables) => {
        refetch(variables);
    }

    const loadMoreMyCourse = async (endCursor) => {
        await fetchMore({
            variables: {
                afterMyCourse: endCursor,
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="single_course_title"
                         style={{
                             padding: "30px 0",
                         }}>
                        Мои курсы
                    </div>

                    <div className="courses_search_container mb-3">
                        <MyCoursesOrderByForm
                            func={{
                                updateFilteredData: updateFilteredData,
                            }}/>
                    </div>

                    <Row>
                        {
                            loading || error ?
                                <div className="w-100 mt-5">
                                    <HorizontalLoader/>
                                </div> :
                                <>
                                    {
                                        data.myCourses.edges.length > 0 ?
                                            <>
                                                {
                                                    data.myCourses.edges.map(({node}) =>
                                                        <CourseInProfile
                                                            key={node.id}
                                                            data={node}/>
                                                    )
                                                }
                                                {
                                                    isLoadingMore ?
                                                        <>
                                                            <HorizontalLoader/>
                                                        </> :
                                                        <>
                                                            {
                                                                data.myCourses.pageInfo.hasNextPage &&
                                                                <div
                                                                    className="courses_button trans_200"
                                                                    onClick={() => {
                                                                        setIsLoadingMore(true);
                                                                        loadMoreMyCourse(data.myCourses.pageInfo.endCursor);
                                                                        setIsLoadingMore(false);
                                                                    }}>
                                                                    Загрузить
                                                                    ещё
                                                                </div>
                                                            }
                                                        </>
                                                }
                                            </> :
                                            <YouDontHaveCourses/>
                                    }
                                </>
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MyCourses;