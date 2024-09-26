import axios from "axios";
const shops_api = axios.create({
    baseURL: "http://154.91.170.3:8586"
})
export default shops_api