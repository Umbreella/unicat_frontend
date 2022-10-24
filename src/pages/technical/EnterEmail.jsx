import React from 'react';
import {Card} from "react-bootstrap";
import EmailForm from "../../components/forms/EmailForm";

const EnterEmail = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <div className="text-center mb-3">
                        Введите почту
                    </div>
                </Card.Title>
                <Card.Text>
                    <EmailForm />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default EnterEmail;