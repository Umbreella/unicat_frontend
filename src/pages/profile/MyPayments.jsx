import React, {useState} from 'react';
import {getPayments} from "../../http/graphql/PaymentGQL";
import {useQuery} from "@apollo/client";
import {Col, Container, Row, Table} from "react-bootstrap";
import HorizontalLoader from "../../components/loader/HorizontalLoader";

const MyPayments = () => {
    const [isLoading, setIsLoading] = useState(false);
    const paymentsQuery = getPayments();
    const {data, loading, error, fetchMore} = useQuery(paymentsQuery, {
        variables: {
            firstPayments: 10,
        },
    });

    const loadMoreMyPayments = async () => {
        setIsLoading(true);
        await fetchMore({
            variables: {
                afterUserAttempt: data.myPayments.pageInfo.endCursor,
            },
        });
        setIsLoading(false);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="single_course_title"
                         style={{
                             padding: "30px 0"
                         }}>
                        Платежи
                    </div>
                    {
                        loading || error ?
                            <div className="m-5">
                                <HorizontalLoader/>
                            </div> :
                            <div>
                                <Table striped responsive
                                       className="table-attempts">
                                    <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Курс</th>
                                        <th>Стоимость</th>
                                        <th>Дата</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        data.myPayments.edges.map(({node}, index) =>
                                            <tr key={node.id}>
                                                <td>{index + 1}</td>
                                                <td>{node.course.title}</td>
                                                <td>{node.amount}₽</td>
                                                <td>{new Date(node.createdAt).toLocaleDateString()}</td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </Table>
                                {
                                    isLoading ?
                                        <div className="m-5">
                                            <HorizontalLoader/>
                                        </div> :
                                        <>
                                            {
                                                data.myPayments.pageInfo.hasNextPage &&
                                                <div
                                                    className="courses_button mt-3"
                                                    onClick={() => loadMoreMyPayments()}>
                                                    <div>
                                                        Загрузить еще
                                                    </div>
                                                </div>
                                            }
                                        </>
                                }
                            </div>
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default MyPayments;