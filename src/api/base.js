import axios from "axios";

const api = axios.create({
	baseURL: "http://api.athfemoiur.com/",
	timeout: 10000,
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default api;
