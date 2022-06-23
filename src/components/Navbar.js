import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import "../style/Navbar.css";
import MyButton from "./UI/MyButton";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [bars, setBars] = useState(false);
  const showBars = (e) => {
    setBars(!bars);
  };

  useEffect(() => {}, []);
  return (
    <nav className="navbar_header">
      <div className="mobile_icon" onClick={showBars}>
        {bars ? <FaTimes /> : <FaBars />}
      </div>
      <Link to="/" className="navbar_logo">
        <img src={logo} alt="logo" />
      </Link>
      <nav
        className={bars ? "mobile_menu" : "nav_links"}
        onClick={() => showBars(false)}
      >
        <Link className="nav_link" to="/" >
          Главный
        </Link>
        <Link className="nav_link" to="/filial" type="submit">
          Филиалы
        </Link>
        <Link className="nav_link" to="/about">
          О нас
        </Link>
        <Link className="nav_link" to="/contact">
          Контакты
        </Link>
      </nav>
      <div className="nav_right">
        <div className="nav_number">
          <BsFillTelephoneFill style={{ background: "none" }} />
          +998(78)150-00-30
        </div>
        <div className="navbar_btn">
          <MyButton>Войти</MyButton>
        </div>
      </div>
    </nav>

    // <nav className="navbar">
    //   <Link to="/" className="navbar_logo">
    //     <img src={logo} alt="Oq-Tepa Lavash" className="navbar_logo" />
    //   </Link>
    //   <div className="navbar_header">
    //     <div className={bars ? "navbar_mobile_menu" : "navbar_links"}>
    //       {NavbarData.map((item, index) => (
    //         <Link key={index} to={item.path} className="navbar_link">
    //           {item.title}
    //         </Link>
    //       ))}
    //     </div>
    //     <div className="navbar_number">
    //       <BsFillTelephoneFill style={{ background: "#fff" }} />
    //       +998(78)150-00-30
    //     </div>
    //   </div>
    //   <div className="navbar_btn">
    //     <MyButton>Войти</MyButton>
    //   </div>
    //   <div className="navbar_mobile">{bars ? <GrClose /> : <FaBars />}</div>
    // </nav>
  );
};

export default Navbar;
