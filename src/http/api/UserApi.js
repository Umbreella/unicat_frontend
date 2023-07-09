import {authHost, publicHost} from "./index";
import jwtDecode from "jwt-decode";

export const loginUser = async (data) => {
    const url = 'user/signin/';

    return await publicHost.post(url, data).catch(error => {
        return error.response
    })
}

export const registerUser = async (data) => {
    const url = 'user/signup/';

    return await publicHost.post(url, data).catch(error => {
        return error.response
    });
}

export const logoutUser = async () => {
    const url = 'user/token/destroy/';

    return await publicHost.post(url, {})
        .then((response) => {
            return response;
        })
        .catch((errors) => {
            return errors.response;
        });
}

export const postEmailForResetPassword = async (data) => {
    const url = 'user/password/reset/';

    return await publicHost.post(url, data)
        .then((response) => {
            return response;
        })
        .catch((errors) => {
            return errors.response;
        });
}

export const postNewPassword = async (data) => {
    const url = 'user/password/update/';

    return await publicHost.post(url, data)
        .then((response) => {
            return response;
        })
        .catch((errors) => {
            return errors.response;
        });
}

export const postConfirmEmail = async (data) => {
    const url = 'user/email/confirm/';

    return await publicHost.post(url, data)
        .then((response) => {
            return response;
        })
        .catch((errors) => {
            return errors.response;
        });
}

export const postConfirmNewEmail = async (data) => {
    const url = 'user/email/update/';

    return await publicHost.post(url, data)
        .then((response) => {
            return response;
        })
        .catch((errors) => {
            return errors.response;
        });
}

export const getMyProfile = async () => {
    const url = 'user/profile/';

    return await authHost.get(url, {})
        .then((response) => {
            return response;
        })
        .catch((errors) => {
            return errors.response;
        });
}

export const updateMyProfile = async (data) => {
    const url = 'user/profile/';

    return await authHost.patch(url, data)
        .then((response) => {
            return response;
        })
        .catch((errors) => {
            return errors.response;
        });
}

export const checkUserIsAuthed = async () => {
    const tokenAccess = localStorage.getItem("access");
    let response;
    let newTokenAccess;

    if (tokenAccess !== null) {
        const token_access_decoded = jwtDecode(tokenAccess);
        const exp_date = new Date(token_access_decoded.exp * 1000);
        const date = new Date();

        if (date > exp_date) {
            response = await getNewAccessToken();
        }
    } else {
        response = await getNewAccessToken();
    }

    if (response?.status === 200) {
        newTokenAccess = response.data.access;
        localStorage.setItem("access", newTokenAccess);
    }

    if (response?.status >= 400) {
        localStorage.removeItem("access");
        return false;
    }

    return Boolean(tokenAccess || newTokenAccess);
}

const getNewAccessToken = async () => {
    const url = 'user/token/refresh/';

    return await publicHost.post(url, {})
        .then((response) => {
            return response;
        })
        .catch((errors) => {
            return errors.response;
        });
}
