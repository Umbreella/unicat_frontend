import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import LargeCertificate from "../../components/certificates/LargeCertificate";
import {getMyCertificates} from "../../http/graphql/CertificateGQL";
import {gql, useQuery} from "@apollo/client";
import HorizontalLoader from "../../components/loader/HorizontalLoader";
import YouDontHaveCertificates
    from "../../components/certificates/YouDontHaveCertificates";

const MyCertificates = () => {
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const myCertificatesQuery = getMyCertificates();
    const resultQuery = gql`
        query MyCertificatePage($firstMyCertificate: Int, $afterMyCertificate: String) {
            ${myCertificatesQuery}
        }
    `;
    const {loading, data, fetchMore} = useQuery(resultQuery, {
        variables: {
            firstMyCertificate: 6,
        },
    });

    const loadMoreMyCertificates = async (endCursor) => {
        await fetchMore({
            variables: {
                afterMyCertificate: endCursor,
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className="single_course_title"
                         style={{
                             padding: "30px 0"
                         }}>
                        Сертификаты
                    </div>

                    <Row>
                        {
                            loading ?
                                <div className="w-100 mt-5">
                                    <HorizontalLoader/>
                                </div> :
                                <>
                                    {
                                        data.myCertificates.edges.length > 0 ?
                                            <>
                                                {
                                                    data.myCertificates.edges.map(({node}) =>
                                                        <LargeCertificate
                                                            key={node.id}
                                                            data={{
                                                                node: node,
                                                                className: "col-lg-4 col-md-6",
                                                            }}/>
                                                    )
                                                }
                                                {
                                                    isLoadingMore ?
                                                        <>
                                                            <HorizontalLoader/>
                                                        </> :
                                                        <>
                                                            {
                                                                data.myCertificates.pageInfo.hasNextPage &&
                                                                <div
                                                                    className="courses_button trans_200"
                                                                    onClick={() => {
                                                                        setIsLoadingMore(true);
                                                                        loadMoreMyCertificates(data.myCertificates.pageInfo.endCursor);
                                                                        setIsLoadingMore(false);
                                                                    }}>
                                                                    Загрузить
                                                                    ещё
                                                                </div>
                                                            }
                                                        </>
                                                }
                                            </> :
                                            <YouDontHaveCertificates/>
                                    }
                                </>
                        }
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default MyCertificates;