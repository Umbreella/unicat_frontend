import React, {useContext, useEffect} from 'react';
import {Container, Image, Row, Tab, Tabs} from "react-bootstrap";
import FeatureSidebar from "../../components/sidebar/FeatureSidebar";
import {useParams} from "react-router-dom";
import CurriculumCourse from "../../components/tabs/CurriculumCourse";
import ReviewsCourse from "../../components/tabs/ReviewsCourse";
import SidebarSection from "../../components/sidebar/SidebarSection";
import TutorSidebar from "../../components/sidebar/TutorSidebar";
import CoursesSidebar from "../../components/sidebar/CoursesSidebar";
import {
    getCurrentCourses, getHasAccess,
    getLatestCourses
} from "../../http/graphql/CourseGQL";
import {gql, useLazyQuery, useQuery} from "@apollo/client";
import {Interweave} from "interweave";
import {Rating} from "react-simple-star-rating";
import PageLoader from "../../components/loader/PageLoader";
import {Context} from "../../index";
import {getCourseComments} from "../../http/graphql/CommentGQL";
import {getPublicLessons} from "../../http/graphql/LessonsGQL";
import ErrorQuery from "../../components/errors/ErrorQuery";

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
    const {loading, data, error} = useQuery(resultQuery, {
        variables: {
            currentCourseId: params.id,
            firstLatestCourse: 4,
        },
    });

    const commentsQuery = getCourseComments();
    const [sendCommentsQuery, dataCommentsQuery] = useLazyQuery(commentsQuery, {
        variables: {
            courseId: data?.course.id,
            statisticCourseId: data?.course.id,
        },
    });

    const lessonsQuery = getPublicLessons();
    const prepLessonQuery = gql`
        query GetPublicLesson ($courseId: String!) {
            ${lessonsQuery}
        }
    `;
    const [sendLessonsQuery, dataLessonsQuery] = useLazyQuery(prepLessonQuery, {
        variables: {
            courseId: data?.course.id,
        },
    });

    const hasAccessQuery = getHasAccess();
    const [sendHasAccessQuery, dataHasAccessQuery] = useLazyQuery(hasAccessQuery, {
        variables: {
            hasAccessCourseId: data?.course.id,
        },
        fetchPolicy: 'network-only',
        nextFetchPolicy: 'network-only',
    });

    useEffect(() => {
        if (data !== undefined) {
            context.setLastBreadcrumbs(data.course.title);
            sendHasAccessQuery();
        } else {
            context.setLastBreadcrumbs('');
        }
    }, [context, data])

    if (error) {
        return <ErrorQuery/>;
    }

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
                                                className="single_course_info_text" style={{color: "#374057"}}>
                                                {data.course.teacher.fullName}
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
                                                initialValue={data.course.avgRating}
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
                                                className="single_course_info_text" style={{color: "#374057"}}>
                                                {data.course.category.title}
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
                                                      sendCommentsQuery();
                                                  }
                                                  if (eventKey === "curriculum") {
                                                      sendLessonsQuery();
                                                  }
                                              }}>
                                            <Tab eventKey="description"
                                                 title="Описание">
                                                <Interweave
                                                    content={data.course.body}/>
                                            </Tab>
                                            <Tab eventKey="curriculum"
                                                 title="Учебный план">
                                                <CurriculumCourse
                                                    data={{
                                                        query: dataLessonsQuery,
                                                    }}/>
                                            </Tab>
                                            <Tab eventKey="reviews"
                                                 title="Отзывы"
                                                 onClick={sendCommentsQuery}>
                                                <ReviewsCourse
                                                    data={{
                                                        course: {
                                                            id: params.id,
                                                            title: data.course.title,
                                                        },
                                                        query: dataCommentsQuery,
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
                                            id: data.course.id,
                                            title: data.course.title,
                                            price: data.course.price,
                                            discount: data.course.discount,
                                            hasAccess: dataHasAccessQuery,
                                            duration: data.course.duration,
                                            countLectures: data.course.countLectures,
                                            countIndependents: data.course.countIndependents,
                                            countListeners: data.course.countListeners,
                                            learningFormat: data.course.learningFormat,
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