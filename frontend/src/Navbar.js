import React from "react";
function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: "#fff" }}>
        <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src="/media/images/images/nivesh_nagar_logo.svg" alt="nivesh_nagar" height="100" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/pricing">Pricing</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Support
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/about">About</a></li>
                  <li><a className="dropdown-item" href="/contact">Contact</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/support">Help &amp; FAQ</a></li>
                </ul>
              </li>
            </ul>
            <div className="d-flex gap-2">
              <a href="/login" className="btn btn-outline-success btn-sm">Login</a>
              <a href="/signup" className="btn btn-success btn-sm">Signup</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;