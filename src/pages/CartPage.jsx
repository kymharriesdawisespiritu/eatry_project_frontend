import { Link } from "react-router-dom";

function CartPage() {
  // Temporary mock data (replace with API / CartContext)
  const cartItems = [
    { id: 1, name: "Burger", price: 120, qty: 2 },
    { id: 2, name: "Fries", price: 80, qty: 1 },
  ];

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-4">Your Cart</h2>

      <div className="row g-4">

        {/* Cart Items */}
        <div className="col-lg-8">
          <div className="card shadow-sm border-0">
            <div className="card-body">

              {cartItems.length === 0 ? (
                <p className="text-muted">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between align-items-center border-bottom py-3"
                  >
                    <div>
                      <h6 className="mb-1">{item.name}</h6>
                      <small className="text-muted">
                        ₱{item.price} × {item.qty}
                      </small>
                    </div>

                    <div className="fw-semibold">
                      ₱{item.price * item.qty}
                    </div>
                  </div>
                ))
              )}

            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm border-0 p-3">

            <h5 className="fw-semibold mb-3">Order Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span className="text-muted">Subtotal</span>
              <span>₱{total}</span>
            </div>

            <div className="d-flex justify-content-between mb-3">
              <span className="text-muted">Delivery Fee</span>
              <span>₱50</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total</span>
              <span>₱{total + 50}</span>
            </div>

            <Link to="/checkout" className="btn btn-primary w-100">
              Proceed to Checkout
            </Link>

          </div>
        </div>

      </div>
    </div>
  );
}

export default CartPage;