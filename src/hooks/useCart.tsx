
import { createContext, ReactElement, useContext, useState } from "react";
import { Products } from "../App";


interface ModalContextData {
	products: Products[],
	addProduct: (product: Products) => void
}

export const CartContext = createContext<ModalContextData>({
	products: [],
	addProduct: () => {}
});

export const CartContextProvider = ({ children }: { children: ReactElement | Iterable<ReactElement> }) => {
  const [ products, setProducts ] = useState<Products[]>([]);

	const addProduct = (product: Products) => {
		setProducts([...products, product]);
	}

  return (
    <CartContext.Provider value={{ products, addProduct}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);