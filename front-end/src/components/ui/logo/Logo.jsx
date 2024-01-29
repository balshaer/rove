import logo from "@/assets/logo/logo-with-text.png";

export default function Logo() {
  return (
    <div className="h-full w-full flex items-center justify-center pb-2 ">
      <img
        className="object-contain"
        src={logo}
        height={50}
        width={50}
        alt="logo"
      />
    </div>
  );
}
