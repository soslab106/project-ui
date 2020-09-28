import React, { Component } from "react";

class Resultpreview extends Component {
  render() {
    const { img, tag1, tag2, tag3 } = this.props;
    return (
      <div className="d-flex result-preview align-items-center justify-content-center my-3">
        <img src={img} />
        <div className="content-color mx-5">
          <table className="result-preview-text">
            <tr>
              <td>{tag1[0]}</td>
              <td>{tag1[1]}</td>
            </tr>
            <tr>
              <td>{tag2[0]}</td>
              <td>{tag2[1]}</td>
            </tr>
            <tr>
              <td>{tag3[0]}</td>
              <td>{tag3[1]}</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Resultpreview;
