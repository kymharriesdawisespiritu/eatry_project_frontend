import api from "./api";

export const getCart = async () => {
  const response = await api.get("/cart");
  return response.data;
};

export const addCartItem = async (item) => {
  const response = await api.post("/cart", item);
  return response.data;
};

export const removeCartItem = async (id) => {
  const response = await api.delete(`/cart/${id}`);
  return response.data;
};