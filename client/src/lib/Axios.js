import axios from "axios";
import Cookies from "js-cookie";
import { BASEURL } from "./API";

const token = Cookies.get("Bearer");

export const Axios = axios.create({
  baseURL: BASEURL,
  headers: {
    Authorization: "Bearer " + token,
  },
});
