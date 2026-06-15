import React from "react";

function Apps() {
  const apps = [
    { name: "Portfolio Tracker", desc: "Track your investments in real-time", icon: "📊" },
    { name: "Market Screener", desc: "Find stocks based on custom filters", icon: "🔍" },
    { name: "Investment Calculator", desc: "Calculate returns and SIP growth", icon: "🧮" },
    { name: "Stock Analytics", desc: "Analyze stock performance", icon: "📈" },
  ];

  return (
    <div className="card" style={{ marginBottom: "24px" }}>
      <div className="section-header">
        <span className="section-title">Apps & Tools</span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px" }}>
        {apps.map((app, index) => (
          <div
            key={index}
            style={{
              padding: "18px",
              borderRadius: "12px",
              background: "#f7f9fc",
              border: "1px solid #e8ecf0",
              cursor: "pointer",
              transition: "all 0.2s",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "#e8f1fd"}
            onMouseLeave={e => e.currentTarget.style.background = "#f7f9fc"}
          >
            <span style={{ fontSize: "28px" }}>{app.icon}</span>
            <div>
              <p style={{ fontWeight: "700", fontSize: "14px", marginBottom: "4px", color: "#1a1a2e" }}>
                {app.name}
              </p>
              <p style={{ fontSize: "13px", color: "#888" }}>
                {app.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apps;