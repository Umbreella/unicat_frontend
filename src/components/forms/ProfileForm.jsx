import React, {useEffect, useState} from 'react';
import {Button, Col, Form, Image, Row} from "react-bootstrap";
import HorizontalLoader from "../loader/HorizontalLoader";
import {getMyProfile, updateMyProfile} from "../../http/api/UserApi";
import {object, string} from "yup";
import {Formik} from "formik";
import avatarDefault from "../../images/avatarDefault.png";

const ProfileForm = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [initialValues, setInitialValues] = useState({
        email: '',
        first_name: '',
        last_name: '',
        photo: undefined,
        current_password: '',
        new_password: '',
        repeat_new_password: '',
    });
    const [isVisibleMessage, setIsVisibleMessage] = useState(false);

    const schema = object().shape({
        email: string()
            .email("Неверный email")
            .max(128, "Email должен быть не больше 128 символов")
            .required("Email является обязательным полем"),
        first_name: string()
            .max(128, "Имя должно быть не больше 128 символов")
            .required("Имя является обязательным полем"),
        last_name: string()
            .max(128, "Фамилия должна быть не больше 128 символов")
            .required("Фамилия является обязательным полем"),
        current_password: string()
            .min(8, "Пароль должен содержать не менее 8 символов")
            .max(128, "Пароль должен быть не больше 128 символов"),
        new_password: string()
            .min(8, "Пароль должен содержать не менее 8 символов")
            .max(128, "Пароль должен быть не больше 128 символов"),
        repeat_new_password: string()
            .min(8, "Пароль должен содержать не менее 8 символов")
            .max(128, "Пароль должен быть не больше 128 символов"),
    });

    const signIn = async (data, actions) => {
        const {current_password, new_password, repeat_new_password} = data;

        if (new_password !== repeat_new_password) {
            actions.setFieldError(
                'repeat_new_password',
                'Пароли не совпадают',
            );
            return null;
        }

        delete data.repeat_new_password;

        if (current_password !== undefined && new_password === undefined) {
            delete data.current_password;
        }

        let difData = getDifferenceBetweenObjects(data, initialValues);

        if (difData.hasOwnProperty("photo")) {
            difData["photo"] = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(difData.photo);
            })
        }

        const response = await updateMyProfile(difData);

        if (response.status !== 200) {
            setInitialValues(response.data);
        }

        if (response.status === 400 && response.data.hasOwnProperty('email')) {
            actions.setFieldError(
                'email',
                'Почта не была изменена',
            )
        }

        setIsVisibleMessage(response.status === 200 && response.data.email !== data.email);
    };

    const getDifferenceBetweenObjects = (newObject, mainObject) => {
        const properties = Object.getOwnPropertyNames(newObject);
        let result = {};

        properties.forEach(element => {
            const value = newObject[element];
            const oldValue = mainObject[element];

            if (oldValue === undefined || oldValue !== value) {
                result[element] = value;
            }
        });

        return result;
    };

    useEffect(() => {
        getMyProfile()
            .then((response) => {
                if (response.status === 200) {
                    setInitialValues(response.data);
                    setIsLoading(false);
                }
            });
    }, []);

    return (
        <>
            {
                isLoading ?
                    <div>
                        <HorizontalLoader/>
                    </div> :
                    <>
                        <Formik initialValues={initialValues}
                                onSubmit={signIn}
                                validationSchema={schema}>
                            {
                                ({
                                     handleSubmit,
                                     handleChange,
                                     values,
                                     touched,
                                     errors,
                                     setFieldValue,
                                 }) => (
                                    <Form className="auth_form comment_form"
                                          validated={false}
                                          onSubmit={handleSubmit}>
                                        <Form.Group>
                                            <Form.Label className="form_title">
                                                Ваша иконка:
                                            </Form.Label>
                                            <Row>
                                                <div
                                                    className="col-3 comment_image">
                                                    <div className="m-auto"
                                                         style={{
                                                             width: "100%",
                                                             height: "100%"
                                                         }}>
                                                        <Image
                                                            src={initialValues.photo !== null ? initialValues.photo : avatarDefault}/>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <Form.Control
                                                        className="comment_input"
                                                        type="file"
                                                        id="photo"
                                                        onChange={(event) => {
                                                            const file = event.target.files[0];
                                                            setFieldValue("photo", file);
                                                        }}
                                                    />
                                                    <Form.Control.Feedback
                                                        type="invalid">
                                                        {errors.photo}
                                                    </Form.Control.Feedback>
                                                </div>
                                            </Row>
                                        </Form.Group>

                                        <Row>
                                            <Col className="col-6">
                                                <Form.Group>
                                                    <Form.Label
                                                        className="form_title">
                                                        Ваше Имя:
                                                    </Form.Label>
                                                    <Form.Control
                                                        className="comment_input"
                                                        type="text"
                                                        id="first_name"
                                                        placeholder="Введите имя"
                                                        value={values.first_name}
                                                        onChange={handleChange}
                                                        isValid={touched.first_name && !errors.first_name}
                                                        isInvalid={!!errors.first_name}/>
                                                    <Form.Control.Feedback
                                                        type="invalid">
                                                        {errors.first_name}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                            <Col className="col-6">
                                                <Form.Group>
                                                    <Form.Label
                                                        className="form_title">
                                                        Ваша Фамилия:
                                                    </Form.Label>
                                                    <Form.Control
                                                        className="comment_input"
                                                        type="text"
                                                        id="last_name"
                                                        placeholder="Введите фамилию"
                                                        value={values.last_name}
                                                        onChange={handleChange}
                                                        isValid={touched.last_name && !errors.last_name}
                                                        isInvalid={!!errors.last_name}/>
                                                    <Form.Control.Feedback
                                                        type="invalid">
                                                        {errors.last_name}
                                                    </Form.Control.Feedback>
                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group
                                            className="mt-5 pt-5"
                                            style={{
                                                borderTop: "1px solid #d9d9d9",
                                            }}>
                                            <Form.Label className="form_title">
                                                Ваш Email:
                                            </Form.Label>
                                            <Form.Control
                                                className="comment_input"
                                                type="email"
                                                id="email"
                                                placeholder="Введите email"
                                                value={values.email}
                                                onChange={handleChange}
                                                isValid={touched.email && !errors.email}
                                                isInvalid={!!errors.email}/>
                                            <Form.Control.Feedback
                                                type="invalid">
                                                {errors.email}
                                            </Form.Control.Feedback>
                                            {
                                                (isVisibleMessage && !errors.email) && <div>
                                                    На данную почту отправлено письмо для подтверждения
                                                </div>
                                            }
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className="form_title">
                                                Старый пароль:
                                            </Form.Label>
                                            <Form.Control
                                                className="comment_input"
                                                type="password"
                                                id="current_password"
                                                placeholder="Введите старый пароль"
                                                value={values.current_password}
                                                onChange={handleChange}
                                                isValid={touched.current_password && !errors.current_password}
                                                isInvalid={!!errors.current_password}/>
                                            <Form.Control.Feedback
                                                type="invalid">
                                                {errors.current_password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className="form_title">
                                                Новый пароль:
                                            </Form.Label>
                                            <Form.Control
                                                className="comment_input"
                                                type="password"
                                                id="new_password"
                                                placeholder="Введите новый пароль"
                                                value={values.new_password}
                                                onChange={handleChange}
                                                isValid={touched.new_password && !errors.new_password}
                                                isInvalid={!!errors.new_password}/>
                                            <Form.Control.Feedback
                                                type="invalid">
                                                {errors.new_password}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label className="form_title">
                                                Новый пароль (еще раз):
                                            </Form.Label>
                                            <Form.Control
                                                className="comment_input"
                                                type="password"
                                                id="repeat_new_password"
                                                placeholder="Повторите новый пароль"
                                                value={values.repeat_new_password}
                                                onChange={handleChange}
                                                isValid={touched.repeat_new_password && !errors.repeat_new_password}
                                                isInvalid={!!errors.repeat_new_password}/>
                                            <Form.Control.Feedback
                                                type="invalid">
                                                {errors.repeat_new_password}
                                            </Form.Control.Feedback>
                                        </Form.Group>

                                        {
                                            isLoading ?
                                                <div className="mt-5 mb-4">
                                                    <HorizontalLoader/>
                                                </div> :
                                                <Button type="submit"
                                                        className="comment_button w-100"
                                                        style={{marginTop: 0}}>
                                                    Сохранить
                                                </Button>
                                        }
                                    </Form>
                                )
                            }
                        </Formik>
                    </>
            }
        </>
    );
};

export default ProfileForm;