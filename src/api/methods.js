import api from "./base";
export const get = (url) => {
    return api.get(url);
}

export const post = (url, data) => {
    return api.post(url, data);
}

