import AppRouter from "./components/others/AppRouter";
import {BrowserRouter} from "react-router-dom";
import Header from "./components/others/Header";
import Footer from "./components/others/Footer";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
