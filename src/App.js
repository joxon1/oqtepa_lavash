import React from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { CartProvider } from "react-use-cart";
import Korzina from "./pages/Korzina";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Menu /> */}
      {/* <Slider /> */}
      <CartProvider>
        <Content />
        <Korzina />
      </CartProvider>
      {/* <Footer /> */}
    </>
  );
};

export default App;
