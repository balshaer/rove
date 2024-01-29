/* eslint-disable react/prop-types */
import ErrorInput from "@/assets/icons/error-input.svg";

export default function InputError(props) {
  return (
    <span className="InputError animate__animated  animate__fadeIn capitalize  flex flex-row w-full gap-2 items-center justify-start py-2 h-max text-[#ee5253] text-sm">
      <span>
        <img height={16} width={16} src={ErrorInput} alt="ErrorInput" />
      </span>
      <span>{props.text}</span>
    </span>
  );
}
