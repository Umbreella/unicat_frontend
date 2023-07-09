import React, {useContext, useEffect, useReducer} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link, NavLink, useLocation} from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {mainPage, publicRoutes} from "../../utils/routes";
import {Context} from "../../index";
import {
    BLOG_ROUTE,
    EVENTS_ROUTE,
    LAST_BREADCRUMBS,
    NEWS_ROUTE
} from "../../utils/consts";
import {HashLink} from "react-router-hash-link";

const Breadcrumbs = () => {
    const allPublicRoutes = [
        mainPage,
        ...publicRoutes
    ]
    const breadcrumbs = useBreadcrumbs(allPublicRoutes);
    const context = useContext(Context);
    const [lastBreadcrumb, setLastBreadcrumb] = useReducer((state, action) => action, null);
    context.setLastBreadcrumbs = setLastBreadcrumb;

    if (useLocation().pathname === "/")
        return <></>

    return (
        <div className="home">
            <div className="breadcrumbs_container">
                <Container>
                    <Row>
                        <Col>
                            <div className="breadcrumbs">
                                <ul>
                                    {
                                        breadcrumbs.map(({
                                                             match: {pathname},
                                                             breadcrumb
                                                         }, index) => (
                                            <li key={pathname}>
                                                <>
                                                    {
                                                        breadcrumb.props.children === LAST_BREADCRUMBS ?
                                                            <>
                                                                {lastBreadcrumb}
                                                            </> :
                                                            index === breadcrumbs.length - 1 ?
                                                                <>{breadcrumb}</> :
                                                                <>
                                                                    {
                                                                        pathname === EVENTS_ROUTE ?
                                                                            <HashLink
                                                                                to={BLOG_ROUTE + "#events"}
                                                                                scroll={(el) => el.scrollIntoView({
                                                                                    behavior: 'auto',
                                                                                    block: 'start'
                                                                                })}>
                                                                                {breadcrumb}
                                                                            </HashLink> :
                                                                            pathname === NEWS_ROUTE ?
                                                                                <Link
                                                                                    to={BLOG_ROUTE}>
                                                                                    {breadcrumb}
                                                                                </Link> :
                                                                                <Link
                                                                                    to={pathname}>
                                                                                    {breadcrumb}
                                                                                </Link>
                                                                    }
                                                                    <span
                                                                        style={{
                                                                            margin: "0 8px",
                                                                            color: "#384158"
                                                                        }}>/</span>
                                                                </>
                                                    }
                                                </>
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