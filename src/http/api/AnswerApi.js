import {authHost} from "./index";

export const postUserAnswer = async ({attemptId, data}) => {
    const url = `lessons/attempts/${attemptId}/answer/`;

    return await authHost.post(url, data)
        .then((response) => {
            return response;
        })
        .catch(({response}) => {
            return response;
        });
}
