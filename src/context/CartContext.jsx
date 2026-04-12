import { createContext, useState, useEffect } from "react";
import {
  getCart,
  addCartItem,
  removeCartItem,
} from "../services/orderService";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // load cart on mount
  useEffect(() => {
    loadCart();
  }, []);

  const loadCart = async () => {
    try {
      const data = await getCart();
      setCartItems(data);
    } catch (err) {
      console.log("Cart load error:", err.response?.status);
    }
  };

  const addToCart = async (item) => {
    const data = await addCartItem(item);
    setCartItems(data);
  };

  const removeFromCart = async (id) => {
    await removeCartItem(id);

    // 🔥 instant UI update (no refetch needed)
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}