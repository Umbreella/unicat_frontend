import {Col, Container, Row} from "react-bootstrap";
import BlogSection from "../components/blog/BlogSection";

const Blog = () => {
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