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
import AuthModal from "../../components/modal/AuthModal";
import {getLatestCourses} from "../../http/graphql/CourseGQL";
import {gql, useQuery} from "@apollo/client";
import {getCurrentNews} from "../../http/graphql/NewsGQL";
import {Interweave} from "interweave";
import {getNewsComments} from "../../http/graphql/CommentGQL";
import PageLoader from "../../components/loader/PageLoader";
import {Context} from "../../index";
import BlogCommentForm from "../../components/forms/BlogCommentForm";
import {EVENT_TYPE, NEWS_TYPE} from "../../utils/consts";
import CommentLoader from "../../components/loader/CommentLoader";
import GallerySidebar from "../../components/sidebar/GallerySidebar";
import TagsSidebar from "../../components/sidebar/TagsSidebar";
import DownloadSidebar from "../../components/sidebar/DownloadSidebar";

const CurrentNews = () => {
    const [isAuthUser, setIsAuthUser] = useState(false);
    const [isShowAuthForm, setIsShowAuthForm] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const params = useParams();
    const context = useContext(Context);

    const currentNewsQuery = getCurrentNews();
    const newCoursesQuery = getLatestCourses();
    const commentCourseQuery = getNewsComments();

    const resultQuery = gql`
        query CurrentBlogPage($currentNewsId: ID!,
                              $newsId: String, $afterNewsComment: String,
                              $firstLatestCourse: Int) {
            ${currentNewsQuery}
            ${commentCourseQuery}
            ${newCoursesQuery}
        }
    `;

    const {loading, data, refetch, fetchMore} = useQuery(resultQuery, {variables: {
            currentNewsId: params.id,
            newsId: params.id,
            firstLatestCourse: 4,
        }});

    useEffect(() => {
        if (data !== undefined) {
            context.setLastBreadcrumbs(data.news.title);
        }
    });

    const updateNewsComments = () => {
        refetch({
            eventId: params.id,
        });
    }

    const loadMoreNewsComments = async () => {
        setIsLoadingMore(true);
        await fetchMore({
            variables: {
                afterNewsComment: data.allNewsComments.pageInfo.endCursor
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
                                        {data.news.title}
                                    </div>
                                    <div className="blog_meta">
                                        <ul>
                                            <li>
                                                <NavLink to="#">
                                                    {data.news.createdAt}
                                                </NavLink>
                                            </li>
                                            <li>{data.news.author}</li>
                                        </ul>
                                    </div>
                                    <div className="blog_image">
                                        <Image src={data.news.preview}
                                               className="w-100"/>
                                    </div>

                                    <Interweave content={data.news.description}/>
                                </div>
                                <div
                                    className="blog_extra d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-start">
                                    <div className="blog_social ml-lg-auto">
                                        <span>Поделиться: </span>
                                        <ul>
                                            <li>
                                                <NavLink to="#">
                                                    <FontAwesomeIcon icon={faFacebook}/>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="#">
                                                    <FontAwesomeIcon icon={faTwitter}/>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="#">
                                                    <FontAwesomeIcon icon={faGoogle}/>
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
                                            isAuthUser ?
                                                <BlogCommentForm
                                                    data={{
                                                        commented_id: params.id,
                                                        type: NEWS_TYPE,
                                                    }}
                                                    func={{
                                                        refetchData: updateNewsComments
                                                    }}/> :
                                                <div className="courses_button trans_200"
                                                     onClick={() => setIsShowAuthForm(true)}>
                                                    <div>
                                                        Войти
                                                    </div>
                                                </div>
                                        }
                                        <AuthModal show={isShowAuthForm}
                                                   onHide={() => {
                                                       setIsShowAuthForm(false);
                                                       setIsAuthUser(true)
                                                   }}/>
                                    </div>
                                    <div className="comments_title">
                                        Комментариев: <span>30</span>
                                    </div>
                                    <ul className="comments_list">
                                        {
                                            data.allNewsComments.edges.map(({node}) =>
                                                <Comments key={node.id} data={node}/>
                                            )
                                        }
                                        {
                                            isLoadingMore ?
                                                <CommentLoader/> :
                                                <>
                                                    {
                                                        data.allNewsComments.pageInfo.hasNextPage &&
                                                        <div
                                                            className="courses_button trans_200"
                                                            onClick={() => loadMoreNewsComments()}>
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

export default CurrentNews;