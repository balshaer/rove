import Button from "@/components/custom/buttons/Button";
import axios from "axios";
import { Link } from "react-router-dom";
import { baseURL, logout } from "@/core/api/API";
import Cookies from "universal-cookie";

export default function SidebarFooter() {
  const cookie = new Cookies();

  async function handleLogout() {
    const token = cookie.get("Bearer");

    try {
      await axios.get(`${baseURL}${logout}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      window.location.pathname = "/";
    } catch (error) {
      console.log(error);
    }
  }

  const logoutIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
      />
    </svg>
  );

  return (
    <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 p-4">
      <Link onClick={handleLogout} className="flex items-center gap-2 ">
        <Button text="Logout" icon={logoutIcon} />
      </Link>
    </div>
  );
}
