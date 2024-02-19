/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import Button from "@/components/custom/buttons/Button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

const Checkbox = ({ id, label }) => (
  <label htmlFor={id} className="flex cursor-pointer items-start gap-4">
    <div className="flex items-center">
      <input
        type="checkbox"
        className="size-4 rounded border-gray-300"
        id={id}
      />
    </div>
    <div>
      <strong className="font-medium text-gray-900">{label}</strong>
    </div>
  </label>
);

const CheckboxesGroup = ({ legend, checkboxes }) => (
  <fieldset>
    <legend className="sr-only">{legend}</legend>
    <div className="space-y-2">
      {checkboxes.map((checkbox) => (
        <Checkbox key={checkbox.id} {...checkbox} />
      ))}
    </div>
  </fieldset>
);

export default function ContactUs() {
  return (
    <div className="bg-white h-max py-20 w-full max-w-screen-2xl m-auto flex justify-center items-center flex-col">
      <h1 className="uppercase text text-[#040320] text-3xl font-medium sm:text-5xl py-10">
        Contact us
      </h1>
      <form className="w-[700px] h-max p-5 rounded-lg border-2 border-[#00000021]">
        <header className="w-full py-5 items-center justify-center text-center">
          <p className="mt-4 sm:text-xl/relaxed text-[#646476] w-full">
            Fill out the form to speak directly with our team
          </p>
        </header>
        <div className="flex flex-col gap-4 py-5">
          <Input
            placeholder="YOUR NAME"
            className="border-2 border-[#00000021]"
          />
          <Input
            placeholder="YOUR BEST EMAIL"
            className="border-2 border-[#00000021]"
          />
          <Input
            placeholder="DDD + WHATSAPP"
            className="border-2 border-[#00000021]"
          />
          <Input placeholder="CNPJ" className="border-2 border-[#00000021]" />
        </div>

        <span className="py-5 flex items-start justify-start mt-4 sm:text-xl/relaxed text-[#646476] w-full">
          BRANDS YOU'RE INTERESTED IN:
        </span>

        <div className="w-full flex justify-between items-center">
          <CheckboxesGroup
            legend=""
            checkboxes={[
              { id: "Option1", label: "Farm" },
              { id: "Option2", label: "Canton" },
              { id: "Option3", label: "Melissa" },
            ]}
          />
          <CheckboxesGroup
            legend="Animale"
            checkboxes={[
              { id: "Option1", label: "Fable" },
              { id: "Option2", label: "Maria Filó" },
              { id: "Option3", label: "Osklen" },
            ]}
          />
          <CheckboxesGroup
            legend=""
            checkboxes={[
              { id: "Option1", label: "Foxton" },
              { id: "Option2", label: "All is love" },
              { id: "Option3", label: "Tommy Hilfiger" },
            ]}
          />
        </div>

        <div className="flex flex-col gap-4 py-5">
          <Textarea placeholder="" className="border-2 border-[#00000021]" />
        </div>

        <div className="flex flex-col gap-4 py-5 items-center justify-center">
          <Button
            text="SEND"
            className="max-w-60 h-52 bg-black text-white hover:bg-slate-900"
          />
        </div>
      </form>
    </div>
  );
}
