import React, { useState, useEffect } from "react";
import axios from "axios";

function Positions() {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
  const token = localStorage.getItem("token");
  axios.get("http://localhost:3002/allPositions", {
    headers: { Authorization: `Bearer ${token}` }
  }).then((res) => {
    setAllPositions(res.data);
  });
}, []);

  return (
    <div className="card" style={{ marginBottom: "24px" }}>
      <div className="section-header">
        <span className="section-title">Positions</span>
        <span className="section-count">{allPositions.length} open</span>
      </div>
      <table className="nn-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Symbol</th>
            <th>Qty</th>
            <th>Avg Price</th>
            <th>Current Price</th>
            <th>P&L</th>
          </tr>
        </thead>
        <tbody>
          {allPositions.map((stock, index) => {
            const pnl = (stock.price - stock.avg) * stock.qty;
            return (
              <tr key={index}>
                <td>
                  <span style={{
                    background: "#f0f3f9",
                    padding: "3px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#387ed1"
                  }}>
                    {stock.product}
                  </span>
                </td>
                <td style={{ fontWeight: "600" }}>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>₹{stock.avg}</td>
                <td>₹{stock.price}</td>
                <td style={{ color: pnl >= 0 ? "#1D9E75" : "#e74c3c", fontWeight: "600" }}>
                  {pnl >= 0 ? "+" : ""}₹{pnl}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Positions;