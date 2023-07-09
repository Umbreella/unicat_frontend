import React from 'react';
import {technicalRoutes} from "../../utils/routes";
import {Route, Routes, useParams} from "react-router-dom";
import ResetPassword from "../../pages/technical/ResetPassword";
import {CHANGE_EMAIL, CONFIRM_EMAIL, RESET_PASSWORD} from "../../utils/consts";

const TechnicalRouter = () => {
    return (
        <Routes>
            {
                technicalRoutes.map(({path, Component}) => {
                    let regPath = path;

                    if (path === RESET_PASSWORD || path === CHANGE_EMAIL || path === CONFIRM_EMAIL) {
                        regPath += '/:uuid';
                    }

                    return (
                        <Route key={path}
                               path={regPath}
                               element={<Component/>}/>
                    )
                })
            }
        </Routes>
    );
};

export default TechnicalRouter;