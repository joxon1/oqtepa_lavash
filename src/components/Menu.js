import React from "react";
import { Link } from "react-router-dom";
import { MenuData } from "../data/MenuData";
import "../style/Menu.css";
const Menu = () => {
  return (
    <div className="menu_container">
      <div className="menu_items">
        {MenuData.map((item) => (
          <Link className="menu_item">{item.title}</Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;
