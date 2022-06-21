import React, { createRef } from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { CartProvider } from "react-use-cart";
import Korzina from "./pages/Korzina";
import { CardData } from "./data/CardData";

const App = () => {
  const refs = CardData.reduce((acc, value) => {
    acc[value.id] = createRef();
    return acc;
  }, {});

  const handleClick = (id) =>
    refs[id].current.scrollIntoView({
      behiver: "smooth",
      block: "start",
    });
  console.log(refs);
  return (
    <>
      <CartProvider>
        <Navbar />
        <Menu handleClick={handleClick} />
        <Slider />
        <Content refs={refs} />
        <Korzina />
        <Footer />
      </CartProvider>
    </>
  );
};

export default App;
