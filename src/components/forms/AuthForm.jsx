import React from 'react';
import {Button, Form} from "react-bootstrap";
import {ENTER_EMAIL, PROFILE, RESET_PASSWORD} from "../../utils/consts";
import {NavLink, useNavigate} from "react-router-dom";

const AuthForm = (props) => {
    const navigate = useNavigate();

    return (
        <Form action="#" className="auth_form comment_form">
            <Form.Group>
                <Form.Label className="form_title">
                    Email:
                </Form.Label>
                <Form.Control className="comment_input"
                              type="email"
                              placeholder="Введите email"/>
            </Form.Group>

            <Form.Group>
                <Form.Label className="form_title">
                    Пароль:
                </Form.Label>
                <Form.Control className="comment_input"
                              type="password"
                              placeholder="Введите пароль"/>
            </Form.Group>

            <Button className="comment_button w-100"
                    onClick={() => navigate(PROFILE)}>
                Войти
            </Button>

            <Form.Label>
                <NavLink to={ENTER_EMAIL}>
                    Забыли пароль?
                </NavLink>
            </Form.Label>
        </Form>
    );
};

export default AuthForm;