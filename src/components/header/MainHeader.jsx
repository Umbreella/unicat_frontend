import React, {useContext, useState} from 'react';
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
    BLOG_ROUTE,
    CONTACTS_ROUTE,
    COURSES_ROUTE,
    HOME_ROUTE, PROFILE
} from "../../utils/consts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBars,
    faSearch,
    faUser, faXmark
} from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-bootstrap/Dropdown';
import {NavLink, useNavigate} from "react-router-dom";
import SearchForm from "../forms/SearchForm";
import ResizeObserver from "rc-resize-observer";
import AuthModal from "../modal/AuthModal";
import {useMediaQuery} from "react-responsive";
import {Context} from "../../index";
import {logoutUser} from "../../http/UserApi";

const MainHeader = () => {
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [isVisibleMenu, setVisibleMenu] = useState(false);
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

    const toggleMenu = () => {
        if (!isLargeScreen)
            setVisibleMenu(!isVisibleMenu);
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

                                        <Navbar.Toggle onClick={toggleMenu}>
                                            <FontAwesomeIcon icon={faBars} />
                                        </Navbar.Toggle>

                                        <Navbar.Offcanvas placement="end"
                                                          restoreFocus={false}
                                                          show={isVisibleMenu}
                                                          onHide={() => setVisibleMenu(false)}>
                                            <OffcanvasHeader className="ms-auto">
                                                <FontAwesomeIcon icon={faXmark}
                                                                 onClick={toggleMenu}/>
                                            </OffcanvasHeader>

                                            <OffcanvasBody className="">
                                                <div className="search">
                                                    <SearchForm />
                                                </div>
                                                <Nav className="ms-auto">
                                                    <NavLink to={HOME_ROUTE}
                                                             onClick={toggleMenu}>
                                                        Главная
                                                    </NavLink>
                                                    <NavLink to={ABOUT_ROUTE}
                                                             onClick={toggleMenu}>
                                                        О нас
                                                    </NavLink>
                                                    <NavLink to={COURSES_ROUTE}
                                                             onClick={toggleMenu}>
                                                        Курсы
                                                    </NavLink>
                                                    <NavLink to={BLOG_ROUTE}
                                                             onClick={toggleMenu}>
                                                        Блог
                                                    </NavLink>
                                                    <NavLink to={CONTACTS_ROUTE}
                                                             onClick={toggleMenu}>
                                                        Контакты
                                                    </NavLink>

                                                    <FontAwesomeIcon icon={faSearch}
                                                                     onClick={showSearchContainer}/>

                                                    <div className="profile_link">
                                                        {
                                                            isLargeScreen ?
                                                                user.isAuth ?
                                                                    <Dropdown as='span' align="end">
                                                                        <Dropdown.Toggle as='span'>
                                                                            <FontAwesomeIcon icon={faUser}/>
                                                                        </Dropdown.Toggle>

                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item as="a">
                                                                                <span onClick={() => navigate(PROFILE)}>
                                                                                    Профиль
                                                                                </span>
                                                                            </Dropdown.Item>
                                                                            <Dropdown.Item href="#">
                                                                                Выйти
                                                                            </Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown> :
                                                                    <FontAwesomeIcon icon={faUser}
                                                                                     onClick={() => setVisibleAuthForm(true)}/>
                                                                :
                                                                user.isAuth ?
                                                                    <>
                                                                        <div>
                                                                            Профиль
                                                                        </div>
                                                                        <div>
                                                                            Выйти
                                                                        </div>
                                                                    </> :
                                                                    <div>
                                                                        Войти
                                                                    </div>
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