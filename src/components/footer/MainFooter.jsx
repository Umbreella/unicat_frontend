import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGooglePlus, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons";
import googleStore_app from "../../images/mobile_1.png";
import appStore_app from "../../images/mobile_2.png";
import galaxyStore_app from "../../images/mobile_3.png";

const MainFooter = () => {
    return (
        <div className="footer" >
            <div className="footer_background"/>
            <Container>
                <Row className="footer_row">
                    <Col>
                        <div className="footer_content">
                            <Row>
                                <div className="col-lg-4 footer_col">
                                    <NavLink className="footer_logo_text" to="/">
                                        Unic<span>at</span>
                                    </NavLink>
                                    <div className="footer_about_text">
                                        <p>Lorem ipsum dolor sit ametium, consectetur adipiscing elit.</p>
                                    </div>
                                    <div className="footer_social">
                                        <ul style={{paddingLeft: 0}}>
                                            <li>
                                                <NavLink to="/">
                                                    <FontAwesomeIcon icon={faFacebook} />
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/">
                                                    <FontAwesomeIcon icon={faGooglePlus} />
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/">
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/">
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 footer_col">
                                    <div className="footer_title">
                                        Свяжитесь с нами
                                    </div>
                                    <div className="footer_contact_info">
                                        <ul style={{paddingLeft: 0}}>
                                            <li>Email: Info.deercreative@gmail.com</li>
                                            <li>Phone: +(88) 111 555 666</li>
                                            <li>40 Baria Sreet 133/2 New York City, United States</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 footer_col clearfix">
                                    <div className="footer_mobile_content">
                                        <NavLink className="footer_image" to="/">
                                            <Image src={googleStore_app} />
                                        </NavLink>
                                        <NavLink className="footer_image" to="/">
                                            <Image src={appStore_app} />
                                        </NavLink>
                                        <NavLink className="footer_image" to="/">
                                            <Image src={galaxyStore_app} />
                                        </NavLink>
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className="copyright_row">
                    <Col>
                        <div
                            className="copyright d-flex flex-lg-row
                            flex-column align-items-center
                            justify-content-start">
                            <div className="cr_text">
                                Copyright &copy; {(new Date()).getFullYear()} All
                                rights reserved</div>
                            <div className="cr_links ms-auto">
                                <ul className="cr_list">
                                    <NavLink to="/">Copyright notification</NavLink>
                                    <NavLink to="/">Terms of Use</NavLink>
                                    <NavLink to="/">Privacy Policy</NavLink>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainFooter;