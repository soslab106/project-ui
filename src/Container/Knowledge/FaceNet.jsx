import React, { Component } from "react";
import TextAndImg from "../../Components/TextAndImg";
import FullWidthBlock from "../../Components/FullWidthBlock";

class FaceNet extends Component {
  state = {
    facenet_1: [
      "FaceNet是2015年由 Google 所提出的，在 LFW 人臉資料庫以 99.63% 的最佳成績刷新了記錄，LFW 資料集中收錄了 5749 位公眾人物的人臉影像，總共有超過一萬三千多張影像檔案。",
      "右圖為FaceNet架構",
    ],
    facenet_2: [
      "Batch → MTCNN 來進行臉孔偵測及校準",
      "Deep Architecture → Inception",
      "ResNet-v2用於特徵學習的 CNN 架構",
      "L2 → L2 normalization 加速收斂",
      "Embedding → 經過 CNN 模型以及 L2 Regularization 後生成的特徵向量",
      "Triplet Loss → 從向量中取得一個 embedding 函數 f(x)，讓相同孔之間的特徵距離要盡可能的小，而不同孔之間的特徵距離要盡可能的大。",
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container pt-5 d-flex flex-column align-items-center">
          <h1 className="main-color">Face Recognition</h1>
          <TextAndImg
            my="5"
            textWidth="5"
            imgWidth="700"
            textList={this.state.facenet_1}
            imgPath="/images/FN_1.png"
            imgPos="right"
          />
        </div>
        <FullWidthBlock py="4" my="4">
          <TextAndImg
            my="5"
            textWidth="5"
            imgWidth="900"
            textList={this.state.facenet_2}
            imgPath="/images/FN_2.png"
            imgPos="left"
          />
        </FullWidthBlock>
        <div className="d-flex flex-column align-items-center justify-content-center my-4">
          <div
            className="d-flex flex-column justify-content-around align-items-center"
            style={{ height: "100px" }}
          >
            <button className="btn btn-main" onClick={() => window.close()}>
              關閉視窗
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FaceNet;
