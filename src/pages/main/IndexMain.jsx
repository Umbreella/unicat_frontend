import React, {useContext, useReducer} from 'react';
import TopBar from "../../components/others/TopBar";
import MainHeader from "../../components/header/MainHeader";
import Breadcrumbs from "../../components/others/Breadcrumbs";
import MainRouter from "../../components/routes/MainRouter";
import MainFooter from "../../components/footer/MainFooter";
import {Context} from "../../index";
import AuthModal from "../../components/modal/AuthModal";

const IndexMain = () => {
    const context = useContext(Context);
    const [isVisibleAuthForm, setVisibleAuthForm] = useReducer((state, action) => action, false);
    context.setVisibleAuthForm = setVisibleAuthForm;

    return (
        <>
            <TopBar/>
            <MainHeader/>
            <Breadcrumbs/>
            <MainRouter/>
            <MainFooter/>

            <AuthModal show={isVisibleAuthForm}
                       onHide={() => setVisibleAuthForm(false)}/>
        </>
    );
};

export default IndexMain;