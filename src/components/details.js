import React, { Component } from "react";
import "../styles.css";
import { Link } from "react-router-dom";

class Details extends Component {
  render() {
    const stlBack = {
      backgroundImage: `url(${this.props.result.links[0].href})`
    };

    return (
      <div className="detail">
        <div className="img" style={stlBack} />
        <div className="detail-title">{this.props.result.data[0].title}</div>
        <button className="detail-btn">
          <Link
            to={{
              pathname: `/detail/${this.props.result.data[0].nasa_id}`,
              state: { detail: this.props.result.data[0].title }
            }}
          >
            View
          </Link>
        </button>
      </div>
    );
  }
}

export default Details;
