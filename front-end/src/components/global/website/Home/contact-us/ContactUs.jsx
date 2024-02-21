/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "@/components/custom/buttons/Button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import ButtonLoading from "@/components/custom/buttons/ButtonLoading";
import { useToast } from "@/components/ui/use-toast";

const Checkbox = ({ id, label, checked, onChange }) => (
  <label htmlFor={id} className="flex cursor-pointer items-start gap-4">
    <div className="flex items-center">
      <input
        type="checkbox"
        className="size-4 rounded border-gray-300"
        id={id}
        checked={checked}
        onChange={() => onChange(id)}
      />
    </div>
    <div>
      <strong className="font-medium text-gray-900">{label}</strong>
    </div>
  </label>
);

const CheckboxesGroup = ({ legend, checkboxes, onChange }) => (
  <fieldset>
    <legend className="sr-only">{legend}</legend>
    <div className="space-y-2">
      {checkboxes.map((checkbox) => (
        <Checkbox key={checkbox.id} {...checkbox} onChange={onChange} />
      ))}
    </div>
  </fieldset>
);

const ContactUs = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    cnpj: "",
    interests: {
      farm: false,
      canton: false,
      melissa: false,
      fable: false,
      mariaFilo: false,
      osklen: false,
      foxton: false,
      allIsLove: false,
      tommyHilfiger: false,
    },
    note: "",
  });

  const handleChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleCheckboxChange = (id) => {
    setFormData((prevData) => ({
      ...prevData,
      interests: {
        ...prevData.interests,
        [id]: !prevData.interests[id],
      },
    }));
  };
  const [loading, setLoading] = useState(false);
  const [accept, setAccept] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.whatsapp === "" ||
      formData.cnpj === ""
    ) {
      toast({
        title: "Filed To Send",
        description: "You should fill your form.",
      });
    } else {
      setAccept(true);
      setLoading(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          whatsapp: "",
          cnpj: "",
          interests: {
            farm: false,
            canton: false,
            melissa: false,
            fable: false,
            mariaFilo: false,
            osklen: false,
            foxton: false,
            allIsLove: false,
            tommyHilfiger: false,
          },
          note: "",
        });

        setLoading(false);
        toast({
          title: "send success ✅",
          description:
            "your message send sucessfully , we will message you soon",
        });
      }, 2000);

      console.log(formData);
    }
  };
  return (
    <div
      id="ContactUs"
      className="bg-white h-max py-20 max-md:px-4 max-md:py-10 w-full max-w-screen-2xl m-auto flex justify-center items-center flex-col"
    >
      <h1 className="uppercase text text-[#040320] text-3xl font-medium sm:text-5xl py-10">
        Contact us
      </h1>
      <form
        className="w-full max-w-[700px] h-max p-5 rounded-lg border-2 border-[#00000021] max-md:px-4"
        onSubmit={handleSubmit}
      >
        <header className="w-full py-5 items-center justify-center text-center">
          <p className="mt-4 sm:text-xl/relaxed text-[#646476] w-full">
            Fill out the form to speak directly with our team
          </p>
        </header>
        <div className="flex flex-col gap-4 py-5">
          <Input
            placeholder="YOUR NAME"
            className="border-2 border-[#00000021]"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <Input
            placeholder="YOUR BEST EMAIL"
            className="border-2 border-[#00000021]"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <Input
            placeholder="DDD + WHATSAPP"
            className="border-2 border-[#00000021]"
            value={formData.whatsapp}
            onChange={(e) => handleChange("whatsapp", e.target.value)}
          />
          <Input
            placeholder="CNPJ"
            className="border-2 border-[#00000021]"
            value={formData.cnpj}
            onChange={(e) => handleChange("cnpj", e.target.value)}
          />
        </div>

        <span className="py-5 flex items-start justify-start mt-4 sm:text-xl/relaxed text-[#646476] w-full max-md:flex-col">
          BRANDS YOU'RE INTERESTED IN:
        </span>

        <div className="w-full justify-between flex flex-row max-md:gap-4 max-md:flex-col max-md:justify-normal">
          <CheckboxesGroup
            legend=""
            checkboxes={[
              { id: "farm", label: "Farm" },
              { id: "canton", label: "Canton" },
              { id: "melissa", label: "Melissa" },
            ]}
            onChange={handleCheckboxChange}
          />
          <CheckboxesGroup
            legend="Animale"
            checkboxes={[
              { id: "fable", label: "Fable" },
              { id: "mariaFilo", label: "Maria Filó" },
              { id: "osklen", label: "Osklen" },
            ]}
            onChange={handleCheckboxChange}
          />
          <CheckboxesGroup
            legend=""
            checkboxes={[
              { id: "foxton", label: "Foxton" },
              { id: "allIsLove", label: "All is love" },
              { id: "tommyHilfiger", label: "Tommy Hilfiger" },
            ]}
            onChange={handleCheckboxChange}
          />
        </div>

        <div className="flex flex-col gap-4 py-5 w-full">
          <Textarea
            placeholder="WRITE A NOTE"
            className="border-2 border-[#00000021] max-md:w-full"
            value={formData.note}
            onChange={(e) => handleChange("note", e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-4 py-5 items-center justify-center">
          {accept && loading ? (
            <div className="max-w-[300px] h-12 rounded-lg">
              <ButtonLoading
                text="SEND"
                className=" bg-black text-white hover:bg-slate-900"
                type="submit"
              />
            </div>
          ) : (
            <Button
              text="SEND"
              className="max-w-60 h-12 bg-black text-white hover:bg-slate-900"
              type="submit"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
