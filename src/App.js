import {useLocation} from "react-router-dom";
import {useEffect} from "react";
import IndexMain from "./pages/main/IndexMain";
import IndexProfile from "./pages/profile/IndexProfile";
import {authRoutes, publicRoutes, technicalRoutes} from "./utils/routes";
import IndexTechnical from "./pages/technical/IndexTechnical";

function App() {
    const currentPath = useLocation().pathname;

    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const isMainPage = currentPath === "/";

    if (isMainPage)
        return <IndexMain />

    const isPublicRoute = publicRoutes.find(route => route.path.includes(currentPath));

    if (isPublicRoute)
        return <IndexMain/>

    const isAuthRoute = authRoutes.find(route => route.path.includes(currentPath));

    if (isAuthRoute)
        return <IndexProfile/>

    const isTechnicalRoute = technicalRoutes.find(route => route.path.includes(currentPath));

    if (isTechnicalRoute)
        return <IndexTechnical />

    return null;
}

export default App;
