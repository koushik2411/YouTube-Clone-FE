import axios from "axios";

const api = axios.create({
    baseURL: "https://youtube-clone-be-etbr.onrender.com/api",
})

export default api;