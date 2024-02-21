/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Axios } from "@/core/api/Axios";
import { PRODUCTS, BASEURL, CATEGORIES } from "@/core/api/API";
import Cookies from "js-cookie";
import axios from "axios";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogDescription,
} from "@/components/ui/dialog";
import Button from "@/components/custom/buttons/Button";
import ButtonLoading from "@/components/custom/buttons/ButtonLoading";
import Counter from "@/components/custom/cart/counter/Counter";
import { useCart } from "@/core/context/CartContext";
import { useToast } from "@/components/ui/use-toast";
import ProductSkeleton from "@/components/custom/skeletons/ProductSkeleton";

export const ProductItem = () => {
  const [products, setProducts] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();
  const [cart, setCart] = useState([]);

  const [loadingButton, setLoadingButton] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleAddToCart = async (product) => {
    setLoadingButton(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));

    setLoadingButton(false);

    const updatedCart = [...cart, product];
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    addToCart(product);

    toast({
      title: "Add It To Your Cart",
    });
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Axios.get(`${PRODUCTS}`);
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
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

  if (loading) {
    return <ProductSkeleton />;
  }

  return (
    <div className="w-full grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8 group-block">
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="bg-[#e9eff3c9] border border-[#21357329] rounded-lg flex flex-col p-5 relative h-[350px] sm:h-[375px]"
        >
          <div className="w-full max-w-full px-16 bg-white rounded-lg">
            <Carousel>
              <CarouselContent>
                {product.images.map((image) => (
                  <CarouselItem key={image.id}>
                    {/* ... (other imports and code) ... */}

                    <Dialog>
                      <DialogTrigger className="w-full">
                        <div className="cursor-pointer">
                          <div className="w-full h-56 flex justify-center items-center rounded-lg">
                            <img
                              className="h-1/2 opacity-100 object-contain"
                              src={image.image}
                              alt={`Image ${image.id}`}
                            />
                          </div>
                        </div>
                      </DialogTrigger>

                      <DialogContent>
                        <DialogHeader className="px-10">
                          <DialogTitle>
                            <Carousel>
                              <CarouselContent>
                                <CarouselItem>
                                  <div className="cursor-pointer">
                                    <div className="w-full h-56 flex justify-center items-center rounded-lg">
                                      <img
                                        className="h-1/2 opacity-100 object-contain"
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

                            <span className="text-green-600">
                              ${product.price}
                            </span>
                          </DialogTitle>

                          <DialogDescription>
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

                            <span>{product.About}</span>

                            <Counter />

                            <span>
                              {loadingButton ? (
                                <ButtonLoading text="Adding to Cart..." />
                              ) : (
                                <div onClick={() => handleAddToCart(product)}>
                                  <DialogClose asChild>
                                    <Button text="Add To Cart" />
                                  </DialogClose>
                                </div>
                              )}
                            </span>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </CarouselItem>
                ))}
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

              <p className="mt-1.5 text-pretty text-xs text-green-600 font-bold flex gap-[1px]">
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
