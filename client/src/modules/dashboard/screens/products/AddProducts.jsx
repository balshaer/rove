import { useEffect, useState } from "react";
import Select from "react-select";
import { Input } from "@/components/ui/input";
import Button from "@/components/custom/buttons/Button";
import Cookies from "js-cookie";
import axios from "axios";
import { BASEURL, CATEGORIES, PRODUCT } from "@/core/api/API";
import { Axios } from "@/core/api/Axios";
import { useNavigate } from "react-router-dom";
import InputError from "@/components/custom/errors/input_error/InputError";
import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
export default function AddProducts() {
  const [categoryData, setCategoryData] = useState([]);
  const [formData, setFormData] = useState({
    category: null,
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
    images: [],
  });
  const [accept, setAccept] = useState(false);
  // const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("Bearer");
        const response = await axios.get(`${BASEURL}${CATEGORIES}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        setCategoryData(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const images = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      images: prevData.images.concat(images),
    }));
  };

  const { toast } = useToast();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setAccept(true);

    if (
      Object.values(formData).some((value) => value === null || value === "")
    ) {
      console.log("Error");
    } else {
      try {
        const token = Cookies.get("Bearer");
        const data = new FormData();

        data.append("category", formData.category.value);

        Object.entries(formData).forEach(([key, value]) => {
          if (key !== "category" && key !== "images") {
            data.append(key, value);
          }
        });

        formData.images.forEach((image, index) => {
          data.append(`images[${index}]`, image);
        });

        const response = await Axios.post(`${BASEURL}${PRODUCT}/add`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        });

        console.log(response.data);
        Cookies.set(token);
        setFormData({
          category: null,
          title: "",
          description: "",
          price: "",
          discount: "",
          About: "",
          images: [],
        });
        setAccept(false);

        toast({
          title: "Product Added Successfully",
        });
        // navigate("/dashboard/showProducts/");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const options = categoryData.map((categoryItem) => ({
    value: categoryItem.id,
    label: categoryItem.title,
  }));

  return (
    <AnimatedComponent>
      <form onSubmit={handleSubmit} className="flex gap-4 flex-col">
        <p className="text-center text-lg font-medium">Add a new product</p>
        <div>
          <Select
            onChange={(selectedOption) =>
              handleInputChange("category", selectedOption)
            }
            name="category"
            id="category"
            value={formData.category}
            options={options}
          />
          {accept && formData.category === null && (
            <InputError text="Select the category" />
          )}
        </div>

        {["title", "description", "price", "discount"].map((fieldName) => (
          <div key={fieldName}>
            <Input
              name={fieldName}
              required
              value={formData[fieldName]}
              onChange={(e) => handleInputChange(fieldName, e.target.value)}
              className="h-max w-full"
              type={
                fieldName === "price" || fieldName === "discount"
                  ? "number"
                  : "text"
              }
              placeholder={
                fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
              }
            />
            {accept && formData[fieldName] === "" && (
              <InputError text={`Add the ${fieldName} of the new product`} />
            )}
          </div>
        ))}

        <div>
          <Textarea
            name="About"
            required
            value={formData.About}
            onChange={(e) => handleInputChange("About", e.target.value)}
            className="h-max w-full"
            placeholder="About"
          />
          {accept && formData.About === "" && (
            <InputError text="Add the About information" />
          )}
        </div>
        <div>
          <Input
            name="images"
            onChange={handleImageChange}
            className="h-max w-full"
            type="file"
            multiple
            placeholder="Images"
          />
          {accept && formData.images.length === 0 && (
            <InputError text="Add at least one image" />
          )}
        </div>

        <div>
          <Button type="submit" text="Submit" />
        </div>
      </form>
    </AnimatedComponent>
  );
}
