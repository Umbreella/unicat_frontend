import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {NavLink, useNavigate} from "react-router-dom";
import {ENTER_EMAIL, RESET_PASSWORD} from "../../utils/consts";
import {object, string} from "yup";
import {Formik} from "formik";
import {postEmailForResetPassword} from "../../http/api/UserApi";
import HorizontalLoader from "../loader/HorizontalLoader";

const EmailForm = (props) => {
    const setIsSuccess = props.func;
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (data) => {
        setIsSending(true);

        const request_data = {
            email: data.email,
        }

        const response = await postEmailForResetPassword(request_data);

        if (response.status === 201) {
            setIsSuccess(true);
        }

        setIsSending(false);
    }

    const schema = object().shape({
        email: string()
            .email("Неверный email")
            .max(128, "Email должен быть не больше 128 символов")
            .required("Email является обязательным полем"),
    });

    return (
        <Formik initialValues={{email: ''}}
                onSubmit={sendEmail}
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
                                Мы отправим на неё письмо с инструкциями по
                                восстановлению доступа
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
                        {
                            isSending ?
                                <div className="m-4">
                                    <HorizontalLoader/>
                                </div> :
                                <Button type="submit" className="comment_button w-100">
                                    Войти
                                </Button>
                        }
                    </Form>
                )
            }
        </Formik>
    );
};

export default EmailForm;