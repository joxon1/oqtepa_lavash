import React from "react";
import { Link } from "react-router-dom";
import { MenuData } from "../data/MenuData";
import "../style/Menu.css";
const Menu = ({handleClick}) => {
  return (
    <div className="menu_container">
      <div className="menu_items">
        {MenuData.map((item, index) => {
          return (
            <Link
              to="/"
              key={index}
              className="menu_item"
              onClick={() => handleClick(item.id)}
              
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
