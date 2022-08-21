import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import './styles/main_styles.css';
import './styles/responsive.css';

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UserStore()
        }}>
            <App />
        </Context.Provider>
    </React.StrictMode>
);
