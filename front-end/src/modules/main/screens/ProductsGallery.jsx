import { useState, useEffect } from "react";
import { Axios } from "@/core/api/Axios";
import { PRODUCTS } from "@/core/api/API";
import Navbar from "@/components/global/website/navbar/Navbar";
import Footer from "@/components/global/website/footer/Footer";
import Select from "react-select";

import Cookies from "js-cookie";
import { BASEURL, CATEGORIES } from "@/core/api/API";
import axios from "axios";

import { ProductItem } from "@/components/global/website/products/ProductItem";

const ProductsGallery = () => {
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get(`${PRODUCTS}`);
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

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
        console.log(categoryData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const options = [
    { value: null, label: "All" },
    ...categoryData.map((categoryItem) => ({
      value: categoryItem.id,
      label: categoryItem.title,
    })),
  ];

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          selectedCategory.value === null ||
          product.category === selectedCategory.value
      )
    : products;

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  return (
    <div>
      <Navbar />

      <div className="max-w-screen-xl m-auto px-4 py-10">
        <header className="py-32 flex justify-between items-center  h-20 w-full">
          <div>
            <img src={categoryData.image} />
          </div>
        </header>

        <div className="py-10 flex justify-between items-center">
          <div>
            <Select
              name="category"
              placeholder="Select a category"
              id="category"
              options={options}
              onChange={handleCategoryChange}
            />
          </div>
        </div>

        {/* Render the filtered products */}
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default ProductsGallery;
