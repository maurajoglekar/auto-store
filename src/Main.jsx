import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Cars from "./Cars";
import CarsDetails from "./CarsDetails";

const Main = () => (
  <BrowserRouter>
    <Route exact path="/" component={Cars} />
    <Route path="/cars/:id" component={CarsDetails} />
  </BrowserRouter>
);

export default Main;
