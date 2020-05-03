import React, { Component } from "react";

class Vgg extends Component {
  render() {
    return (
      <div className="container expand-full">
        <div className="d-flex">
          <div className="col-8">
            <h1 className="title my-5">VGG模型架構介紹</h1>
            <div className="my-3">
              <p>
                VGG是英國牛津大學Visual Geometry
                Group的縮寫，他們共做了兩種深度的VGG模型，分別為VGG16及VGG19。
              </p>
              <p>
                VGG使用了ImageNet提供的100萬張圖片，共1000種類別來做訓練，且進行了非常多層的處理，成功將準確率提高到了90%。
              </p>
            </div>
            <div className="my-3">
              <p>
                從右圖可知，VGG16的架構包含13個卷積層、5個池化層、3個全連接層。
                其中，因為卷積層和全連接層具有權重係數(池化層是沒有的)，因此也被稱為權重層，總數目為13+3=16，故稱為VGG16。
              </p>
            </div>
          </div>
          <div className="col-4">
            <img src="/images/VGG_1.png" />
          </div>
        </div>
        <div className="d-flex align-items-center">
          <a href="/img-classify">
            <button className="btn btn-previous m-3">回到圖像分類介紹</button>
          </a>
          <a href="/vgg-playground">
            <button className="btn btn-main m-3">前往VGG16操作</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Vgg;
