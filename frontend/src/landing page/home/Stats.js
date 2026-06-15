import React from 'react';

function Stats() {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">

        <div className="col-6">
          <h1 className="mb-5 fw-bold">
            Why Choose Nivesh Nagar?
          </h1>

          <h4 className="fw-semibold">
            Learn Before You Invest
          </h4>
          <p className="text-muted">
            Understand market trends, explore stocks, and practice
            strategies without the pressure of risking real money.
          </p>

          <h4 className="fw-semibold mt-4">
            Smart Portfolio Tracking
          </h4>
          <p className="text-muted">
            Keep an eye on your investments, monitor performance,
            and make informed decisions with ease.
          </p>

          <h4 className="fw-semibold mt-4">
            Built for Modern Investors
          </h4>
          <p className="text-muted">
            A clean, fast, and intuitive experience designed for
            students, beginners, and future investors.
          </p>

          <h4 className="fw-semibold mt-4">
            Grow Your Financial Confidence
          </h4>
          <p className="text-muted">
            Build healthy investing habits, learn from market
            movements, and develop confidence one step at a time.
          </p>
        </div>

        <div className="col-6 text-center">
          <img
            src="media/images/images/ecosystem.png"
            alt="stats"
            className="img-fluid mb-4"
            style={{ maxWidth: "90%" }}
          />

          <div className="mt-3">
            <a
              href="/products"
              className="mx-4 text-decoration-none"
            >
              Explore our products{" "}
              <i className="fa-solid fa-angle-right"></i>
            </a>

            <a
              href="/dashboard"
              className="text-decoration-none"
            >
              Try Nivesh Nagar{" "}
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;