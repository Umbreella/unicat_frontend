import React, {useEffect, useState} from 'react';
import {Col, Row} from "react-bootstrap";
import Countdown from "react-countdown";
import {refreshActiveAttempt} from "../../http/api/AttemptApi";
import {useLazyQuery} from "@apollo/client";
import {getQuestionsByAttempt} from "../../http/graphql/QuestionsGQL";
import HorizontalLoader from "../loader/HorizontalLoader";
import QuestionsForm from "../forms/QuestionsForm";

const Attempt = (props) => {
    const {lessonId, countAllQuestions, isNewAttempt, activeAttempt} = props.data;
    const {updateLesson} = props.func;
    const [currentAttempt, setCurrentAttempt] = useState(activeAttempt);
    const [canContinueAttempt, setCanContinueAttempt] = useState(!isNewAttempt);
    const [countAnsweredQuestion, setCountAnsweredQuestion] = useState(currentAttempt.count_answered_questions)
    const [attemptIsEnd, setAttemptIsEnd] = useState(false);

    const resultQuery = getQuestionsByAttempt();
    const [loadQuestion, {loading, data, error}] = useLazyQuery(resultQuery, {
        variables: {
            attemptId: activeAttempt.id,
        },
    })

    const restartAttempt = async () => {
        const response = await refreshActiveAttempt({
            lessonId: lessonId,
            data: {
                attempt_id: activeAttempt?.id,
            },
        })

        if (response.status === 201) {
            setCurrentAttempt(response.data);
            startLoadQuestions();
        }
    }

    const startLoadQuestions = () => {
        setCanContinueAttempt(false);
    }

    useEffect(() => {
        if (!canContinueAttempt) {
            loadQuestion()
        }
    }, [canContinueAttempt])

    const viewNextQuestion = () => {
        if (countAllQuestions === countAnsweredQuestion + 1) {
            setAttemptIsEnd(true);
        } else {
            setCountAnsweredQuestion(countAnsweredQuestion + 1);
        }
    }

    return (
        <Col className="col-xl-7 col-lg-8 col-md-10 col-12 m-auto">
            {
                attemptIsEnd ?
                    <div className="text-center">
                        <p>
                            Тест окончен
                        </p>
                        <div className="courses_button mt-3"
                             onClick={updateLesson}>
                            <div>
                                Посмотреть результат
                            </div>
                        </div>
                    </div> :
                    <>
                        {
                            currentAttempt.time_end &&
                            <p>
                                Оставшееся время:
                                <Countdown
                                    date={currentAttempt.time_end}
                                    renderer={
                                        ({
                                             hours,
                                             minutes,
                                             seconds,
                                             completed
                                         }) => {
                                            if (completed) {
                                                setAttemptIsEnd(true);
                                            } else {
                                                const minutes_str = String(minutes).padStart(2, '0');
                                                const seconds_str = String(seconds).padStart(2, '0');

                                                return <span> {hours}:{minutes_str}:{seconds_str} </span>;
                                            }
                                        }
                                    }/>
                            </p>
                        }
                        <p className="mb-4">
                            Вопросов отвечено: <span>
                                {countAnsweredQuestion} / {countAllQuestions}
                            </span>
                        </p>
                        {
                            canContinueAttempt ?
                                <>
                                    <p className="text-center mt-5">
                                        У вас осталась незавершенная попытка.
                                        Хотите продолжить или начать заново?
                                    </p>
                                    <Row>
                                        <div className="courses_button mt-3"
                                             onClick={startLoadQuestions}>
                                            <div>
                                                Продолжить
                                            </div>
                                        </div>
                                        <div className="courses_button mt-3"
                                             onClick={restartAttempt}>
                                            <div>
                                                Начать заново
                                            </div>
                                        </div>
                                    </Row>
                                </> :
                                <>
                                    {
                                        loading || data === undefined ?
                                            <>
                                                <HorizontalLoader/>
                                            </> :
                                            <QuestionsForm
                                                data={{
                                                    attemptId: currentAttempt.id,
                                                    question: data.questions[Math.abs(countAllQuestions - countAnsweredQuestion - data.questions.length)],
                                                }}
                                                func={{
                                                    setCountAnsweredQuestion: viewNextQuestion,
                                                }}/>
                                    }
                                </>
                        }
                    </>
            }
        </Col>
    );
};

export default Attempt;