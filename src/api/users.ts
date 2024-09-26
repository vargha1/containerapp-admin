import axios from "axios";
const api = axios.create({
    baseURL: "https://jsonplaceholder.org"
})
export default api