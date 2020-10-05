import React, { Component } from "react";

class Trainning extends Component {
  render() {
    return (
      <div className="panel">
        <div className="container py-5">
          <div className="pb-3">
            <div className="secondary-title mb-3">開始訓練</div>
            <span className="trainning-progress-bar">
              &#x25BA; 建立客製化模型
            </span>
            <span className="trainning-progress-bar">&#x25BA; 模型設定</span>
            <span className="trainning-progress-bar">
              &#x25BA; 設定標籤及上傳圖片
            </span>
            <span className="trainning-progress-bar-active">
              &#x25BA; 開始訓練
            </span>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center box py-3">
            Loading
          </div>
        </div>
      </div>
    );
  }
}

export default Trainning;
