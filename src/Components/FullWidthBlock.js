import React, { Component } from "react";

class FullWidthBlock extends Component {
  render() {
    return (
      <div className={`bg-light-block py-${this.props.py} my-${this.props.my}`+this.props.className}>
        <div className="container">
            {this.props.children}
        </div>
      </div>
    );
  }
}

export default FullWidthBlock;
