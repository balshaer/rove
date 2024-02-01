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
import { baseURL, login } from "@/core/api/API";

export default function LoginForm() {
  const [accept, setAccept] = useState(false);

  const [loading, setLoadin] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handelFormChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const cookie = new Cookies();

  const navigate = useNavigate();

  async function handelSubmit(e) {
    e.preventDefault();
    setAccept(true);

    const token = cookie.get("Bearer");

    try {
      await axios.post(`${baseURL}${login}`, form, {



        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      setLoadin(true);

      cookie.set("Bearer", token);

      console.log("success");

      navigate("/dashboard");
    } catch (err) {
      console.log(err);

      if (err.response.status === 401) {
        setEmailError(true);
      }
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
                <InputError text="please enter your email." />
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
                onChange={handelFormChange}
                type="password"
                placeholder="Enter Password"
              />

              {accept && form.password < 8 && (
                <InputError text="the password should be more then 8 values" />
              )}
            </div>
          </div>

          {!loading && <Button type="submit" text="Login" />}

          {loading && <ButtonLoading text="Login" />}

          <OrLine />

          <ButtonGoogle text="continue with google " />

          <p className="text-center text-sm text-gray-500">
            Dont have an account?
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
