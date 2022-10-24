import React from 'react';

import {Card, Col, Container, Row} from "react-bootstrap";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import CourseInProfile from "../../components/courses/CourseInProfile";
import LargeCertiicates from "../../components/certificates/LargeCertiicates";

const MyEducation = () => {
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
            progress: 10
        }
    ]

    const my_sertificates = [
        {
            title: "Мобильная разработка",
            date: "12.10.2022"
        },
        {
            title: "Мобильная разработка",
            date: "12.10.2022"
        },
        {
            title: "Мобильная разработка",
            date: "12.10.2022"
        }
    ]

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                data: labels.map(() => Math.random() * (10 - 1) - 1),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <Container>
            <Row>
                <Col>
                    <div className="single_course_title"
                         style={{
                             padding: "30px 0" }}>
                        Мое обучение
                    </div>

                    <Card className="col-12">
                        <Card.Body>
                            <div style={{ width: "95%", margin: "auto" }}>
                                <Line options={{
                                    responsive: true,
                                    maintainAspectRatio: true,
                                    plugins: {
                                        legend: {
                                            display: false,
                                        },
                                        title: {
                                            display: true,
                                            text: "Активность за последние" +
                                                " 7 дней",
                                            font: {
                                                size: 20
                                            }
                                        },
                                    }
                                }} data={data} />
                            </div>
                        </Card.Body>
                    </Card>

                    <div className="single_course_title"
                         style={{
                             padding: "30px 0", fontSize: 24}}>
                        Последние курсы
                    </div>

                    <Row>
                        {
                            my_courses.map((value, index, array) =>
                                <CourseInProfile key={index} course={value}/>
                            )
                        }
                    </Row>

                    <div className="single_course_title"
                         style={{
                             padding: "30px 0", fontSize: 24}}>
                        Последние сертификаты
                    </div>

                    <Row>
                        {
                            my_sertificates.map((value, index, array) =>
                                <LargeCertiicates key={index} certificate={value}/>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MyEducation;