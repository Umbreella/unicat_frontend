import {useContext} from "react";
import IndexMain from "./pages/main/IndexMain";
import IndexProfile from "./pages/profile/IndexProfile";
import IndexTechnical from "./pages/technical/IndexTechnical";
import {Context} from "./index";
import {useCookies} from "react-cookie";

function App() {
    const {user} = useContext(Context);
    const [cookies] = useCookies(['user']);
    const refresh = cookies.refresh;

    if (refresh !== undefined) {
        user.setIsAuth(true);
    }

    return (
        <>
            <IndexMain/>
            <IndexProfile/>
            <IndexTechnical/>
        </>
    );
}

export default App;
