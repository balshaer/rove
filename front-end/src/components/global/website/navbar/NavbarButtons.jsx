import { Link } from "react-router-dom";
import Button from "@/components/custom/buttons/Button";
import ButtonOutline from "@/components/custom/buttons/ButtonOutline";
export default function NavbarButtons() {
  return (
    <div className=" gap-2 sm:flex max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:w-[100%] max-md:gap-2">
      <Link to="/Login" className="max-md:w-full">
        <Button text="Login" className="max-md:w-full" />
      </Link>
      <Link to="/Register" className="max-md:w-full">
        <ButtonOutline text="Register" className="max-md:w-full" />
      </Link>
    </div>
  );
}
