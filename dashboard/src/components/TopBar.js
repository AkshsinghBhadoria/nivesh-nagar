import React, { useState, useEffect } from "react";

function TopBar() {
  const [userName, setUserName] = useState("user");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameFromUrl = params.get("name");
    const tokenFromUrl = params.get("token");

    if (nameFromUrl) {
      localStorage.setItem("userName", nameFromUrl);
      setUserName(nameFromUrl);
    }
    if (tokenFromUrl) {
      localStorage.setItem("token", tokenFromUrl);
    }
    if (nameFromUrl || tokenFromUrl) {
      window.history.replaceState({}, "", window.location.pathname);
    } else {
      const saved = localStorage.getItem("userName");
      if (saved) setUserName(saved);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("token");
    window.location.href = "http://localhost:3001/login";
  };

  return (
    <div className="topbar">
      <div className="topbar-logo">
        <img src="nivesh_nagar_logo.svg" alt="logo" height="85" />
      </div>
      <div className="topbar-right">
        <span className="topbar-user">Hey, {userName} 👋</span>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default TopBar;