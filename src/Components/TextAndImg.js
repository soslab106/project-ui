import React, { Component } from "react";

class TextAndImg extends Component {
  
  mapTextList = textlist =>
    textlist.map(text => {
      return <div className="mb-3">{text}</div>;
    });

  render() {
    return (
      <div className={"d-flex align-items-center my-"+this.props.my}>
        
        {this.props.imgPos=='left' ? (<div className={"col-" + this.props.imgWidth}>
          <img alt=" " src={this.props.imgPath} />
        </div>):''}

        <div className={"col-" + this.props.textWidth}>
          {this.mapTextList(this.props.textList)}
        </div>
        
        {this.props.imgPos=='right' ? (<div className={"col-" + this.props.imgWidth}>
          <img alt=" " src={this.props.imgPath} />
        </div>):''}
        
      </div>
    );
  }
}

export default TextAndImg;
