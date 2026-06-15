import React from "react";

function Funds() {
  const funds = [
    { label: "Available Balance", value: "₹25,000", color: "#1D9E75" },
    { label: "Used Margin", value: "₹10,000", color: "#e74c3c" },
    { label: "Total Funds", value: "₹35,000", color: "#387ed1" },
  ];

  return (
    <div className="card" style={{ marginBottom: "24px" }}>
      <div className="section-header">
        <span className="section-title">Funds</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
        {funds.map((fund, index) => (
          <div
            key={index}
            style={{
              padding: "20px",
              borderRadius: "12px",
              background: "#f7f9fc",
              border: "1px solid #e8ecf0",
              textAlign: "center",
            }}
          >
            <p style={{ fontSize: "12px", color: "#888", fontWeight: "600",
              textTransform: "uppercase", letterSpacing: "0.6px", marginBottom: "10px" }}>
              {fund.label}
            </p>
            <p style={{ fontSize: "24px", fontWeight: "700", color: fund.color }}>
              {fund.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Funds;