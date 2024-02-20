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
      className="bg-[#040320] text-[#fafafa] rounded-[3px] hover:bg-[#040320c2]"
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
