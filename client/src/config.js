import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://hanvis.herokuapp.com/"
})