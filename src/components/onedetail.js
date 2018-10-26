import React, { Component } from "react";
import axios from "axios";

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
    return (
      <div>
        <div>
          {this.state.onePicture.map((e, i) => {
            return (
              <div className="img-detail" key={i}>
                <img src={e.href} />
              </div>
            );
          })}
          {this.state.oneResult.map((e, i) => {
            return <div key={i}>{e.description}</div>;
          })}
        </div>
      </div>
    );
  }
}

export default OneDetail;
