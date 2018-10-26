import React, { Component } from "react";
import axios from "axios";
import Details from "./details";
import Form from "./form";

export default class Main extends Component {
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
        //console.log(res.data.collection.items);
        this.setState({
          results: res.data.collection.items,
          isLoading: false
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="lds-facebook">
          <div />
          <div />
          <div />
        </div>
      );
    }

    const details = this.state.results.map((e, i) => {
      return <Details key={i} result={e} />;
    });

    return (
      <div className="App">
        <Form getResults={this.getResults} />
        <div className="details-grid">{details}</div>
      </div>
    );
  }
}
