import React from "react";
import ReactDOM from "react-dom";
import Metronome from "./Metronome";

import "./Metronome.css";

function App() {
  return (
    <div className="app">
      <Metronome />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
