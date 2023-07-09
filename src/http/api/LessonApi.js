import {authHost} from "./index";

export const postLessonComplete = async (lessonId) => {
    const url = `lessons/${lessonId}/complete/`;

    return await authHost.post(url, {})
        .then((response) => {
            return response;
        })
        .catch(({response}) => {
            return response;
        });
}
