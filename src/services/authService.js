import api from "./api";

export const loginUser = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    // important: pass error to context
    throw error;
  }
};
export const registerUser = async (data) => {
  const response = await api.post("/register", data);
  return response.data;
};