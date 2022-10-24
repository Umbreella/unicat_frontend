import React, {useState} from 'react';
import {
    Col,
    Container,
    Nav,
    Navbar,
    OffcanvasBody,
    OffcanvasHeader, Row,
} from "react-bootstrap";
import {
    ABOUT_ROUTE,
    PROFILE,
    BLOG_ROUTE,
    CONTACTS_ROUTE,
    COURSES_ROUTE,
    HOME_ROUTE
} from "../../utils/consts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faSearch,
    faShoppingCart,
    faUser, faXmark
} from "@fortawesome/free-solid-svg-icons";
import {NavLink} from "react-router-dom";
import SearchForm from "../forms/SearchForm";
import ResizeObserver from "rc-resize-observer";
import AuthModal from "../modal/AuthModal";
import {useMediaQuery} from "react-responsive";

const MainHeader = () => {
    const [isVisibleToggleMenu, setVisibleToggleMenu] = useState(false);
    const [isVisibleAuthForm, setVisibleAuthForm] = useState(false);
    const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' })

    const showSearchContainer = (e) => {
        e.preventDefault();
        const searchContainer = document.getElementById("search_container");
        searchContainer.classList.toggle("active");
    }

    const closeSearchContainer = (e) => {
        e?.preventDefault();
        const searchContainer = document.getElementById("search_container");
        searchContainer.classList.remove("active");
    }

    const visibleToggleMenu = () => {
        if (!isLargeScreen)
            setVisibleToggleMenu(!isVisibleToggleMenu)
    }


    return (
        <ResizeObserver onResize={() => closeSearchContainer(null)}>
            <div className="sticky-top">
                <div className="header_container">
                    <Container>
                        <Row>
                            <Col>
                                <div className="header_content d-flex flex-row align-items-center justify-content-start">
                                    <Navbar expand="lg" expanded={isVisibleToggleMenu}>
                                        <Navbar.Brand>
                                            <NavLink to="/">
                                                Unic<span>at</span>
                                            </NavLink>
                                        </Navbar.Brand>

                                        <Navbar.Toggle onClick={visibleToggleMenu}>
                                            <FontAwesomeIcon icon={faBars} />
                                        </Navbar.Toggle>
                                        <Navbar.Offcanvas placement="end">
                                            <OffcanvasHeader className="ms-auto">
                                                <FontAwesomeIcon icon={faXmark}
                                                                 onClick={visibleToggleMenu} />
                                            </OffcanvasHeader>
                                            <OffcanvasBody className="">
                                                <div className="search">
                                                    <SearchForm />
                                                </div>
                                                <Nav className="ms-auto">
                                                    <NavLink to={HOME_ROUTE}
                                                             onClick={visibleToggleMenu}>
                                                        Главная
                                                    </NavLink>
                                                    <NavLink to={ABOUT_ROUTE}
                                                             onClick={visibleToggleMenu}>
                                                        О нас
                                                    </NavLink>
                                                    <NavLink to={COURSES_ROUTE}
                                                             onClick={visibleToggleMenu}>
                                                        Курсы
                                                    </NavLink>
                                                    <NavLink to={BLOG_ROUTE}
                                                             onClick={visibleToggleMenu}>
                                                        Блог
                                                    </NavLink>
                                                    <NavLink to={CONTACTS_ROUTE}
                                                             onClick={visibleToggleMenu}>
                                                        Контакты
                                                    </NavLink>
                                                    <FontAwesomeIcon icon={faSearch} onClick={showSearchContainer}/>

                                                    <div className="profile_link"
                                                         onClick={() => setVisibleAuthForm(true)}>
                                                        {
                                                            isLargeScreen ?
                                                                <FontAwesomeIcon icon={faUser}/> :
                                                                "Профиль"
                                                        }
                                                    </div>

                                                    <AuthModal show={isVisibleAuthForm}
                                                               onHide={() => setVisibleAuthForm(false)} />
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

export default MainHeader;