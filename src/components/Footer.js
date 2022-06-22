import React from "react";
import { Link } from "react-router-dom";
import { NavbarData } from "../data/NavbarData";
import { BsTelegram, BsInstagram, BsFacebook } from "react-icons/bs";
import "../style/Footer.css";
import logo from "../assets/logo.jpg";
import logoRJ from "../assets/logoRJ.jpg";
import { ImArrowUp } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_wrapper">
        <div className="footer_links">
          <img src={logo} alt="" />
          {NavbarData.map((item) => (
            <div className="links_div">
              <Link className="footer_link">{item.title}</Link>
            </div>
          ))}
        </div>
        <div className="footer_network">
          <p>Присоединяйтесь к нам</p>
          <div className="footer_network_links">
            <Link className="network">
              <BsFacebook className="network" />
            </Link>
            <Link className="network">
              <BsInstagram className="network" />
            </Link>
            <Link className="network">
              <BsTelegram className="network" />
            </Link>
          </div>
        </div>
        <div className="footer_number">
          <p>Заказывайте по номеру</p>
          <p>+998 78 150 00 30</p>
        </div>
      </div>
      <hr />
      <div className="footer_copyR">
        <p>
          2017-{new Date().getFullYear()} OOO «Oq-Tepa Lavash», официальный сайт{" "}
        </p>
        <div className="logoRJ_container">
          <p>Project by Joxongir</p>
          <img className="logoRJ" src={logoRJ} alt="Road for Junior" />{" "}
        </div>
      </div>
      <div className="scroll_to_top">
        <h4>Наверх</h4>
        <ImArrowUp onClick={() => window.scrollTo(0, 0)} />
      </div>
    </div>
  );
};

export default Footer;
