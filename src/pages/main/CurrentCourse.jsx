import React, {useContext, useEffect} from 'react';
import {Container, Image, Row, Tab, Tabs} from "react-bootstrap";
import FeatureSidebar from "../../components/sidebar/FeatureSidebar";
import {NavLink, useParams} from "react-router-dom";
import CurriculumCourse from "../../components/tabs/CurriculumCourse";
import ReviewsCourse from "../../components/tabs/ReviewsCourse";
import SidebarSection from "../../components/sidebar/SidebarSection";
import TutorSidebar from "../../components/sidebar/TutorSidebar";
import CoursesSidebar from "../../components/sidebar/CoursesSidebar";
import {
    getCurrentCourses,
    getLatestCourses
} from "../../http/graphql/CourseGQL";
import {gql, useLazyQuery, useQuery} from "@apollo/client";
import {Interweave} from "interweave";
import {Rating} from "react-simple-star-rating";
import PageLoader from "../../components/loader/PageLoader";
import {Context} from "../../index";
import {getCourseComments} from "../../http/graphql/CommentGQL";

const CurrentCourse = () => {
    const params = useParams();
    const context = useContext(Context);

    const currentCourseQuery = getCurrentCourses();
    const newCoursesQuery = getLatestCourses();

    const resultQuery = gql`
        query CurrentCoursePage($currentCourseId: ID!,
                                $firstLatestCourse: Int) {
            ${currentCourseQuery}
            ${newCoursesQuery}
        }
    `;
    const {loading, data} = useQuery(resultQuery, {
        variables: {
            currentCourseId: params.id,
            firstLatestCourse: 4,
        },
    });

    const commentsQuery = getCourseComments();
    const [postCommentsQuery, dataCommentsQuery] = useLazyQuery(commentsQuery, {
        variables: {
            courseId: data?.course.id
        }
    });

    useEffect(() => {
        if (data !== undefined) {
            context.setLastBreadcrumbs(data.course.title);
        } else {
            context.setLastBreadcrumbs('');
        }
    })

    return (
        <div className="single_course">
            <Container>
                {
                    loading ?
                        <PageLoader/> :
                        <Row>
                            <div className="col-lg-8">
                                <div className="single_course_container">
                                    <div className="single_course_title">
                                        {data.course.title}
                                    </div>
                                    <div
                                        className="single_course_info d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">

                                        <div
                                            className="single_course_info_item">
                                            <div
                                                className="single_course_info_title">
                                                Преподаватель:
                                            </div>
                                            <div
                                                className="single_course_info_text">
                                                <NavLink to="/">
                                                    {data.course.teacher.fullName}
                                                </NavLink>
                                            </div>
                                        </div>

                                        <div
                                            className="single_course_info_item">
                                            <div
                                                className="single_course_info_title"
                                                style={{marginBottom: 4}}>
                                                Рейтинг:
                                            </div>
                                            <Rating
                                                initialValue={data.course.statistic.avgRating}
                                                readonly={true}
                                                allowTitleTag={false}
                                                allowFraction={true}
                                                size={20}/>
                                        </div>

                                        <div
                                            className="single_course_info_item">
                                            <div
                                                className="single_course_info_title">
                                                Категория:
                                            </div>
                                            <div
                                                className="single_course_info_text">
                                                <NavLink to="/">
                                                    {data.course.category.title}
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="single_course_image">
                                        <Image className="w-100"
                                               src={data.course.preview}/>
                                    </div>

                                    <div className="course_tabs_container">
                                        <Tabs defaultActiveKey="description"
                                              onSelect={(eventKey) => {
                                                  if (eventKey === "reviews") {
                                                      postCommentsQuery();
                                                  }
                                              }}>
                                            <Tab eventKey="description"
                                                 title="Описание">
                                                <Interweave
                                                    content={data.course.description}/>
                                            </Tab>
                                            <Tab eventKey="curriculum"
                                                 title="Учебный план">
                                                <CurriculumCourse/>
                                            </Tab>
                                            <Tab eventKey="reviews"
                                                 title="Отзывы">
                                                <ReviewsCourse
                                                    data={{
                                                        course: {
                                                            id: params.id,
                                                            title: data.course.title,
                                                        },
                                                        rating: data.course.statistic,
                                                    }}
                                                    func={{
                                                        query: dataCommentsQuery
                                                    }}/>
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
                                            price: data.course.price,
                                            duration: data.course.duration,
                                            countLectures: data.course.countLectures,
                                            countIndependents: data.course.countIndependents,
                                            learningFormat: data.course.learningFormat
                                        }}/>
                                    }}/>
                                    <SidebarSection section={{
                                        title: "Преподаватель",
                                        body: <TutorSidebar
                                            data={data.course.teacher}/>
                                    }}/>
                                    <SidebarSection section={{
                                        title: "Новые курсы",
                                        body: <CoursesSidebar
                                            data={data.latestCourses}/>
                                    }}/>
                                </div>
                            </div>
                        </Row>
                }
            </Container>
        </div>
    );
};

export default CurrentCourse;