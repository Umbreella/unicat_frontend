import {publicHost} from "./index";

export const postFeedback = async (data) => {
    const url = `feedbacks/`;

    return await publicHost.post(url, data)
        .then((response) => {
            return response;
        })
        .catch(({response}) => {
            return response;
        });
}
