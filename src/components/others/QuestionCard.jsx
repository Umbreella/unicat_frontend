import React from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import QuestionsForm from "../forms/QuestionsForm";
import Countdown from "react-countdown";


const QuestionCard = (props) => {
    const {attempt} = props.data;

    console.log(attempt);

    const Completionist = () => <span>You are good to go!</span>;

    const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return <span className="ms-1 fs-5">{hours}:{minutes}:{seconds}</span>;
        }
    };

    return (
        <>
            {
                attempt.timeEnd &&
                <div style={{color: "#384158", fontSize: 15}}>
                    До завершения теста осталось:
                    <Countdown date={attempt.timeEnd} renderer={renderer}/>
                </div>
            }

            {
                // countQuestion !== lesson.questions.length ?
                //     <ReactCSSTransitionGroup
                //         className="container"
                //         component="div"
                //         transitionName="fade"
                //         transitionEnterTimeout={800}
                //         transitionLeaveTimeout={500}
                //         transitionAppearTimeout={500}>
                //         <div>
                //             <div>
                //                 Вопрос: {countQuestion + 1} из {lesson.questions.length}
                //             </div>
                //
                //             <QuestionsForm
                //                 data={{question: lesson.questions[countQuestion],}}
                //                 func={{viewNextQuestion: next_question}}
                //             />
                //         </div>
                //     </ReactCSSTransitionGroup> :
                //     <div> Тест окончен </div>
            }
        </>
    );
};

export default QuestionCard;