import React, { Component } from "react";
import FullWidthBlock from "../Components/FullWidthBlock";
import ModelSelect from "../Components/ModelSelect";

class CNNIntro extends Component {
  render() {
    return (
      <div className="container d-flex">
        <div className="col col-8">fuck</div>
        <div className="col-4">
          <ModelSelect>
            <div className="d-flex flex-column align-items-center my-3">
              <h1 className="my-2">模型選擇</h1>
              <div className="d-flex flex-column align-items-center">
                <button className="btn btn-model navlink my-3">影像辨識</button>
                <button className="btn btn-model navlink my-3">影像辨識</button>
                <button className="btn btn-model navlink my-3">影像辨識</button>
              </div>
            </div>
          </ModelSelect>
        </div>
      </div>
    );
  }
}

export default CNNIntro;
