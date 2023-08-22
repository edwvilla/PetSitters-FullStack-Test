import axios from "axios";
import BASE_URL from "./base_url";

export const accessToken = localStorage.getItem("token");

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    accessToken: accessToken,
  },
});

export default API;
