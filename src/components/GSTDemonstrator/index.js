import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import AddItem from "./AddItem";
import DisplayItems from "./DisplayItems";
import Home from "./Home";
import DeleteItem from "./DeleteItem";

function GSTDemonstrator() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div>
          <Link to="/" className="navbar-brand">
            GST-Demonstrator
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggler"
          aria-controls="navbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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
        </div>
      </nav>
      
      <div className="container-fluid">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/additem" component={AddItem} />
            <Route path="/displayitem" component={DisplayItems} />
            <Route path="/deleteitem" component={DeleteItem} />
          </Switch>
        </div>
      </div>

      {/* {console.log("Index")} */}
    </>
  );
}

export default GSTDemonstrator;
