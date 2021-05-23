import React from "react";
import { Switch, Route } from "react-router-dom";
import Hero2 from "./components/Hero2.js";
import History from "./components/History.js";
import Skins from "./components/Skins.js";
import Home from "./components/Home.js";

export default  () => {
  return (
    <Switch>
      <Route exact path="/" className="my-3">
        <Home/>
      </Route>
      <Route exact path="/history" className="my-3">
        <History/>
      </Route>
      <Route exact path="/hability">
       <Hero2/>
      </Route>
      <Route exact path="/skins">
        <Skins/>
      </Route>

    </Switch>
  )
};