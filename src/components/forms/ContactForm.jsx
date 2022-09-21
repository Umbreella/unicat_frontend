import React from 'react';
import {Button, Form} from "react-bootstrap";

const ContactForm = () => {
    return (
        <Form action="#" className="comment_form">
            <Form.Group>
                <Form.Label className="form_title">
                    ФИО:
                </Form.Label>
                <Form.Control className="comment_input"
                              type="text"
                              placeholder="Введите ФИО"/>
            </Form.Group>

            <Form.Group>
                <Form.Label className="form_title">
                    Email:
                </Form.Label>
                <Form.Control className="comment_input"
                              type="text"
                              placeholder="Введите email"/>
            </Form.Group>

            <Form.Group>
                <Form.Label  className="form_title">
                    Сообщение:
                </Form.Label>
                <Form.Control className="comment_input comment_textarea"
                              as="textarea" rows={3}
                              placeholder="Введите сообщение"/>
            </Form.Group>

            <Button className="comment_button">
                Отправить
            </Button>
        </Form>
    );
};

export default ContactForm;