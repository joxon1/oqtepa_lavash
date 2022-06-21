import React from "react";
import { useCart } from "react-use-cart";
import "../style/Content.css";
import MyButton from "./UI/MyButton";

const CardItem = (props) => {
  const { addItem } = useCart();
  return (
    <div key={props.id} className="card">
      <div className="card_image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="card_content">
        <h3>{props.title}</h3>
        <p>{props.desc}</p>
      </div>
      <div className="card_btn">
        <b>{props.price} сум</b>
        <MyButton onClick={() => addItem(props.product)}>Выбрат</MyButton>
      </div>
    </div>
  );
};

export default CardItem;
