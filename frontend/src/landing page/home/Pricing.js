import React from 'react';

function Pricing() {
  return (
    <div className="container">
      <div className="row">

        <div className="col-4">
          <h1 className="mb-3">Simple Pricing. No Drama.</h1>

          <p>
            Investing seekhne ke liye hidden charges ki zaroorat nahi.
            Nivesh Nagar keeps things simple, transparent, and beginner-friendly.
          </p>

          <a
            href="/dashboard"
            className="text-decoration-none"
          >
            Explore Plans{" "}
            <i className="fa-solid fa-angle-right"></i>
          </a>
        </div>

        <div className="col-2"></div>

        <div className="col-6">
          <div className="row">

            <div className="col p-3 border">
              <h1>₹0</h1>
              <p>
                Start learning, exploring, and tracking investments for free.
              </p>
            </div>

            <div className="col p-3 border">
              <h1>₹20</h1>
              <p>
                Advanced tools and market insights when you're ready to level up.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
 