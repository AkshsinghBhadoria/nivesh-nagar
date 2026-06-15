import React, { useState, useEffect } from "react";
import axios from "axios";

function Summary() {
  const [summaryData, setSummaryData] = useState({
    portfolioValue: 0,
    todayPnL: 0,
    investment: 0,
    availableFunds: 25000,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("http://localhost:3002/allHoldings", {
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      const holdings = res.data;
      let portfolioValue = 0;
      let investment = 0;
      let todayPnL = 0;

      holdings.forEach((stock) => {
        portfolioValue += stock.price * stock.qty;
        investment += stock.avg * stock.qty;
        todayPnL += (stock.price - stock.avg) * stock.qty;
      });

      setSummaryData({
        portfolioValue,
        todayPnL,
        investment,
        availableFunds: 25000,
      });
    });
  }, []);

  const cards = [
    {
      label: "Portfolio Value",
      value: `₹${summaryData.portfolioValue.toLocaleString("en-IN")}`,
      color: "",
    },
    {
      label: "Today's P&L",
      value: `${summaryData.todayPnL >= 0 ? "+" : ""}₹${summaryData.todayPnL.toLocaleString("en-IN")}`,
      color: summaryData.todayPnL >= 0 ? "green" : "red",
    },
    {
      label: "Investment",
      value: `₹${summaryData.investment.toLocaleString("en-IN")}`,
      color: "",
    },
    {
      label: "Available Funds",
      value: `₹${summaryData.availableFunds.toLocaleString("en-IN")}`,
      color: "",
    },
  ];

  return (
    <div className="summary-grid">
      {cards.map((card, index) => (
        <div key={index} className="summary-card">
          <p className="label">{card.label}</p>
          <p className={`value ${card.color}`}>{card.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Summary;