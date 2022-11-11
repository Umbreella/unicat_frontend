import React, {useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import {ENTER_EMAIL, PROFILE} from "../../utils/consts";
import {NavLink, useNavigate} from "react-router-dom";
import {Context} from "../../index";
import {object, string} from "yup";
import {Formik} from "formik";
import {registerUser} from "../../http/UserApi";

const AuthForm = (props) => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const signUp = async (validated_data) => {
        const data = {
            email: validated_data.email,
            password: validated_data.password,
            first_name: validated_data.first_name,
            last_name: validated_data.last_name
        }
        const response = await registerUser(data);

        if (response.status === 201){
            localStorage.setItem('access', response.data.access);
            user.setIsAuth(true);
            navigate(PROFILE);
        }
    }

    const schema = object().shape({
        email: string()
            .email('Неверный email')
            .max(128, 'Email должен быть не больше 128 символов')
            .required('Email является обязательным полем'),
        password: string()
            .min(8, 'Пароль должен содержать не менее 8 символов')
            .max(128, 'Пароль должен быть не больше 128 символов')
            .required('Пароль является обязательным полем'),
        first_name: string()
            .max(128, 'Имя должно быть не больше 128 символов')
            .required('Имя является обязательным полем'),
        last_name: string()
            .max(128, 'Фамилия должна быть не больше 128 символов')
            .required('Фамилия является обязательным полем'),
    });

    return (
        <Formik initialValues={{ email: '', password: '', first_name: '', last_name: '' }}
                onSubmit={signUp}
                validationSchema={schema}>
            {
                ({
                     handleSubmit,
                     handleChange,
                     values,
                     touched,
                     errors, }) => (
                    <Form className="auth_form comment_form"
                          validated={false}
                          onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label className="form_title">
                                Ваше имя:
                            </Form.Label>
                            <Form.Control className="comment_input"
                                          type="text"
                                          id="first_name"
                                          placeholder="Введите ваше имя"
                                          value={values.first_name}
                                          onChange={handleChange}
                                          isValid={touched.first_name && !errors.first_name}
                                          isInvalid={!!errors.first_name}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.first_name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form_title">
                                Ваша фамилия:
                            </Form.Label>
                            <Form.Control className="comment_input"
                                          type="text"
                                          id="last_name"
                                          placeholder="Введите вашу фамилию"
                                          value={values.last_name}
                                          onChange={handleChange}
                                          isValid={touched.last_name && !errors.last_name}
                                          isInvalid={!!errors.last_name}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.last_name}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form_title">
                                Email:
                            </Form.Label>
                            <Form.Control className="comment_input"
                                          type="text"
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
                                Пароль:
                            </Form.Label>
                            <Form.Control className="comment_input"
                                          type="password"
                                          id="password"
                                          placeholder="Введите пароль"
                                          value={values.password}
                                          onChange={handleChange}
                                          isValid={touched.password && !errors.password}
                                          isInvalid={!!errors.password}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button type="submit" className="comment_button w-100">
                            Войти
                        </Button>

                        <Form.Label>
                            <NavLink to={ENTER_EMAIL}>
                                Забыли пароль?
                            </NavLink>
                        </Form.Label>
                    </Form>
                )
            }
        </Formik>
    );
};

export default AuthForm;