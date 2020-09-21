import React, { Component } from "react";

class HomePageIcon extends Component {
  render() {
    const { imgpath, icontitle, iconsubtitle } = this.props;
    return (
      <div className="card-select p-4 d-flex flex-column align-items-center justify-content-center">
        <img src={imgpath} />
        <div className="secondary-title mt-4">{icontitle}</div>
        <div className='content-color text-center my-3'>{iconsubtitle}</div>
        <button className="btn-main">了解更多</button>
      </div>
    );
  }
}

export default HomePageIcon;
