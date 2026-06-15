import React, { useState } from "react";
import axios from "axios";
import Navbar from '../../Navbar';
import Footer from '../../Footer';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleLogin = () => {
  axios.post("https://nivesh-nagar-backend.onrender.com/login", { email, password })
    .then((res) => {
      const token = res.data.token;
      const name = res.data.name;
      window.location.href = `http://localhost:3000/?name=${encodeURIComponent(name)}&token=${encodeURIComponent(token)}`;
    })
    .catch((err) => {
      alert(err.response?.data || "Login failed");
    });
};
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center"
          style={{minHeight: "70vh"}}>
          <div className="col-4" style={{borderRadius: "16px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)", padding: "40px"}}>
            <div className="text-center mb-4">
              <img src="/media/images/images/nivesh_nagar_logo.svg"
                alt="logo" height="50" />
            </div>
            <h4 style={{fontWeight: "700"}}>
              Welcome <span style={{color: "#1D9E75"}}>back.</span>
            </h4>
            <p style={{color: "#666"}}>Tera portfolio wait kar raha hai. 📈</p>
            <input type="email" className="form-control mt-3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
            <input type="password" className="form-control mt-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
            <button className="btn btn-success mt-3 w-100"
              style={{borderRadius: "8px", padding: "12px", fontWeight: "600"}}
              onClick={handleLogin}>
              Login
            </button>
            <p className="text-center mt-3" style={{color: "#666"}}>
              Account nahi hai?{" "}
              <a href="/signup" style={{color: "#1D9E75"}}>Signup karo</a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Login;