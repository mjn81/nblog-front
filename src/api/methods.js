import axios from "axios";
import api from "./base";
export const get = (url) => {
	return api.get(url);
};

export const post = (url, data) => {
	return api.post(url, data);
};

const papi = axios.create({
	baseURL: "http://api.athfemoiur.com/",
	timeout: 10000,
	headers: {
		"Content-Type": "multipart/form-data",
	},
});
papi.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export const post_with_content = (url, data) => {
	return papi.post(url, data);
};
