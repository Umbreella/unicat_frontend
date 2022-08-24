import React from 'react';
import {Button, Form} from "react-bootstrap";

const NewsLetterForm = () => {
    return (
        <Form className="newsletter_form d-flex flex-row align-items-center
                                    justify-content-center">
            <Form.Control className="newsletter_input"
                          type="email" placeholder="Введите email"
                          required />
            <Button className="newsletter_button"
                    type="submit" variant="light">
                Подписаться
            </Button>
        </Form>
    );
};

export default NewsLetterForm;