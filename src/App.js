import AppRouter from "./components/others/AppRouter";
import {BrowserRouter, useLocation} from "react-router-dom";
import Header from "./components/others/Header";
import Footer from "./components/others/Footer";
import TopBar from "./components/others/TopBar";
import {useEffect} from "react";
import Breadcrumbs from "./components/others/Breadcrumbs";

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <TopBar />
            <Header />
            <Breadcrumbs />
            <AppRouter />
            <Footer />
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
