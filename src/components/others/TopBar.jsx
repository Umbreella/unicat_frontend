import React, {useContext} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faPhone} from "@fortawesome/free-solid-svg-icons";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const TopBar = observer(() => {
    const {setVisibleAuthForm} = useContext(Context);

    return (
        <div className="top_bar">
            <div className="top_bar_container">
                <Container>
                    <Row>
                        <Col>
                            <div
                                className="top_bar_content d-flex flex-row
                                align-items-center justify-content-between">
                                <ul className="top_bar_contact_list">
                                    <li>
                                        <div className="question">
                                            У Вас есть вопросы?
                                        </div>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon icon={faPhone}/>
                                        <div>
                                            139(1154)426-98-52723
                                        </div>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faEnvelopeOpen}/>
                                        <div>
                                            xeipeittaffazu@umbreella-dev.ru
                                        </div>
                                    </li>
                                </ul>
                                <div className="top_bar_login ml-auto">
                                    <div className="login_button">
                                        <div
                                            onClick={() => setVisibleAuthForm(true)}>
                                            Войти
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
});

export default TopBar;