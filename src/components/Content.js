import React from "react";
import "../style/Content.css";
import { CardData } from "../data/CardData";
import CardItem from "./CardItem";

const Content = () => {
  return (
    <>
      {CardData.map((item) => (
        <div className="content">
          <h1 className="content_header" key={item.id}>
            {item.category}
          </h1>
          <div className="list">
            {item.product.map((product) => {
              return (
                <CardItem key={product.id} {...product} product={product} />
              );
            })}
          </div>
        </div>
      ))}
    </>
  );
};

export default Content;
