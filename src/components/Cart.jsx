import { useContext } from "react";
import CartContext from "../context/CartContext";
import * as Popover from "@radix-ui/react-popover";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <>
      <Popover.Root>
        <Popover.Trigger className="relative w-max ml-auto flex items-center justify-center hover:cursor-pointer">
          <FaShoppingCart size={28} />
          {cartItems.length > 0 && (
            <span className="absolute grid place-items-center bg-red-600 z-10 rounded-full text-xs h-4 w-4 -top-[20%] -right-[20%]">
              {cartItems.length}
            </span>
          )}
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="bg-slate-200 w-[370px] flex flex-col p-2 mr-4 gap-2 rounded shadow-lg z-30">
            <Popover.Close aria-label="Close" className="flex justify-end">
              <AiOutlineClose size={24} />
            </Popover.Close>
            {cartItems.length === 0 ? (
              <h4>Nenhum item adicionado no carrinho</h4>
            ) : (
              <ul className="flex flex-col">
                {cartItems.map((item, index) => (
                  <CartItem key={index} item={item} />
                ))}
              </ul>
            )}
            <div className="flex justify-between">
              <h1>Total</h1>
              <span>
                R${cartItems.reduce((amount, item) => item.price + amount, 0)}
              </span>
            </div>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </>
  );
};
