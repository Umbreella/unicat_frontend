import React from 'react';
import TopBar from "../../components/others/TopBar";
import MainHeader from "../../components/header/MainHeader";
import Breadcrumbs from "../../components/others/Breadcrumbs";
import MainRouter from "../../components/routes/MainRouter";
import MainFooter from "../../components/footer/MainFooter";

const IndexMain = () => {
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