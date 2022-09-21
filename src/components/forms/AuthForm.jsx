import React from 'react';
import {Button, Form} from "react-bootstrap";

const AuthForm = (props) => {
    return (
        <Form action="#" className="comment_form">
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

            <Button className="comment_button w-100">
                Войти
            </Button>
        </Form>
    );
};

export default AuthForm;