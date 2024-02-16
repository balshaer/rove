import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import { Axios } from "@/core/api/Axios";
import { USER } from "@/core/api/API";

export default function ProfileAvatar() {
  useEffect(() => {
    Axios.get(`${USER}`)
      .then((response) => {
        const { name, email, role } = response.data;
        setUser({ name, email, role: { value: role, label: role } });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const [user, setUser] = useState({ name: "", email: "", role: null });

  const capitalizedFirstLetter = user.name.charAt(0);

  return (
    <Avatar>
      <AvatarImage />
      <AvatarFallback className="capitalize font-semibold">
        {capitalizedFirstLetter}
      </AvatarFallback>
    </Avatar>
  );
}
