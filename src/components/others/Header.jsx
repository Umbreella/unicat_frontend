import React from 'react';
import {
    Col,
    Container,
    Nav,
    Navbar,
    OffcanvasBody,
    OffcanvasHeader, Row,
} from "react-bootstrap";
import {ABOUT_ROUTE, BLOG_ROUTE, CONTACTS_ROUTE, COURSES_ROUTE, HOME_ROUTE} from "../../utils/consts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import HeaderSearchForm from "../forms/HeaderSearchForm";

const Header = () => {
    return (
        <div className="header_container sticky-top">
            <Container>
                <Row>
                    <Col>
                        <div className="header_content d-flex flex-row align-items-center justify-content-start">
                            <Navbar expand="lg">
                                <NavLink to="/" className="logo_text">
                                    Unic<span>at</span>
                                </NavLink>

                                <Navbar.Toggle>
                                    <FontAwesomeIcon icon={faBars} />
                                </Navbar.Toggle>
                                <Navbar.Offcanvas placement="end">
                                    <OffcanvasHeader className="ms-auto" closeButton />
                                    <OffcanvasBody className="">
                                        <div className="search">
                                            <HeaderSearchForm />
                                        </div>
                                        <Nav className="ms-auto">
                                            <NavLink to={HOME_ROUTE} >Главная</NavLink>
                                            <NavLink to={ABOUT_ROUTE} >О нас</NavLink>
                                            <NavLink to={COURSES_ROUTE} >Курсы</NavLink>
                                            <NavLink to={BLOG_ROUTE} >Блог</NavLink>
                                            <NavLink to={CONTACTS_ROUTE} >Контакты</NavLink>
                                            <FontAwesomeIcon icon={faSearch} />
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                        </Nav>
                                    </OffcanvasBody>
                                </Navbar.Offcanvas>
                            </Navbar>
                        </div>
                    </Col>
                </Row>


            </Container>
        </div>
    );
};

export default Header;