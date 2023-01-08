import {authHost} from "./index";

export const postCourseComment = async (data) => {
    const url = 'comments/course';

    return await authHost.post(url, data).catch(error => {
        return error.response
    });
}

export const postNewsComment = async (data) => {
    const url = 'comments/news';

    return await authHost.post(url, data).catch(error => {
        return error.response
    });
}

export const postEventComment = async (data) => {
    const url = 'comments/event';

    return await authHost.post(url, data).catch(error => {
        return error.response
    });
}
