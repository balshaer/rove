/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Axios } from "@/core/api/Axios";
import { PRODUCTS } from "@/core/api/API";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Cookies from "js-cookie";
import { BASEURL, CATEGORIES } from "@/core/api/API";
import axios from "axios";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "@/components/custom/buttons/Button";

export const ProductItem = () => {
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
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(
        (product) =>
          selectedCategory.value === null ||
          product.category === selectedCategory.value
      )
    : products;

  return (
    <div className="w-full grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 group-block">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-[#e9eff3c9]  border border-[#21357329]  rounded-lg flex flex-col p-5 relative h-[350px] sm:h-[375px]"
        >
          <div className="w-full max-w-full px-16 bg-white rounded-lg">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  {product.images.map((image) => (
                    <>
                      <Dialog>
                        <DialogTrigger className="w-full">
                          <div className="cursor-pointer" key={image.id}>
                            <div className="w-full  h-56 flex justify-center items-center rounded-lg">
                              <img
                                className=" h-1/2  opacity-100  object-contain"
                                src={image.image}
                                alt={`Image ${image.id}`}
                              />
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>
                              <Carousel>
                                <CarouselContent>
                                  <CarouselItem>
                                    <div
                                      className="cursor-pointer "
                                      key={image.id}
                                    >
                                      <div className="w-full  h-56 flex justify-center items-center rounded-lg">
                                        <img
                                          className=" h-1/2  opacity-100  object-contain"
                                          src={image.image}
                                          alt={`Image ${image.id}`}
                                        />
                                      </div>
                                    </div>
                                  </CarouselItem>
                                </CarouselContent>
                                <CarouselPrevious />
                                <CarouselNext />
                              </Carousel>
                            </DialogTitle>

                            <DialogTitle className="flex w-full justify-between items-center py-5">
                              <span>{product.title}</span>

                              <span>{product.price}</span>
                            </DialogTitle>

                            <DialogDescription>
                              <span>{product.description}</span>

                              <span>
                                {categoryData
                                  .filter(
                                    (categoryItem) =>
                                      categoryItem.id === product.category
                                  )
                                  .map((matchedCategory) => (
                                    <div key={matchedCategory.id}>
                                      <h3>{matchedCategory.title}</h3>
                                    </div>
                                  ))}
                              </span>

                              <span>{product.discount}</span>
                              <span>{product.About}</span>

                              <span>{product.created_at}</span>
                              <span>
                                <div>
                                  <label
                                    htmlFor="Quantity"
                                    className="sr-only"
                                  ></label>
                                  <div className="flex items-center rounded border border-gray-200">
                                    <button
                                      type="button"
                                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                    >
                                      −
                                    </button>
                                    <input
                                      type="number"
                                      id="Quantity"
                                      defaultValue={1}
                                      className="h-10 w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                                    />
                                    <button
                                      type="button"
                                      className="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                              </span>

                              <span>
                                <Button text="Add To Cart" />
                              </span>
                            </DialogDescription>
                          </DialogHeader>
                        </DialogContent>
                      </Dialog>
                    </>
                  ))}
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="mt-3 py-5 px-10">
            <div className="w-full flex justify-between items-center h-10">
              <h3 className="text-sm text-black font-medium group-hover:underline group-hover:underline-offset-4">
                {product.title}
              </h3>

              <p className="mt-1.5 text-pretty text-xs text-green-500 flex gap-[1px]">
                <span>{"$"}</span>

                <span>{product.price}</span>
              </p>
            </div>

            <p className="mt-1.5 text-pretty text-xs text-gray-900 font-medium">
              {product.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
