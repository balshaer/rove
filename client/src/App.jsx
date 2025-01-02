import "animate.css";
import { Toaster } from "@/components/ui/toaster";
import "../app/globals.css";
import Routes from "./__routes";

export default function App() {
  return (
    <div className="bg-[var(--background)]">
      <Toaster />
      <Routes />
    </div>
  );
}
