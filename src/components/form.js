import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
        <h2>Searching from API NASA</h2>
        <form onSubmit={this.props.getResults}>
          <input type="text" name="valueInput" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Form;
