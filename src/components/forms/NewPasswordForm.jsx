import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {ENTER_EMAIL} from "../../utils/consts";
import {useNavigate, useParams} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faEye,
    faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import {
    postNewPassword
} from "../../http/api/UserApi";
import {object, string} from "yup";
import {Formik} from "formik";
import HorizontalLoader from "../loader/HorizontalLoader";

const NewPasswordForm = (props) => {
    const {uuid} = useParams();
    const setIsSuccess = props.func;
    const navigate = useNavigate();

    const [isVisiblePassword, setVisiblePassword] = useState(false);
    const [isVisiblePasswordRepeat, setVisiblePasswordRepeat] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [hasErrors, setHasErrors] = useState(false);

    const sendNewPassword = async (data, actions) => {
        const {password, repeatPassword} = data;

        if (password !== repeatPassword) {
            actions.setFieldError(
                'repeatPassword',
                'Пароли не совпадают.'
            );
            return null;
        }

        setIsSending(true);
        setHasErrors(false);

        const request_data = {
            url: uuid,
            password: password,
        }

        const response = await postNewPassword(request_data);

        if (response.status === 200) {
            setIsSuccess(true);
        }

        setHasErrors(true);
        setIsSending(false);
    }

    const schema = object().shape({
        password: string()
            .min(8, "Пароль должен содержать не менее 8 символов")
            .max(128, "Пароль должен быть не больше 128 символов")
            .required("Пароль является обязательным полем"),
        repeatPassword: string()
            .min(8, "Пароль должен содержать не менее 8 символов")
            .max(128, "Пароль должен быть не больше 128 символов")
            .required("Пароль является обязательным полем"),
    });

    return (
        <Formik initialValues={{password: '', repeatPassword: ''}}
                onSubmit={sendNewPassword}
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
                                Новый пароль:
                            </Form.Label>

                            <div className="d-flex">
                                <Form.Control className="comment_input"
                                              type={isVisiblePassword ? "password" : "text"}
                                              id="password"
                                              placeholder="Введите пароль"
                                              value={values.password}
                                              onChange={handleChange}
                                              isValid={touched.password && !errors.password}
                                              isInvalid={!!errors.password}/>

                                <div className="header_search_button d-flex flex-column
                                                    align-items-center justify-content-center"
                                     onClick={() => setVisiblePassword(!isVisiblePassword)}>
                                    <FontAwesomeIcon
                                        icon={isVisiblePassword ? faEyeSlash : faEye}
                                        style={{marginLeft: 0}}/>
                                </div>
                            </div>
                            <Form.Control.Feedback type="invalid"
                                                   style={{display: "block"}}>
                                {errors.password}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label className="form_title">
                                Новый пароль (еще раз):
                            </Form.Label>

                            <div className="d-flex">
                                <Form.Control className="comment_input"
                                              type={isVisiblePasswordRepeat ? "password" : "text"}
                                              id="repeatPassword"
                                              placeholder="Введите пароль (еще раз)"
                                              value={values.repeatPassword}
                                              onChange={handleChange}
                                              isValid={touched.repeatPassword && !errors.repeatPassword}
                                              isInvalid={!!errors.repeatPassword}/>

                                <div className="header_search_button d-flex flex-column
                                                        align-items-center justify-content-center"
                                     onClick={() => setVisiblePasswordRepeat(!isVisiblePasswordRepeat)}>
                                    <FontAwesomeIcon
                                        icon={isVisiblePasswordRepeat ? faEyeSlash : faEye}
                                        style={{marginLeft: 0}}/>
                                </div>
                            </div>
                            <Form.Control.Feedback type="invalid"
                                                   style={{display: "block"}}>
                                {errors.repeatPassword}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {
                            isSending ?
                                <div className="m-4">
                                    <HorizontalLoader/>
                                </div> :
                                <>
                                    {
                                        hasErrors ?
                                            <>
                                                <div style={{
                                                    color: "red",
                                                    fontSize: 16
                                                }}>
                                                    Данная ссылка не
                                                    действительна, попробуйте
                                                    заново заполнить форму для
                                                    сброса пароля.
                                                </div>
                                                <Button
                                                    className="comment_button w-100"
                                                    onClick={() => navigate(ENTER_EMAIL)}>
                                                    Сбросить пароль
                                                </Button>
                                            </> :
                                            <Button type="submit"
                                                    className="comment_button w-100">
                                                Сохранить изменения
                                            </Button>
                                    }
                                </>
                        }
                    </Form>
                )
            }
        </Formik>
    );
};

export default NewPasswordForm;