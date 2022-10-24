import React from 'react';
import {Button, Form} from "react-bootstrap";

const ProfileForm = () => {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>
                    Ваше имя
                </Form.Label>
                <Form.Control type="email" placeholder="Введите ваше имя" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formFamilyName">
                <Form.Label>
                    Фамилия
                </Form.Label>
                <Form.Control type="email" placeholder="Введите фамилию" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmailAddress">
                <Form.Label>
                    Ваш почтовый адрес
                </Form.Label>
                <Form.Control type="email" placeholder="Введите ваш email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formCurrentPassword">
                <Form.Label>
                    Текущий пароль
                </Form.Label>
                <Form.Control type="password"
                              placeholder="Введите текущий пароль" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNewPassword">
                <Form.Label>
                    Новый пароль
                </Form.Label>
                <Form.Control type="password"
                              placeholder="Введите новый пароль" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formNewPasswordRepeat">
                <Form.Label>
                    Новый пароль (ещё раз)
                </Form.Label>
                <Form.Control type="password"
                              placeholder="Введите новый пароль (ещё раз)" />
            </Form.Group>

            <Button>
                Сохранить изменения
            </Button>
        </Form>
    );
};

export default ProfileForm;