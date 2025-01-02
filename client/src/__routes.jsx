import { React } from "react";
const Home = React.lazy(() => import("@/modules/main/screens/Home"));
const Register = React.lazy(() =>
  import("@/modules/auth/screens/register/Register")
);
const Login = React.lazy(() => import("@/modules/auth/screens/login/Login"));
const PrivacyPolicy = React.lazy(() =>
  import("@/modules/main/screens/PrivacyPolicy")
);
const Dashboard = React.lazy(() =>
  import("@/modules/dashboard/screens/Dashboard")
);
const AddUser = React.lazy(() =>
  import("@/modules/dashboard/screens/users/AddUser")
);
const ShowUsers = React.lazy(() =>
  import("@/modules/dashboard/screens/users/ShowUsers")
);
const GoogleCallBack = React.lazy(() =>
  import("@/modules/auth/static/GoogleCallBack")
);
const Requireauth = React.lazy(() =>
  import("@/modules/auth/static/Requireauth")
);
const ShowCategories = React.lazy(() =>
  import("@/modules/dashboard/screens/categories/ShowCategories")
);
const AddCategories = React.lazy(() =>
  import("@/modules/dashboard/screens/categories/AddCategories")
);
const ShowProducts = React.lazy(() =>
  import("@/modules/dashboard/screens/products/ShowProducts")
);
const AddProducts = React.lazy(() =>
  import("@/modules/dashboard/screens/products/AddProducts")
);
const NotFound = React.lazy(() =>
  import("@/modules/auth/screens/errors/NotFound")
);
const EditUser = React.lazy(() =>
  import("@/modules/dashboard/screens/users/EditUser")
);
const Main = React.lazy(() =>
  import("@/modules/dashboard/screens/dashboard/Main")
);
const Writer = React.lazy(() => import("@/modules/writer/Writer"));
const Requireaback = React.lazy(() =>
  import("@/modules/auth/static/Requireaback")
);
const Forbidden = React.lazy(() =>
  import("@/modules/auth/screens/errors/Forbidden")
);
const EditCategory = React.lazy(() =>
  import("@/modules/dashboard/screens/categories/EditCategory")
);
const Profile = React.lazy(() =>
  import("@/modules/dashboard/screens/profile/Profile")
);
const EditProduct = React.lazy(() =>
  import("@/modules/dashboard/screens/products/EditProduct")
);
const ProductsGallery = React.lazy(() =>
  import("@/modules/main/screens/ProductsGallery")
);

export default function Routes() {
  return (
    <AllRoutes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<ProductsGallery />} />

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
