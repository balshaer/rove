import axios from "axios";
import { baseURL } from "./API";
import Cookies from "universal-cookie";

const cookie = Cookies();

const token = cookie.get("Bearer");

export const Axios = axios.create({
  baseURL: baseURL,
  headers: {
    Authorization: "Bearer " + token,
  },
});
