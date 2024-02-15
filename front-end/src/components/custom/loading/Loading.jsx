import Logo from "@/components/ui/logo/Logo";
import Loader from "./Loader";
import "./style.css";

export default function Loading() {
  return (
    <div className="h-[100vh] w-[100vw] z-50 fixed overflow-hidden top-0 right-0 bottom-0 left-0 m-auto bg-[#fafafa] flex items-center justify-center">
      <div className="absolute inset-0 m-auto z-50 w-full h-full flex items-center justify-center  flex-col">
        <div className="py-3">
          <Logo />
        </div>

        <Loader />
      </div>
    </div>
  );
}
