import React, { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AddItem from "./AddItem";
import DisplayItems from './DisplayItems';

function GSTDemonstrator() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          GST-Demonstrator
        </Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/additem" className="nav-link">
              Add Item
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/displayitem" className="nav-link">
              Display Item
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/additem" exact component={AddItem} />
          {/* <Route path="/additem:" component={AddItem} /> */}
          <Route path="/displayitem" component={DisplayItems} />
        </Switch>
      </div>
      {console.log("Index")}
    </>
  );
}

const Home = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex align-items-start flex-column">
        <h2>GST Demonstrator - Home</h2>
        <h4>Welcome!!</h4>
      </div>
    </div>
  );
}

export default GSTDemonstrator;
