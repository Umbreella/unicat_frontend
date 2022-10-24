import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {HOME_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEye,
    faEyeSlash
} from "@fortawesome/free-solid-svg-icons";

const NewPasswordForm = () => {
    const navigate = useNavigate();

    const [isVisiblePassword, setVisiblePassword] = useState(false);
    const [isVisiblePasswordRepeat, setVisiblePasswordRepeat] = useState(false);

    return (
        <Form action="#" className="auth_form comment_form">
            <Form.Group>
                <Form.Label className="form_title">
                    Новый пароль:
                </Form.Label>

                <div className="d-flex">
                    <Form.Control className="comment_input"
                                  type={isVisiblePassword ? "password" : "text"}
                                  placeholder="Введите пароль"/>

                    <div className="header_search_button d-flex flex-column
                                                    align-items-center justify-content-center"
                         onClick={() => setVisiblePassword(!isVisiblePassword)}>
                        <FontAwesomeIcon icon={isVisiblePassword ? faEyeSlash : faEye}
                                         style={{ marginLeft: 0 }}/>
                    </div>
                </div>
            </Form.Group>

            <Form.Group>
                <Form.Label className="form_title">
                    Новый пароль (еще раз):
                </Form.Label>

                <div className="d-flex">
                    <Form.Control className="comment_input"
                                  type={isVisiblePasswordRepeat ? "password" : "text"}
                                  placeholder="Введите пароль (еще раз)"/>

                    <div className="header_search_button d-flex flex-column
                                                        align-items-center justify-content-center"
                         onClick={() => setVisiblePasswordRepeat(!isVisiblePasswordRepeat)}>
                        <FontAwesomeIcon icon={isVisiblePasswordRepeat ? faEyeSlash : faEye}
                                         style={{ marginLeft: 0 }}/>
                    </div>
                </div>
            </Form.Group>

            <Button className="comment_button w-100"
                    onClick={() => navigate(HOME_ROUTE)}>
                Сохранить изменения
            </Button>
        </Form>
    );
};

export default NewPasswordForm;