import axios from "axios";
import Cookies from "universal-cookie";
import { BASEURL } from "./API";

const cookie = Cookies();

const token = cookie.get("Bearer");

export const Axios = axios.create({
  baseURL: BASEURL,
  headers: {
    Authorization: "Bearer " + token,
  },
});
