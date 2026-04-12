// Profile.jsx
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"; // adjust path

function Profile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
  if (!user) {
    navigate("/login");
    return;
  }

  await logout();
  navigate("/login");
};
  return (
    <div className="container py-5">

      <h2 className="fw-bold mb-4">Profile</h2>

      <div className="row justify-content-center">

        <div className="col-md-8">

          <div className="card shadow-sm border-0 rounded-4 p-4">

            {/* Header */}
            <div className="d-flex align-items-center mb-4">

              <div
                className="bg-secondary rounded-circle d-flex align-items-center justify-content-center text-white me-3"
                style={{ width: "60px", height: "60px" }}
              >
                {user?.name?.charAt(0)}
              </div>

              <div>
                <h5 className="mb-0 fw-semibold">{user?.name}</h5>
                <small className="text-muted">{user?.email}</small>
              </div>

            </div>

            {/* Details */}
            <div className="mb-3">
              <label className="form-label text-muted">Full Name</label>
              <div className="form-control bg-light">{user?.name}</div>
            </div>

            <div className="mb-3">
              <label className="form-label text-muted">Email</label>
              <div className="form-control bg-light">{user?.email}</div>
            </div>

            <div className="mb-4">
              <label className="form-label text-muted">Member Since</label>
              <div className="form-control bg-light">{user?.joined}</div>
            </div>

            {/* Actions */}
            <div className="d-flex gap-2">
              <button className="btn btn-primary">
                Edit Profile
              </button>

              <button
  className="btn btn-outline-danger"
  onClick={() => {
    if (user) {
      logout();
      navigate("/login");
    } else {
      navigate("/login");
    }
  }}
>
  {user ? "Logout" : "Login"}
</button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;