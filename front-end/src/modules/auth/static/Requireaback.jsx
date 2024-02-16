import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import { useToast } from "@/components/ui/use-toast";

export default function Requireaback() {
  const token = Cookies.get("Bearer");
  const { toast } = useToast();

  if (token) {
    setTimeout(() => {
      toast({
        title: "",
        description: "You already logged in",
      });
    }, 3000);
  }

  return token ? <Navigate to={"/dashboard/main"} /> : <Outlet />;
}
