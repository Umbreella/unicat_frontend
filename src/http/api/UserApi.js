import {publicHost} from "./index";

export const loginUser = async (data) => {
    const url = 'user/signin';

    return await publicHost.post(url, data).catch(error => {
        // console.clear();
        return error.response
    })
}

export const registerUser = async (data) => {
    const url = 'user/signup';

    return await publicHost.post(url, data).catch(error => {
        // console.clear();
        return error.response
    });
}

export const logoutUser = async () => {
    const url = 'user/signout';

    return await publicHost.post(url, {});
}
