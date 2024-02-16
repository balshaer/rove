import { useContext, useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { BASEURL, LOGOUT } from "@/core/api/API";
import { OpenMenuContext } from "@/core/context/OpenMenu";
import { Axios } from "@/core/api/Axios";
import { USER } from "@/core/api/API";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

async function handleLogout() {
  const token = Cookies.get("Bearer");

  try {
    await axios.get(`${BASEURL}${LOGOUT}`, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });

    Cookies.remove("Bearer");

    window.location.pathname = "/";
  } catch (error) {
    console.log(error);
  }
}

function UserProfile() {
  const [user, setUser] = useState({ name: "", email: "", role: null });

  const id = user.id;

  const capitalizedFirstLetter = user.name.charAt(0);

  useEffect(() => {
    Axios.get(`${USER}`)
      .then((response) => {
        const { name, email, role } = response.data;
        setUser({ name, email, role: { value: role, label: role } });
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [id]);

  return (
    <div className="sticky inset-x-0 bottom-0 border-t text-start">
      <a href="#" className="flex items-center gap-2  p-4 ">
        <Avatar>
          <AvatarImage />
          <AvatarFallback className="capitalize font-semibold">
            {capitalizedFirstLetter}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-xs">
            <strong className="block font-medium">{user.name}</strong>
            <span> {user.email} </span>
          </p>
        </div>
      </a>
    </div>
  );
}

export default function NavbarItems() {
  const { setOpenMenu } = useContext(OpenMenuContext);

  function openSideBar() {
    setOpenMenu((prevState) => !prevState);
  }

  return (
    <div className="w-full flex justify-between flex-row-reverse items-center">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <ul className="flex items-center gap-6 text-sm flex-row-reverse">
            <li>
              <UserProfile />
            </li>
          </ul>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-full min-w-40 bg-[#f7f7f7]">
          <DropdownMenuLabel>My Profile</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link
              className="w-full flex justify-between flex-row items-center"
              to="profile"
            >
              <span>Profile</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#2b2e4a"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              className="w-full flex justify-between flex-row items-center"
              to="showUsers"
            >
              <span>Users</span>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#2b2e4a"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
              </span>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer">
            <span
              className="w-full flex justify-between flex-row items-center"
              onClick={handleLogout}
            >
              Logout
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#2b2e4a"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
            </span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="hidden max-md:block" onClick={openSideBar}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#2b2e4a"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
