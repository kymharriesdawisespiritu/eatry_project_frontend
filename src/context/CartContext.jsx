import { createContext, useState, useEffect } from "react";
import { getCart, addCartItem, removeCartItem } from "../services/orderService";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    const data = await getCart();
    setCartItems(data);
  };

  const addToCart = async (item) => {
    const data = await addCartItem(item);
    setCartItems(data);
  };

  const removeFromCart = async (id) => {
    const data = await removeCartItem(id);
    setCartItems(data);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}