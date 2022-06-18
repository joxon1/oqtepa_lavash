import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { NavbarData } from "../data/NavbarData";
import { BsFillTelephoneFill } from "react-icons/bs";
import "../style/Navbar.css";
import MyButton from "./UI/MyButton";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_toggle" id="mobile-menu">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <Link to="/" className="navbar_logo" id="logo_border">
        <img src={logo} alt="Oq-Tepa Lavash" className="navbar_logo" />
      </Link>
      <div className="navbar_header">
        <div className="navbar_links">
          {NavbarData.map((item, index) => (
            <Link key={index} to="/" className="navbar_link">
              {item.title}
            </Link>
          ))}
        </div>
        <div className="navbar_number">
          <BsFillTelephoneFill style={{ background: "#fff" }} />
          +998(78)150-00-30
        </div>
      </div>
      <div className="navbar_btn">
        <MyButton>Войти</MyButton>
      </div>
    </nav>
  );
};

export default Navbar;
