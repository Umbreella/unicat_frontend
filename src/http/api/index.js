import axios from "axios";
import {checkUserIsAuthed} from "./UserApi";

const publicHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
    timeout: 5000,
})

const authHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
    timeout: 5000,
})

const authFileHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
    responseType: "blob",
    timeout: 5000,
})

authHost.interceptors.request.use(
    async config => {
        await checkUserIsAuthed();

        const token = localStorage.getItem("access");
        if (token !== null) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

authFileHost.interceptors.request.use(
    async config => {
        await checkUserIsAuthed();

        const token = localStorage.getItem("access");
        if (token !== null) {
            config.headers["Authorization"] = "Bearer " + token;
        }
        return config;
    },
    error => {
        Promise.reject(error);
    }
);

export {publicHost, authHost, authFileHost};