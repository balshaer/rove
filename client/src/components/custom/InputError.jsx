import ErrorInput from "@/assets/error-input.svg";

export default function InputError(props) {
  return (
    <span className="InputError animate__animated  animate__fadeIn capitalize  flex flex-row w-full gap-[2px] text-xs items-center justify-start py-2 h-max text-[#ee5253] ">
      <span>
        <img height={16} width={16} src={ErrorInput} alt="ErrorInput" />
      </span>
      <span>{props.text}</span>
    </span>
  );
}
