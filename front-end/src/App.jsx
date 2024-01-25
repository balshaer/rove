import "animate.css";
import { Routes, Route } from "react-router-dom";

import Home from "./modules/main/screens/Home";
import About from "./modules/main/screens/About";
import Login from "./modules/auth/screens/login/Login";
import Register from "./modules/auth/screens/register/Register";
export default function App() {
  return (
    <div className="bg-[#fafafa] min-h-[100vh]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}
