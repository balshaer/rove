import { Route } from "react-router-dom";
import { Routes as AllRoutes } from "react-router-dom";
import Home from "@/modules/main/screens/Home";
import About from "@/modules/main/screens/About";
import Register from "@/modules/auth/screens/register/Register";
import Login from "@/modules/auth/screens/login/Login";
import PrivacyPolicy from "@/modules/main/screens/PrivacyPolicy";
import Dashboard from "@/modules/dashboard/screens/Dashboard";
import AddUser from "@/modules/dashboard/screens/users/AddUser";
import ShowUsers from "@/modules/dashboard/screens/users/ShowUsers";
import GoogleCallBack from "@/modules/auth/static/GoogleCallBack";
import Requireauth from "@/modules/auth/static/Requireauth";
import ShowCategories from "@/modules/dashboard/screens/categories/ShowCategories";
import AddCategories from "@/modules/dashboard/screens/categories/AddCategories";
import ShowProducts from "@/modules/dashboard/screens/products/ShowProducts";
import AddProducts from "@/modules/dashboard/screens/products/AddProducts";
import NotFound from "@/modules/auth/screens/errors/NotFound";

export default function Routes() {
  return (
    <AllRoutes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/auth/google/callback" element={<GoogleCallBack />} />
      <Route path="404" element={<NotFound />} />

      <Route element={<Requireauth />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="ShowUsers" element={<ShowUsers />} />
          <Route path="AddUser" element={<AddUser />} />
          <Route path="ShowCategories" element={<ShowCategories />} />
          <Route path="addCategory" element={<AddCategories />} />
          <Route path="ShowProducts" element={<ShowProducts />} />
          <Route path="AddProduct" element={<AddProducts />} />
        </Route>
      </Route>
    </AllRoutes>
  );
}
