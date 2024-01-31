/* eslint-disable react/prop-types */
import { Button as UIButton } from "@/components/ui/button";
import { Fragment } from "react";

export default function Button(props) {
  return (
    <UIButton className="bg-[#05c46b] text-[#fafafa] w-full rounded-[8px] hover:bg-[#05c46bc2]">
      <Fragment>
        {props.icon && <span className="mr-2">{props.icon}</span>}
        {props.text}
      </Fragment>
    </UIButton>
  );
}
