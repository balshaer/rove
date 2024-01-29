/* eslint-disable react/prop-types */
import { Button as UIButton } from "@/components/ui/button";

export default function ButtonOutline(props) {
  return (
    <UIButton
      className="bg-transparent border-2 border-[#05c46b]  text-[#05c46b] w-full rounded-[8px] hover:bg-[#05c46b] hover:text-[#fafafa]"
      type="submit"
    >
      {props.text}
    </UIButton>
  );
}
