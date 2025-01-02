import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";
import { HiDuplicate, HiCube, HiUsers } from "react-icons/hi";
import Cookies from "js-cookie";

const DashboardCard = ({ title, icon, value }) => (
  <div className="h-32 rounded-lg bg-[#eeeeee] p-4">
    <header className="w-full h-1/3 flex justify-between items-center">
      <span>{title}</span>
      <span>{icon}</span>
    </header>
    <div className="h-1/2 w-full flex items-center justify-center font-semibold text-2xl">
      <span>{value}</span>
    </div>
  </div>
);

const Main = () => {
  const totalUsers = Cookies.get("TotalUsers");

  return (
    <AnimatedComponent>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
        <DashboardCard
          title="Products"
          icon={<HiDuplicate className="h-5 w-5" />}
          value={0}
        />
        <DashboardCard
          title="Users"
          icon={<HiUsers className="h-5 w-5" />}
          value={totalUsers}
        />
        <DashboardCard
          title="Categories"
          icon={<HiCube className="h-5 w-5" />}
          value={0}
        />
      </div>
    </AnimatedComponent>
  );
};

export default Main;
