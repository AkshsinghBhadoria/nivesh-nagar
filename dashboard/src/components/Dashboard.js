import React from "react";
import TopBar from "./TopBar";
import Menu from "./Menu";
import WatchList from "./WatchList";
import Home from "./Home";
import Summary from "./Summary";
import PortfolioChart from "./PortfolioChart";

function Dashboard() {
  return (
    <div>
      <TopBar />
      <div className="app-layout">
        <Menu />
        <div className="main-content">
          <Home />
          <Summary />
          <PortfolioChart />
        </div>
        <WatchList />
      </div>
    </div>
  );
}

export default Dashboard;