import ReactDOM from "react-dom";
import axios from "axios";
import Details from "./components/details";
import Form from "./components/form";

import "./styles.css";

import React, { Component } from "react";

export default class App extends Component {
  state = {
    results: [],
    isLoading: false
  };

  getResults = e => {
    e.preventDefault();
    const user = e.target.elements.valueInput.value;

    this.setState({ isLoading: true });
    axios
      .get(`https://images-api.nasa.gov/search?q=${user}&media_type=image`)
      .then(res => {
        console.log(res.data.collection.items);
        this.setState({
          results: res.data.collection.items,
          isLoading: false
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    if (this.state.isLoading) {
      return <div className="lds-dual-ring" />;
    }

    const details = this.state.results.map((e, i) => {
      return <Details key={i} result={e} />;
    });

    return (
      <div className="App">
        <Form getResults={this.getResults} />
        <div class="details-grid">{details}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
