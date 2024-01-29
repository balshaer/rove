import { Button as UIButtonLoading } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
export default function ButtonLoading(props) {
  return (
    <UIButtonLoading
      className="bg-[#05c46bda] text-[#fafafadd] w-full rounded-[8px] hover:bg-[#05c46bda] flex items-center justify-center gap-1"
      type="submit"
    >
      <span>{props.text}</span>

      <span>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      </span>
    </UIButtonLoading>
  );
}
