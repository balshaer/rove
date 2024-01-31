import { Route } from "react-router-dom";
import { Routes as AllRoutes } from "react-router-dom";
import Home from "@/modules/main/screens/Home";
import About from "@/modules/main/screens/About";
import Register from "@/modules/auth/screens/register/Register";
import Login from "@/modules/auth/screens/login/Login";
import PrivacyPolicy from "@/modules/main/screens/PrivacyPolicy";
import Dashboard from "@/modules/dashboard/screens/Dashboard";
import AddUser from "@/modules/dashboard/screens/users/AddUser";
import Users from "@/modules/dashboard/screens/users/Users";

export default function Routes() {
  return (
    <AllRoutes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />

      <Route path="dashboard" element={<Dashboard />}>
        <Route path="ShowUsers" element={<Users />} />
        <Route path="AddUser" element={<AddUser />} />
      </Route>
    </AllRoutes>
  );
}
