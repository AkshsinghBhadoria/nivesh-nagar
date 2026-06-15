import React from "react";
function ContactForm() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6" style={{borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)", padding: "40px"}}>
          <h3 style={{fontWeight: "700"}}>
            Baat karo <span style={{color: "#1D9E75"}}>humse.</span>
          </h3>
          <p style={{color: "#666"}}>24 ghante mein reply — guaranteed.</p>
          <input type="text" className="form-control mt-3" placeholder="Your Name" />
          <input type="email" className="form-control mt-3" placeholder="Your Email" />
          <textarea className="form-control mt-3" rows="4"
            placeholder="Apna message likho..."></textarea>
          <button className="btn btn-success mt-3 w-100"
            style={{borderRadius: "8px", padding: "12px", fontWeight: "600"}}>
            Send Message 
          </button>
        </div>
      </div>
    </div>
  );
}
export default ContactForm;