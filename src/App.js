import React, {useContext, useEffect, useReducer} from "react";
import IndexMain from "./pages/main/IndexMain";
import IndexProfile from "./pages/profile/IndexProfile";
import IndexTechnical from "./pages/technical/IndexTechnical";
import {Context} from "./index";
import {Route, Routes, useLocation} from "react-router-dom";
import {
    authRoutes,
    publicRoutes,
    technicalRoutes
} from "./utils/routes";
import {ApolloClient, ApolloProvider, createHttpLink} from "@apollo/client";
import {ADMIN_PATH, LESSON_COURSE} from "./utils/consts";
import AuthModal from "./components/modal/AuthModal";
import {setContext} from "@apollo/client/link/context";
import {checkUserIsAuthed} from "./http/api/UserApi";
import {cacheGraphQL} from "./http/graphql/cache";
import IndexAdmin from "./pages/admin/IndexAdmin";
import NotFound from "./pages/general/NotFound";

function App() {
    const context = useContext(Context);
    const location = useLocation();
    const {pathname} = location;

    const [isVisibleAuthForm, setVisibleAuthForm] = useReducer((state, action) => action, false);
    context.setVisibleAuthForm = setVisibleAuthForm;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const isMainPage = pathname === "/";
    const isPublicPage = publicRoutes.some(({path}) => pathname.startsWith(path) && !pathname.includes(LESSON_COURSE));
    const isAuthPage = authRoutes.some(({path}) => pathname.startsWith(path));
    const isTechPage = technicalRoutes.some(({path}) => pathname.startsWith(path));
    const isAdmin = pathname.startsWith(ADMIN_PATH);

    const httpLink = createHttpLink({
        uri: process.env.REACT_APP_GRAPHQL_BASE_URL,
    });

    const authLink = setContext(async (_, {headers}) => {
        const isAuth = await checkUserIsAuthed();
        context.user.setIsAuth(isAuth)

        const token = localStorage.getItem("access");

        return {
            headers: {
                ...headers,
                authorization: token ? `Bearer ${token}` : "",
            }
        }
    })

    const authGraphQLClient = new ApolloClient({
        link: authLink.concat(httpLink),
        cache: cacheGraphQL,
    });

    return (
        <>
            {
                (isMainPage || isPublicPage) &&
                <ApolloProvider client={authGraphQLClient}>
                    <IndexMain/>
                </ApolloProvider>
            }
            {
                isAuthPage &&
                <ApolloProvider client={authGraphQLClient}>
                    <IndexProfile/>
                </ApolloProvider>
            }
            {
                isTechPage &&
                <ApolloProvider client={authGraphQLClient}>
                    <IndexTechnical/>
                </ApolloProvider>
            }
            {
                isAdmin &&
                <Routes>
                    <Route path={ADMIN_PATH + "/*"} element={<IndexAdmin/>}/>
                </Routes>
            }
            {
                (!(isMainPage || isPublicPage) && !isAuthPage && !isTechPage && !isAdmin) &&
                <ApolloProvider client={authGraphQLClient}>
                    <Routes>
                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </ApolloProvider>
            }
            <AuthModal show={isVisibleAuthForm}
                       onHide={() => setVisibleAuthForm(false)}/>
        </>
    );
}

export default App;
