import { Link } from "react-router-dom";
import ButtonOutline from "@/components/custom/buttons/ButtonOutline";
import Button from "@/components/custom/buttons/Button";
import { BASEURL, LOGOUT } from "@/core/api/API";
import axios from "axios";
import Cookies from "js-cookie";
import ProfileMenu from "../../../custom/profile_menu/ProfileMenu";
export default function NavbarButtons() {
  const token = Cookies.get("Bearer");

  async function handleLogout() {
    try {
      await axios.get(`${BASEURL}${LOGOUT}`, {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + token,
        },
      });

      window.location.pathname = "/login";
      Cookies.remove("Bearer");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className=" gap-2 sm:flex max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-[100%] max-md:gap-2">
      {token && <ProfileMenu />}

      {!token && (
        <>
          <Link to="/Login" className="max-md:w-full">
            <Button
              height="100%"
              width=""
              text="Login"
              className="max-md:w-full bg-[#040320] hover:bg-[#040320]"
            />
          </Link>
          <Link to="/Register" className="max-md:w-full">
            <ButtonOutline text="Register" className="max-md:w-full" />
          </Link>{" "}
        </>
      )}
    </div>
  );
}
