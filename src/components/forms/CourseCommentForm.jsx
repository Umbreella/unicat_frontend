import React, {useContext, useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Rating} from "react-simple-star-rating";
import {object, string} from "yup";
import {Formik} from "formik";
import {postCourseComment} from "../../http/api/CommentsApi";
import {Context} from "../../index";

const CourseCommentForm = (props) => {
    const {commented_id} = props.data;
    const {refetchData} = props.func;
    const {setVisibleAuthForm} = useContext(Context);
    const [rating, setRating] = useState(5);
    const [isPosted, setIsPosted] = useState(false);

    const handleRating = (rate) => {
        setRating(rate);
    }

    const postCommentData = async (data) => {
        data = {
            ...data,
            rating: rating,
            commented_id: commented_id
        };

        const response = await postCourseComment(data);

        if (response === null) {
            setVisibleAuthForm(true);
            return;
        }

        if (response.status === 201) {
            setIsPosted(true);
            setRating(5);
            refetchData();
        }
    }

    const schema = object().shape({
        body: string()
            .required("Содержание отзыва является обязательным полем"),
    });

    return (
        <>
            {
                !isPosted ?
                    <Formik initialValues={{body: ''}}
                            onSubmit={postCommentData}
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
                                            Отзыв:
                                        </Form.Label>
                                        <Form.Control className="comment_input"
                                                      as="textarea" rows={4}
                                                      id="body"
                                                      placeholder="Оставьте ваш отзыв о курсе"
                                                      value={values.body}
                                                      onChange={handleChange}
                                                      isValid={touched.body && !errors.body}
                                                      isInvalid={!!errors.body}
                                                      style={{height: '100%'}}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.body}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="form_title">
                                            Оценка:
                                        </Form.Label>
                                        <Rating initialValue={rating}
                                                onClick={handleRating}
                                                size={25}
                                                allowTitleTag={false}/>
                                    </Form.Group>

                                    <Button type="submit"
                                            className="comment_button">
                                        Отправить
                                    </Button>
                                </Form>
                            )
                        }
                    </Formik> :
                    <div className="d-flex justify-content-center m-5">
                        <div>
                            <h4>
                                Спасибо за ваш комментарий
                            </h4>
                            <div className="courses_button mt-3"
                                 onClick={() => setIsPosted(false)}>
                                Отправить ещё
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default CourseCommentForm;