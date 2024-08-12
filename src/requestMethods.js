import axios from "axios";

const BASE_URL = "http://localhost:8080/api/";

const Token =

  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzlhYTk2NjEzOTY5MjA1MDUxMjk1MCIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA4NjYxNDEsImV4cCI6MTY0MTEyNTM0MX0.lWg5viDIQVjizamNE6PPUwFaX2Ic2XsPOKCCUyHCUd0";
export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${Token}` },
});