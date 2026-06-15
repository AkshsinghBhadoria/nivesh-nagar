import React from "react";
function Team() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h2>Meet the Founder</h2>
        <p style={{color: "#666"}}>Built with passion by future developer.</p>
      </div>
      <div className="row mt-4 justify-content-center">

        <div className="col-3 text-center">
          <img 
            src="/media/images/images/aksh.png" 
            alt="Aksh Singh"
            style={{
              width: "200px", 
              height: "200px", 
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #1D9E75"
            }} 
          />
          <h5 className="mt-3">Aksh Singh Bhadoria</h5>
          <p style={{color: "#666", fontSize: "14px"}}>Founder</p>
        </div>

      </div>
    </div>
  );
}
export default Team;