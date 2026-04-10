import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">

      {/* Hero Section */}
      <div className="p-5 mb-4 bg-dark text-white rounded-4 shadow-sm">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Welcome to Eatry</h1>
          <p className="col-md-8 fs-5 text-secondary">
            Order your favorite food from top restaurants with a fast and reliable system.
          </p>
          <Link to="/restaurant" className="btn btn-primary btn-lg mt-3">
            Browse Restaurants
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="row g-4">

        <div className="col-md-4">
          <div className="p-4 border rounded-4 h-100 shadow-sm">
            <h5 className="fw-semibold">Fast Ordering</h5>
            <p className="text-muted small">
              Quickly place orders with a seamless checkout experience.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded-4 h-100 shadow-sm">
            <h5 className="fw-semibold">Secure Payments</h5>
            <p className="text-muted small">
              Integrated with payment systems like PayMongo for secure transactions.
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="p-4 border rounded-4 h-100 shadow-sm">
            <h5 className="fw-semibold">Order Tracking</h5>
            <p className="text-muted small">
              Monitor your orders in real-time from preparation to delivery.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Home;