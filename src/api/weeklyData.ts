import axios from "axios";
const weeklyDataAPI = axios.create({
    baseURL: "http://154.91.170.3:8586"
})
export default weeklyDataAPI