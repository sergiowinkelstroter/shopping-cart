import { useContext } from "react";
import CartContext from "../context/CartContext";

export const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="flex justify-between mb-2 items-center border-2 border-slate-800 p-2">
      <img className="w-[20%]" src={item.image} alt={item.name} />
      <span>{item.name}</span>
      <span>R${item.price}</span>
      <button
        className="bg-slate-400 p-2 rounded hover:opacity-50 "
        onClick={() => removeItem(item._id)}
      >
        Remove
      </button>
    </div>
  );
};
