import React, { useState, useEffect } from "react";
import "../style/Content.css";
import { CardData } from "../data/CardData";
import CardItem from "./CardItem";
import { ImArrowUp } from "react-icons/im";

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
      <div className="scroll_to_top">
        <h4>Наверх</h4>
        <ImArrowUp onClick={() => window.scrollTo(0, 0)} />
      </div>
    </>
  );
};

export default Content;
