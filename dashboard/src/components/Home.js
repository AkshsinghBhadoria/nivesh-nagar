import React from "react";

function Home() {
  return (
    <div className="card" style={{ marginBottom: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: "22px", fontWeight: "700", marginBottom: "8px" }}>
            Welcome to Nivesh Nagar 
          </h2>
          <p style={{ color: "#666", fontSize: "14px", maxWidth: "500px" }}>
            Manage your portfolio, track holdings, monitor positions,
            and analyze your investments — all from one place.
          </p>
        </div>
        <button
          style={{
            padding: "11px 24px",
            background: "linear-gradient(135deg, #387ed1, #2563b0)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            fontWeight: "600",
            fontSize: "14px",
            cursor: "pointer",
            whiteSpace: "nowrap",
            boxShadow: "0 4px 14px rgba(56,126,209,0.35)",
          }}
        >
          + Start Investing
        </button>
      </div>
    </div>
  );
}

export default Home;