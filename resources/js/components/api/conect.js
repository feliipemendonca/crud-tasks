import axios from "axios";

const conect = axios.create({
    baseURL: "http://127.0.0.1/api/",
});

conect.interceptors.request.use(async (config) => {
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
});

export default conect;