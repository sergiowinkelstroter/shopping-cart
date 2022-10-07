import { useContext } from "react";
import CartContext from "../context/CartContext";
import { Cart } from "./Cart";

export const NavBar = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="flex justify-between p-4  fixed top-0 w-full z-10 shadow-lg ">
      <div></div>
      <h1 className="text-2xl">Store</h1>
      <Cart />
    </div>
  );
};
