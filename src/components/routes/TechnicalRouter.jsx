import React from 'react';
import {technicalRoutes} from "../../utils/routes";
import {Route, Routes} from "react-router-dom";

const TechnicalRouter = () => {
    return (
        <Routes>
            {
                technicalRoutes.map(({path, Component}) =>
                    <Route exact key={path} path={path} element={<Component />} />
                )
            }
        </Routes>
    );
};

export default TechnicalRouter;