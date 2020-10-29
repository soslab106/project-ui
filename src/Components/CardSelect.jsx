import React, { Component } from "react";

class CardSelect extends Component {
  render() {
    const { imgpath, icontitle, iconsubtitle, btnName } = this.props;
    return (
      <div className="card-select p-4 d-flex flex-column align-items-center justify-content-center">
        <img src={imgpath} width='150'/>
        <div className="secondary-title mt-4">{icontitle}</div>
        <div className='content-color text-center mt-4'>{iconsubtitle}</div>
        <a href={this.props.url}><button className="btn-main mt-4">{btnName?btnName:'了解更多'}</button></a>
      </div>
    );
  }
}

export default CardSelect;
