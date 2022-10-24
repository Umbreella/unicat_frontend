import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {RESET_PASSWORD} from "../../utils/consts";

const EmailForm = () => {
    const navigate = useNavigate();

    return (
        <Form action="#" className="auth_form comment_form">
            <Form.Group>
                <Form.Label className="form_title">
                    Мы отправим на неё письмо с инструкциями по
                    восстановлению доступа
                </Form.Label>

                <div className="d-flex">
                    <Form.Control className="comment_input"
                                  type="email"
                                  placeholder="Введите email"/>
                </div>
            </Form.Group>

            <Button className="comment_button w-100"
                    onClick={() => navigate(RESET_PASSWORD)}>
                Отправить письмо
            </Button>
        </Form>
    );
};

export default EmailForm;