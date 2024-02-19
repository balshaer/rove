import { useState, useEffect } from "react";
import "animate.css";

import Loading from "./components/custom/loading/Loading";
import Routes from "./Routes/__routes";
import { Toaster } from "@/components/ui/toaster";
import "../app/globals.css";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-[#ffffff] min-h-[100vh] relative ">
      <Toaster />

      {isLoading && <Loading />}
      <Routes />
    </div>
  );
}
