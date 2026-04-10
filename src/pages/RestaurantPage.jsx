function RestaurantPage() {
  // Mock data (replace with API)
  const restaurant = {
    name: "Eatry Kitchen",
    description: "Delicious meals served fresh daily.",
    rating: 4.5,
  };

  const menu = [
    { id: 1, name: "Burger", price: 120 },
    { id: 2, name: "Fries", price: 80 },
    { id: 3, name: "Pizza", price: 250 },
  ];

  return (
    <div className="container py-5">

      {/* Restaurant Header */}
      <div className="mb-4 p-4 bg-dark text-white rounded-4 shadow-sm">
        <h2 className="fw-bold">{restaurant.name}</h2>
        <p className="text-secondary mb-1">{restaurant.description}</p>
        <span className="badge bg-warning text-dark">
          ⭐ {restaurant.rating}
        </span>
      </div>

      {/* Menu */}
      <h4 className="fw-semibold mb-3">Menu</h4>

      <div className="row g-4">

        {menu.map((item) => (
          <div className="col-md-4" key={item.id}>

            <div className="card shadow-sm border-0 rounded-4 p-3 h-100">

              <h6 className="fw-semibold">{item.name}</h6>

              <p className="text-muted small mb-3">
                ₱{item.price}
              </p>

              <button className="btn btn-primary btn-sm">
                Add to Cart
              </button>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RestaurantPage;