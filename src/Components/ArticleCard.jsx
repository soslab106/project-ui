import React, { Component } from "react";
import { Link } from "react-router-dom";

class ArticleCard extends Component {
  render() {
    return (
    //   <Link
    //     to={{
    //       pathname: "/new-model",
    //       state: {
    //         pjName: pjName,
    //         learningRate: learningRate,
    //         epoch: epoch,
    //       },
    //     }}
    //   >
        <div
          className="card-select"
          style={{ height: "400px", visibility: this.props.visibility }}
        >
          <div
            className="article-card-img"
            style={{
              background: `url(${this.props.imgPath})`,
            }}
          ></div>
          <div className="p-2">
            <div className="main-color" style={{ fontSize: "22px" }}>
              {this.props.title}
            </div>
            <div className="my-2">{this.props.date}</div>
            <div style={{ fontSize: "14px" }}>{this.props.desc}</div>
          </div>
        </div>
    //   </Link>
    );
  }
}

export default ArticleCard;
