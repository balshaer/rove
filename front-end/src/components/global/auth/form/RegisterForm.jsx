import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";
import InputError from "@/components/custom/errors/input_error/InputError";
import { useState } from "react";
import ButtonLoading from "@/components/custom/buttons/ButtonLoading";

import Cookies from "universal-cookie";

import axios from "axios";
import OrLine from "../or_line/OrLine";
import ButtonGoogle from "@/components/custom/buttons/ButtonGoogle";
import { baseURL, register } from "@/core/api/API";

export default function RegisterForm() {
  const [accept, setAccept] = useState(false);

  const [loading, setLoadin] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handelFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const cookie = new Cookies();

  const navigate = useNavigate();

  async function handelSubmit(e) {
    e.preventDefault();
    setAccept(true);
    // setLoadin(true);

    const token = cookie.get("Bearer");

    try {
      const res = await axios.post(`http://127.0.0.1:8000/api/register`, form, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      if (res.status === 200) {
        setLoadin(true);

        cookie.set("Bearer", token);
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 RegisterForm animate__animated  animate__fadeIn">
      <div className="mx-auto max-w-lg">
        <form
          onSubmit={handelSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-md sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">
            Sign in to your account
          </p>

          <div>
            <label htmlFor="name" className="sr-only">
              Full Name
            </label>
            <div className="relative">
              <Input
                value={form.name}
                name="name"
                onChange={handelFormChange}
                type="text"
                placeholder="Enter Full Name"
              />

              {accept && form.name < 1 && (
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
                onChange={handelFormChange}
                type="email"
                placeholder="Enter Email"
              />

              {accept && form.email < 1 && (
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
                onChange={handelFormChange}
                type="password"
                placeholder="Enter Password"
              />

              {accept && form.password < 8 && (
                <InputError text="the password should be more then 8 values" />
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
                onChange={handelFormChange}
                type="password"
                placeholder="Repeat Password"
              />
              {accept && form.password !== form.password_confirmation && (
                <InputError text="the passwords not match" />
              )}
            </div>
          </div>

          {!loading && <Button type="submit" text="Register" />}

          {loading && <ButtonLoading text="Register" />}

          <OrLine />

          <ButtonGoogle text="continue with google " />

          <p className="text-center text-sm text-gray-500">
            Already have an account?
            <Link
              to="/login"
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
