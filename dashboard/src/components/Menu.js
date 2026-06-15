import React from "react";
import { NavLink } from "react-router-dom";

function Menu() {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: "📊" },
    { name: "Orders", path: "/orders", icon: "📋" },
    { name: "Holdings", path: "/holdings", icon: "💼" },
    { name: "Positions", path: "/positions", icon: "📈" },
    { name: "Funds", path: "/funds", icon: "💰" },
    { name: "Apps", path: "/apps", icon: "🛠️" },
  ];

  return (
    <div className="sidebar">
      <p className="sidebar-label">Main Menu</p>
      {menuItems.map((item) => (
        <NavLink
          key={item.name}
          to={item.path}
          end={item.path === "/"}
          className={({ isActive }) => isActive ? "active" : ""}
        >
          <span>{item.icon}</span>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}

export default Menu;