import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import SidebarSection from "../../components/sidebar/SidebarSection";
import CoursesSidebar from "../../components/sidebar/CoursesSidebar";
import {useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Comments from "../../components/comments/Comments";
import {getLatestCourses} from "../../http/graphql/CourseGQL";
import {gql, useQuery} from "@apollo/client";
import {Interweave} from "interweave";
import {
    getEventComments,
} from "../../http/graphql/CommentGQL";
import PageLoader from "../../components/loader/PageLoader";
import {Context} from "../../index";
import {getCurrentEvents, getSmallEvents} from "../../http/graphql/EventGQL";
import BlogCommentForm from "../../components/forms/BlogCommentForm";
import CommentLoader from "../../components/loader/CommentLoader";
import {EVENT_TYPE} from "../../utils/consts";
import {faClock, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import NewsSidebar from "../../components/sidebar/NewsSidebar";
import {getSmallNews} from "../../http/graphql/NewsGQL";
import EventsSidebar from "../../components/sidebar/EventsSidebar";
import ErrorQuery from "../../components/errors/ErrorQuery";

const CurrentEvent = () => {
    const params = useParams();
    const context = useContext(Context);
    const {user, setVisibleAuthForm} = context;

    const currentEventQuery = getCurrentEvents();
    const newCoursesQuery = getLatestCourses();
    const commentCourseQuery = getEventComments();
    const newNewsQuery = getSmallNews();
    const newEventQuery = getSmallEvents();

    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const resultQuery = gql`
        query CurrentEventPage($currentEventId: ID!,
                               $eventId: String, $afterEventComment: String,
                               $firstLatestCourse: Int,
                               $firstNews: Int, $afterNews: String,
                               $firstEvent: Int, $afterEvent: String,
                               ) {
            ${currentEventQuery}
            ${commentCourseQuery}
            ${newCoursesQuery}
            ${newNewsQuery}
            ${newEventQuery}
        }
    `;
    const {error, loading, data, refetch, fetchMore} = useQuery(resultQuery, {
        variables: {
            currentEventId: params.id,
            eventId: params.id,
            firstLatestCourse: 4,
            firstNews: 4,
            firstEvent: 4,
        }
    });

    useEffect(() => {
        if (data !== undefined) {
            context.setLastBreadcrumbs(data.event.title);
        } else {
            context.setLastBreadcrumbs('');
        }
    });

    const updateEventComments = () => {
        refetch({
            eventId: params.id,
        });
    }

    const loadMoreEventComments = async () => {
        setIsLoadingMore(true);
        await fetchMore({
            variables: {
                afterEventComment: data.allEventComments.pageInfo.endCursor
            }
        });
        setIsLoadingMore(false);
    }

    if (error) {
        return <ErrorQuery/>;
    }

    return (
        <div className="blog">
            <Container>
                {
                    loading ?
                        <PageLoader/> :
                        <Row>
                            <Col className="col-lg-8">
                                <div className="blog_content">
                                    <div className="blog_title">
                                        {data.event.title}
                                    </div>
                                    <div className="blog_image">
                                        <Image src={data.event.preview}
                                               className="w-100"/>
                                    </div>
                                    <div className="blog_meta d-flex align-items-center">
                                        <div className="event_date" style={{
                                            minWidth: 60,
                                            height: 60,
                                            background: "#14bdee",
                                        }}>
                                            <div
                                                className="d-flex flex-column align-items-center justify-content-center trans_200">
                                                <div className="event_day"
                                                     style={{
                                                         color: "#ffffff",
                                                     }}>
                                                    {new Date(data.event.date).getDate()} / {new Date(data.event.date).getMonth() + 1}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column ms-2">
                                            <div className="event_info d-flex align-items-center">
                                                <FontAwesomeIcon icon={faClock}
                                                                 style={{
                                                                     width: 20,
                                                                     height: 20,
                                                                 }}/>
                                                <span style={{fontSize: 18}}>
                                                    {data.event.startTime} -
                                                    {data.event.endTime}
                                                </span>
                                            </div>
                                            <div className="event_info d-flex align-items-center">
                                                <FontAwesomeIcon icon={faMapMarker}
                                                                 style={{
                                                                     width: 20,
                                                                     height: 20
                                                                 }}/>
                                                <span style={{fontSize: 18}}>
                                                    {data.event.place}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="blog_body">
                                        <Interweave
                                            content={data.event.description}/>
                                    </div>
                                </div>

                                <div className="comments_container">
                                    <div className="add_comment_container">
                                        <div className="add_comment_title">
                                            Написать комментарий
                                        </div>
                                        {
                                            user.isAuth ?
                                                <BlogCommentForm
                                                    data={{
                                                        commented_id: params.id,
                                                        type: EVENT_TYPE,
                                                    }}
                                                    func={{
                                                        refetchData: updateEventComments
                                                    }}/> :
                                                <div
                                                    className="courses_button trans_200"
                                                    onClick={() => setVisibleAuthForm(true)}>
                                                    <div>
                                                        Войти
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    <div className="comments_title">
                                        Комментариев: <span>{data.allEventComments.totalCount}</span>
                                    </div>
                                    <ul className="comments_list">
                                        {
                                            data.allEventComments.edges.map(({node}) =>
                                                <Comments key={node.id}
                                                          data={node}/>
                                            )
                                        }
                                        {
                                            isLoadingMore ?
                                                <CommentLoader/> :
                                                <>
                                                    {
                                                        data.allEventComments.pageInfo.hasNextPage &&
                                                        <div
                                                            className="courses_button trans_200"
                                                            onClick={() => loadMoreEventComments()}>
                                                            Загрузить ещё
                                                        </div>
                                                    }
                                                </>
                                        }
                                    </ul>
                                </div>
                            </Col>

                            <div className="col-lg-4">
                                <div className="sidebar_current_course">
                                    <SidebarSection section={{
                                        title: "Новые курсы",
                                        body: <CoursesSidebar data={data.latestCourses}/>
                                    }}/>
                                    <SidebarSection section={{
                                        title: "Последние новости",
                                        body: <NewsSidebar data={data.allNews}/>
                                    }}/>
                                    <SidebarSection section={{
                                        title: "Предстоящие события",
                                        body: <EventsSidebar data={data.allEvents}/>
                                    }}/>
                                </div>
                            </div>
                        </Row>
                }
            </Container>
        </div>
    );
};

export default CurrentEvent;