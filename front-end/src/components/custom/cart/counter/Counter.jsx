import { useState } from "react";

export default function Counter() {
  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div>
      <span>
        <div className="flex justify-center items-center py-10">
          <label htmlFor="Quantity" className="sr-only"></label>
          <div className="flex items-center rounded border border-gray-400">
            <button
              type="button"
              className="size-10 leading-10 text-black transition hover:opacity-75"
              onClick={handleDecrement}
            >
              −
            </button>
            <input
              type="number"
              id="Quantity"
              value={quantity}
              className="h-10 text-black w-16 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            />
            <button
              type="button"
              className="size-10 leading-10 text-black transition hover:opacity-75"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </span>
    </div>
  );
}
