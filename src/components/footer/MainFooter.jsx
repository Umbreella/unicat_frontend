import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faGooglePlus,
    faInstagram,
    faTwitter, faVk, faYandex
} from "@fortawesome/free-brands-svg-icons";
import googleStore_app from "../../images/mobile_1.png";
import appStore_app from "../../images/mobile_2.png";
import galaxyStore_app from "../../images/mobile_3.png";
import {
    faEnvelopeOpen,
    faLocation,
    faPhone
} from "@fortawesome/free-solid-svg-icons";

const MainFooter = () => {
    return (
        <div className="footer">
            <div className="footer_background"/>
            <Container>
                <Row className="footer_row">
                    <Col>
                        <div className="footer_content">
                            <Row>
                                <div className="col-lg-6 footer_col">
                                    <NavLink className="footer_logo_text"
                                             to="/">
                                        Unic<span>at</span>
                                    </NavLink>
                                    <div className="footer_about_text">
                                        <p>
                                            Не следует, однако, забывать, что
                                            высокотехнологичная концепция
                                            общественного уклада предоставляет
                                            широкие возможности для
                                            инновационных методов управления
                                            процессами.
                                        </p>
                                        <p>
                                            Каждый из нас понимает
                                            очевидную вещь: глубокий уровень
                                            погружения способствует повышению
                                            качества благоприятных
                                            перспектив.
                                        </p>
                                        <p>
                                            Однозначно, тщательные исследования
                                            конкурентов набирают популярность
                                            среди определенных слоев населения,
                                            а значит, должны быть ограничены
                                            исключительно образом мышления.
                                            Ясность нашей позиции очевидна:
                                            глубокий уровень погружения
                                            напрямую зависит от приоретизации
                                            разума над эмоциями.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6 footer_col">
                                    <div className="footer_title">
                                        Свяжитесь с нами
                                    </div>
                                    <div className="footer_social">
                                        <ul style={{paddingLeft: 0}}>
                                            <li>
                                                <NavLink
                                                    to="https://ru-ru.facebook.com/">
                                                    <FontAwesomeIcon
                                                        icon={faFacebook}/>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="https://www.instagram.com/">
                                                    <FontAwesomeIcon
                                                        icon={faInstagram}/>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to="https://twitter.com/">
                                                    <FontAwesomeIcon
                                                        icon={faTwitter}/>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://vk.com/">
                                                    <FontAwesomeIcon
                                                        icon={faVk}/>
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="https://dzen.ru/">
                                                    <FontAwesomeIcon
                                                        icon={faYandex}/>
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="footer_contact_info">
                                        <ul style={{paddingLeft: 0}}>
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faPhone}/>
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
                                            <li>
                                                <FontAwesomeIcon
                                                    icon={faLocation}/>
                                                <div>
                                                    Россия, г. Омск, проезд
                                                    Чехова, 73
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="copyright_row">
                    <Col>
                        <div className="copyright d-flex justify-content-center">
                            <div className="cr_text">
                                Copyright &copy; 2022-{(new Date()).getFullYear()} All
                                rights reserved
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainFooter;