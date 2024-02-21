/* eslint-disable no-unused-vars */
import AnimatedComponent from "@/components/custom/animation/AnimatedComponent";
import Button from "@/components/custom/buttons/Button";
import ButtonDisabled from "@/components/custom/buttons/ButtonDisabled";
import { useEffect, useState } from "react";
import { Axios } from "@/core/api/Axios";
import { CATEGORIES, PRODUCT } from "@/core/api/API";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Select from "react-select";

import { useNavigate } from "react-router-dom";
const EditProduct = () => {
  const [accept, setAccept] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
  const [categoryOptions, setCategoryOptions] = useState([]);

  const [productData, setProductData] = useState({
    category: "",
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
  });
  const id = Number(
    window.location.pathname.replace("/dashboard/product/", "")
  );

  const navigate = useNavigate();

  const isFormInvalid =
    productData.title === "" ||
    productData.description === "" ||
    productData.price === "" ||
    productData.discount === "" ||
    productData.About === "" ||
    productData.category === "";

  useEffect(() => {
    Axios.get(`${PRODUCT}/${id}`).then((data) => setProductData(data.data[0]));
  }, []);

  useEffect(() => {
    Axios.get(`${CATEGORIES}`)
      .then((response) => {
        const categoryData = response.data;

        const options = categoryData.map((categoryItem) => ({
          value: categoryItem.id,
          label: categoryItem.title,
        }));

        setCategoryOptions(options);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, []);
  const handleChange = (name, event) => {
    const value = event.target.value;
    setProductData({ ...productData, [name]: value });
  };
  async function handleSubmit(e) {
    e.preventDefault();

    setAccept(true);

    await Axios.post(`${PRODUCT}/edit/${id}`, productData).then((data) => {
      console.log(data);
    });

    navigate("/dashboard/showProducts");
  }

  const options = categoryData.map((categoryItem) => ({
    value: categoryItem.id,
    label: categoryItem.title,
  }));

  return (
    <AnimatedComponent className="mx-auto w-full RegisterForm">
      <div className="mx-auto w-full">
        <div
          onSubmit={handleSubmit}
          className="mb-0 mt-6 space-y-4 rounded-lg p-4 w-full sm:p-6 lg:p-8"
        >
          <p className="text-center text-lg font-medium">Edit Product</p>

          <div className="w-full">
            <Select
              onChange={(selectedOption) =>
                handleChange("category", selectedOption)
              }
              name="category"
              id="category"
              value={categoryOptions.find(
                (option) => option.value === productData.category
              )}
              options={categoryOptions}
            />
          </div>

          <div className="w-full">
            <Input
              label="title"
              name="title"
              value={productData.title}
              onChange={(e) => handleChange("title", e)}
              placeholder="Enter title of product"
              minLength={1}
            />
          </div>
          <div className="w-full">
            <Input
              label="description"
              name="description"
              onChange={(e) => handleChange("description", e)}
              value={productData.description}
              type="text"
              placeholder="Enter description for product"
              minLength={1}
            />
          </div>

          <div className="w-full">
            <Input
              label="price"
              name="price"
              type="text"
              onChange={(e) => handleChange("price", e)}
              placeholder="Enter price for product"
              value={productData.price}
              minLength={1}
            />
          </div>

          <div className="w-full">
            <Input
              label="discount"
              name="discount"
              type="text"
              onChange={(e) => handleChange("discount", e)}
              placeholder="Enter discount for product"
              value={productData.discount}
              minLength={1}
            />
          </div>

          <div className="w-full">
            <Textarea
              label="About"
              name="About"
              type="text"
              onChange={(e) => handleChange("About", e)}
              value={productData.About}
              placeholder="Fill about section"
              minLength={1}
            />
          </div>

          {isFormInvalid ? (
            <ButtonDisabled type="submit" text="Submit" />
          ) : (
            <Button onClick={handleSubmit} type="submit" text="Submit" />
          )}
        </div>
      </div>
    </AnimatedComponent>
  );
};

export default EditProduct;
