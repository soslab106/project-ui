import React, { Component } from "react";
import TextAndImg from "../Components/TextAndImg";
import FullWidthBlock from "../Components/FullWidthBlock";

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
      "Embedding → 經過 CNN 模型以及 L2 歸一化後生成的特徵向量(?)",
      "Triplet Loss → 從向量中取得一個 embedding 函數 f（x），讓相同孔之間的特徵距離要盡可能的小，而不同孔之間的特徵距離要盡可能的大。",
    ],
  };
  render() {
    return (
      <React.Fragment>
        <div className="container d-flex flex-column align-items-center">
          <h1 className="title">FaceNet</h1>
          <TextAndImg
            my="5"
            textWidth="9"
            imgWidth="3"
            textList={this.state.facenet_1}
            imgPath="/images/FN_1.png"
            imgPos="right"
          />
          <FullWidthBlock py="4" my="4">
            <TextAndImg
              my="5"
              textWidth="9"
              imgWidth="3"
              textList={this.state.facenet_2}
              imgPath="/images/FN_2.png"
              imgPos="left"
            />
          </FullWidthBlock>
          <div className="mt-4">
            <a href="/cnn" className="mx-2">
              <button className="btn btn-previous">回到圖像分類介紹</button>
            </a>
            <a href="/#" className="mx-2">
              <button className="btn btn-main">前往FaceNet操作</button>
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FaceNet;
