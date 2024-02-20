import { Outlet } from "react-router-dom";
import Sidebar from "@/components/global/dashboard/sidebar/Sidebar";
import Navbar from "@/components/global/dashboard/navbar/Navbar";

export default function Dashboard() {
  return (
    <div className="flex flex-row h-screen bg-[#fafafa] max-md:w-full max-md:m-auto  max-md:overflow-x-scroll ">
      <div className=" lg:w-64 hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex flex-col flex-1 ">
        <Navbar />

        <div className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
