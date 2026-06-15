import React, { useState, useEffect } from "react";
import axios from "axios";

function Orders() {
  const [allOrders, setAllOrders] = useState([]);

 useEffect(() => {
  const token = localStorage.getItem("token");
  axios.get("https://nivesh-nagar-backend.onrender.com", {
    headers: { Authorization: `Bearer ${token}` }
  }).then((res) => {
    setAllOrders(res.data);
  });
}, []);

  return (
    <div className="card" style={{ marginBottom: "24px" }}>
      <div className="section-header">
        <span className="section-title">Orders</span>
        <span className="section-count">{allOrders.length} total</span>
      </div>
      <table className="nn-table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Mode</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order, index) => (
            <tr key={index}>
              <td style={{ fontWeight: "600" }}>{order.name}</td>
              <td>{order.qty}</td>
              <td>₹{order.price}</td>
              <td>
                <span className={`badge ${order.mode === "BUY" ? "badge-buy" : "badge-sell"}`}>
                  {order.mode}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;