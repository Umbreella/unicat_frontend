import React, {useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import {PROFILE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import {Context} from "../../index";
import {object, string} from "yup";
import {Formik} from "formik";
import {registerUser} from "../../http/api/UserApi";

const AuthForm = (props) => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const signUp = async (data) => {
        const request_data = {
            email: data.reg_email,
            password: data.reg_password,
            first_name: data.reg_first_name,
            last_name: data.reg_last_name
        }

        await registerUser(request_data)
            .then((response) => {
                if (response.status === 201) {
                    localStorage.setItem('access', response.data.access);
                    user.setIsAuth(true);
                    navigate(PROFILE);
                }
            })
            .catch((error) => {
                console.log(error);
            });
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

                        <Button type="submit" className="comment_button w-100">
                            Зарегистрироваться
                        </Button>
                    </Form>
                )
            }
        </Formik>
    );
};

export default AuthForm;