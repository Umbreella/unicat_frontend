import React, {useContext, useState} from 'react';
import StarDivBar from "../reviews/StarDivBar";
import Comments from "../comments/Comments";
import {Container, Row} from "react-bootstrap";
import {Rating} from 'react-simple-star-rating'
import CourseCommentForm from "../forms/CourseCommentForm";
import HorizontalLoader from "../loader/HorizontalLoader";
import CommentLoader from "../loader/CommentLoader";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import ErrorLazyQuery from "../errors/ErrorLazyQuery";


const ReviewsCourse = observer((props) => {
    const {
        course, query: {error, loading, data, refetch, fetchMore}
    } = props.data;
    const {user, setVisibleAuthForm} = useContext(Context);

    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const updateCourseComments = () => {
        refetch({
            courseId: course.id,
            statisticCourseId: course.id,
        });
    }

    const loadMoreComments = async () => {
        setIsLoadingMore(true);
        await fetchMore({
            variables: {
                afterCourseComments: data.allCourseComments.pageInfo.endCursor
            }
        });
        setIsLoadingMore(false);
    }

    if (error) {
        return <ErrorLazyQuery/>
    }

    if (loading) {
        return <HorizontalLoader/>
    }

    const rating = data?.statistic;

    return (
        <>
            <div className="tab_panel_title">
                Отзывы о курсе "{course.title}"
            </div>
            {
                rating &&
                    <Container className="review_rating_container">
                        <Row>
                            <div className="review_rating col-md-4">

                                <div className="review_rating_num">
                                    {rating.avgRating}
                                </div>
                                <div className="review_rating_stars">
                                    <Rating initialValue={rating.avgRating}
                                            allowFraction={true}
                                            readonly={true}
                                            size={25} allowTitleTag={false}/>
                                </div>
                                <div className="review_rating_text">
                                    (Отзывов: {rating.countComments})
                                </div>
                            </div>

                            <div
                                className="review_rating_bars col-md-8 ps-md-4">
                                <ul>

                                    <StarDivBar rateBar={{
                                        title: '5',
                                        width: rating.countComments !== 0 ?
                                            rating.countFiveRating / rating.countComments * 100 + '%' :
                                            '0%'
                                    }}/>
                                    <StarDivBar rateBar={{
                                        title: '4',
                                        width: rating.countComments !== 0 ?
                                            rating.countFourRating / rating.countComments * 100 + '%' :
                                            '0%'
                                    }}/>
                                    <StarDivBar rateBar={{
                                        title: '3',
                                        width: rating.countComments !== 0 ?
                                            rating.countThreeRating / rating.countComments * 100 + '%' :
                                            '0%'
                                    }}/>
                                    <StarDivBar rateBar={{
                                        title: '2',
                                        width: rating.countComments !== 0 ?
                                            rating.countTwoRating / rating.countComments * 100 + '%' :
                                            '0%'
                                    }}/>
                                    <StarDivBar rateBar={{
                                        title: '1',
                                        width: rating.countComments !== 0 ?
                                            rating.countOneRating / rating.countComments * 100 + '%' :
                                            '0%'
                                    }}/>
                                </ul>
                            </div>
                        </Row>
                    </Container>
            }

            <div className="comments_container">
                {
                    loading ?
                        <>
                            <HorizontalLoader/>
                        </> :
                        <ul className="comments_list">
                            {
                                data?.allCourseComments.edges.map(({node}) =>
                                    <Comments key={node.id} data={node}/>
                                )
                            }
                            {
                                isLoadingMore ?
                                    <CommentLoader/> :
                                    <>
                                        {
                                            data?.allCourseComments.pageInfo.hasNextPage &&
                                            <div
                                                className="courses_button trans_200"
                                                onClick={() => loadMoreComments()}>
                                                Загрузить ещё
                                            </div>
                                        }
                                    </>
                            }
                        </ul>
                }
            </div>
            <div className="add_comment_container">
                <div className="add_comment_title">Оставить отзыв</div>
                {
                    user.isAuth ?
                        <CourseCommentForm data={{
                            commented_id: course.id,
                        }}
                                           func={{
                                               refetchData: updateCourseComments,
                                           }}/> :
                        <>
                            <div className="add_comment_text">
                                Чтобы оставить отзыв, необходимо быть
                                авторизованным.
                            </div>
                            <div className="courses_button trans_200"
                                 onClick={() => setVisibleAuthForm(true)}>
                                <div>
                                    Войти
                                </div>
                            </div>
                        </>
                }
            </div>
        </>
    );
});

export default ReviewsCourse;