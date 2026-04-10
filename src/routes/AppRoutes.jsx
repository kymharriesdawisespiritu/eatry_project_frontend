import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import RestaurantPage from "../pages/RestaurantPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OrdersPage from "../pages/OrdersPage";
import Profile from "../pages/Profile";
import Login from "../pages/Login";

import ProtectedRoute from "./ProtectedRoute";

import Register from "../pages/Register";

function AppRoutes() {
  return (
    <Routes>
      {/* PUBLIC */}
      <Route path="/login" element={<Login />} />

      {/* PROTECTED */}
      <Route
        path="/"
        element={
            <Home />
        }
      />

      <Route
        path="/restaurant"
        element={
            <RestaurantPage />
        }
      />

      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <CartPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/checkout"
        element={
          <ProtectedRoute>
            <CheckoutPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <OrdersPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
            <Profile />
        }
      />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;