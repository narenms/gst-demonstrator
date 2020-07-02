import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import AddItem from "./AddItem";
import DisplayItems from "./DisplayItems";
import Home from "./Home";
import DeleteItem from "./DeleteItem";
import { Container, Row, Col, Media } from "react-bootstrap";

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
          <li className="nav-item">
            <Link to="/deleteitem" className="nav-link">
              Delete Item
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/additem" component={AddItem} />
          <Route path="/displayitem" component={DisplayItems} />
          <Route path="/deleteitem" component={DeleteItem} />
        </Switch>
      </div>

      {/* {console.log("Index")} */}
    </>
  );
}

export default GSTDemonstrator;
