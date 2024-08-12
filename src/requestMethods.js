import axios from "axios";
const BASE_URL = "http://localhost:8080/api/";

const Token =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    ?.accessToken || null;

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${Token}` },
});