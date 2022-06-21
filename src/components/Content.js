import React from "react";
import "../style/Content.css";
import { CardData } from "../data/CardData";
import { useCart } from "react-use-cart";
import CardItem from "./CardItem";
const Content = () => {
  const { addItem } = useCart();
  return (
    <>
      {CardData.map((item) => (
        <div className="content">
          <h1 className="content_header" key={item.id}>
            {item.category}
          </h1>
          <div className="list">
            {CardData.map((item) => {
              return item.product.map((product) => {
                return <CardItem key={product.id} {...product} product={product} />;
              });
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;
