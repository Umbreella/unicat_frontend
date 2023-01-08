import {useContext, useEffect} from "react";
import IndexMain from "./pages/main/IndexMain";
import IndexProfile from "./pages/profile/IndexProfile";
import IndexTechnical from "./pages/technical/IndexTechnical";
import {Context} from "./index";
import {useCookies} from "react-cookie";
import {useLocation} from "react-router-dom";

function App() {
    const {user} = useContext(Context);
    const [cookies] = useCookies(['user']);
    const refresh = cookies.refresh;

    if (refresh !== undefined) {
        user.setIsAuth(true);
    }

    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <IndexMain/>
            <IndexProfile/>
            <IndexTechnical/>
        </>
    );
}

export default App;
