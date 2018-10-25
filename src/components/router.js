import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from "../index";
import OneDetail from "../onedetail";

class Details extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/" Component={App} />
            <Route path="/details/:id" Component={OneDetail} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Details;
