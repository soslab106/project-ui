import React, { Component } from "react";
import Resultpreview from "../../Components/Resultpreview";

class Finish extends Component {
  render() {
    return (
      <div className="panel">
        <div className="container py-5">
          <div className="pb-3">
            <div className="secondary-title mb-3">訓練完成</div>
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
            <div className="my-3">
              <Resultpreview
                img="/images/CNN_1.png"
                tag1={["標籤1", "90%"]}
                tag2={["標籤2", "8%"]}
                tag3={["標籤3", "2%"]}
              />
              <Resultpreview
                img="/images/CNN_1.png"
                tag1={["標籤1", "90%"]}
                tag2={["標籤2", "8%"]}
                tag3={["標籤3", "2%"]}
              />
            </div>
            <button className="btn-main my-4">前往使用</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Finish;
