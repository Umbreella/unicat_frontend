import React, {useRef, useState} from 'react';
import {Card, Form} from "react-bootstrap";
import {Interweave} from "interweave";
import HorizontalLoader from "../loader/HorizontalLoader";
import {postUserAnswer} from "../../http/api/AnswerApi";

const QuestionsForm = (props) => {
    const {
        attemptId,
        question: {id, body, questionType, answers}
    } = props.data;
    const {setCountAnsweredQuestion} = props.func;

    const formRef = useRef();
    const [oneAnswer, setOneAnswer] = useState(null);
    const [manyAnswer, setManyAnswer] = useState([]);
    const [freeAnswer, setFreeAnswer] = useState(null);
    const [isPosting, setIsPosting] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);

    const postAnswer = async () => {
        setIsPosting(true)

        const answer = [
            ...(oneAnswer !== null ? [oneAnswer] : []),
            ...manyAnswer,
            ...(freeAnswer !== null ? [freeAnswer] : []),
        ]
        const requestData = {
            question_id: id,
            answer: answer,
        }

        const response = await postUserAnswer({
            attemptId: attemptId,
            data: requestData,
        });

        formRef.current.reset();

        setOneAnswer(null);
        setManyAnswer([]);
        setFreeAnswer(null);

        setIsPosting(false);

        if (response.status !== 201) {
            setHasErrors(true);
            return null;
        }

        setHasErrors(false);
        setCountAnsweredQuestion();
    }

    return (
        <Card>
            <Card.Body>
                <Form ref={formRef}>
                    <Form.Label>
                        <Interweave content={body}/>
                    </Form.Label>
                    {
                        questionType === 1 &&
                        <>
                            {
                                answers.map((value, index) =>
                                    <Form.Check
                                        type='radio'
                                        name='radio'
                                        key={value.id}
                                        id={value.id}
                                        label={value.value}
                                        onClick={({target}) => setOneAnswer(target.id)}
                                    />
                                )
                            }
                        </>
                    }
                    {
                        questionType === 2 &&
                        <>
                            {
                                answers.map((value, index) =>
                                    <Form.Check
                                        type='checkbox'
                                        name='checkbox'
                                        key={value.id}
                                        id={value.id}
                                        label={value.value}
                                        onClick={({target}) => {
                                            if (target.checked) {
                                                setManyAnswer([...manyAnswer, target.id])
                                            } else {
                                                setManyAnswer(manyAnswer.filter((item) => item != target.id))
                                            }
                                        }}
                                    />
                                )
                            }
                        </>
                    }
                    {
                        questionType === 3 &&
                        <Form.Control type="text"
                                      onChange={({target}) => setFreeAnswer(target.value)}/>
                    }
                    {
                        isPosting ?
                            <div className="w-25 mt-4 mb-4">
                                <HorizontalLoader/>
                            </div> :
                            <>
                                {
                                    hasErrors ?
                                        <div className="mt-3 mb-3"
                                             style={{color: "red"}}>
                                            Произошла ошибка, попробуйте позже
                                        </div> :
                                        <>
                                            {
                                                (oneAnswer !== null || manyAnswer.length !== 0 || freeAnswer !== null) ?
                                                    <div
                                                        className="courses_button w-25 mt-3 ms-0"
                                                        onClick={postAnswer}>
                                                        <div>
                                                            Ответить
                                                        </div>
                                                    </div> :
                                                    <div className="mt-5">
                                                    </div>
                                            }
                                        </>

                                }
                            </>
                    }
                </Form>
            </Card.Body>
        </Card>
    );
};

export default QuestionsForm;