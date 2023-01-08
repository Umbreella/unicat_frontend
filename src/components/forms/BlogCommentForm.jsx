import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import {Rating} from "react-simple-star-rating";
import {object, string} from "yup";
import {Formik} from "formik";
import {
    postCourseComment,
    postEventComment,
    postNewsComment
} from "../../http/api/CommentsApi";
import {EVENT_TYPE} from "../../utils/consts";

const BlogCommentForm = (props) => {
    const {commented_id, type} = props.data;
    const {refetchData} = props.func;
    const [isPosted, setIsPosted] = useState(false);

    const postCommentData = async (data) => {
        data = {
            ...data,
            commented_id: commented_id
        }

        let response = null
        if (type === EVENT_TYPE) {
            response = await postEventComment(data);
        }
        else {
            response = await postNewsComment(data);
        }

        if (response.status === 201) {
            setIsPosted(true);
            refetchData();
        }
    }

    const schema = object().shape({
        body: string()
            .required("Содержание комментария является обязательным полем"),
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
                                 errors
                             }) => (
                                <Form className="auth_form comment_form"
                                      validated={false}
                                      onSubmit={handleSubmit}>
                                    <Form.Group>
                                        <Form.Control className="comment_input"
                                                      as="textarea" rows={4}
                                                      id="body"
                                                      placeholder="Оставьте ваш комментарий"
                                                      value={values.body}
                                                      onChange={handleChange}
                                                      isValid={touched.body && !errors.body}
                                                      isInvalid={!!errors.body}
                                                      style={{height: '100%'}}/>
                                        <Form.Control.Feedback type="invalid">
                                            {errors.body}
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Button type="submit" className="comment_button">
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

export default BlogCommentForm;