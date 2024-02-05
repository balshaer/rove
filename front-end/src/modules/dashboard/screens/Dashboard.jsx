import { Outlet } from "react-router-dom";
import Sidebar from "@/components/global/dashboard/sidebar/Sidebar";
import Navbar from "@/components/global/dashboard/navbar/Navbar";
import { useContext } from "react";
import { OpenMenuContext } from "@/core/context/OpenMenu";

export default function Dashboard() {
  const { openMenu } = useContext(OpenMenuContext);

  return (
    <div className="flex flex-row h-screen bg-[#fafafa]">
      {openMenu && (
        <div className=" lg:w-64 max-md:w-full animate__animated animate__fadeInLeft">
          <Sidebar />
        </div>
      )}

      <div className="flex flex-col flex-1 ">
        <Navbar />

        <div className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
