import axios from "axios";
import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "./types";

export function loginUser(dataTosubmit) {
  const request = axios
    .post("/api/users/login", dataTosubmit)
    .then((res) => res.data);
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function registerUser(data) {
  const request = axios
    .post("/api/users/register", data)
    .then((res) => res.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}

export function auth() {
  const request = axios.get("/api/users/auth").then((res) => res.data);

  return {
    type: AUTH_USER,
    payload: request,
  };
}
