import React, {useState} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faPhone} from "@fortawesome/free-solid-svg-icons";
import AuthModal from "../modal/AuthModal";

const TopBar = () => {
    const [is_showAuthForm, setIsShowAuthForm] = useState(false);

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
                                        <FontAwesomeIcon icon={faPhone} />
                                        <div>001-1234-88888</div>
                                    </li>
                                    <li>
                                        <FontAwesomeIcon
                                            icon={faEnvelopeOpen}/>
                                        <div>
                                            info.deercreative@gmail.com
                                        </div>
                                    </li>
                                </ul>
                                <div className="top_bar_login ml-auto">
                                    <div className="login_button">
                                        <div onClick={() => setIsShowAuthForm(true)}>
                                            Войти
                                        </div>
                                        <AuthModal show={is_showAuthForm}
                                                   onHide={() => setIsShowAuthForm(false)} />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default TopBar;