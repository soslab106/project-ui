import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <a href={this.props.link}>
        <div
          className="d-flex align-items-center justify-content-center border border-warning bg-white m-5"
          style={{ width: "200px", height: "200px" }}
        >
          <div className="text-success text-center">{this.props.buttonText}</div>
        </div>
      </a>
    );
  }
}

export default Square;
