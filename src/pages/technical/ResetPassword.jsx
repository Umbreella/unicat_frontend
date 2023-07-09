import React, {useState} from 'react';
import NewPasswordForm from "../../components/forms/NewPasswordForm";
import {Button, Card} from "react-bootstrap";
import {HOME_ROUTE} from "../../utils/consts";
import {useNavigate} from "react-router-dom";

const ResetPassword = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    return (
        <Card>
            <Card.Body>
                {
                    isSuccess ?
                        <>
                            <Card.Title>
                                <div className="text-center">
                                    Пароль успешно обновлен.
                                </div>
                            </Card.Title>
                            <Card.Text as="div">
                                <Button className="comment_button w-100"
                                        onClick={() => navigate(HOME_ROUTE)}>
                                    Вернуться на главную
                                </Button>
                            </Card.Text>
                        </> :
                        <>
                            <Card.Title>
                                <div className="text-center">
                                    Смена пароля
                                </div>
                            </Card.Title>
                            <Card.Text as="div">
                                <NewPasswordForm func={setIsSuccess}/>
                            </Card.Text>
                        </>
                }
            </Card.Body>
        </Card>
    );
};

export default ResetPassword;