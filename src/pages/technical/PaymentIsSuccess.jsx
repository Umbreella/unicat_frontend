import React from 'react';
import {Button, Card} from "react-bootstrap";
import {HOME_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";

const PaymentIsSuccess = () => {
    const navigate = useNavigate();

    return (
        <Card>
            <Card.Body>
                <Card.Title className="text-center">
                    Платеж успешно завершен.
                </Card.Title>
                <Card.Text>
                    <div className="text-center m-3" style={{fontSize: 16}}>
                        В ближайшее время вам откроется доступ в личном кабинете.
                    </div>
                    <Button className="comment_button w-100"
                            onClick={() => navigate(HOME_ROUTE)}>
                        Продолжить
                    </Button>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default PaymentIsSuccess;