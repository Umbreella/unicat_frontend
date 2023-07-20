import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Context} from "../../index";
import {object, string} from "yup";
import {Formik} from "formik";
import {registerUser} from "../../http/api/UserApi";
import HorizontalLoader from "../loader/HorizontalLoader";

const AuthForm = (props) => {
    const {setVisibleAuthForm} = useContext(Context);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const signUp = async (data, actions) => {
        const request_data = {
            email: data.reg_email,
            password: data.reg_password,
            first_name: data.reg_first_name,
            last_name: data.reg_last_name
        }

        setIsLoading(true);

        const response = await registerUser(request_data);

        if (response.status !== 201) {
            actions.setFieldError(
                "reg_email",
                "Невозможно использовать данный email",
            );
        } else {
            setIsSuccess(true);
        }

        setIsLoading(false);
    }

    const schema = object().shape({
        reg_email: string()
            .email('Неверный email')
            .max(128, 'Email должен быть не больше 128 символов')
            .required('Email является обязательным полем'),
        reg_password: string()
            .min(8, 'Пароль должен содержать не менее 8 символов')
            .max(128, 'Пароль должен быть не больше 128 символов')
            .required('Пароль является обязательным полем'),
        reg_first_name: string()
            .max(128, 'Имя должно быть не больше 128 символов')
            .required('Имя является обязательным полем'),
        reg_last_name: string()
            .max(128, 'Фамилия должна быть не больше 128 символов')
            .required('Фамилия является обязательным полем'),
    });

    return (
        <>
            {
                isSuccess ?
                    <>
                        <div className="form_title">
                            На ваш email было отправлено письмо. Для завершения
                            регистрации необходимо перейти по ссылке из письма.
                        </div>
                        <Button className="comment_button w-100"
                                style={{marginTop: 0}}
                                onClick={() => setVisibleAuthForm(false)}>
                            Продолжить
                        </Button>
                    </> :
                    <Formik initialValues={{
                        reg_email: '',
                        reg_password: '',
                        reg_first_name: '',
                        reg_last_name: ''
                    }}
                            onSubmit={signUp}
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
                                            Ваше имя:
                                        </Form.Label>
                                        <Form.Control className="comment_input"
                                                      type="text"
                                                      id="reg_first_name"
                                                      placeholder="Введите ваше имя"
                                                      value={values.reg_first_name}
                                                      onChange={handleChange}
                                                      isValid={touched.reg_first_name && !errors.reg_first_name}
                                                      isInvalid={!!errors.reg_first_name}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.reg_first_name}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="form_title">
                                            Ваша фамилия:
                                        </Form.Label>
                                        <Form.Control className="comment_input"
                                                      type="text"
                                                      id="reg_last_name"
                                                      placeholder="Введите вашу фамилию"
                                                      value={values.reg_last_name}
                                                      onChange={handleChange}
                                                      isValid={touched.reg_last_name && !errors.reg_last_name}
                                                      isInvalid={!!errors.reg_last_name}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.reg_last_name}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="form_title">
                                            Email:
                                        </Form.Label>
                                        <Form.Control className="comment_input"
                                                      type="email"
                                                      id="reg_email"
                                                      placeholder="Введите email"
                                                      value={values.reg_email}
                                                      onChange={handleChange}
                                                      isValid={touched.reg_email && !errors.reg_email}
                                                      isInvalid={!!errors.reg_email}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.reg_email}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="form_title">
                                            Пароль:
                                        </Form.Label>
                                        <Form.Control className="comment_input"
                                                      type="password"
                                                      id="reg_password"
                                                      placeholder="Введите пароль"
                                                      value={values.reg_password}
                                                      onChange={handleChange}
                                                      isValid={touched.reg_password && !errors.reg_password}
                                                      isInvalid={!!errors.reg_password}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.reg_password}
                                        </Form.Control.Feedback>
                                    </Form.Group>
                                    {
                                        isLoading ?
                                            <div className="mt-5 mb-4">
                                                <HorizontalLoader/>
                                            </div> :
                                            <Button type="submit"
                                                    className="comment_button w-100"
                                                    style={{marginTop: 0}}>
                                                Зарегистрироваться
                                            </Button>
                                    }
                                </Form>
                            )
                        }
                    </Formik>
            }
        </>
    );
};

export default AuthForm;