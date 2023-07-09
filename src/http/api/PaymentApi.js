import {authHost} from "./index";

export const createPayment = async (data) => {
    const url = `payments/create/`;

    return await authHost.post(url, data)
        .then((response) => {
            return response;
        })
        .catch(({response}) => {
            return response;
        });
}
