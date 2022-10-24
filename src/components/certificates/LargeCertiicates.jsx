import React from 'react';
import {Button, Card, Col} from "react-bootstrap";
import logo from "../../images/blog_2.jpg"

const LargeCertiicates = (props) => {
    const certificate = props.certificate;

    return (
        <Col className="col-lg-4 col-md-6 col-12">
            <Card className="mb-4">
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>
                        {certificate.title}
                    </Card.Title>
                    <div className="mt-2 mb-2">
                        Дата получения: {certificate.date}
                    </div>
                    <Button style={{ background: "#14bdee", borderColor: "#14bdee"}}>
                        Скачать
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default LargeCertiicates;