import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import SidebarSection from "../../components/sidebar/SidebarSection";
import CoursesSidebar from "../../components/sidebar/CoursesSidebar";
import {NavLink, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGoogle,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import Comments from "../../components/comments/Comments";
import {getLatestCourses} from "../../http/graphql/CourseGQL";
import {gql, useQuery} from "@apollo/client";
import {Interweave} from "interweave";
import {
    getEventComments,
} from "../../http/graphql/CommentGQL";
import PageLoader from "../../components/loader/PageLoader";
import {Context} from "../../index";
import {getCurrentEvents} from "../../http/graphql/EventGQL";
import BlogCommentForm from "../../components/forms/BlogCommentForm";
import CommentLoader from "../../components/loader/CommentLoader";
import GallerySidebar from "../../components/sidebar/GallerySidebar";
import TagsSidebar from "../../components/sidebar/TagsSidebar";
import DownloadSidebar from "../../components/sidebar/DownloadSidebar";
import {EVENT_TYPE} from "../../utils/consts";
import {faClock, faMapMarker} from "@fortawesome/free-solid-svg-icons";

const CurrentEvent = () => {
    const params = useParams();
    const context = useContext(Context);
    const {user, setVisibleAuthForm} = context;

    const currentEventQuery = getCurrentEvents();
    const newCoursesQuery = getLatestCourses();
    const commentCourseQuery = getEventComments();

    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const resultQuery = gql`
        query CurrentEventPage($currentEventId: ID!,
                               $eventId: String, $afterEventComment: String,
                               $firstLatestCourse: Int) {
            ${currentEventQuery}
            ${commentCourseQuery}
            ${newCoursesQuery}
        }
    `;
    const {loading, data, refetch, fetchMore} = useQuery(resultQuery, {
        variables: {
            currentEventId: params.id,
            eventId: params.id,
            firstLatestCourse: 4,
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
                                            width: 60,
                                            height: 60,
                                            background: "#14bdee",
                                        }}>
                                            <div
                                                className="d-flex flex-column align-items-center justify-content-center trans_200">
                                                <div className="event_day"
                                                     style={{
                                                         color: "#ffffff"
                                                     }}>
                                                    {1} / {1}
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

                                    <Interweave
                                        content={data.event.description}/>
                                </div>
                                <div
                                    className="blog_extra d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                                    <div className="blog_social ml-lg-auto">
                                        <span>Поделиться: </span>
                                        <ul>
                                            <li>
                                                <NavLink to="#">
                                                    <FontAwesomeIcon
                                                        icon={faFacebook}/>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="#">
                                                    <FontAwesomeIcon
                                                        icon={faTwitter}/>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="#">
                                                    <FontAwesomeIcon
                                                        icon={faGoogle}/>
                                                </NavLink>
                                            </li>
                                        </ul>
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
                                        Комментариев: <span>30</span>
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
                                        title: "Instagram",
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
    );
};

export default CurrentEvent;