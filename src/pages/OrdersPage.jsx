function OrdersPage() {
  // Mock data (replace with API: /api/orders)
  const orders = [
    {
      id: 1,
      date: "2026-04-01",
      total: 320,
      status: "Completed",
    },
    {
      id: 2,
      date: "2026-04-05",
      total: 180,
      status: "Pending",
    },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return "badge bg-success";
      case "Pending":
        return "badge bg-warning text-dark";
      case "Cancelled":
        return "badge bg-danger";
      default:
        return "badge bg-secondary";
    }
  };

  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-4">Order History</h2>

      {orders.length === 0 ? (
        <div className="text-center text-muted py-5">
          No orders found.
        </div>
      ) : (
        <div className="row g-4">

          {orders.map((order) => (
            <div className="col-md-6" key={order.id}>

              <div className="card shadow-sm border-0 rounded-4 p-4">

                {/* Header */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="fw-semibold mb-0">
                    Order #{order.id}
                  </h6>

                  <span className={getStatusBadge(order.status)}>
                    {order.status}
                  </span>
                </div>

                {/* Details */}
                <p className="text-muted small mb-1">
                  Date: {order.date}
                </p>

                <p className="fw-semibold mb-3">
                  Total: ₱{order.total}
                </p>

                {/* Actions */}
                <button className="btn btn-outline-primary btn-sm">
                  View Details
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default OrdersPage;