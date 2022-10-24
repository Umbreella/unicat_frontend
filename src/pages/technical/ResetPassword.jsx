import React from 'react';
import NewPasswordForm from "../../components/forms/NewPasswordForm";
import {Card} from "react-bootstrap";

const ResetPassword = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>
                    <div className="text-center">
                        Смена пароля
                    </div>
                </Card.Title>
                <Card.Text>
                    <NewPasswordForm />
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default ResetPassword;