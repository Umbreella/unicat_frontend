import axios from 'axios'
import {gql} from "@apollo/client";


export const createQuery = (data) => {
    let query = "";
    data.forEach((value) => {
        query += value
    });

    return gql`
        query {
            ${query}
        }
    `;
}

const publicHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
})

const authHost = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
})

const addHeaderAuthorization = ({config}) => {
    config.headers.authorization = `Bearer ${localStorage.getItem('access')}`;
    return config;
}

axios.defaults.withCredentials = true;
authHost.interceptors.request.use(addHeaderAuthorization);

export {publicHost, authHost};
