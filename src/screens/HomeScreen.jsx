import { ProductCard } from "../components/ProductCard";
import products from "../data";

import { NavBar } from "../components/NavBar";

export const HomeScreen = () => {
  return (
    <div className="my-4">
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1024px] w-[80%] md:w-[60%] gap-3 m-auto">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};
