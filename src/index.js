import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import './styles/main_styles.css';
import './styles/responsive.css';
import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";
import { ApolloClient, ApolloProvider } from '@apollo/client';
import {cacheGraphQL} from "./http/graphql/cache";


export const Context = createContext(null);
export const GraphQLClient = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_BASE_URL,
    cache: cacheGraphQL,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            setLastBreadcrumbs: null,
        }}>
            <BrowserRouter>
                <CookiesProvider>
                    <ApolloProvider client={GraphQLClient}>
                        <App />
                    </ApolloProvider>
                </CookiesProvider>
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);
