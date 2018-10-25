import React, { Component } from "react";
import "../styles.css";

class Details extends Component {
  render() {
    const stlBack = {
      backgroundImage: `url(${this.props.result.links[0].href})`
    };

    return (
      <div className="detail">
        <div className="img" style={stlBack} />
        <div class="detail-title">{this.props.result.data[0].title}</div>
      </div>
    );
  }
}

export default Details;
