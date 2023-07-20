import React, {useContext} from 'react';
import TopBar from "../../components/others/TopBar";
import MainHeader from "../../components/header/MainHeader";
import Breadcrumbs from "../../components/others/Breadcrumbs";
import MainRouter from "../../components/routes/MainRouter";
import MainFooter from "../../components/footer/MainFooter";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const IndexMain = observer(() => {
    const {user} = useContext(Context);

    return (
        <>
            {
                !user.isAuth && <TopBar/>
            }
            <MainHeader/>
            <Breadcrumbs/>
            <MainRouter/>
            <MainFooter/>
        </>
    );
});

export default IndexMain;