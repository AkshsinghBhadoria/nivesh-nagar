import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function PortfolioChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios.get("https://nivesh-nagar-backend.onrender.com/allHoldings", {
      headers: { Authorization: `Bearer ${token}` }
    }).then((res) => {
      const holdings = res.data;
      const labels = holdings.map((h) => h.name);
      const currentValues = holdings.map((h) => h.price * h.qty);
      const investedValues = holdings.map((h) => h.avg * h.qty);
      setChartData({ labels, datasets: [
        {
          label: "Current Value (₹)",
          data: currentValues,
          borderColor: "#1D9E75",
          backgroundColor: "rgba(29,158,117,0.08)",
          pointBackgroundColor: "#1D9E75",
          pointRadius: 5,
          tension: 0.4,
          fill: true,
        },
        {
          label: "Invested Value (₹)",
          data: investedValues,
          borderColor: "#387ed1",
          backgroundColor: "rgba(56,126,209,0.08)",
          pointBackgroundColor: "#387ed1",
          pointRadius: 5,
          tension: 0.4,
          fill: true,
        },
      ]});
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: { font: { size: 12 }, color: "#555" },
      },
      tooltip: {
        callbacks: {
          label: (ctx) => ` ₹${ctx.raw.toLocaleString("en-IN")}`,
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (val) => `₹${val.toLocaleString("en-IN")}`,
          color: "#888",
        },
        grid: { color: "#f0f0f0" },
      },
      x: {
        ticks: { color: "#888" },
        grid: { display: false },
      },
    },
  };

  if (!chartData || chartData.labels.length === 0) {
    return (
      <div className="card" style={{ marginBottom: "24px", textAlign: "center", padding: "40px" }}>
        <p style={{ fontSize: "40px" }}>📊</p>
        <h3 style={{ color: "#1a1a2e", marginBottom: "8px" }}>No Holdings Yet</h3>
        <p style={{ color: "#888", fontSize: "14px" }}>
          Watchlist se koi stock kharido — portfolio graph yahan dikhega!
        </p>
      </div>
    );
  }

  return (
    <div className="card" style={{ marginBottom: "24px" }}>
      <div className="section-header">
        <span className="section-title">Portfolio Overview</span>
        <span className="section-count">Holdings Chart</span>
      </div>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default PortfolioChart;