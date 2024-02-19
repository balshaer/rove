import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"}>
      <h1 className="font-semibold text-2xl text-[#2b2e4a] w-full text-start h-max">
        ROVE
      </h1>
    </Link>
  );
}
