import {authHost} from "./index";
import {checkUserIsAuthed} from "./UserApi";

export const postCourseComment = async (data) => {
    const url = 'comments/course';
    let response = null;

    await checkUserIsAuthed()
        .then(async (isAuth) => {
            if (isAuth) {
                await authHost.post(url, data)
                    .then((res) => {
                        response = res;
                    })
                    .catch(error => {
                        if (error.response.status === 401) {
                            response = null;
                        } else {
                            response = error.response;
                        }
                    });
            }
        })

    return response;
}

export const postNewsComment = async (data) => {
    const url = 'comments/news';
    let response = null;

    await checkUserIsAuthed()
        .then(async (isAuth) => {
            if (isAuth) {
                await authHost.post(url, data)
                    .then((res) => {
                        response = res;
                    })
                    .catch(error => {
                        if (error.response.status === 401) {
                            response = null;
                        } else {
                            response = error.response;
                        }
                    });
            }
        })

    return response;
}

export const postEventComment = async (data) => {
    const url = 'comments/event';
    let response = null;

    await checkUserIsAuthed()
        .then(async (isAuth) => {
            if (isAuth) {
                await authHost.post(url, data)
                    .then((res) => {
                        response = res;
                    })
                    .catch(error => {
                        if (error.response.status === 401) {
                            response = null;
                        } else {
                            response = error.response;
                        }
                    });
            }
        })

    return response;
}
