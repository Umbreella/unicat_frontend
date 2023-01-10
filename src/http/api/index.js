import axios from "axios";

const publicHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
})

const authHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    withCredentials: true,
})

axios.defaults.withCredentials = true;
authHost.interceptors.request.use(
    config => {
        const token = localStorage.getItem("access");
        if (token !== null) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
);

export {publicHost, authHost};