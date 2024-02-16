/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";
import ButtonDisabled from "@/components/custom/buttons/ButtonDisabled";
import Select from "react-select";
import { Axios } from "@/core/api/Axios";
import { USER } from "@/core/api/API";
import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";

const AddUser = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = Cookies.get("Bearer");

      await Axios.post(`${USER}/add`, {
        name: name,
        email: email,
        password: password,
        role: role.value,
      });

      Cookies.set("Bearer", token);

      navigate("/dashboard/showUsers");
    } catch (err) {
      console.error(err);
    }
  };

  const isFormInvalid =
    name === "" || email === "" || password === "" || role === "";

  return (
    <AnimatedComponent className="mx-auto w-full RegisterForm ">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Full Name"
              minLength={1}
              errorMessage="Please enter a name"
            />
          </div>
          <div className="w-full">
            <InputField
              label="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email"
              minLength={1}
              errorMessage="Please enter an email"
            />
          </div>
          <div className="w-full">
            <InputField
              label="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter Password"
              minLength={8}
              errorMessage="The password should be more than 8 characters"
            />
          </div>

          <div className="w-full">
            <Select
              onChange={(selectedOption) => setRole(selectedOption)}
              name="role"
              id="role"
              value={options.label}
              options={options}
            />
          </div>

          {isFormInvalid ? (
            <ButtonDisabled type="submit" text="Add user" />
          ) : (
            <Button text="Add user" />
          )}
        </form>
      </div>
    </AnimatedComponent>
  );
};
const options = [
  { value: "2001", label: "User" },
  { value: "1996", label: "Writer" },
  { value: "1995", label: "Admin" },
  { value: "1999", label: "Product Manger" },
];

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
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
    </div>
  </>
);

export default AddUser;
