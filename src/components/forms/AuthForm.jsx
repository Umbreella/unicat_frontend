import React, {useContext} from 'react';
import {Button, Form} from "react-bootstrap";
import {ENTER_EMAIL} from "../../utils/consts";
import {NavLink} from "react-router-dom";
import {loginUser} from "../../http/api/UserApi";
import {Context} from "../../index";
import {Formik} from "formik";
import {object, string} from 'yup';


const AuthForm = (props) => {
    const {user, setVisibleAuthForm} = useContext(Context);

    const signIn = async (data) => {
        const request_data = {
            email: data.login_email,
            password: data.login_password,
        }

        await loginUser(request_data)
            .then((response) => {
                if (response.status === 200) {
                    localStorage.setItem("access", response.data.access);
                    user.setIsAuth(true);
                    setVisibleAuthForm(false);
                }
            });
    }

    const schema = object().shape({
        login_email: string()
            .email("Неверный email")
            .max(128, "Email должен быть не больше 128 символов")
            .required("Email является обязательным полем"),
        login_password: string()
            .min(8, "Пароль должен содержать не менее 8 символов")
            .max(128, "Пароль должен быть не больше 128 символов")
            .required("Пароль является обязательным полем"),
    });

    return (
        <Formik initialValues={{login_email: '', login_password: ''}}
                onSubmit={signIn}
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
                                Email:
                            </Form.Label>
                            <Form.Control className="comment_input"
                                          type="email"
                                          id="login_email"
                                          placeholder="Введите email"
                                          value={values.login_email}
                                          onChange={handleChange}
                                          isValid={touched.login_email && !errors.login_email}
                                          isInvalid={!!errors.login_email}/>
                            <Form.Control.Feedback type="invalid">
                                {errors.login_email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form_title">
                                Пароль:
                            </Form.Label>
                            <Form.Control className="comment_input"
                                          type="password"
                                          id="login_password"
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