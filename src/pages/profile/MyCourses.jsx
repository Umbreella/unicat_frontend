import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CoursesSearchForm from "../../components/forms/CoursesSearchForm";
import CourseInProfile from "../../components/courses/CourseInProfile";

const MyCourses = () => {
    const my_courses = [
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 100
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 90
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 90
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 90
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 90
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 90
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 90
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        },
        {
            title: "Some quick example",
            text: "Text to build on the card title and make up the bulk of" +
                " the card's content.",
            progress: 10
        }
    ]

    return (
        <Container>
            <Row>
                <Col>
                    <div className="single_course_title"
                         style={{
                             padding: "30px 0" }}>
                        Мои курсы
                    </div>

                    <div className="courses_search_container mb-3">
                        <CoursesSearchForm />
                    </div>

                    <Row>
                        {
                            my_courses.map((value, index, array) =>
                                <CourseInProfile key={index} course={value}/>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MyCourses;