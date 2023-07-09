import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {object, string} from "yup";
import {NavLink} from "react-router-dom";
import {ENTER_EMAIL} from "../../utils/consts";
import {Formik} from "formik";
import HorizontalLoader from "../loader/HorizontalLoader";
import {postFeedback} from "../../http/api/FeedbackApi";

const ContactForm = () => {
    const [isSending, setIsSending] = useState(false);
    const [isCreated, setIsCreated] = useState(false);

    const sendFeedback = async (data, actions) => {
        setIsSending(true);

        const response = await postFeedback(data);

        if (response.status === 201) {
            setIsCreated(true);
        }

        setIsSending(false);
    }

    const schema = object().shape({
        name: string()
            .max(255, "ФИО должно быть не более 255 символов")
            .required("ФИО является обязательным полем"),
        email: string()
            .email("Неверный email")
            .max(128, "Email должен быть не больше 128 символов")
            .required("Email является обязательным полем"),
        body: string()
            .required("Сообщение является обязательным полем"),
    });

    return (
        <Formik initialValues={{name: '', email: ''}}
                onSubmit={sendFeedback}
                validationSchema={schema}>
            {
                ({
                     handleSubmit,
                     handleChange,
                     values,
                     touched,
                     errors,
                 }) => (
                    <Form className="auth_form comment_form"
                          validated={false}
                          onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label className="form_title">
                                ФИО:
                            </Form.Label>
                            <Form.Control className="comment_input"
                                          type="text"
                                          id="name"
                                          placeholder="Введите ФИО"
                                          value={values.name}
                                          onChange={handleChange}
                                          isValid={touched.name && !errors.name}
                                          isInvalid={!!errors.name}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form_title">
                                Email:
                            </Form.Label>
                            <Form.Control className="comment_input"
                                          type="email"
                                          id="email"
                                          placeholder="Введите email"
                                          value={values.email}
                                          onChange={handleChange}
                                          isValid={touched.email && !errors.email}
                                          isInvalid={!!errors.email}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form_title">
                                Сообщение:
                            </Form.Label>
                            <Form.Control as="textarea" rows={5}
                                          placeholder="Введите сообщение"
                                          id="body"
                                          value={values.body}
                                          onChange={handleChange}
                                          isValid={touched.body && !errors.body}
                                          isInvalid={!!errors.body}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.body}
                            </Form.Control.Feedback>
                        </Form.Group>
                        {
                            isSending ?
                                <div className="mt-5 mb-4">
                                    <HorizontalLoader/>
                                </div> :
                                <>
                                    {
                                        isCreated ?
                                            <div className="text-center" style={{fontSize: 18, color: "#384158"}}>
                                                Успешно
                                            </div> :
                                            <Button type="submit" className="comment_button w-100">
                                                Отправить
                                            </Button>
                                    }
                                </>
                        }
                    </Form>
                )
            }
        </Formik>
    );
};

export default ContactForm;