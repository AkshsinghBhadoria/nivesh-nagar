import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    axios.post("https://nivesh-nagar-backend.onrender.com/signup", { name, email, password })
      .then(() => {
        alert("Signup successful! Login karo ab.");
      })
      .catch((err) => {
        alert(err.response?.data || "Signup failed");
      });
  };

  return (
    <div className="container">
      <div
        className="row align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >

        <div className="col-6 text-center">
          <img
            src="/media/images/images/nivesh_nagar_logo.svg"
            height="85"
            alt="logo"
          />
          <h5 className="mt-3">India ke smart trader bano</h5>
          <p>
            Paper trading se shuru karo — zero risk, real learning.
          </p>
        </div>

        <div className="col-6">
          <h3>Open your free account</h3>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="form-control mt-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="form-control mt-3"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn btn-success mt-3 w-100" onClick={handleSignup}>
            Signup for free
          </button>
          <p className="mt-2">
            Already have an account? <a href="/login">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;