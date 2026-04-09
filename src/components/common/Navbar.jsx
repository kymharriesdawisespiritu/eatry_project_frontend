import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        
        <Link className="navbar-brand" to="/">Eatry</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/restaurant">Restaurant</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/orders">Orders</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;