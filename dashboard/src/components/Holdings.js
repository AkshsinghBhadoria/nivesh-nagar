import React, { useState, useEffect } from "react";
import axios from "axios";

function Holdings() {
  const [allHoldings, setAllHoldings] = useState([]);

 useEffect(() => {
  const token = localStorage.getItem("token");
  axios.get("http://localhost:3002/allHoldings", {
    headers: { Authorization: `Bearer ${token}` }
  }).then((res) => {
    setAllHoldings(res.data);
  });
}, []);

  return (
    <div className="card" style={{ marginBottom: "24px" }}>
      <div className="section-header">
        <span className="section-title">Holdings</span>
        <span className="section-count">{allHoldings.length} stocks</span>
      </div>
      <table className="nn-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Qty</th>
            <th>Avg Price</th>
            <th>Current Price</th>
            <th>P&L</th>
          </tr>
        </thead>
        <tbody>
          {allHoldings.map((stock, index) => {
            const pnl = (stock.price - stock.avg) * stock.qty;
            return (
              <tr key={index}>
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

export default Holdings;