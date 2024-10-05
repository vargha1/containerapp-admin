import axios from "axios";
const shops_api = axios.create({
    baseURL: "https://panel.ecopacksystem.com:8586"
})
export default shops_api