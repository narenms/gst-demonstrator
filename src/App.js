import React from "react";
import "./App.css";
import GSTDemonstrator from "./components/GSTDemonstrator";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <GSTDemonstrator />
      </Router>
    </div>
  );
}

export default App;
