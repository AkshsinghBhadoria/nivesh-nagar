import React from "react";
function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2>The Nivesh Universe</h2>
        <p style={{color: "#666"}}>Everything connected, everything simple.</p>
      </div>
      <div className="row mt-4">

        <div className="col-4 text-center">
          <img src="/media/images/images/goldenpiLogo.png" 
            alt="goldenpi" style={{width: "40%"}} />
          <h5 className="mt-3">Varsity</h5>
          <p style={{color: "#666", fontSize: "14px"}}>
            Free stock market education
          </p>
        </div>

        <div className="col-4 text-center">
          <img src="/media/images/images/dittoLogo.png" 
            alt="ditto" style={{width: "40%"}} />
          <h5 className="mt-3">N-Connect</h5>
          <p style={{color: "#666", fontSize: "14px"}}>
            India's largest trading community
          </p>
        </div>

        <div className="col-4 text-center">
          <img src="/media/images/images/streakLogo.png" 
            alt="streak" style={{width: "40%"}} />
          <h5 className="mt-3">Sentinel</h5>
          <p style={{color: "#666", fontSize: "14px"}}>
            Smart alerts for your portfolio
          </p>
        </div>

      </div>
    </div>
  );
}
export default Universe;