import React, {useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import {ENTER_EMAIL, PROFILE} from "../../utils/consts";
import {NavLink, useNavigate} from "react-router-dom";
import {loginUser} from "../../http/UserApi";
import {Context} from "../../index";
import {Formik} from "formik";
import { object, string } from 'yup';


const AuthForm = (props) => {
    const {user} = useContext(Context);
    const navigate = useNavigate();

    const signIn = async (data) => {
        const response = await loginUser(data);

        if (response.status === 200){
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
    });

    return (
        <Formik initialValues={{ email: '', password: '' }}
                onSubmit={signIn}
                validationSchema={schema}>
            {
                ({
                     handleSubmit,
                     handleChange,
                     values,
                     touched,
                     isValid,
                     errors, }) => (
                    <Form className="auth_form comment_form"
                          validated={false}
                          onSubmit={handleSubmit}>
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