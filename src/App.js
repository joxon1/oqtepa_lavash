import React from "react";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Slider from "./components/Slider";
import Content from "./components/Content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <Slider />
      <Content />
      <Footer />
    </>
  );
};

export default App;
