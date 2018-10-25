import ReactDOM from "react-dom";
import axios from "axios";

import "./styles.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    results: [],
    value: ""
  };

  onChangeInput = e => {
    this.setState({
      valueInput: e.target.value
    });
  };

  getResults = e => {
    e.preventDefault();
    const user = e.target.elements.valueInput.value;

    axios.get(`https://images-api.nasa.gov/search?q=${user}`).then(res => {
      console.log(res.data.collection.items[0].data[0]);
      this.setState({
        results: res.data.collection.items
      });
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Searching from API NASA</h2>
        <form onSubmit={this.getResults}>
          <input name="valueInput" />
          <input type="submit" value="Submit" />
        </form>
        {this.state.results.map((e, i) => {
          return <div key={i}>{e.data[0].title}</div>;
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
