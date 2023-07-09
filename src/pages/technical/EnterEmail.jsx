import React, {useState} from 'react';
import {Button, Card} from "react-bootstrap";
import EmailForm from "../../components/forms/EmailForm";
import {useNavigate} from "react-router-dom";
import {HOME_ROUTE} from "../../utils/consts";

const EnterEmail = () => {
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    return (
        <Card>
            <Card.Body>
                {
                    isSuccess ?
                        <>
                            <Card.Text as="div">
                                <div className="form_title form-label">
                                    Если ваш адрес электронной почты существует
                                    в нашей базе данных, через несколько минут
                                    вы получите ссылку для восстановления
                                    пароля на свой адрес электронной почты.
                                </div>

                                <Button className="comment_button w-100"
                                        onClick={() => navigate(HOME_ROUTE)}>
                                    Вернуться на главную
                                </Button>
                            </Card.Text>
                        </> :
                        <>
                            <Card.Title>
                                <div className="text-center mb-3">
                                    Введите почту
                                </div>
                            </Card.Title>
                            <Card.Text as="div">
                                <EmailForm func={setIsSuccess}/>
                            </Card.Text>
                        </>
                }
            </Card.Body>
        </Card>
    );
};

export default EnterEmail;