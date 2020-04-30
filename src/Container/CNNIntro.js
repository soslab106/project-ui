import React, { Component } from "react";
import FullWidthBlock from "../Components/FullWidthBlock";
import ModelSelect from "../Components/ModelSelect";

class CNNIntro extends Component {
  render() {
    return (
      <div className="container d-flex expand-full">
        <div className="col col-8 d-flex flex-column align-items-center">
          <img alt=" " src="logo192.png" height="300" />
          <p className="title">Convolution Neural Network 卷積神經網路</p>
          <p className="bgc">卷積神經網路(以下稱CNN)是目前深度學習技術中極具代表性的一種類神經網路結構之一，CNN擅長處理圖片，而影片是圖片的疊加，所以CNN同樣擅長處理影片內容。常見的應用有:圖片分類、檢索，目標定位檢測，目標分割，人臉辨識。</p>
          <div className="d-flex align-items-center">
          <a href="/cnn-detail"><button className="btn btn-model m-3">CNN詳細介紹</button></a>
            <a href="/intro"><button className="btn btn-previous m-3">回到人工智慧簡介</button></a>
          </div>
          
        </div>
        <div className="col-4">
          <ModelSelect className="h-50 p-4 mt-5">
            <div className="d-flex flex-column align-items-center my-3 h-100">
              <h1 className="my-2">模型選擇</h1>
              <div className="d-flex flex-column h-75 justify-content-around">
                <a href="/img-classify"><button className="btn btn-model navlink my-3">影像辨識</button></a>
                <a href="/yolov3"><button className="btn btn-model navlink my-3">物體定位</button></a>
                <a href="/facenet"><button className="btn btn-model navlink my-3">人臉辨識</button></a>
              </div>
            </div>
          </ModelSelect>
        </div>
      </div>
    );
  }
}

export default CNNIntro;
