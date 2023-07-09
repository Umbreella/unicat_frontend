import {Col, Container, Row} from "react-bootstrap";
import NewsSection from "../../components/news/NewsSection";
import React from "react";
import EventsSection from "../../components/events/EventsSection";
import {getNews} from "../../http/graphql/NewsGQL";
import {gql, useQuery} from "@apollo/client";
import {getEvents} from "../../http/graphql/EventGQL";
import PageLoader from "../../components/loader/PageLoader";
import ErrorQuery from "../../components/errors/ErrorQuery";

const Blog = () => {
    const newsQuery = getNews();
    const eventsQuery = getEvents();

    const resultQuery = gql`
        query BlogPage($firstNews: Int, $afterNews: String,
                       $firstEvent: Int, $afterEvent: String) {
            ${newsQuery}
            ${eventsQuery}
        }
    `;
    const {error, loading, data, fetchMore} = useQuery(resultQuery, {
        variables: {
            firstNews: 6,
            firstEvent: 6,
        }
    });

    if (error) {
        return <ErrorQuery/>;
    }

    return (
        <div className="blog">
            {
                loading ?
                    <>
                        <PageLoader/>
                    </> :
                    <>
                        {
                            data.allNews.edges.length > 0 &&
                            <Container id="news">
                                <div
                                    className="d-flex justify-content-center mb-4">
                                    <h2 className="d-inline">
                                        Наши новости
                                    </h2>
                                </div>
                                <Row>
                                    <Col>
                                        <NewsSection data={data.allNews}
                                                     fetchMoreNews={fetchMore}/>
                                    </Col>
                                </Row>
                            </Container>
                        }
                        {
                            data.allEvents.edges.length > 0 &&
                            <Container id="events">
                                <div className="d-flex justify-content-center pb-4"
                                     style={{paddingTop: 100}}>
                                    <h2 id="events" className="d-inline">
                                        Наши мероприятия
                                    </h2>
                                </div>
                                <Row>
                                    <Col>
                                        <EventsSection data={data.allEvents}
                                                       fetchMoreEvents={fetchMore}/>
                                    </Col>
                                </Row>
                            </Container>
                        }
                    </>
            }
        </div>
    );
};

export default Blog;