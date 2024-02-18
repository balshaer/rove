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
import EditUser from "@/modules/dashboard/screens/users/EditUser";
import Main from "@/modules/dashboard/screens/dashboard/Main";
import Products from "@/modules/main/screens/Products";
import Writer from "@/modules/writer/Writer";
import Requireaback from "@/modules/auth/static/Requireaback";
import Forbidden from "@/modules/auth/screens/errors/Forbidden";
import EditCategory from "@/modules/dashboard/screens/categories/EditCategory";
import Profile from "@/modules/dashboard/screens/profile/Profile";
import EditProduct from "@/modules/dashboard/screens/products/EditProduct";

export default function Routes() {
  return (
    <AllRoutes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="products" element={<Products />} />

      <Route element={<Requireaback />}>
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/auth/google/callback" element={<GoogleCallBack />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="403" element={<Forbidden />} />
      <Route element={<Requireauth allowedRole={["1995", "1996", "1999"]} />}>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="main" element={<Main />} />
          <Route path="profile" element={<Profile />} />

          <Route path="ShowUsers" element={<ShowUsers />} />

          <Route path="AddUser" element={<AddUser />} />

          <Route element={<Requireauth allowedRole={["1999", "1995"]} />}>
            <Route path="ShowCategories" element={<ShowCategories />} />
            <Route path="addCategory" element={<AddCategories />} />
            <Route path="category/:id" element={<EditCategory />} />
          </Route>

          <Route path="ShowProducts" element={<ShowProducts />} />
          <Route path="AddProduct" element={<AddProducts />} />
          <Route path="users/:id" element={<EditUser />} />
          <Route path="product/:id" element={<EditProduct />} />

          <Route element={<Requireauth allowedRole={["1995", "1996"]} />}>
            <Route path="writer" element={<Writer />} />
          </Route>
        </Route>
      </Route>

      <Route path="profile" element={<Profile />} />
    </AllRoutes>
  );
}
