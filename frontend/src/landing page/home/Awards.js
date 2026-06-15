import React from 'react';

function Awards() {
  return (
    <div className="container my-5 py-5">
      <div className="row align-items-center">

        <div className="col-6">
          <img
            src="media/images/images/largestBroker.svg"
            alt="awards"
            className="img-fluid pe-5"
          />
        </div>

        <div className="col-6">
          <h1 className="mb-4 fw-bold">
            Largest Stock Broker in India
          </h1>

          <p className="mb-4 text-muted">
            2+ million Nivesh Nagar clients contribute to over 15% of all
            retail order volumes in India daily by trading and investing in:
          </p>

          <div className="row">

            <div className="col-6">
              <ul>
                <li>Futures and Options</li>
                <li>Commodity Derivatives</li>
                <li>Currency Derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct Mutual Funds</li>
                <li>Bonds & ETFs</li>
              </ul>
            </div>

          </div>

          <img
            src="media/images/images/pressLogos.png"
            alt="pressLogos"
            className="img-fluid mt-4"
          />

        </div>

      </div>
    </div>
  );
}

export default Awards;