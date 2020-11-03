import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div className="col-12 col-sm-6 col-lg-4 my-3">
        <img
          src={this.props.src}
          onLoad={() => window.URL.revokeObjectURL(this.src)}
        ></img>
      </div>
    );
  }
}

export default Image;
