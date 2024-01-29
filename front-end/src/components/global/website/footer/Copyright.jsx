import { Link } from "react-router-dom";

export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center sm:flex sm:justify-between sm:text-left">
      <p className="text-sm text-[#bfc0c7]">
        <span className="block sm:inline">All rights reserved.</span>
        <a
          className="inline-block text-[#05c46b] underline transition hover:text-[#05c46b]/75"
          href="/"
        >
          Terms &amp; Conditions
        </a>
        <span>·</span>
        <Link
          className="inline-block text-[#05c46b] underline transition hover:text-[#05c46b]/75"
          to="/PrivacyPolicy"
        >
          Privacy Policy
        </Link>
      </p>
      <p className="mt-4 text-sm text-[#bfc0c7] sm:order-first sm:mt-0">
        © {currentYear} Rove
      </p>
    </div>
  );
}
