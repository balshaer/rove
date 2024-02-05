import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import axios from "axios";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";
import InputError from "@/components/custom/errors/input_error/InputError";
import ButtonLoading from "@/components/custom/buttons/ButtonLoading";
import { BASEURL, REGISTER } from "@/core/api/API";

const AddUser = () => {
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
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAccept(true);
    setLoading(true);

    try {
      const token = cookie.get("Bearer");

      await axios.post(`${BASEURL}${REGISTER}`, form, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      cookie.set("Bearer", token);

      navigate("/dashboard/showUsers");
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
  };
  return (
    <div className="mx-auto w-full RegisterForm animate__animated animate__fadeIn">
      <div className="mx-auto  w-full">
        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 w-full sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Add a new user</p>

          <div className="w-full">
            <InputField
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleFormChange}
              placeholder="Enter Full Name"
              accept={accept}
              minLength={1}
              errorMessage="Please enter a name"
            />
          </div>

          <div className="w-full">
            <InputField
              label="Email"
              name="email"
              value={form.email}
              onChange={handleFormChange}
              type="email"
              placeholder="Enter Email"
              accept={accept}
              minLength={1}
              errorMessage="Please enter an email"
            />
          </div>

          <div className="w-full">
            <InputField
              label="Password"
              name="password"
              value={form.password}
              onChange={handleFormChange}
              type="password"
              placeholder="Enter Password"
              accept={accept}
              minLength={8}
              errorMessage="The password should be more than 8 characters"
            />
          </div>

          <div className="w-full">
            <InputField
              label="Repeat Password"
              name="password_confirmation"
              value={form.password_confirmation}
              onChange={handleFormChange}
              type="password"
              placeholder="Repeat Password"
              accept={accept}
              customValidation={() =>
                form.password === form.password_confirmation
              }
              errorMessage="The passwords do not match"
            />
          </div>

          {!loading ? (
            <Button type="submit" text="Add user" />
          ) : (
            <ButtonLoading text="Add user" />
          )}
        </form>
      </div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
  accept,
  minLength,
  errorMessage,
  customValidation,
}) => (
  <>
    <label htmlFor={name} className="sr-only">
      {label}
    </label>
    <div className="relative">
      <Input
        value={value}
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />

      {accept && value.length < minLength && <InputError text={errorMessage} />}

      {accept && customValidation && !customValidation() && (
        <InputError text={errorMessage} />
      )}
    </div>
  </>
);

export default AddUser;
