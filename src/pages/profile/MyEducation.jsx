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
import {Line} from 'react-chartjs-2';
import CourseInProfile from "../../components/courses/CourseInProfile";
import LargeCertificate from "../../components/certificates/LargeCertificate";
import {getMyCourses} from "../../http/graphql/CourseGQL";
import {gql, useQuery} from "@apollo/client";
import PageLoader from "../../components/loader/PageLoader";
import {getMyCertificates} from "../../http/graphql/CertificateGQL";
import YouDontHaveCourses from "../../components/courses/YouDontHaveCourses";
import YouDontHaveCertificates
    from "../../components/certificates/YouDontHaveCertificates";
import {getMyLessonHistory} from "../../http/graphql/LessonsGQL";

const MyEducation = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    const myCourseQuery = getMyCourses();
    const myCertificatesQuery = getMyCertificates();
    const myLessonHistory = getMyLessonHistory();
    const resultQuery = gql`
        query ProfilePage($firstMyCourse: Int, $afterMyCourse: String,
                          $searchMyCourse: String, 
                          $isCompletedMyCourse: Boolean,
                          $orderByMyCourse: String,
                          
                          $firstMyCertificate: Int, $afterMyCertificate: String) {
            ${myCourseQuery}
            ${myCertificatesQuery}
            ${myLessonHistory}
        }
    `;
    const {loading, data, error, refetch} = useQuery(resultQuery, {
        variables: {
            firstMyCourse: 3,
            firstMyCertificate: 3,
        }
    });

    if (error) {
        console.log(error);
    }

    if (loading || error)
        return <PageLoader/>;

    const labels = data.myLessonHistory.map((item) => item.completedAt);

    const chartData = {
        labels,
        datasets: [
            {
                data: data.myLessonHistory.map((item) => item.countLesson),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return (
        <Container>
            <Row>
                <Col style={{marginBottom: 100}}>
                    <div className="single_course_title"
                         style={{
                             padding: "30px 0"
                         }}>
                        Мое обучение
                    </div>

                    <Card className="col-12">
                        <Card.Body>
                            <div style={{width: "95%", margin: "auto"}}>
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
                                    },
                                    scales: {
                                        y: {
                                            min: 0,
                                            ticks: {
                                                stepSize: 1,
                                            },
                                        },
                                    },
                                }} data={chartData}/>
                            </div>
                        </Card.Body>
                    </Card>

                    <div className="single_course_title"
                         style={{padding: "30px 0", fontSize: 24}}>
                        Последние курсы
                    </div>

                    <Row>
                        {
                            data.myCourses.edges.length > 0 ?
                                <>
                                    {
                                        data.myCourses.edges.map(({node}) =>
                                            <CourseInProfile key={node.id}
                                                             data={node}/>
                                        )
                                    }
                                </> :
                                <YouDontHaveCourses/>
                        }
                    </Row>

                    <div className="single_course_title"
                         style={{padding: "30px 0", fontSize: 24}}>
                        Последние сертификаты
                    </div>

                    <Row>
                        {
                            data.myCertificates.edges.length > 0 ?
                                <>
                                    {
                                        data.myCertificates.edges.map(({node}) =>
                                            <LargeCertificate key={node.id}
                                                              data={{
                                                                  node: node,
                                                                  className: "col-lg-4",
                                                              }}/>
                                        )
                                    }
                                </> :
                                <YouDontHaveCertificates/>
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MyEducation;