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
    </div>
  );
};

export default Filial;
