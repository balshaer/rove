import { useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";
import InputError from "@/components/custom/errors/input_error/InputError";
import ButtonLoading from "@/components/custom/buttons/ButtonLoading";
import OrLine from "../or_line/OrLine";
import ButtonGoogle from "@/components/custom/buttons/ButtonGoogle";
import { BASEURL, REGISTER } from "@/core/api/API";

export default function RegisterForm() {
  const [accept, setAccept] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const cookie = new Cookies();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAccept(true);
    setLoading(true);

    try {
      const token = cookie.get("token");

      const res = await axios.post(`${BASEURL}${REGISTER}`, form, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      cookie.set("Bearer", res.data.token);

      window.location.pathname = "/dashboard/showUsers";
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 RegisterForm animate__animated  animate__fadeIn">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-md sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Register a new account
          </p>

          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <div className="relative">
              <Input
                value={form.name}
                name="name"
                onChange={handleFormChange}
                type="text"
                placeholder="Enter Full Name"
              />

              {accept && form.name.length < 1 && (
                <InputError text="please enter your name" />
              )}
            </div>
          </div>

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
                <InputError text="please enter your email" />
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
                <InputError text="the password should be more than 8 characters" />
              )}
            </div>
          </div>

          <div>
            <label htmlFor="password" className="sr-only">
              Repeat Password
            </label>
            <div className="relative">
              <Input
                value={form.password_confirmation}
                name="password_confirmation"
                onChange={handleFormChange}
                type="password"
                placeholder="Repeat Password"
              />
              {accept && form.password !== form.password_confirmation && (
                <InputError text="the passwords do not match" />
              )}
            </div>
          </div>

          {!loading ? (
            <Button type="submit" text="Register" />
          ) : (
            <ButtonLoading text="Register" />
          )}

          <OrLine />

          <a href={`http://127.0.0.1:8000/login-google`}>
            <ButtonGoogle text="continue with google" />
          </a>
          <p className="text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/Login"
              className="underline cursor-pointer font-bold ms-1"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
