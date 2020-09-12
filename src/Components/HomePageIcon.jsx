import React, { Component } from "react";

class HomePageIcon extends Component {
  render() {
    const { imgpath, icontitle, iconsubtitle } = this.props;
    return (
      <div className="home__function">
        <img src={imgpath} />
        <span>{icontitle}</span>
        <span>{iconsubtitle}</span>
        <button className="home__functionbutton">了解更多</button>
      </div>
    );
  }
}

export default HomePageIcon;
