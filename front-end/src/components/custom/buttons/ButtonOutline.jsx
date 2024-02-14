/* eslint-disable react/prop-types */
import { Button as UIButton } from "@/components/ui/button";

export default function ButtonOutline(props) {
  return (
    <UIButton
      className="bg-transparent border-2 border-[#040320]  text-[#040320] w-full rounded-[8px] hover:bg-[#040320] hover:text-[#fafafa]"
      type="submit"
    >
      {props.text}
    </UIButton>
  );
}
