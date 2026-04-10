function Footer() {
  return (
    <footer className="bg-dark text-light mt-auto pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">

          {/* Brand */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Eatry</h5>
            <p className="small text-secondary">
              Order food from your favorite restaurants with a fast and reliable system.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled small">
              <li><a href="/" className="text-decoration-none text-secondary">Home</a></li>
              <li><a href="/restaurant" className="text-decoration-none text-secondary">Restaurant</a></li>
              <li><a href="/cart" className="text-decoration-none text-secondary">Cart</a></li>
              <li><a href="/orders" className="text-decoration-none text-secondary">Orders</a></li>
            </ul>
          </div>

          {/* Contact / Info */}
          <div className="col-md-4">
            <h6 className="fw-semibold mb-3">Contact</h6>
            <p className="small text-secondary mb-1">support@eatry.com</p>
            <p className="small text-secondary">Taguig, Philippines</p>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-secondary my-4" />

        {/* Bottom Bar */}
        <div className="text-center small text-secondary">
          © {new Date().getFullYear()} Eatry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;