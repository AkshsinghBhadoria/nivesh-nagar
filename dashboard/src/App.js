import { Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Menu from "./components/Menu";
import WatchList from "./components/WatchList";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";
import Positions from "./components/Positions";
import Funds from "./components/Funds";
import Apps from "./components/Apps";

function PageLayout({ children }) {
  return (
    <div>
      <TopBar />
      <div className="app-layout">
        <Menu />
        <div className="main-content">
          {children}
        </div>
        <WatchList />
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/orders" element={<PageLayout><Orders /></PageLayout>} />
      <Route path="/holdings" element={<PageLayout><Holdings /></PageLayout>} />
      <Route path="/positions" element={<PageLayout><Positions /></PageLayout>} />
      <Route path="/funds" element={<PageLayout><Funds /></PageLayout>} />
      <Route path="/apps" element={<PageLayout><Apps /></PageLayout>} />
    </Routes>
  );
}

export default App;