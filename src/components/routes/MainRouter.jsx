import React, {useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'
import {publicRoutes} from "../../utils/routes";

function MainRouter() {
    return (
        <Routes>
            {
                publicRoutes.map(({path, Component, breadcrumb}) =>
                    Component && <Route exact
                                        key={path}
                                        path={path}
                                        element={<Component/>}/>
                )
            }
        </Routes>
    )
}

export default MainRouter