import React from "react";
import Navbar from '../../Navbar';
import Footer from '../../Footer';
import ContactForm from "./ContactForm";

function ContactPage() {
  return (
    <div>
      <Navbar />
      <div className="container mt-5 text-center">
        <h1 style={{fontWeight: "700"}}>
          Let's <span style={{color: "#1D9E75"}}>Connect.</span>
        </h1>
        <p style={{color: "#666", fontSize: "18px"}}>
          Koi bhi sawaal ho — hum yahan hain.
        </p>
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}
export default ContactPage;