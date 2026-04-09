import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import RestaurantPage from "../pages/RestaurantPage";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPage";
import OrdersPage from "../pages/OrdersPage";
import Profile from "../pages/Profile";

function AppRoutes() {
    return (
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/restaurant" element={<RestaurantPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
       
    )
}

export default AppRoutes