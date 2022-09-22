import React from 'react';
import {Button, Form} from "react-bootstrap";

const CommentForm = () => {
    return (
        <Form action="#" className="comment_form">
            <Form.Group>
                <Form.Label  className="form_title">
                    Комментарий:
                </Form.Label>
                <Form.Control className="comment_input comment_textarea"
                              as="textarea" rows={3}
                              placeholder="Оставьте комментарий"/>
            </Form.Group>
            <Button className="comment_button">
                Отправить
            </Button>
        </Form>
    );
};

export default CommentForm;