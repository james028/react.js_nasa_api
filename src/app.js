import React, { Component } from "react";
import Main from "./components/main";
import OneDetail from "./components/onedetail";
import { Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/detail/:id" component={OneDetail} />
        </Switch>
      </div>
    );
  }
}
