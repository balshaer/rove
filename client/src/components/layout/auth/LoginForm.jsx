/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";
import InputError from "@/components/custom/errors/input_error/InputError";
import OrLine from "../or_line/OrLine";
import ButtonGoogle from "@/components/custom/buttons/ButtonGoogle";
import ButtonLoading from "@/components/custom/buttons/ButtonLoading";
import { BASEURL, LOGIN } from "@/core/api/API";
import Cookies from "js-cookie";

export default function LoginForm() {
  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAccept(true);
    setLoading(true);

    const token = Cookies.get("Bearer");

    try {
      let res = await axios.post(`${BASEURL}${LOGIN}`, form, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const role = res.data.user.role;

      if (role === "1995") {
        Cookies.set("Bearer", res.data.token);

        window.location.pathname = "/dashboard/main";
      } else if (role === "1996") {
        Cookies.set("Bearer", res.data.token);

        window.location.pathname = "/dashboard/writer";
      } else if (role === "1999") {
        Cookies.set("Bearer", res.data.token);

        window.location.pathname = "/dashboard/showcategories/";
      } else {
        Cookies.set("Bearer", res.data.token);

        window.location.pathname = "/";
      }
    } catch (err) {
      console.log(err);

      if (err.response.status === 401) {
        setEmailError(true);
      }
    }

    setLoading(false);
  };

  return (
    <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8 RegisterForm animate__animated  animate__fadeIn">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-md sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <Input
                value={form.email}
                name="email"
                onChange={handleFormChange}
                type="email"
                placeholder="Enter Email"
              />
              {accept && form.email.length < 1 && (
                <InputError text="Please enter your email." />
              )}
              {accept && emailError && (
                <InputError text="This email is not registered." />
              )}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <Input
                value={form.password}
                name="password"
                onChange={handleFormChange}
                type="password"
                placeholder="Enter Password"
              />
              {accept && form.password.length < 8 && (
                <InputError text="The password should be more than 8 characters." />
              )}
            </div>
          </div>

          {loading ? (
            <ButtonLoading text="Login" />
          ) : (
            <Button type="submit" text="Login" />
          )}
          <OrLine />
          <a href={`http://127.0.0.1:8000/login-google`}>
            <ButtonGoogle text="Continue with Google" />
          </a>
          <p className="text-center text-sm text-gray-500">
            Don't have an account?
            <Link
              to="/Register"
              className="underline cursor-pointer font-bold ms-1"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
