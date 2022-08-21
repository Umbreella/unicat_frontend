import React from 'react';
import {Button, Form} from "react-bootstrap";

const FeedBackForm = () => {
    return (
        <Form className="counter_form_content d-flex flex-column align-items-center justify-content-center"
              action="#">
            <div className="counter_form_title">
                Оставить заявку
            </div>
            <Form.Control className="counter_input" type="text"
                          placeholder="Введите Имя"/>
            <Form.Control className="counter_input" type="text"
                          placeholder="Введите Телефон"/>
            <Form.Select className="counter_input counter_options">
                <option>Choose Subject</option>
                <option>Subject</option>
                <option>Subject</option>
                <option>Subject</option>
            </Form.Select>
            <Form.Control className="counter_input counter_text_input"
                          as="textarea" rows={3} placeholder="Сообщение"/>
            <Button className="counter_form_button" type="submit">
                Отправить
            </Button>
        </Form>
    );
};

export default FeedBackForm;