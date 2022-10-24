import React from 'react';
import TopBar from "../../components/others/TopBar";
import MainHeader from "../../components/header/MainHeader";
import Breadcrumbs from "../../components/others/Breadcrumbs";
import MainRouter from "../../components/routes/MainRouter";
import MainFooter from "../../components/footer/MainFooter";
import {useLocation} from "react-router-dom";

const IndexMain = () => {
    const url = useLocation().pathname;

    if (url.includes('user') || url.includes('lesson'))
        return null;

    return (
        <>
            <TopBar />
            <MainHeader />
            <Breadcrumbs />
            <MainRouter />
            <MainFooter />
        </>
    );
};

export default IndexMain;