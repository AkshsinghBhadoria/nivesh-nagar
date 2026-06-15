import React from "react";

function Brokerage() {
  return (
    <div className="container my-5">
      0
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <h1 className="fw-bold text-primary">
            <img
              src="/media/images/images/pricing0.svg"
              alt="google play"
              style={{ width: "25%" }}
            />
          </h1>

          <h4>Portfolio Building</h4>

          <p className="text-muted">
            Invest in stocks, ETFs, and mutual funds without any delivery
            charges. Start small and grow confidently.
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <h1 className="fw-bold text-primary">
            <img
              src="/media/images/images/intradayTrades.svg"
              alt="google play"
              style={{ width: "25%" }}
            />
          </h1>

          <h4>Active Trading</h4>

          <p className="text-muted">
            Flat fee per executed order for intraday and short-term trading.
            Simple pricing, no surprises.
          </p>
        </div>

        <div className="col-md-4 mb-4">
          <h1 className="fw-bold text-primary">
            <img
              src="/media/images/images/intradayTrades.svg"
              alt="google play"
              style={{ width: "25%" }}
            />
          </h1>

          <h4>Advanced Markets</h4>

          <p className="text-muted">
            Explore futures, options, and other market opportunities with
            transparent and affordable charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
