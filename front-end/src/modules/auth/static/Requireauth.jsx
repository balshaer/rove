/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
import Loading from "@/components/custom/loading/Loading";
import Forbidden from "../screens/errors/Forbidden";
import axios from "axios";
import { BASEURL, USER } from "@/core/api/API";

export default function RequireAuth({ allowedRole }) {
  const cookies = new Cookies();
  const token = cookies.get("Bearer");
  const [user, setUser] = useState("");
  useEffect(() => {
    axios
      .get(`${BASEURL}${USER}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((data) => setUser(data.data));
  }, []);

  console.log("ALLOWED ROLE" + allowedRole);

  console.log("USER ROLE" + user.role);

  return token ? (
    user === "" ? (
      <Loading />
    ) : allowedRole.includes(user.role) ? (
      <Outlet />
    ) : (
      <Forbidden />
    )
  ) : (
    <Navigate to="/login" />
  );
}
