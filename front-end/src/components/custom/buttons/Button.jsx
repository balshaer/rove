import { Button as UIButton } from "@/components/ui/button";

export default function Button(props) {
  return (
    <UIButton
      className="bg-[#05c46b] text-[#fafafa] w-full rounded-[8px] hover:bg-[#05c46bc2]"
      type="submit"
    >
      {props.text}
    </UIButton>
  );
}
