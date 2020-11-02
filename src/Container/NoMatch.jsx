import React, { Component } from "react";
import axios from "axios";
import { yoloLabel, imageNetLabel } from "./Execution/labels";

class NoMatch extends Component {
  render() {
    return (
      <div className="expand-full">
        <div className="container d-flex flex-column justify-content-center align-items-center h-100">
          <code className="info-title" style={{ color: "#29b4be" }}>
            {this.props.match.url}
          </code>
          <div className="info-title">無此頁面</div>
        </div>
      </div>
    );
  }
}

export default NoMatch;
