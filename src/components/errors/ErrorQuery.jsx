import React from 'react';
import {Container} from "react-bootstrap";

const ErrorQuery = () => {
    return (
        <Container>
            <div className="mt-5 mb-5">
                Произошла ошибка, попробуйте позже. Если ошибка продолжает
                возникать, обратитесь в поддержку.
            </div>
        </Container>
    );
};

export default ErrorQuery;