import { useState, useEffect } from "react";
import "animate.css";

import Loading from "./components/custom/loading/Loading";
import Routes from "./Routes/__routes";
import { Toaster } from "@/components/ui/toaster"

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-[#fafafa] min-h-[100vh] relative">
      <Toaster />

      {isLoading && <Loading />}
      <Routes />
    </div>
  );
}
