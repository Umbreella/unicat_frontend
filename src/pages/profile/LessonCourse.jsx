import React, {useState} from 'react';
import ReactMarkdown from "react-markdown";
import {Col, Container, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import QuestionsForm from "../../components/forms/QuestionsForm";

const LessonCourse = () => {
    const lesson = {
        title: "Введение",
        type_lesson: "test",
        body: "" +
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas " +
            "porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, " +
            "purus lectus malesuada libero, sit amet commodo magna eros quis urna.\n\n" +
            "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.\n\n" +
            "Pellentesque habitant morbi tristique senectus et netus et malesuada " +
            "fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.\n\n" +
            "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.\n\n" +
            "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis," +
            " nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.\n\n"
    }

    const questions = [
        {
            body: "111111 Lorem ipsum dolor sit amet, consectetuer" +
                " adipiscing elit. Maecenas " +
                "porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, " +
                "purus lectus malesuada libero, sit amet commodo magna eros" +
                " quis urna.",
            count_options: 2,
            options: [
                {
                    id: 1,
                    body: "Да"
                },
                {
                    id: 2,
                    body: "Нет"
                },
                {
                    id: 3,
                    body: "Не знаю"
                }
            ]
        },
        {
            body: "222222 Lorem ipsum dolor sit amet, consectetuer" +
                " adipiscing elit. Maecenas " +
                "porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, " +
                "purus lectus malesuada libero, sit amet commodo magna eros" +
                " quis urna.",
            count_options: 1,
            options: [
                {
                    id: 1,
                    body: "Да"
                },
                {
                    id: 2,
                    body: "Нет"
                },
                {
                    id: 3,
                    body: "Не знаю"
                }
            ]
        },
        {
            body: "222222 Lorem ipsum dolor sit amet, consectetuer" +
                " adipiscing elit. Maecenas " +
                "porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, " +
                "purus lectus malesuada libero, sit amet commodo magna eros" +
                " quis urna.",
            count_options: 3,
            options: [
                {
                    id: 1,
                    body: "Да"
                },
                {
                    id: 2,
                    body: "Нет"
                },
                {
                    id: 3,
                    body: "Не знаю"
                }
            ]
        },
        {
            body: "222222 Lorem ipsum dolor sit amet, consectetuer" +
                " adipiscing elit. Maecenas " +
                "porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, " +
                "purus lectus malesuada libero, sit amet commodo magna eros" +
                " quis urna.",
            count_options: 1,
            options: [
                {
                    id: 1,
                    body: "Да"
                },
                {
                    id: 2,
                    body: "Нет"
                },
                {
                    id: 3,
                    body: "Не знаю"
                }
            ]
        }
    ]

    const [count_question, set_countQuestion] = useState(0);

    const next_question = () => {
        set_countQuestion(count_question + 1);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="single_course_title text-center"
                         style={{
                             padding: "30px 0" }}>
                        {lesson.title}
                    </div>

                    <div className="lesson">
                        {
                            Math.random() > 1 ?
                                <ReactMarkdown children={eval('`' + lesson.body + '`')} /> :

                                count_question !== questions.length ?
                                    <ReactCSSTransitionGroup className="container"
                                                             component="div"
                                                             transitionName="fade"
                                                             transitionEnterTimeout={800}
                                                             transitionLeaveTimeout={500}
                                                             transitionAppearTimeout={500} >
                                        <div key={count_question}>
                                            <div>
                                                Вопрос: {count_question + 1} из {questions.length}
                                            </div>

                                            <QuestionsForm question={questions[count_question]}
                                                           next_question={next_question}/>
                                        </div>
                                    </ReactCSSTransitionGroup> :

                                    <div>
                                        Тест окончен
                                    </div>
                        }
                    </div>
                </Col>
            </Row>

            <Row style={{ paddingTop: 30 }}>
                <Col className="col-6">
                    <div className="d-flex flex-row">
                        <div className="courses_button w-50 mt-3 ms-0">
                            <NavLink to="#">
                                Предыдущий урок
                            </NavLink>
                        </div>
                    </div>
                </Col>

                <Col className="col-6">
                    <div className="d-flex flex-row-reverse">
                        <div className="courses_button w-50 mt-3 me-0">
                            <NavLink to="#">
                                Следующий урок
                            </NavLink>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default LessonCourse;