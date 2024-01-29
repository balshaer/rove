import logo from "@/assets/logo/logo-with-text.png";

export default function FooterLogo() {
  return (
    <div className="flex justify-center text-teal-600 sm:justify-start">
      <img height={50} width={50} src={logo} alt="logo" />
    </div>
  );
}
