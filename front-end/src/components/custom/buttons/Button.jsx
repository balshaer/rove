/* eslint-disable react/prop-types */
import { Button as UIButton } from "@/components/ui/button";
import { Fragment } from "react";

export default function Button(props) {
  const { width, height, ...otherProps } = props;

  const buttonStyle = {
    width: width || "100%",
    height: height || "auto",
  };

  return (
    <UIButton
      className="bg-[#05c46b] text-[#fafafa] rounded-[8px] hover:bg-[#05c46bc2]"
      style={buttonStyle}
      {...otherProps}
    >
      <Fragment>
        {props.icon && <span className="mr-2">{props.icon}</span>}
        {props.text}
      </Fragment>
    </UIButton>
  );
}
