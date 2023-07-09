import React, {useContext, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import {HOME_ROUTE} from "../../utils/consts";
import HorizontalLoader from "../../components/loader/HorizontalLoader";
import {logoutUser, postConfirmEmail} from "../../http/api/UserApi";
import {Context} from "../../index";
import {useApolloClient} from "@apollo/client";
import {observer} from "mobx-react-lite";

const ConfirmEmail = observer(() => {
    const {user} = useContext(Context);
    const client = useApolloClient();
    const {uuid} = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrors, setHasErrors] = useState(false);

    useEffect(() => {
        const data = {
            url: uuid,
        }

        postConfirmEmail(data)
            .then((response) => {
                if (response.status === 200) {
                    user.setIsAuth(false);
                    localStorage.removeItem("access");
                    logoutUser().then();
                } else {
                    setHasErrors(true);
                }
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, []);

    if (!user.setIsAuth) {
        client.resetStore();
    }

    return (
        <Card>
            <Card.Body>
                {
                    isLoading ?
                        <div className="m-5">
                            <HorizontalLoader/>
                        </div> :
                        <>
                            <Card.Title>
                                <div className="text-center">
                                    {
                                        hasErrors ?
                                            <>
                                                Неверная ссылка
                                            </> :
                                            <>
                                                Ваша почта успешно
                                                подтверждена. Теперь вам
                                                доступен личный кабинет
                                            </>
                                    }
                                </div>
                            </Card.Title>
                            <Card.Text as="div">
                                <Button className="comment_button w-100"
                                        onClick={() => navigate(HOME_ROUTE)}>
                                    Вернуться на главную
                                </Button>
                            </Card.Text>
                        </>
                }
            </Card.Body>
        </Card>
    );
});

export default ConfirmEmail;