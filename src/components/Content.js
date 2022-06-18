import React from "react";
import { CardData } from "../data/CardData";
import MyButton from "./UI/MyButton";
import "../style/Content.css";

const Content = () => {
  return (
    <div className="content">
      {CardData.map((item) => (
        <>
          <h1 className="content_header" key={item.id}>
            {item.category}
          </h1>
          <div className="list">
            {CardData.product.map((item) => (
              <div key={item.id} className="card">
                <div className="card_image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="card_content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className="card_btn">
                  <b>{item.price}</b>
                  <MyButton>Выбрат</MyButton>
                </div>
              </div>
            ))}
          </div>
        </>
      ))}
    </div>
  );
};

export default Content;
