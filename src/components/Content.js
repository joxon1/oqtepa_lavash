import React from "react";
import MyButton from "./UI/MyButton";
import "../style/Content.css";
import { CardData } from "../data/CardData";
const Content = () => {
  return (
    <>
      {CardData.map((item) => (
        <div className="content">
          <h1 className="content_header" key={item.id}>
            {item.category}
          </h1>
          <div className="list">
            {item.product.map(({ id, title, image, desc, price }) => (
              <div key={id} className="card">
                <div className="card_image">
                  <img src={image} alt={title} />
                </div>
                <div className="card_content">
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
                <div className="card_btn">
                  <b>{price} сум</b>
                  <MyButton>Выбрат</MyButton>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;
