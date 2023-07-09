import React, {
    forwardRef,
    useContext,
    useEffect, useImperativeHandle,
    useReducer,
    useRef,
    useState
} from 'react';
import {Card, Col, Container, Row, Table} from "react-bootstrap";
import {useLocation, useParams} from "react-router-dom";
import {Context} from "../../index";
import {gql, useLazyQuery, useQuery} from "@apollo/client";
import {Interweave} from "interweave";
import {
    createActiveAttempt,
    getActiveAttempt
} from "../../http/api/AttemptApi";
import {
    getCurrentLesson, getPrivateLessons,
} from "../../http/graphql/LessonsGQL";
import HorizontalLoader from "../../components/loader/HorizontalLoader";
import {postLessonComplete} from "../../http/api/LessonApi";
import Attempt from "../../components/questions/Attempt";
import TableAttempts from "../../components/tables/TableAttempts";
import {getMyAttempts} from "../../http/graphql/AttemptsGQL";

const LessonCourse = () => {
    const lessonPageRef = useRef();
    const {courseId, id} = useParams();
    const {pathname} = useLocation();
    const {setCourseMenuItems} = useContext(Context);
    const [activeAttempt, setActiveAttempt] = useState();
    const [isNewAttempt, setIsNewAttempt] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    let isPosted = false;

    const courseMenuItemsQuery = getPrivateLessons();
    const lessonQuery = getCurrentLesson();
    const resultQuery = gql`
        query LessonPage($courseId: String!, 
                         $lessonId: ID!) {
            ${courseMenuItemsQuery}
            ${lessonQuery}
        }
    `;
    const {loading, data, error} = useQuery(resultQuery, {
        variables: {
            courseId: courseId,
            lessonId: id,
            attemptLessonId: id,
        },
    });

    const myAttemptsQuery = getMyAttempts();
    const resultQueryAttempt = gql`
            query LessonPageMyAttempts($attemptLessonId: String!, $firstUserAttempt: Int, $afterUserAttempt: String) {
                ${myAttemptsQuery}
            }
        `;
    const [loadAttempts, {
        loading: loadingAttempt,
        data: dataMyAttempts,
        refetch: refetchAttempt,
        fetchMore: fetchMoreAttempt,
    }] = useLazyQuery(resultQueryAttempt, {
        variables: {
            attemptLessonId: id,
            firstUserAttempt: 10,
        },
    });

    useEffect(() => {
        if (data?.lesson.lessonType === "test") {
            updateLessonPage();
        }
    }, [pathname]);

    const updateLessonPage = () => {
        setActiveAttempt(undefined);
        refetchAttempt();
    }

    useEffect(() => {
        const lessonPage = lessonPageRef.current;
        const profilePage = lessonPage.offsetParent.offsetParent;

        if (data !== undefined) {
            setCourseMenuItems({
                courseId: courseId,
                lessons: data.lessonsWithProgress,
            });

            if (lessonPage.clientHeight <= profilePage.clientHeight) {
                postCompleteAndChangeIsPosted();
            }

            if (data.lesson.lessonType === "Тест") {
                loadAttempts();
            }
        }
        const postCompleteListener = (
            {target: {scrollTop, scrollHeight, clientHeight}}
        ) => {
            if (Math.round(scrollTop + clientHeight) === scrollHeight) {
                postCompleteAndChangeIsPosted();
            }
        };

        profilePage.addEventListener('scroll', postCompleteListener);
        return () => {
            profilePage.removeEventListener('scroll', postCompleteListener);
        };
    }, [data]);

    const postCompleteAndChangeIsPosted = async () => {
        if (data?.lesson?.lessonType !== 'Теория' || data?.lesson?.isCompleted || isPosted)
            return;

        const response = await postLessonComplete(id);
        isPosted = true;
    }

    const checkActiveAttempt = async () => {
        let response = await getActiveAttempt(id);
        if (response.status !== 200) {
            return;
        }

        if (response.data?.data === "No active attempt.") {
            response = await createActiveAttempt(id);
            if (response.status === 201) {
                setIsNewAttempt(true);
                setActiveAttempt(response.data);
            }
        } else {
            setActiveAttempt(response.data);
        }
    }

    const loadMoreMyAttempts = async () => {
        setIsLoading(true);
        await fetchMoreAttempt({
            variables: {
                afterUserAttempt: dataMyAttempts.myAttempts.pageInfo.endCursor,
            },
        });
        setIsLoading(false);
    }

    return (
        <div ref={lessonPageRef}>
            {
                loading ?
                    <div className="d-flex align-items-center"
                         style={{minHeight: "50vh"}}>
                        <HorizontalLoader/>
                    </div> :
                    <Container>
                        <Row>
                            <Col>
                                <div
                                    className="single_course_title text-center"
                                    style={{
                                        padding: "30px 0"
                                    }}>
                                    {data.lesson.title}
                                </div>

                                <div className="lesson"
                                     style={{
                                         fontSize: 16,
                                     }}>
                                    {
                                        data.lesson.lessonType === "Тема" &&
                                        <Interweave
                                            content={data.lesson.description}/>
                                    }
                                    {
                                        data.lesson.lessonType === "Теория" &&
                                        <Interweave
                                            content={data.lesson.body}/>
                                    }
                                    {
                                        data.lesson.lessonType === "Тест" &&
                                        <>
                                            {
                                                activeAttempt === undefined ?
                                                    <div
                                                        className="d-flex flex-column align-items-center">
                                                        <p>
                                                            {data.lesson.description}
                                                        </p>
                                                        <p>
                                                            Всего
                                                            вопросов: {data.lesson.countQuestions}
                                                        </p>
                                                        {
                                                            data.lesson.timeLimit &&
                                                            <p>
                                                                Время на
                                                                выполнение: {data.lesson.timeLimit}
                                                            </p>
                                                        }
                                                        <div
                                                            className="courses_button mt-3"
                                                            onClick={() => checkActiveAttempt()}>
                                                            <div>
                                                                Начать
                                                            </div>
                                                        </div>
                                                        <Card
                                                            className="mt-5 w-100">
                                                            <Card.Body>
                                                                <Card.Title>
                                                                    Список
                                                                    результатов
                                                                </Card.Title>
                                                                <TableAttempts
                                                                    data={{
                                                                        loading: loadingAttempt,
                                                                        data: dataMyAttempts,
                                                                        isLoading: isLoading,
                                                                    }}
                                                                    func={{
                                                                        fetchMore: loadMoreMyAttempts,
                                                                    }}/>
                                                            </Card.Body>
                                                        </Card>
                                                    </div> :
                                                    <Attempt data={{
                                                        lessonId: id,
                                                        countAllQuestions: data.lesson.countQuestions,
                                                        isNewAttempt: isNewAttempt,
                                                        activeAttempt: activeAttempt,
                                                    }} func={{
                                                        updateLesson: updateLessonPage,
                                                    }}/>
                                            }
                                        </>
                                    }
                                </div>
                            </Col>
                        </Row>
                    </Container>
            }
        </div>
    );
};

export default LessonCourse;