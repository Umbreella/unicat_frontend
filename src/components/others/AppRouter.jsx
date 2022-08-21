import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {publicRoutes} from "../../routes";

function AppRouter() {
    return (
        <Routes>
            {
                publicRoutes.map(({path, Component}) =>
                    <Route exact key={path} path={path} element={<Component />} />
                )
            }
        </Routes>
    )
}

export default AppRouter