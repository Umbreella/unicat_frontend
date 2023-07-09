import {authFileHost} from "./index";

export const downloadUserCertificate = async (courseId) => {
    const url = `courses/${courseId}/certificate/`;

    return await authFileHost.get(url)
        .then((response) => {
            return response;
        })
        .catch(({response}) => {
            return response;
        });
}
