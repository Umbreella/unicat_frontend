import drfProvider from "ra-data-django-rest-framework";
import {combineDataProviders, fetchUtils} from "react-admin";
import {courseDataProvider} from "./courseDataProvider";
import {userDataProvider} from "./userDataProvider";
import {eventDataProvider} from "./eventDataProvider";
import {newsDataProvider} from "./newsDataProvider";

const apiUrl = process.env.REACT_APP_BASE_URL + "/api";

const httpClient = (url, options = {}) => {
    options.credentials = 'include';

    if (!options.headers) {
        options.headers = new Headers({Accept: 'application/json'});
    }
    const token = localStorage.getItem('access');
    options.headers.set('Authorization', `Bearer ${token}`);

    return fetchUtils.fetchJson(url, options);
};

const mainDataProvider = drfProvider(apiUrl, httpClient);

export const dataProvider = combineDataProviders((resource) => {
    switch (resource) {
        case 'courses':
            return courseDataProvider(mainDataProvider);
        case 'user':
            return userDataProvider(mainDataProvider);
        case 'events/news':
            return newsDataProvider(mainDataProvider);
        case 'events/event':
            return eventDataProvider(mainDataProvider);
        default:
            return mainDataProvider;
    }
});




