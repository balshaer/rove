export default function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-center sm:flex sm:justify-start sm:text-left">
      <p className="text-sm text-[#ffffff] text-center w-full">
        <span className="block sm:inline">
          All rights reserved. © {currentYear} Rove
        </span>
      </p>
    </div>
  );
}
