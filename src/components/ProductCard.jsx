import * as Alert from "@radix-ui/react-alert-dialog";
import { useContext } from "react";
import CartContext from "../context/CartContext";
export const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  return (
    <div className="w-[100%] m-auto shadow-2xl mt-16 rounded-xl p-2 hover:scale-105 ease-in duration-300">
      <div className="flex flex-col">
        <img
          src={product.image}
          alt=""
          className="object-cover flex-shrink w-[100%] h-[281px] mb-5 rounded-lg"
        />
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-black">{product.name}</h2>
          <p className="text-sm">R${product.price}</p>
        </div>
        <Alert.AlertDialog>
          <Alert.AlertDialogTrigger className="bg-slate-700 text-white p-2 rounded-lg my-2 w-full">
            Add ao carrinho
          </Alert.AlertDialogTrigger>
          <Alert.AlertDialogPortal>
            <Alert.AlertDialogOverlay className="bg-black/60 inset-0 fixed" />
            <Alert.AlertDialogContent className="fixed bg-[#2A2634]  py-8  px-5 md:px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg  w-[350px] md:w-[480px] shadow-lg shadow-black/25 my-4">
              <Alert.AlertDialogTitle>
                Voce deseja adicionar {product.name} no seu carrinho?
              </Alert.AlertDialogTitle>
              <div className="flex justify-end gap-4 mt-5">
                <Alert.AlertDialogCancel className="bg-slate-700 text-white p-2 rounded-lg">
                  Cancelar
                </Alert.AlertDialogCancel>
                <Alert.AlertDialogAction
                  className="bg-slate-700 text-white p-2 rounded-lg"
                  onClick={() => addToCart(product)}
                >
                  Adicionar
                </Alert.AlertDialogAction>
              </div>
            </Alert.AlertDialogContent>
          </Alert.AlertDialogPortal>
        </Alert.AlertDialog>
      </div>
    </div>
  );
};
