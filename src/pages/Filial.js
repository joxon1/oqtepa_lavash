import React from "react";
import "../style/Filial.css";
import FilialData from "../data/FilialData";
import { ImLocation2 } from "react-icons/im";

const Filial = () => {
  return (
    <div className="filial_container">
      <div className="filial_wrapper">
        <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Филиалы</h1>
        {FilialData.map((item) => (
          <div className="filial_card" key={item.id}>
            <h4 className="filial_card_item">{item.filialName}</h4>
            <p className="filial_card_item">{item.street}</p>
            <div className="filial_card_item filial_time">
              <h4>Часы работы</h4>
              <p>Ежедневно</p>
              <p>{item.time}</p>
            </div>
            <div className="filial_card_item">
              <ImLocation2 className="filial_icon" />
            </div>
          </div>
        ))}
      </div>
      <div className="filial_maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114192.06868509413!2d69.22249798199763!3d41.22742167645831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae611b83047607%3A0xea68c1e94b4feb8e!2sOqtepa%20lavash!5e0!3m2!1sru!2s!4v1655928669693!5m2!1sru!2s"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Filial;
