import { useState } from "react";

function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Mock cart total (replace with CartContext / API)
  const subtotal = 200;
  const deliveryFee = 50;
  const total = subtotal + deliveryFee;

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-4">Checkout</h2>

      <div className="row g-4">

        {/* Billing Details */}
        <div className="col-lg-7">

          <div className="card shadow-sm border-0 p-4 rounded-4">

            <h5 className="mb-3 fw-semibold">Billing Details</h5>

            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Delivery Address</label>
              <textarea
                name="address"
                className="form-control"
                rows="3"
                value={form.address}
                onChange={handleChange}
                placeholder="Enter your address"
              ></textarea>
            </div>

          </div>

        </div>

        {/* Order Summary */}
        <div className="col-lg-5">

          <div className="card shadow-sm border-0 p-4 rounded-4">

            <h5 className="fw-semibold mb-3">Order Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Subtotal</span>
              <span>₱{subtotal}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Delivery Fee</span>
              <span>₱{deliveryFee}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total</span>
              <span>₱{total}</span>
            </div>

            <button className="btn btn-success w-100">
              Pay with PayMongo
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default CheckoutPage;