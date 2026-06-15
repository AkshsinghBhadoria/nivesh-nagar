import React, { useState } from "react";
import { Tooltip } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import BarChartIcon from "@mui/icons-material/BarChart";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import axios from "axios";

function WatchList() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modal, setModal] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const stocks = [
    { name: "RELIANCE", price: "2950", change: "+1.2%" },
    { name: "TCS", price: "3850", change: "-0.5%" },
    { name: "INFY", price: "1620", change: "+0.8%" },
    { name: "HDFCBANK", price: "1780", change: "+0.3%" },
  ];

  const handleOrder = () => {
    const token = localStorage.getItem("token");
    axios.post("https://nivesh-nagar-backend.onrender.com/newOrder", {
      name: modal.stock.name,
      qty: Number(quantity),
      price: Number(modal.stock.price),
      mode: modal.type.toUpperCase(),
    }, {
      headers: { Authorization: `Bearer ${token}` }
    }).then(() => {
      alert(`✅ ${modal.type.toUpperCase()} order placed!\n${modal.stock.name} x ${quantity} @ ₹${modal.stock.price}`);
      setModal(null);
      setQuantity(1);
    }).catch((err) => {
      console.log(err);
      alert("Order failed — login karke try karo!");
    });
  };

  return (
    <div className="watchlist">
      <h4>Watchlist</h4>
      {stocks.map((stock, index) => (
        <div
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            padding: "10px 8px",
            borderBottom: "1px solid #f0f0f0",
            cursor: "pointer",
            backgroundColor: hoveredIndex === index ? "#f8f9fa" : "transparent",
            borderRadius: "8px",
            transition: "background-color 0.2s",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <strong style={{ fontSize: "13px" }}>{stock.name}</strong>
            <div style={{ textAlign: "right" }}>
              <p style={{ margin: 0, fontSize: "13px", fontWeight: "600" }}>₹{stock.price}</p>
              <p style={{
                margin: 0, fontSize: "11px",
                color: stock.change.includes("+") ? "#1D9E75" : "#e74c3c",
                fontWeight: "600",
              }}>{stock.change}</p>
            </div>
          </div>
          {hoveredIndex === index && (
            <div style={{ display: "flex", gap: "6px", marginTop: "8px", alignItems: "center" }}>
              <Tooltip title="Buy" placement="top">
                <button
                  onClick={() => setModal({ stock, type: "buy" })}
                  style={{
                    backgroundColor: "#1D9E75", color: "#fff",
                    border: "none", borderRadius: "4px",
                    padding: "3px 10px", fontSize: "11px", cursor: "pointer",
                  }}>Buy</button>
              </Tooltip>
              <Tooltip title="Sell" placement="top">
                <button
                  onClick={() => setModal({ stock, type: "sell" })}
                  style={{
                    backgroundColor: "#e74c3c", color: "#fff",
                    border: "none", borderRadius: "4px",
                    padding: "3px 10px", fontSize: "11px", cursor: "pointer",
                  }}>Sell</button>
              </Tooltip>
              <Tooltip title="Analytics" placement="top">
                <BarChartIcon style={{ fontSize: "16px", color: "#888" }} />
              </Tooltip>
              <Tooltip title="Chart" placement="top">
                <ShowChartIcon style={{ fontSize: "16px", color: "#888" }} />
              </Tooltip>
              <Tooltip title="More" placement="top">
                <MoreHorizIcon style={{ fontSize: "16px", color: "#888" }} />
              </Tooltip>
            </div>
          )}
        </div>
      ))}

      {modal && (
        <div style={{
          position: "fixed", top: 0, left: 0,
          width: "100%", height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex", justifyContent: "center", alignItems: "center",
          zIndex: 1000,
        }}>
          <div style={{
            backgroundColor: "#fff", borderRadius: "16px",
            padding: "32px", width: "360px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.2)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <h4 style={{ margin: 0, color: modal.type === "buy" ? "#1D9E75" : "#e74c3c" }}>
                  {modal.type === "buy" ? "Buy" : "Sell"} {modal.stock.name}
                </h4>
                <p style={{ margin: 0, color: "#666", fontSize: "13px" }}>
                  NSE • ₹{modal.stock.price}
                </p>
              </div>
              <button onClick={() => setModal(null)} style={{
                background: "none", border: "none",
                fontSize: "20px", cursor: "pointer", color: "#666",
              }}>✕</button>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={{ fontSize: "13px", color: "#666", display: "block", marginBottom: "6px" }}>
                Quantity
              </label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                style={{
                  width: "100%", padding: "10px 12px",
                  border: "1px solid #ddd", borderRadius: "8px",
                  fontSize: "16px", outline: "none",
                }}
              />
            </div>

            <div style={{
              backgroundColor: "#f8f9fa", borderRadius: "8px",
              padding: "12px 16px", marginBottom: "20px",
            }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#666", fontSize: "13px" }}>Total Value</span>
                <strong>₹{(quantity * modal.stock.price).toLocaleString()}</strong>
              </div>
            </div>

            <button onClick={handleOrder} style={{
              width: "100%", padding: "12px",
              backgroundColor: modal.type === "buy" ? "#1D9E75" : "#e74c3c",
              color: "#fff", border: "none",
              borderRadius: "8px", fontSize: "16px",
              fontWeight: "600", cursor: "pointer",
            }}>
              Confirm {modal.type === "buy" ? "Buy" : "Sell"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default WatchList;