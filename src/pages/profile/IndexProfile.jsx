import React, {useState} from 'react';
import {NavLink, useLocation} from "react-router-dom";
import ProfileMenuSidebar from "../../components/header/ProfileMenuSidebar";
import ResizeObserver from "rc-resize-observer";
import ProfileRoutes from "../../components/routes/ProfileRoutes";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowRightFromBracket,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import {HOME_ROUTE} from "../../utils/consts";

const IndexProfile = () => {
    const [isToggle, setIsToggle] = useState(false);

    const url = useLocation().pathname;

    if (!(url.includes("/user") || url.includes("/lesson")))
        return null;

    return (
        <>
            <ResizeObserver onResize={() => setIsToggle(false)}>
                <div className="vh-100 d-flex overflow-hidden">
                    <ProfileMenuSidebar isToggle={isToggle} setIsToggle={setIsToggle}/>

                    <div className="flex-grow-1">
                        <div className="header_container">
                            <Container>
                                <Row>
                                    <div className="header_content d-flex align-items-center justify-content-between"
                                         style={{ height: 54 }}>
                                        <Col className="col-1 text-center" >
                                            <FontAwesomeIcon className="d-md-none"
                                                             icon={faBars}
                                                             style={{
                                                                 color: "#0000008c",
                                                                 fontSize: 20
                                                             }}
                                                             onClick={() => setIsToggle(!isToggle)}/>
                                        </Col>

                                        <Col className="col-1 text-center" >
                                            <NavLink to={HOME_ROUTE}>
                                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                            </NavLink>
                                        </Col>
                                    </div>
                                </Row>
                            </Container>
                        </div>

                        <div className="profile_page"
                             style={{ height: "calc(100% - 55px)" }}>
                            <ProfileRoutes />
                        </div>
                    </div>
                </div>
            </ResizeObserver>
        </>
    );
};

export default IndexProfile;