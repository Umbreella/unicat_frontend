import React, {useEffect, useRef} from 'react';
import {Route, Routes} from "react-router-dom";
import {authRoutes} from "../../utils/routes";

const ProfileRoutes = () => {
    const ref = useRef(null)

    useEffect(() => {
        ref.current.scrollIntoView();
    })

    return (
        <div ref={ref}>
            <Routes>
                {
                    authRoutes.map(({path, Component}) =>
                        <Route exact key={path} path={path} element={<Component />} />
                    )
                }
            </Routes>
        </div>
    );
};

export default ProfileRoutes;