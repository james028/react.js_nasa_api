import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div className="form">
        <h2>Searching from API NASA</h2>
        <h6>
          You can search planets, austronauts, spacecraft, nasa logo.. etc.
        </h6>
        <form onSubmit={this.props.getResults}>
          <input
            type="text"
            name="valueInput"
            placeholder="search..."
            className="input"
          />
          <input type="submit" value="Search" className="input-btn" />
        </form>
      </div>
    );
  }
}

export default Form;
