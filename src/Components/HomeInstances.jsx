import React, { Component } from "react";

class HomeInstances extends Component {
  render() {
    return (
      <div className="expand-full d-flex justify-content-around flex-column">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="container h-100 d-flex justify-content-around align-items-center">
            <div className="">
              <div className="main-title">{this.props.title}</div>
              {this.props.description}
              {this.props.btn ? this.props.btn : ""}
            </div>

            <div className="">
              <img className="" src={this.props.imgPath} width="560" />
            </div>
          </div>

          <div className="mt-5">
            <img src="/images/arrow.png" width="55" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeInstances;
