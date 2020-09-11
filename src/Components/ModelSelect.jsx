import React, { Component } from "react";

class ModelSelect extends Component {
  render() {
    return <div className={"model-select "+this.props.className}>{this.props.children}</div>;
  }
}

export default ModelSelect;
