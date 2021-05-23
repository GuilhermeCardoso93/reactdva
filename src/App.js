import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/Nav.js";
import Footer from "./components/Footer.js";
import Routes from "./Routes";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <section className="app-back">
         <Routes/>
          <Footer />
        </section>
      </div>
    </BrowserRouter>
  );
};

export default App;
