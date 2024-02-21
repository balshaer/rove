import { HiShoppingCart, HiX } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/core/context/CartContext";
import Button from "../buttons/Button";

export default function CommerceCart() {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  console.log(cart);

  return (
    <div className="relative">
      <Sheet>
        <SheetTrigger>
          <div className="bg-[#eef2f6] p-2 rounded-full items-center justify-center flex">
            <span>
              <HiShoppingCart />
            </span>
            <span>
              <span>{cart.length}</span>
            </span>
          </div>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>
          <div className="py-10">
            {cart.map((product) => (
              <li
                key={product.id}
                className="bg-gray-100 w-full  flex items-center mt-4 border-[#00000044] border-2 justify-center gap-4 rounded-lg p-5 h-full "
              >
                <div
                  className="cursor-pointer h-full"
                  onClick={() => handleRemoveFromCart(product.id)}
                >
                  <HiX />
                </div>
                <div className="flex items-center h-full justify-start gap-4 w-full">
                  <div className="rounded-lg p-3 bg-white h-16 w-16">
                    <img
                      src={product.images[0].image}
                      className="h-full w-full object-contain"
                      alt={`Product ${product.title}`}
                    />
                  </div>
                  <div>
                    <div>{product.title}</div>
                    <div className="text-green-600 font-bold">
                      ${product.price}
                    </div>
                  </div>
                </div>
              </li>
            ))}

            <div className="absolute bottom-4 right-2 left-2 m-auto">
              <Button text="Buy" />
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
