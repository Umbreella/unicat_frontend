import axios from "axios";

const publicHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
})

const authHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
})

axios.defaults.withCredentials = true;
authHost.interceptors.request.use(
    config => {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0MDIxMjc3LCJpYXQiOjE2Njc5NzMyNzcsImp0aSI6IjMzNzdlYTY4MTYzYjRmYjk4MWUxOTViNzdiMWViNWJiIiwidXNlcl9pZCI6Mn0.5Tlkh74Y6Of2H-XDhO1r2DkM0Vh3lcEGKq-e0xv6H-0'
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        return config
    },
    error => {
        Promise.reject(error)
    }
);

export {publicHost, authHost};