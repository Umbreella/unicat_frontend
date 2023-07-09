import React, {useContext} from 'react';
import {Card, Modal} from "react-bootstrap";
import {Elements} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";
import CheckoutPaymentForm from "../forms/CheckoutPaymentForm";

const PaymentModal = (props) => {
    const {show, handleClose, clientSecret, courseData} = props.data;
    const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
    const options = {
        clientSecret,
        theme: 'stripe',
    };

    return (
        <Modal show={show}
               onHide={handleClose}
               size="lg"
               fullscreen="sm-down"
               centered>
            <Modal.Header className="" closeButton>
                <Modal.Title className="w-100 text-center">
                    Оплата
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    Курс:<h4 className="ms-3">{courseData.title}</h4>
                </div>
                <div>
                    Стоимость:<h4 className="ms-3">{courseData.price}</h4>
                </div>
                <Card className="mt-3">
                    <Card.Body>
                        Проверьте соотвествие всех данных перед оплатой.
                    </Card.Body>
                </Card>
                <Card className="mt-3">
                    <Card.Body>
                        <Elements stripe={stripePromise}
                                  options={options}>
                            <CheckoutPaymentForm data={{courseId: courseData.id}}/>
                        </Elements>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal>
    );
};

export default PaymentModal;