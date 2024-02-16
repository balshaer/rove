/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";
import ButtonDisabled from "@/components/custom/buttons/ButtonDisabled";
import { Axios } from "@/core/api/Axios";
import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";
import { CATEGORY } from "@/core/api/API";

const AddCategories = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [imageInput, setImageInput] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = Cookies.get("Bearer");

      const formData = new FormData();
      formData.append("title", title);
      formData.append("image", imageInput);

      await Axios.post(`${CATEGORY}/add`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      Cookies.set("Bearer", token);

      navigate("/dashboard/showCategories");
    } catch (err) {
      console.error(err);
    }
  };

  const isFormInvalid = title === "" || imageInput === null;

  return (
    <AnimatedComponent className="mx-auto w-full RegisterForm ">
      <div className="mx-auto w-full">
        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 w-full sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Add a new category</p>
          <div className="w-full">
            <InputField
              label="Title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Title Of Category"
              minLength={1}
              errorMessage="Please enter a title"
            />
          </div>

          <div className="w-full ">
            <InputField
              label="imageInput"
              name="imageInput"
              type="file"
              onChange={(e) => setImageInput(e.target.files[0])}
              placeholder="Select image of category"
              minLength={1}
              errorMessage="Please select a category image"
            />
          </div>

          {isFormInvalid ? (
            <ButtonDisabled type="submit" text="Add Category" />
          ) : (
            <Button text="Add Category" />
          )}
        </form>
      </div>
    </AnimatedComponent>
  );
};

const InputField = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder,
}) => (
  <>
    <label htmlFor={name} className="sr-only">
      {label}
    </label>
    <div className="relative">
      <Input
        value={value}
        name={name}
        onChange={onChange}
        className="h-max"
        type={type}
        placeholder={placeholder}
      />
    </div>
  </>
);

export default AddCategories;
