import { HiShoppingCart, HiX } from "react-icons/hi";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/core/context/CartContext";

export default function CommerceCart() {
  const { cart, removeFromCart } = useCart();


  
  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div>
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
          <div>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              <ul className="p-5 py-10 flex justify-center items-center gap-4 text-2xl ">
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className="bg-gray-100 w-full  flex items-center justify-start gap-4 rounded-lg p-5"
                  >
                    <div
                      className="cursor-pointer"
                      onClick={() => handleRemoveFromCart(product.id)}
                    >
                      <HiX />
                    </div>
                    <div className="flex items-center justify-center gap-4 w-full">
                      <div>{product.title}</div>
                      <div>${product.price}</div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
