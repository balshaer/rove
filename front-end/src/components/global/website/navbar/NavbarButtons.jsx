import { Link } from "react-router-dom";
import ButtonOutline from "@/components/custom/buttons/ButtonOutline";
import Button from "@/components/custom/buttons/Button";
export default function NavbarButtons() {
  return (
    <div className=" gap-2 sm:flex max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-[100%] max-md:gap-2">
      <Link to="/Login" className="max-md:w-full">
        <Button
          height="100%"
          width=""
          he
          text="Login"
          className="max-md:w-full bg-[#040320] hover:bg-[#040320]"
        />
      </Link>

      <Link to="/Register" className="max-md:w-full">
        <ButtonOutline text="Register" className="max-md:w-full" />
      </Link>
    </div>
  );
}
