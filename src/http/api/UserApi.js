import {publicHost} from "./index";
import jwtDecode from "jwt-decode";

export const loginUser = async (data) => {
    const url = 'user/signin';

    return await publicHost.post(url, data).catch(error => {
        return error.response
    })
}

export const registerUser = async (data) => {
    const url = 'user/signup';

    return await publicHost.post(url, data).catch(error => {
        return error.response
    });
}

export const logoutUser = async () => {
    const url = 'user/token/destroy';

    return await publicHost.post(url, {});
}

export const checkUserIsAuthed = async () => {
    const token_access = localStorage.getItem("access");

    if (token_access !== null) {
        const token_access_decoded = jwtDecode(token_access);
        const exp_date = new Date(token_access_decoded.exp * 1000);
        const date = new Date();

        if (date > exp_date) {
            const url = 'user/token/refresh';
            await publicHost.post(url, {})
                .then((response) => {
                    if (response.status === 200) {
                        localStorage.setItem("access", response.data.access);
                    }
                })
                .catch(() => {
                    localStorage.removeItem("access");
                    return false;
                });
        }

        return true;
    }

    return false;
}
