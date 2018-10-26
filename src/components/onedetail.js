import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class OneDetail extends Component {
  state = {
    oneResult: [],
    onePicture: []
  };

  componentDidMount() {
    const oneDetail = this.props.location.state.detail;

    axios
      .get(`https://images-api.nasa.gov/search?q=${oneDetail}&media_type=image`)
      .then(res => {
        this.setState({
          oneResult: res.data.collection.items[0].data,
          onePicture: res.data.collection.items[0].links
        });
        console.log(this.state.oneResult);
        console.log(this.state.onePicture);
      })
      .catch(error => console.log(error));
  }

  render() {
    //console.log(this.props);
    const image = this.state.onePicture.map((e, i) => {
      return (
        <div className="img-detail" key={i}>
          <img src={e.href} alt={e.rel} />
        </div>
      );
    });

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {image}
              {this.state.oneResult.map((e, i) => {
                return (
                  <div key={i}>
                    <h4>{e.title}</h4>
                    <div className="detail-description">
                      Description: {e.description}
                    </div>
                  </div>
                );
              })}
              <button className="btn-one-detail">
                <Link to="/">Go home</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OneDetail;
