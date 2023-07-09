import React, {useContext, useEffect, useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import ProfileMenuSidebar from "../../components/header/ProfileMenuSidebar";
import ResizeObserver from "rc-resize-observer";
import ProfileRouter from "../../components/routes/ProfileRouter";
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import {HOME_ROUTE} from "../../utils/consts";
import {observer} from "mobx-react-lite";
import AuthForm from "../../components/forms/AuthForm";
import {checkUserIsAuthed} from "../../http/api/UserApi";
import {Context} from "../../index";
import PageLoader from "../../components/loader/PageLoader";
import {useMediaQuery} from "react-responsive";

const IndexProfile = observer(() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const [isChecked, setIsChecked] = useState(false);
    const [isVisibleSibeBarMenu, setIsVisibleSibeBarMenu] = useState(true);
    const isMediumScreen = useMediaQuery({query: '(max-width: 768px)'});

    useEffect(() => {
        checkUserIsAuthed().then((isAuth) => {
            user.setIsAuth(isAuth);
            setIsChecked(true);
        });
    }, [location]);

    if (!isChecked) {
        return <PageLoader/>
    }

    return (
        <>
            {
                !user.isAuth ?
                    <div className="vh-100 d-flex align-content-center">
                        <Card className="col-11 m-auto"
                              style={{maxWidth: 500}}>
                            <Card.Body>
                                <Card.Title className="text-center">
                                    <div className="navbar-brand"
                                         style={{padding: 20}}>
                                        <NavLink to="/">
                                            Unic<span>at</span>
                                        </NavLink>
                                    </div>
                                </Card.Title>
                                <AuthForm/>
                            </Card.Body>
                        </Card>
                    </div> :
                    <ResizeObserver onResize={() => {
                        setIsVisibleSibeBarMenu(!isMediumScreen)
                    }}>
                        <div className="vh-100 d-flex overflow-hidden">
                            <ProfileMenuSidebar data={{
                                isVisibleSibeBarMenu: isVisibleSibeBarMenu,
                                setIsVisibleSibeBarMenu: setIsVisibleSibeBarMenu,
                            }}/>
                            <div className="flex-grow-1">
                                <div className="header_container">
                                    <Container>
                                        <Row>
                                            <div
                                                className="header_content d-flex align-items-center justify-content-between"
                                                style={{height: 54}}>
                                                <Col
                                                    className="col-1 text-center">
                                                    <FontAwesomeIcon
                                                        className="d-md-none"
                                                        icon={faBars}
                                                        style={{
                                                            color: "#0000008c",
                                                            fontSize: 20
                                                        }}
                                                        onClick={() => setIsVisibleSibeBarMenu(!isVisibleSibeBarMenu)}
                                                    />
                                                </Col>

                                                <Col
                                                    className="col-1 text-center">
                                                    <NavLink to={HOME_ROUTE}>
                                                        <FontAwesomeIcon
                                                            icon={faArrowRightFromBracket}/>
                                                    </NavLink>
                                                </Col>
                                            </div>
                                        </Row>
                                    </Container>
                                </div>

                                <div className="profile_page"
                                     style={{
                                         height: "calc(100% - 55px)",
                                         paddingBottom: 100,
                                     }}
                                     onScroll={
                                         ({
                                              target: {
                                                  scrollTop,
                                                  scrollHeight,
                                                  clientHeight
                                              }
                                          }) => {
                                             if (Math.round(scrollTop + clientHeight) === scrollHeight) {

                                             }
                                         }
                                     }>
                                    <ProfileRouter/>
                                </div>
                            </div>
                        </div>
                    </ResizeObserver>
            }
        </>
    );
});

export default IndexProfile;