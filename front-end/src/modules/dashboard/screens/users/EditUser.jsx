import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";
import ButtonDisabled from "@/components/custom/buttons/ButtonDisabled";
import { USER } from "@/core/api/API";
import { Axios } from "@/core/api/Axios";
import Select from "react-select";
import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";

const EditUser = () => {
  const [user, setUser] = useState({ name: "", email: "", role: null });
  const navigate = useNavigate();
  const id = Number(window.location.pathname.replace("/dashboard/users/", ""));
  const isFormInvalid =
    user.name === "" || user.email === "" || user.role === null;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRoleChange = (selectedOption) => {
    setUser({ ...user, role: selectedOption });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.post(`${USER}/edit/${id}`, {
        name: user.name,
        email: user.email,
        role: user.role.value,
      });
      navigate("/dashboard/showUsers");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Axios.post(`${USER}/${id}`)
      .then((response) => {
        const { name, email, role } = response.data;
        setUser({ name, email, role: { value: role, label: role } });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  const options = [
    { value: "2001", label: "User" },
    { value: "1996", label: "Writer" },
    { value: "1995", label: "Admin" },
  ];

  return (
    <AnimatedComponent className="mx-auto w-full RegisterForm">
      <div className="mx-auto w-full">
        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 w-full sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Edit User</p>
          <div className="w-full">
            <Input
              label="Full Name"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              minLength={1}
            />
          </div>
          <div className="w-full">
            <Input
              label="Email"
              name="email"
              value={user.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter Email"
              minLength={1}
            />
          </div>
          <div className="w-full">
            <Select
              onChange={handleRoleChange}
              name="role"
              id="role"
              value={user.role}
              options={options}
            />
          </div>

          {isFormInvalid ? (
            <ButtonDisabled type="submit" text="Submit" />
          ) : (
            <Button text="Submit" />
          )}
        </form>
      </div>
    </AnimatedComponent>
  );
};

export default EditUser;
