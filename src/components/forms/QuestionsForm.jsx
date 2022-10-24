import React from 'react';
import {Card, Form} from "react-bootstrap";

const QuestionsForm = (props) => {
    const question = props.question;
    const next_question = props.next_question;

    return (
        <Card>
            <Card.Body>
                <Form>
                    <Form.Label>
                        {question.body}
                    </Form.Label>
                    {
                        question.options.map((value, index, array) =>
                            <Form.Check
                                key={index}
                                type={question.count_options === 1 ? "radio" : "checkbox"}
                                id={value.body}
                                label={value.body}
                                name={"options"}
                            />
                        )
                    }
                    <div className="courses_button w-25 mt-3 ms-0"
                         onClick={next_question}>
                        <div>
                            Ответить
                        </div>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default QuestionsForm;