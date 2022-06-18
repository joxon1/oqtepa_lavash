import React from "react";
import MyButton from "./UI/MyButton";
import "../style/Content.css";
const Card = (props) => {
  const { image, title, desc, price } = props;
  return (
    <div className="card">
      <div className="card_image">
        <img src={image} alt={title} />
      </div>
      <div className="card_content">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
      <div className="card_btn">
        <b>{price}</b>
        <MyButton>Выбрат</MyButton>
      </div>
    </div>
  );
};

export default Card;
