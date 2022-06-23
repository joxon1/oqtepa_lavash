import React from "react";
import "../style/Content.css";
import { CardData } from "../data/CardData";
import CardItem from "./CardItem";

const Content = ({ refs }) => {
  return (
    <>
      {CardData.map((item) => {
        return (
          <div className="content">
            <h1 className="content_header" key={item.id} ref={refs[item.id]}>
              {item.category}
            </h1>
            <div className="list">
              {item.product.map((product, index) => {
                return <CardItem key={index} {...product} product={product} />;
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Content;
