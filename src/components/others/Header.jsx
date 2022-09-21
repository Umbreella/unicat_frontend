import React, {useState} from 'react';
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
import {
    faBars,
    faSearch,
    faShoppingCart,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import SearchForm from "../forms/SearchForm";
import ResizeObserver from "rc-resize-observer";
import AuthModal from "../modal/AuthModal";

const Header = () => {
    const [is_showAuthForm, setIsShowAuthForm] = useState(false);

    function showSearchContainer(e) {
        e.preventDefault();
        const searchContainer = document.getElementById("search_container");
        searchContainer.classList.toggle("active");
    }

    function closeSearchContainer(e) {
        e?.preventDefault();
        const searchContainer = document.getElementById("search_container");
        searchContainer.classList.remove("active");
    }

    return (
        <ResizeObserver onResize={() => closeSearchContainer(null)}>
            <div className="sticky-top">
                <div className="header_container">
                    <Container>
                        <Row>
                            <Col>
                                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                    <Navbar expand="lg">
                                        <Navbar.Brand>
                                            <NavLink to="/">
                                                Unic<span>at</span>
                                            </NavLink>
                                        </Navbar.Brand>

                                        <Navbar.Toggle>
                                            <FontAwesomeIcon icon={faBars} />
                                        </Navbar.Toggle>
                                        <Navbar.Offcanvas placement="end">
                                            <OffcanvasHeader className="ms-auto" closeButton />
                                            <OffcanvasBody className="">
                                                <div className="search">
                                                    <SearchForm />
                                                </div>
                                                <Nav className="ms-auto">
                                                    <NavLink to={HOME_ROUTE} >Главная</NavLink>
                                                    <NavLink to={ABOUT_ROUTE} >О нас</NavLink>
                                                    <NavLink to={COURSES_ROUTE} >Курсы</NavLink>
                                                    <NavLink to={BLOG_ROUTE} >Блог</NavLink>
                                                    <NavLink to={CONTACTS_ROUTE} >Контакты</NavLink>
                                                    <FontAwesomeIcon icon={faSearch} onClick={showSearchContainer}/>
                                                    <FontAwesomeIcon icon={faShoppingCart} />
                                                    <FontAwesomeIcon icon={faUser} onClick={() => setIsShowAuthForm(true)}/>
                                                    <AuthModal show={is_showAuthForm}
                                                               onHide={() => setIsShowAuthForm(false)} />
                                                </Nav>
                                            </OffcanvasBody>
                                        </Navbar.Offcanvas>
                                    </Navbar>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="header_search_container" id="search_container">
                    <Container>
                        <Row className="justify-content-end">
                            <Col className="col-lg-5">
                                <div
                                    className="header_search_content d-flex flex-row align-items-center justify-content-end">
                                    <SearchForm />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </ResizeObserver>
    );
};

export default Header;