import {BrowserRouter, useLocation} from "react-router-dom";
import {useEffect} from "react";
import IndexMain from "./pages/main/IndexMain";
import IndexProfile from "./pages/profile/IndexProfile";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <IndexMain />
            <IndexProfile />
        </BrowserRouter>
    );
}

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default App;
