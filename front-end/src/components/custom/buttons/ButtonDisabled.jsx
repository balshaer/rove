/* eslint-disable react/prop-types */
import { Button as UIButton } from "@/components/ui/button";
import { Fragment } from "react";

export default function ButtonDisabled(props) {
  return (
    <UIButton
      disabled
      className="bg-[#040320] text-[#fafafa] w-full rounded-[8px] hover:bg-[#040320c2]"
    >
      <Fragment>
        {props.icon && <span className="mr-2">{props.icon}</span>}
        {props.text}
      </Fragment>
    </UIButton>
  );
}
