import React, { createRef } from "react";
import Menu from "../components/Menu";
import Content from "../components/Content";
import Korzina from "../components/Korzina";
import Slider from "../components/Slider";
import { CardData } from "../data/CardData";
import { CartProvider } from "react-use-cart";

const Home = (props) => {
  const refs = CardData.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});

  const handleClick = (id) =>
    refs[id].current.scrollIntoView({
      behiver: "smooth",
      block: "start",
    });
  return (
    <CartProvider>
      <Menu handleClick={handleClick} />
      <Slider />
      <Content refs={refs} />
      <Korzina />
    </CartProvider>
  );
};

export default Home;
