import { createContext, ReactNode, useEffect, useState } from "react";

interface ICartContext {
  quantity: number;
  addCart: () => void;
}
export const CartContext = createContext({});

export function CartGlobalState(props: { children: ReactNode }) {
  const [quantity, setQuantity] = useState(0);

  function getStorageQuantity() {
    setQuantity(Number(localStorage.getItem("cart-quantity") || 0));
  }

  useEffect(() => {
    getStorageQuantity();
  }, []);

  function addCart() {
    const newValue = quantity + 1;
    localStorage.setItem("cart-quantity", String(quantity + 1));
    setQuantity(newValue);
  }

  return (
    <CartContext.Provider value={{ quantity, addCart }}>
      {props.children}
    </CartContext.Provider>
  );
}
