import {useContext, useEffect} from "react";
import IndexMain from "./pages/main/IndexMain";
import IndexProfile from "./pages/profile/IndexProfile";
import IndexTechnical from "./pages/technical/IndexTechnical";
import {Context} from "./index";
import {useLocation} from "react-router-dom";
import {checkUserIsAuthed} from "./http/api/UserApi";
import {authRoutes, publicRoutes, technicalRoutes} from "./utils/routes";

function App() {
    const {user} = useContext(Context);

    const location = useLocation();
    const {pathname} = location;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        checkUserIsAuthed()
            .then((isAuth) => {
                user.setIsAuth(isAuth);
            });
    })

    const isMainPage = pathname === "/";
    const isPublicPage = publicRoutes.some(({path}) => pathname.startsWith(path));
    const isAuthPage = authRoutes.some(({path}) => pathname.startsWith(path));
    const isTechPage = technicalRoutes.some(({path}) => pathname.startsWith(path));

    return (
        <>
            {
                (isMainPage || isPublicPage) && <IndexMain/>
            }
            {
                isAuthPage && <IndexProfile/>
            }
            {
                isTechPage && <IndexTechnical/>
            }
        </>
    );
}

export default App;
