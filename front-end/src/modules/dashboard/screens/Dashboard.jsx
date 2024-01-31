import { Outlet } from "react-router-dom";
import Sidebar from "@/components/global/dashboard/sidebar/Sidebar";
import Navbar from "@/components/global/dashboard/navbar/Navbar";

export default function Dashboard() {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#fafafa]">
      {/* Sidebar */}
      <div className=" lg:w-64 max-w-xs">
        <Sidebar />
      </div>

      {/* Main content container */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Outlet */}
        <div className="flex-1 overflow-y-auto p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
