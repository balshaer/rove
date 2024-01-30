import { useState, useEffect } from "react";
import "animate.css";

import Loading from "./components/custom/loading/Loading";
import Routes from "./Routes/__routes";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className="bg-[#fafafa] min-h-[100vh] relative">
      {isLoading && <Loading />}
      <Routes />
    </div>
  );
}
