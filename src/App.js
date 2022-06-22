import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home.js";
import Filial from "./pages/Filial.js";
import About from "./pages/About.js";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/filial" component={Filial} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
