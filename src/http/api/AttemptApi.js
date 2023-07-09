import {authHost} from "./index";

export const getActiveAttempt = async (lessonId) => {
    const url = `lessons/${lessonId}/attempt/`;

    return await authHost.get(url)
        .then((response) => {
            return response;
        })
        .catch(({response}) => {
            return response;
        });
}

export const createActiveAttempt = async (lessonId) => {
    const url = `lessons/${lessonId}/attempt/`;

    return await authHost.post(url, {})
        .then((response) => {
            return response;
        })
        .catch(({response}) => {
            return response;
        });
}

export const refreshActiveAttempt = async ({lessonId, data}) => {
    const url = `lessons/${lessonId}/attempt/refresh/`;

    return await authHost.post(url, data)
        .then((response) => {
            return response;
        })
        .catch(({response}) => {
            return response;
        });
}
