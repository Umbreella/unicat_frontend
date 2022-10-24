import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {publicRoutes} from "../../utils/routes";

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(publicRoutes);

    if (useLocation().pathname === "/")
        return null;

    return (
        <div className="home">
            <div className="breadcrumbs_container">
                <Container>
                    <Row>
                        <Col>
                            <div className="breadcrumbs">
                                <ul>
                                    {
                                        breadcrumbs.map(({ match, breadcrumb }, index) => (
                                            <li key={match.pathname}>
                                                {
                                                    index !== breadcrumbs.length - 1 ?
                                                        <>
                                                            <NavLink to={match.pathname}>
                                                                {breadcrumb}
                                                            </NavLink>
                                                            <span style={{ margin: "0 8px", color: "#384158"}}>
                                                                /
                                                            </span>
                                                        </> :
                                                        <>{breadcrumb}</>
                                                }

                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Breadcrumbs;