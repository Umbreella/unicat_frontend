import React, {useContext, useEffect, useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import SidebarSection from "../../components/sidebar/SidebarSection";
import CoursesSidebar from "../../components/sidebar/CoursesSidebar";
import {useParams} from "react-router-dom";
import Comments from "../../components/comments/Comments";
import {getLatestCourses} from "../../http/graphql/CourseGQL";
import {gql, useQuery} from "@apollo/client";
import {getCurrentNews, getSmallNews} from "../../http/graphql/NewsGQL";
import {Interweave} from "interweave";
import {getNewsComments} from "../../http/graphql/CommentGQL";
import PageLoader from "../../components/loader/PageLoader";
import {Context} from "../../index";
import BlogCommentForm from "../../components/forms/BlogCommentForm";
import {NEWS_TYPE} from "../../utils/consts";
import CommentLoader from "../../components/loader/CommentLoader";
import NewsSidebar from "../../components/sidebar/NewsSidebar";
import EventsSidebar from "../../components/sidebar/EventsSidebar";
import {getSmallEvents} from "../../http/graphql/EventGQL";
import ErrorQuery from "../../components/errors/ErrorQuery";

const CurrentNews = () => {
    const params = useParams();
    const context = useContext(Context);
    const {user, setVisibleAuthForm} = context;

    const currentNewsQuery = getCurrentNews();
    const newCoursesQuery = getLatestCourses();
    const commentCourseQuery = getNewsComments();
    const newNewsQuery = getSmallNews();
    const newEventQuery = getSmallEvents();

    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const resultQuery = gql`
        query CurrentBlogPage($currentNewsId: ID!,
                              $newsId: String, $afterNewsComment: String,
                              $firstLatestCourse: Int,
                              $firstNews: Int, $afterNews: String,
                              $firstEvent: Int, $afterEvent: String,
                              ) {
            ${currentNewsQuery}
            ${commentCourseQuery}
            ${newCoursesQuery}
            ${newNewsQuery}
            ${newEventQuery}
        }
    `;

    const {error, loading, data, refetch, fetchMore} = useQuery(resultQuery, {
        variables: {
            currentNewsId: params.id,
            newsId: params.id,
            firstLatestCourse: 4,
            firstNews: 4,
            firstEvent: 4,
        }
    });

    useEffect(() => {
        if (data !== undefined) {
            context.setLastBreadcrumbs(data.news.title);
        } else {
            context.setLastBreadcrumbs('');
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
                                        {data.news.title}
                                    </div>
                                    <div className="blog_meta">
                                        <ul>
                                            <li>{data.news.createdAt}</li>
                                            <li>{data.news.author}</li>
                                        </ul>
                                    </div>
                                    <div className="blog_image">
                                        <Image src={data.news.preview}
                                               className="w-100"/>
                                    </div>
                                    <div className="blog_text">
                                        <Interweave
                                            content={data.news.description}/>
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
                                                        type: NEWS_TYPE,
                                                    }}
                                                    func={{
                                                        refetchData: updateNewsComments
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
                                        Комментариев: <span>{data.allNewsComments.totalCount}</span>
                                    </div>
                                    <ul className="comments_list">
                                        {
                                            data.allNewsComments.totalCount === 0 &&
                                            <div className="text-center mt-4"
                                                 style={{fontSize: 16}}>
                                                Ваш комментарий будет первым
                                            </div>
                                        }
                                        {
                                            data.allNewsComments.edges.map(({node}) =>
                                                <Comments key={node.id}
                                                          data={node}/>
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
                                        body: <CoursesSidebar
                                            data={data.latestCourses}/>
                                    }}/>
                                    <SidebarSection section={{
                                        title: "Последние новости",
                                        body: <NewsSidebar
                                            data={data.allNews}/>
                                    }}/>
                                    <SidebarSection section={{
                                        title: "Предстоящие события",
                                        body: <EventsSidebar
                                            data={data.allEvents}/>
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