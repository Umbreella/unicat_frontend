import {Col, Container, Row} from "react-bootstrap";
import BlogSection from "../../components/blog/BlogSection";
import React, {useEffect} from "react";

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="blog">
            <Container>
                <Row>
                    <Col>
                        <BlogSection />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default  Blog;