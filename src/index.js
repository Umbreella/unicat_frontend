import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import './styles/main_styles.css';
import './styles/responsive.css';
import {BrowserRouter} from "react-router-dom";
import {CookiesProvider} from "react-cookie";


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore(),
            setLastBreadcrumbs: null,
            setCourseMenuItems: null,
        }}>
            <BrowserRouter>
                <CookiesProvider>
                    <App/>
                </CookiesProvider>
            </BrowserRouter>
        </Context.Provider>
    </React.StrictMode>
);
