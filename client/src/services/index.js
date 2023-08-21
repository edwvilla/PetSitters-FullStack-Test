import axios from "axios";
import BASE_URL from "./base_url";

// configures axios to use the base URL and port of our backend

const API = axios.create({
  baseURL: BASE_URL,
});

export default API;
