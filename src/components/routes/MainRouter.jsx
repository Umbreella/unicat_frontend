import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {mainPage, publicRoutes} from "../../utils/routes";

function MainRouter() {
    const {path, Component} = mainPage;

    return (
        <Routes>
            <Route path={path} element={<Component/>}/>
            {
                publicRoutes.map(({path, Component, breadcrumb}) =>
                    Component && <Route exact key={path} path={path}
                                        element={<Component/>}/>
                )
            }
        </Routes>
    )
}

export default MainRouter