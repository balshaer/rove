import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";
import ButtonDisabled from "@/components/custom/buttons/ButtonDisabled";
import { USER } from "@/core/api/API";
import { Axios } from "@/core/api/Axios";
import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";
import ProfileAvatar from "@/components/custom/avatar/ProfileAvatar";

const Profile = () => {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const [roleName, setRoleName] = useState("");

  const isFormInvalid = user.name === "" || user.email === "";

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.post(`${USER}/edit/${user.id}`, {
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
    Axios.get(`${USER}/${user.name}`)
      .then((response) => {
        const { name, email, role, id } = response.data;
        setUser({ name, id, email, role: { value: role, label: role } });

        let roleName = "";
        if (role === "1996") {
          roleName = "Writer";
        } else if (role === "1999") {
          roleName = "Product Manager";
        } else if (role === "1995") {
          roleName = "Admin";
        } else {
          roleName = "User";
        }

        setRoleName(roleName);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <AnimatedComponent className="mx-auto w-full RegisterForm">
      <div className="mx-auto w-full">
        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 w-full sm:p-6 lg:p-8"
        >
          <div className="w-full flex justify-center items-center py-5">
            <div className="rounded-full bg-[#f1f5f9] p-5 text-4xl cursor-pointer ">
              <ProfileAvatar />
            </div>
          </div>
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
            <Input
              label="Role"
              name="role"
              disabled
              value={roleName}
              type="text"
              minLength={1}
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

export default Profile;
