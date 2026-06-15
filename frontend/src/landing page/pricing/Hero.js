import React from "react";
function Hero() {
  return (
    <div className="container text-center py-5">
      <h1 className="fw-bold display-4">
        Simple Pricing for Every Investor
      </h1>

      <p
        className="text-muted fs-5 mt-3 mx-auto"
        style={{ maxWidth: "700px" }}
      >
        Start your investing journey with transparent pricing and
        tools built for modern traders. No hidden fees, no confusing
        charges — just simple investing.
      </p>

      <hr className="mt-5" />
    </div>
  );
}


export default Hero;