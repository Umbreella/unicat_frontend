import React, {useEffect, useState} from 'react';
import {
    LinkAuthenticationElement, PaymentElement,
    useElements,
    useStripe
} from "@stripe/react-stripe-js";
import {Form} from "react-bootstrap";
import {MY_COURSES} from "../../utils/consts";

const CheckoutPaymentForm = (props) => {
    const {courseId} = props.data;
    const stripe = useStripe();
    const elements = useElements();

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isStripLoading, setIsStripLoading] = useState(true);

    useEffect(() => {
        if (!stripe) {
            return;
        }

        const clientSecret = new URLSearchParams(
            window.location.search
        ).get(
            "payment_intent_client_secret"
        );

        if (!clientSecret) {
            return;
        }

        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                    setMessage("Оплата прошла успешно");
                    break;
                case "processing":
                    setMessage("Оплата в процессе обработки.");
                    break;
                case "requires_payment_method":
                    setMessage("Произошла ошибка, попробуйте позже.");
                    break;
                default:
                    setMessage("Something went wrong.");
                    break;
            }
        });
    }, [stripe]);

    useEffect(() => {
        if (elements) {
            const element = elements.getElement('payment')
            element.on('ready', () => {
                setIsStripLoading(false)
            })
        }
    }, [elements])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: "http://localhost:3000" + MY_COURSES + courseId,
            },
        });

        if (error.type === "card_error" || error.type === "validation_error") {
            setMessage(error.message);
        } else {
            setMessage("An unexpected error occurred.");
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "tabs"
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <LinkAuthenticationElement
                    id="link-authentication-element"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <PaymentElement id="payment-element" options={paymentElementOptions} />
                {
                    message &&
                    <div className="mt-3">
                        {message}
                    </div>
                }
                {
                    !isStripLoading &&
                        <>
                            {
                                !(isLoading || !stripe || !elements) &&
                                <div
                                    className="courses_button trans_200 w-100 mt-4 mb-4"
                                    onClick={handleSubmit}>
                                    <div>
                                        Оплатить
                                    </div>
                                </div>
                            }
                        </>
                }
            </Form>
        </>
    );
};

export default CheckoutPaymentForm;