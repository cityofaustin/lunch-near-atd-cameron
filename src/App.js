import React, { Component } from "react";
import LeMap from "./LeMap.js";

import logo from "./logo.svg";
import "./App.css";

import L from "leaflet";

L.Icon.Default.imagePath = ".";
// OR
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeMap />
      </div>
    );
  }
}

export default App;
