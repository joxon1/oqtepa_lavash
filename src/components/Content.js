import React from "react";
import { Lavash } from "../data/CardData";
import MyButton from "./UI/MyButton";
import "../style/Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="list">
        {Lavash.map((lavash, index) => (
          <div key={index} className="card">
            <div className="card_image">
              <img src={lavash.image} alt={lavash.title} />
            </div>
            <div className="card_content">
              <h3>{lavash.title}</h3>
              <p>{lavash.desc}</p>
            </div>
            <div className="card_btn">
              <b>{lavash.price}</b>
              <MyButton>Выбрат</MyButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
