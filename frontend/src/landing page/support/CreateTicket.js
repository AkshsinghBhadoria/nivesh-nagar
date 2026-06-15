import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-5">
      <div className="row gap-4 justify-content-center">

        {/* Left — Ticket Form */}
        <div className="col-5" style={{
          backgroundColor: "#f8f9fa",
          borderRadius: "16px",
          padding: "32px"
        }}>
          <h3 style={{fontWeight: "700"}}>Raise a Ticket 🎫</h3>
          <p style={{color: "#666"}}>24 ghante mein reply — guaranteed.</p>

          <input
            type="text"
            className="form-control mt-3"
            placeholder="Aapka naam"
            style={{borderRadius: "10px"}}
          />
          <input
            type="email"
            className="form-control mt-3"
            placeholder="Email address"
            style={{borderRadius: "10px"}}
          />
          <select
            className="form-control mt-3"
            style={{borderRadius: "10px"}}
          >
            <option>Issue select karo</option>
            <option>Account Related</option>
            <option>Trading Issue</option>
            <option>Payment Problem</option>
            <option>Other</option>
          </select>
          <textarea
            className="form-control mt-3"
            rows="4"
            placeholder="Problem detail mein likho..."
            style={{borderRadius: "10px"}}
          ></textarea>
          <button
            className="btn btn-success mt-3 w-100"
            style={{borderRadius: "10px", fontWeight: "600", padding: "10px"}}
          >
            Submit Ticket 🚀
          </button>
        </div>

        {/* Right — FAQ */}
        <div className="col-5">
          <h3 style={{fontWeight: "700"}}>FAQs 💡</h3>
          <p style={{color: "#666"}}>Common sawalon ke jawab yahan hain.</p>

          <div className="accordion mt-3" id="faqAccordion">

            <div className="accordion-item" style={{borderRadius: "10px", marginBottom: "10px", border: "1px solid #dee2e6"}}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse" data-bs-target="#faq1">
                  Kya Nivesh Nagar free hai?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body" style={{color: "#666"}}>
                  Haan! Basic plan bilkul free hai. Paper trading, watchlist, 
                  aur basic charts — sab free mein available hain.
                </div>
              </div>
            </div>

            <div className="accordion-item" style={{borderRadius: "10px", marginBottom: "10px", border: "1px solid #dee2e6"}}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse" data-bs-target="#faq2">
                  Real paisa laggta hai kya trading mein?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body" style={{color: "#666"}}>
                  Bilkul nahi! Yeh paper trading platform hai — 
                  sab simulated hai. Real money ka koi risk nahi.
                </div>
              </div>
            </div>

            <div className="accordion-item" style={{borderRadius: "10px", marginBottom: "10px", border: "1px solid #dee2e6"}}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse" data-bs-target="#faq3">
                  Account kaise banayein?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body" style={{color: "#666"}}>
                  Signup page pe jao, naam aur email dalo — 
                  2 minute mein account ready ho jayega!
                </div>
              </div>
            </div>

            <div className="accordion-item" style={{borderRadius: "10px", marginBottom: "10px", border: "1px solid #dee2e6"}}>
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button"
                  data-bs-toggle="collapse" data-bs-target="#faq4">
                  Support team se kaise baat karein?
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                <div className="accordion-body" style={{color: "#666"}}>
                  Left side mein ticket raise karo — 
                  hum 24 ghante mein reply karenge. Promise! 🤝
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
export default CreateTicket;