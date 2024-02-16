import { useContext } from "react";

import { OpenMenuContext } from "@/core/context/OpenMenu";

import ProfileMenu from "@/components/custom/profile_menu/ProfileMenu";

export default function NavbarItems() {
  const { setOpenMenu } = useContext(OpenMenuContext);

  function openSideBar() {
    setOpenMenu((prevState) => !prevState);
  }

  return (
    <div className="w-full flex justify-between flex-row-reverse items-center">
      <ProfileMenu />

      <div className="hidden max-md:block" onClick={openSideBar}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#2b2e4a"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
