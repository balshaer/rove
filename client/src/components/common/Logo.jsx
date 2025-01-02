import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <h1 className="font-semibold text-sm bg-[#000000] h-10 w-10 rounded-full p-5 text-[#cccfe9]  text-center flex justify-center items-center">
        R
      </h1>
    </Link>
  );
}
