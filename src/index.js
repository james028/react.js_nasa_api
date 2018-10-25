import ReactDOM from "react-dom";

import "./styles.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    text: "aa"
  };
  render() {
    return <div className="App">{this.state.text}</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
