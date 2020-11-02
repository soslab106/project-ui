import React, { Component } from "react";

class TextAndImg extends Component {
  mapTextList = (textlist) =>
    textlist.map((text) => {
      return <div className="mb-3">{text}</div>;
    });

  render() {
    return (
      <div
        className={
          "d-flex align-items-center justify-content-center my-" + this.props.my+' '+this.props.className
        }
      >
        {this.props.imgPos == "left" ? (
          <div className={"col-" + this.props.imgWidth}>
            <img
              alt=" "
              src={this.props.imgPath}
              width={this.props.imgWidth}
              height={this.props.imgHeight}
            />
          </div>
        ) : (
          ""
        )}

        <div className={"col-" + this.props.textWidth}>
          <div className="secondary-title text-left mb-2 main-color">{this.props.title}</div>

          {this.mapTextList(this.props.textList)}
        </div>

        {this.props.imgPos == "right" ? (
          <div className={"col-" + this.props.imgWidth}>
            <img
              alt=" "
              src={this.props.imgPath}
              width={this.props.imgWidth}
              height={this.props.imgHeight}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default TextAndImg;
