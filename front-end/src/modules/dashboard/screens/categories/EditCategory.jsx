import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";
import ButtonDisabled from "@/components/custom/buttons/ButtonDisabled";
import { USER } from "@/core/api/API";
import { Axios } from "@/core/api/Axios";
import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";
import { CATEGORY } from "@/core/api/API";

const EditCategory = () => {
  const [category, setCategory] = useState({ title: "", inputImage: null });
  const navigate = useNavigate();
  const id = Number(
    window.location.pathname.replace("/dashboard/category/", "")
  );
  const isFormInvalid = category.title === "" || category.inputImage === null;

  const handleChange = (e) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setCategory({ ...category, inputImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Axios.post(`${USER}/edit/${id}`, {
        title: category.name,
        inputImage: category.inputImage,
      });
      navigate("/dashboard/showCategories");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Axios.get(`${CATEGORY}/${id}`)
      .then((response) => {
        const { title, inputImage } = response.data;
        setCategory({ title, inputImage });
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, [id]);

  return (
    <AnimatedComponent className="mx-auto w-full RegisterForm">
      <div className="mx-auto w-full">
        <form
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 w-full sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Edit Category</p>
          <div className="w-full">
            <Input
              label="Full Name"
              name="title"
              value={category.title}
              onChange={handleChange}
              placeholder="Enter Title"
              minLength={1}
            />
          </div>
          <div className="w-full">
            <Input
              label="imageInput"
              name="imageInput"
              type="file"
              className="h-max"
              onChange={handleImageChange}
              placeholder="Select image of category"
              minLength={1}
            />
          </div>

          {isFormInvalid ? (
            <ButtonDisabled type="submit" text="Submit" />
          ) : (
            <Button text="Submit" />
          )}
        </form>
      </div>
    </AnimatedComponent>
  );
};

export default EditCategory;
