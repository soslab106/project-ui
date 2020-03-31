import React, { Component } from "react";

class TextAndImg extends Component {
  mapTextList = textlist =>
    textlist.map(text => {
      return <div className="mb-3">{text}</div>;
    });

  render() {
    return (
      <div className={"d-flex my-"+this.props.mx}>
        <div className={"col-" + this.props.textWidth}>
          {this.mapTextList(this.props.textList)}
        </div>
        <div className={"col-" + this.props.imgWidth}>
          <img alt=" " src={this.props.imgPath} />
        </div>
      </div>
    );
  }
}

export default TextAndImg;
