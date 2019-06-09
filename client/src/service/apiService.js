import axios from "axios";
import { config } from "./../constant/config";

const logError = err => {
    console.error("global catch: " + err);
};

const gqPost = (data) => {
    return axios
        .post(config.api.gqUrl, data)
        .then(res => res.data.data)
        .catch(logError);
};

const post = (url, data) => {
    return axios
        .post(url, data)
        .catch(logError);
};

export const apiService = {
    gqPost,
    post
}