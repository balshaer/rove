/* eslint-disable no-unused-vars */
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
import ProfileMenuSkeleton from "@/components/custom/skeletons/CoverSkeleton";

const ProductsGallery = () => {
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategoryImage, setSelectedCategoryImage] = useState(
    "https://cdn.dribbble.com/userupload/5001738/file/original-30b453e5027e97e54f2279f42e7207cc.png?resize=1200x900"
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        let apiUrl = PRODUCTS;

        if (selectedCategory && selectedCategory.value !== null) {
          apiUrl += `?category=${selectedCategory.value}`;
        }

        const response = await Axios.get(apiUrl);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [selectedCategory]);

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
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setSelectedCategoryImage(
      selectedCategory
        ? selectedCategory.image
        : "https://cdn.dribbble.com/userupload/5001738/file/original-30b453e5027e97e54f2279f42e7207cc.png?resize=1200x900"
    );
  }, [selectedCategory]);

  const options = [
    {
      value: null,
      label: "All",
      image:
        "https://cdn.dribbble.com/userupload/5001738/file/original-30b453e5027e97e54f2279f42e7207cc.png?resize=1200x900",
    },
    ...categoryData.map((categoryItem) => ({
      value: categoryItem.id,
      label: categoryItem.title,
      image: categoryItem.image,
    })),
  ];
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
  };

  return (
    <div>
      <Navbar />

      {loading && <ProfileMenuSkeleton />}

      {!loading && (
        <img
          src={selectedCategoryImage}
          alt="selectedCategoryImage"
          className="w-full object-cover h-[500px]  "
        />
      )}

      <div className="container m-auto px-4 pb-10">
        <div className="flex justify-between items-center flex-col">
          <div className="w-full items-center justify-start py-10">
            <Select
              name="category"
              placeholder="Select a category"
              id="category"
              options={options}
              className="max-w-xs"
              value={selectedCategory}
              onChange={handleCategoryChange}
            />
          </div>
        </div>

        <ProductItem
          productList={products}
          selectedCategoryProp={selectedCategory}
        />
      </div>

      <Footer />
    </div>
  );
};

export default ProductsGallery;
