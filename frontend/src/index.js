import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landing page/home/HomePage";
import Signup from "./landing page/signup/Signup";
import Pricing from "./landing page/pricing/PricingPage";
import Products from "./landing page/products/ProductsPage";
import Support from "./landing page/support/SupportPage";
import AboutPage from "./landing page/about/AboutPage";
import ContactPage from "./landing page/contact/ContactPage";
import Login from "./landing page/login/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/contact" element={<ContactPage />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>,
);
