import axios from "axios";
export const login = axios.create({
    baseURL: "http://154.91.170.3:8586"
})
export const register = axios.create({
    baseURL: "http://154.91.170.3:8586"
})
