import axios from "axios";
const auth = axios.create({
    baseURL: "http://154.91.170.3:8586"
})
export default auth