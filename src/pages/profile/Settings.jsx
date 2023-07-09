import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ProfileForm from "../../components/forms/ProfileForm";

const Settings = () => {
    return (
        <Container>
            <Row>
                <Col className="col-lg-8">
                    <div className="single_course_title"
                         style={{
                             padding: "30px 0"
                         }}>
                        Настройки
                    </div>
                    <ProfileForm/>
                </Col>
            </Row>
        </Container>
    );
};

export default Settings;