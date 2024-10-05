import axios from "axios";
export const login = axios.create({
    baseURL: "https://panel.ecopacksystem.com"
})
export const register = axios.create({
    baseURL: "https://panel.ecopacksystem.com"
})
